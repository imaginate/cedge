/**
 * Cedge
 * @file The `Queue` class.
 * @version 1.0.0.alpha
 * @see [Cedge](https://github.com/imaginate/cedge)
 *
 * @author Adam Smith <imagineadamsmith@gmail.com> (https://github.com/imaginate)
 * @copyright 2022 Adam A Smith <imagineadamsmith@gmail.com> (https://github.com/imaginate)
 *
 * @see [JSDoc3](https://jsdoc.app)
 * @see [Closure Compiler JSDoc Syntax](https://developers.google.com/closure/compiler/docs/js-for-compiler)
 */

class MyQueueNode {
    /**
     * @private
     * @param {*} val
     * @constructor
     */
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class MyQueue {
    /**
     * The `Queue` constructor (named `MyQueue` here so that when this file is
     * copied for competitive programming on LeetCode a name collision with
     * the LeetCode's `Queue` class is avoided). You may provide an array of
     * values which it pushes from index zero (i.e. index zero is the head) to
     * the queue. Note that `Queue.prototype.pop` has a time complexity of
     * O(n). Use `Deque` to get a time complexity of O(1) for `queue.pop`.
     *
     * @public
     * @param {!Array<*>=} vals = `[]`
     * @constructor
     */
    constructor(vals = []) {

        /**
         * This is the internal node for the head of the queue. Do **not**
         * overwrite this property. It is meant for internal use only.
         *
         * @private
         * @export
         * @const {?MyQueueNode}
         */
        this._head = null;

        /**
         * This is the internal node for the tail of the queue. Do **not**
         * overwrite this property. It is meant for internal use only.
         *
         * @private
         * @export
         * @const {?MyQueueNode}
         */
        this._tail = null;

        /**
         * This is the internal value for the length of the queue. Do **not**
         * overwrite this property. It is meant for internal use only.
         *
         * @private
         * @export
         * @const {number}
         */
        this._length = 0;

        for (let i = 0; i < vals.length; ++i) {
            this.push(vals[i]);
        }
    }
    
    /**
     * This method gets the value for the head of the `Queue` instance.
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
     * This method gets the value for the tail of the `Queue` instance.
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
     * This method gets the current length of the `Queue` instance.
     *
     * @public
     * @export
     * @return {number}
     */
    length() {
        return this._length;
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
        if (this._head.next) {
            const node = this._head;
            while (node.next.next) {
                node = node.next;
            }
            node.next = null;
            this._tail = node;
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
        const node = new MyQueueNode(val);
        if (this._tail) {
            this._tail.next = node;
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
        const node = new MyQueueNode(val);
        if (this._head) {
            node.next = this._head;
            this._head = node;
        } else {
            this._head = node;
            this._tail = node;
        }
        ++this._length;
    }
}

module.exports = MyQueue;
