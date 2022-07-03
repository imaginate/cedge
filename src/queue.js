/**
 * Cedge
 * @file The *Queue* class.
 * @version 1.0.0-beta
 * @see [Cedge](https://github.com/imaginate/cedge)
 *
 * @author Adam Smith <imagineadamsmith@gmail.com> (https://github.com/imaginate)
 * @copyright 2022 Adam A Smith <imagineadamsmith@gmail.com> (https://github.com/imaginate)
 *
 * @see [JSDoc3](https://jsdoc.app)
 * @see [Closure Compiler JSDoc Syntax](https://developers.google.com/closure/compiler/docs/js-for-compiler)
 */

var MyQueue = (function() {

    class QueueNode {
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

    class Queue {
        /**
         * The *Queue* constructor (named *MyQueue* when copying for
         * competitive programming use to avoid a name collision with
         * LeetCode's public *Queue* class). You may provide an array of
         * values which it pushes from index zero (i.e. index zero is the
         * head) to the queue. Note that *Queue.prototype.pop* has a time
         * complexity of `O(n)`. Use *Deque* to get a time complexity of
         * `O(1)` for *queue.pop*.
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
             * @const {?QueueNode}
             */
            this._head = null;

            /**
             * This is the internal node for the tail of the queue. Do **not**
             * overwrite this property. It is meant for internal use only.
             *
             * @private
             * @export
             * @const {?QueueNode}
             */
            this._tail = null;

            /**
             * This is the internal value for the length of the queue. Do
             * **not** overwrite this property. It is meant for internal use
             * only.
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
         * This method gets the value for the tail of the *Queue* instance.
         *
         * @public
         * @export
         * @return {*}
         */
        back() {
            return this._length
                ? this._tail.val
                : undefined;
        }

        /**
         * This method creates a new *Queue* instance and copies the entire
         * existing state to the new instance.
         *
         * @public
         * @export
         * @return {!Queue}
         *     The new *Queue* instance with the copied state is returned.
         */
        clone() {
            const queue = new Queue();
            if (!this._length) {
                return queue;
            }
            queue._length = this._length;
            queue._head = new QueueNode(this._head.val);
            let prev = queue._head;
            let node = this._head.next;
            while (node) {
                const clone = new QueueNode(node.val);
                prev.next = clone;
                prev = clone;
                node = node.next;
            }
            queue._tail = prev;
            return queue;
        }

        /**
         * This method reports whether the queue is empty.
         *
         * @public
         * @export
         * @return {boolean}
         *     If the queue is empty `true` is returned. Otherwise `false` is
         *     returned.
         */
        empty() {
            return !this._length;
        }

        /**
         * This method gets the value for the head of the *Queue* instance.
         *
         * @public
         * @export
         * @return {*}
         */
        front() {
            return this._length
                ? this._head.val
                : undefined;
        }

        /**
         * This method gets the current length of the *Queue* instance.
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
                let node = this._head;
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
            const node = new QueueNode(val);
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
            const node = new QueueNode(val);
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

    return Queue;
})();

module.exports = MyQueue;
