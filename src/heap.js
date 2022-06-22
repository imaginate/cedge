/**
 * Cedge
 * @file The `Heap` class.
 * @version 1.0.0.alpha
 * @see [Cedge](https://github.com/imaginate/cedge)
 *
 * @author Adam Smith <imagineadamsmith@gmail.com> (https://github.com/imaginate)
 * @copyright 2022 Adam A Smith <imagineadamsmith@gmail.com> (https://github.com/imaginate)
 *
 * @see [JSDoc3](https://jsdoc.app)
 * @see [Closure Compiler JSDoc Syntax](https://developers.google.com/closure/compiler/docs/js-for-compiler)
 */

class Heap {
    /**
     * The `Heap` constructor. You may provide an unsorted array of values
     * which it clones and then heapifies in linear time (faster than
     * individually pushing each value into an empty heap which takes
     * O(n*log(n)) time). You may provide a custom comparator method. You may
     * provide a limit for the length of `Heap`. If a limit is provided the
     * heap will only keep the lowest `maxLength` count of the values provided
     * and will only add new values that would sort lower than the top value.
     * Note that limiting the heap increases the constructor's time complexity
     * to O((n-maxLength)*log(n)).
     *
     * @public
     * @param {!Array<*>=} vals = `[]`
     *     If `vals` is type `function` or `string` the `compare` parameter is
     *     set to `vals`, and `vals` is set to `[]`. If `vals` is type
     *     `number` the `maxLength` parameter is set to `vals`, and `vals` is
     *     set to `[]`.
     * @param {((!function(*, *): number)|string)=} compare = `"min-number"`
     *     If `compare` is type `number` the `maxLength` parameter is set to
     *     `compare`, and `compare` is set to `"number"`. `compare` is the
     *     method used to determine the order of the values. It must return a
     *     number less than or equal to `0` to sort `a` before `b` and a
     *     number greater than `0` to sort `b` before `a`. If `maxLength` is
     *     set `compare` decides if a value can stay or must go (the `top`
     *     value(s) is always cut). The default comparators are `"min-number"`
     *     which is `a - b`, `"max-number"` which is `b - a`, `"min-string"`
     *     which is `a.localeCompare(b)`, and `"max-string"` which is
     *     `b.localeCompare(a)`.
     * @param {number=} maxLength = `Infinity`
     *     `maxLength` is the maximum values the heap can hold. It will only
     *     keep the lowest values within the heap (i.e. the `top` is cut).
     * @constructor
     */
    constructor(vals = [], compare = 'min-number', maxLength = Infinity) {
        switch (typeof vals) {
            case 'function':
            case 'string':
                if (typeof compare === 'number') {
                    maxLength = compare;
                }
                compare = vals;
                vals = [];
                break;
            case 'number':
                maxLength = vals;
                vals = [];
                break;
            case 'object':
                if (typeof compare === 'number') {
                    maxLength = compare;
                    compare = 'min-number';
                }
        }
        if (typeof compare === 'string') {
            switch (compare) {
                case 'max-number':
                    compare = defaultMaxNumberCompare;
                    break;
                case 'min-string':
                    compare = defaultMinStringCompare;
                    break;
                case 'max-string':
                    compare = defaultMaxStringCompare;
                    break;
                default:
                    compare = defaultMinNumberCompare;
            }
        }

        /**
         * This is the internal containing array for the heap. Do **not**
         * overwrite this property. It is meant for internal use only.
         *
         * @private
         * @export
         * @const {!Array<*>}
         */
        this._heap = vals.slice();

        /**
         * This is the comparator used by the heap instance. It should be
         * treated as read-only. If you overwrite this property you will
         * change the results of future comparisons.
         *
         * @public
         * @export
         * @const {!function(*, *): number}
         */
        this.compare = compare;

        /**
         * This is the internal maximum length value. Do **not** overwrite
         * this property. It is meant for internal use only.
         *
         * @private
         * @export
         * @const {number}
         */
        this._maxLength = maxLength;

        for (let i = Math.floor((vals.length - 2) / 2); i >= 0; --i) {
            siftDown(this._heap, i, compare);
        }
        while (this._heap.length > Math.max(0, maxLength)) {
            this.pop();
        }
    }

    /**
     * This method gets the current length of the `Heap` instance.
     *
     * @public
     * @export
     * @return {number}
     */
    length() {
        return this._heap.length;
    }

    /**
     * This method gets the maximum length of the `Heap` instance.
     *
     * @public
     * @export
     * @return {number}
     */
    maxLength() {
        return this._maxLength;
    }

    /**
     * @public
     * @export
     * @return {*}
     */
    pop() {
        if (!this._heap.length) {
            return undefined;
        }
        const heap = this._heap;
        const last = heap.length - 1;
        const val = heap[0];
        [ heap[0], heap[last] ] = [ heap[last], heap[0] ];
        heap.pop();
        siftDown(heap, 0, this.compare);
        return val;
    }

    /**
     * @public
     * @export
     * @param {*} val
     * @return {void}
     */
    push(val) {
        const heap = this._heap;
        const compare = this.compare;
        if (heap.length < this._maxLength) {
            heap.push(val);
            siftUp(heap, heap.length - 1, compare);
        } else if (heap.length && compare(val, heap[0]) > 0) {
            heap[0] = val;
            siftDown(heap, 0, compare);
        }
    }

    /**
     * @public
     * @export
     * @return {*}
     */
    top() {
        return this._heap.length
            ? this._heap[0]
            : undefined;
    }
}

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
function defaultMinNumberCompare(a, b) {
    return a - b;
}

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
function defaultMaxNumberCompare(a, b) {
    return b - a;
}

/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
function defaultMinStringCompare(a, b) {
    return a.localeCompare(b);
}

/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
function defaultMaxStringCompare(a, b) {
    return b.localeCompare(a);
}

/**
 * @private
 * @param {!Array<*>} heap
 * @param {number} i
 * @param {!function(*, *): number} compare
 * @return {void}
 */
function siftDown(heap, i, compare) {
    let k = i * 2 + 1;
    while (k < heap.length) {
        if (k + 1 < heap.length && compare(heap[k + 1], heap[k]) < 0) {
            ++k;
        }
        if (compare(heap[i], heap[k]) <= 0) {
            return;
        }
        [ heap[i], heap[k] ] = [ heap[k], heap[i] ];
        i = k;
        k = i * 2 + 1;
    }
}

/**
 * @private
 * @param {!Array<*>} heap
 * @param {number} i
 * @param {!function(*, *): number} compare
 * @return {void}
 */
function siftUp(heap, i, compare) {
    let p = Math.floor((i - 1) / 2);
    while (i > 0 && compare(heap[i], heap[p]) < 0) {
        [ heap[i], heap[p] ] = [ heap[p], heap[i] ];
        i = p;
        p = Math.floor((i - 1) / 2);
    }
}

module.exports = Heap;
