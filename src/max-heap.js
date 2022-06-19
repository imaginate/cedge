/**
 * Cedge
 * @file The `MaxHeap` class.
 * @version 1.0.0.alpha
 * @see [Cedge](https://github.com/imaginate/cedge)
 *
 * @author Adam Smith <imagineadamsmith@gmail.com> (https://github.com/imaginate)
 * @copyright 2022 Adam A Smith <imagineadamsmith@gmail.com> (https://github.com/imaginate)
 *
 * @see [JSDoc3](https://jsdoc.app)
 * @see [Closure Compiler JSDoc Syntax](https://developers.google.com/closure/compiler/docs/js-for-compiler)
 */

class MaxHeap {
    /**
     * The `MaxHeap` constructor. You may provide an unsorted array of numbers
     * which it clones and then heapifies in linear time (faster than
     * individually pushing each number into an empty heap which takes
     * O(n*log(n)) time). If the `maxLength` parameter is defined the length
     * of the heap is limited to `maxLength`. If limited the heap will only
     * keep the smallest `maxLength` count of the numbers provided and will
     * only add new numbers that are lesser than the maximum value. Note that
     * limiting the heap increases the constructor's time complexity to
     * O((n-maxLength)*log(n)).
     *
     * @public
     * @param {number[]=} nums = `[]`
     *     If `nums` is type `number` the `maxLength` parameter is set to
     *     `nums` value, and `nums` is set to `[]`.
     * @param {number=} maxLength = `Infinity`
     * @constructor
     */
    constructor(nums = [], maxLength = Infinity) {
        if (typeof nums === 'number') {
            maxLength = nums;
            nums = [];
        }
        /**
         * This is the internal containing array for the heap. Do **not**
         * overwrite this property. It is meant for internal use only.
         *
         * @private
         * @const {!Array<number>}
         */
        this._heap = nums.slice();
        /**
         * This is the current length of the `MaxHeap` instance. This property
         * is read-only. If overwritten it will not cause any side-effects
         * except that `heap.length` reads will report the incorrect value
         * until the next `heap.pop` or `heap.push` call updates it.
         *
         * @public
         * @export
         * @type {number}
         */
        this.length = nums.length;
        /**
         * This is the maximum length of the `MaxHeap` instance. If
         * overwritten it will change the activity of the `MaxHeap` instance.
         * If the new `heap.maxLength` value is greater than the original
         * value it will enable the heap to contain more values. If the new
         * `heap.maxLength` value is less than the original value the heap
         * keeps its existing length, prevents any new values from being added
         * to it, and decreases its length after every `heap.pop` call until
         * `heap.length` is equal to `heap.maxLength`.
         *
         * @public
         * @export
         * @type {number}
         */
        this.maxLength = maxLength;

        for (let i = Math.floor((nums.length - 2) / 2); i >= 0; --i) {
            siftDown(this._heap, i);
        }
        while (this._heap.length > Math.max(0, maxLength)) {
            this.pop();
        }
    }
    
    /**
     * @public
     * @export
     * @return {number}
     */
    max() {
        return this._heap.length
            ? this._heap[0]
            : NaN;
    }

    /**
     * @public
     * @export
     * @return {number}
     */
    pop() {
        if (!this._heap.length) {
            return NaN;
        }
        const heap = this._heap;
        const last = heap.length - 1;
        const max = heap[0];
        [ heap[0], heap[last] ] = [ heap[last], heap[0] ];
        heap.pop();
        siftDown(heap, 0);
        this.length = heap.length;
        return max;
    }

    /**
     * @public
     * @export
     * @param {number} num
     * @return {void}
     */
    push(num) {
        const heap = this._heap;
        if (heap.length < this.maxLength) {
            heap.push(num);
            siftUp(heap, heap.length - 1);
        } else if (heap.length && num < heap[0]) {
            heap[0] = num;
            siftDown(heap, 0);
        }
        this.length = heap.length;
    }

    /**
     * @public
     * @export
     * @return {number}
     */
    top() {
        return this._heap.length
            ? this._heap[0]
            : NaN;
    }
}

/**
 * @private
 * @param {!Array<number>} heap
 * @param {number} i
 * @return {void}
 */
function siftDown(heap, i) {
    let k = i * 2 + 1;
    while (k < heap.length) {
        if (k + 1 < heap.length && heap[k + 1] > heap[k]) {
            ++k;
        }
        if (heap[i] >= heap[k]) {
            return;
        }
        [ heap[i], heap[k] ] = [ heap[k], heap[i] ];
        i = k;
        k = i * 2 + 1;
    }
}

/**
 * @private
 * @param {!Array<number>} heap
 * @param {number} i
 * @return {void}
 */
function siftUp(heap, i) {
    let p = Math.floor((i - 1) / 2);
    while (i > 0 && heap[i] > heap[p]) {
        [ heap[i], heap[p] ] = [ heap[p], heap[i] ];
        i = p;
        p = Math.floor((i - 1) / 2);
    }
}

module.exports = MaxHeap;
