/**
 * Cedge
 * @file The `Deque` class.
 * @version 1.0.0.alpha
 * @see [Cedge](https://github.com/imaginate/cedge)
 *
 * @author Adam Smith <imagineadamsmith@gmail.com> (https://github.com/imaginate)
 * @copyright 2022 Adam A Smith <imagineadamsmith@gmail.com> (https://github.com/imaginate)
 *
 * @see [JSDoc3](https://jsdoc.app)
 * @see [Closure Compiler JSDoc Syntax](https://developers.google.com/closure/compiler/docs/js-for-compiler)
 */

class DequeNode {
    /**
     * @private
     * @param {*} val
     * @constructor
     */
    constructor(val) {
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class Deque {
    /**
     * The `Deque` constructor. This is a double-ended queue. You may provide
     * an array of values which it pushes from index zero (i.e. index zero is
     * the head) to the deque. If the `maxLength` parameter is defined the
     * length of the deque is limited to `maxLength`. If limited the deque
     * will purge the tail once the length of the deque exceeds the
     * `maxLength`.
     *
     * @public
     * @param {!Array<*>=} vals = `[]`
     *     If `vals` is type `number` the `maxLength` parameter is set to
     *     `vals`, and `vals` is set to `[]`.
     * @param {number=} maxLength = `Infinity`
     *     `maxLength` is the maximum values the deque can hold. It will cut
     *     the tail before adding a new value when the maximum length is
     *     reached.
     * @constructor
     */
    constructor(vals = [], maxLength = Infinity) {
        if (typeof vals === 'number') {
            maxLength = vals;
            vals = [];
        }

        /**
         * This is the internal node for the head of the queue. Do **not**
         * overwrite this property. It is meant for internal use only.
         *
         * @private
         * @const {?DequeNode}
         */
        this._head = null;

        /**
         * This is the internal node for the tail of the queue. Do **not**
         * overwrite this property. It is meant for internal use only.
         *
         * @private
         * @const {?DequeNode}
         */
        this._tail = null;

        /**
         * This is the internal value for the length of the queue. Do **not**
         * overwrite this property. It is meant for internal use only.
         *
         * @private
         * @const {?DequeNode}
         */
        this._length = 0;

        /**
         * This is the internal maximum length value. Do **not** overwrite
         * this property. It is meant for internal use only.
         *
         * @private
         * @const {number}
         */
        this._maxLength = maxLength;

        for (let i = 0; i < vals.length; ++i) {
            this.push(vals[i]);
        }
    }
    
    /**
     * This method gets the value for the head of the `Deque` instance.
     *
     * @public
     * @export
     * @return {*}
     */
    first() {
        return this._length
            ? this._head.val
            : undefined;
    }
        
    /**
     * This method gets the value for the tail of the `Deque` instance.
     *
     * @public
     * @export
     * @return {*}
     */
    last() {
        return this._length
            ? this._tail.val
            : undefined;
    }

    /**
     * This method gets the current length for the `Deque` instance.
     *
     * @public
     * @export
     * @return {number}
     */
    length() {
        return this._length;
    }

    /**
     * This method gets the maximum length for the `Deque` instance.
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
        if (!this._length) {
            return undefined;
        }
        const val = this._tail.val;
        if (this._tail.prev) {
            this._tail = this._tail.prev;
            this._tail.next = null;
        } else {
            this._head = null;
            this._tail = null;
        }
        --this._length;
        return val;
    }
    
    /**
     * @public
     * @export
     * @param {*} val
     * @return {void}
     */
    push(val) {
        if (this._maxLength < 1) {
            return;
        }
        if (this._length === this._maxLength) {
            this.pop();
        }
        const node = new DequeNode(val);
        if (this._tail) {
            this._tail.next = node;
            node.prev = this._tail;
            this._tail = node;
        } else {
            this._head = node;
            this._tail = node;
        }
        ++this._length;
    }
    
    /**
     * @public
     * @export
     * @return {*}
     */
    shift() {
        if (!this._length) {
            return undefined;
        }
        const val = this._head.val;
        if (this._head.next) {
            this._head = this._head.next;
            this._head.prev = null;
        } else {
            this._head = null;
            this._tail = null;
        }
        --this._length;
        return val;
    }    

    /**
     * @public
     * @export
     * @param {*} val
     * @return {void}
     */
    unshift(val) {
        if (this._maxLength < 1) {
            return;
        }
        if (this._length === this._maxLength) {
            this.pop();
        }
        const node = new DequeNode(val);
        if (this._head) {
            this._head.prev = node;
            node.next = this._head;
            this._head = node;
        } else {
            this._head = node;
            this._tail = node;
        }
        ++this._length;
    }
}

module.exports = Deque;
