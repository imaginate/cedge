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
     * The `Deque` constructor. You may provide an array of values which it
     * pushes from index zero (i.e. index zero is the head) to the deque. If
     * the `size` parameter is defined the length of the deque is limited to
     * `size`. If limited the deque will purge the tail once the length of the
     * deque exceeds the `size`.
     *
     * @param {*[]=} vals = `[]`
     *     If `vals` is type `number` the `size` parameter is set to `vals`
     *     value, and `vals` is set to `[]`.
     * @param {number=} size = `Infinity`
     *     Must be greater than or equal to `1`. If it is not then size is
     *     automatically set to `1`.
     * @constructor
     */
    constructor(vals = [], size = Infinity) {
        if (typeof vals === 'number') {
            size = vals;
            vals = [];
        }
        if (size < 1) {
            size = 1;
        }
        this.head = null;
        this.tail = null;
        this.size = size;
        this.length = 0;
        for (let i = 0; i < vals.length; ++i) {
            this.push(vals[i]);
        }
    }
    
    /**
     * @return {*}
     */
    first() {
        return this.length
            ? this.head.val
            : undefined;
    }
        
    /**
     * @return {*}
     */
    last() {
        return this.length
            ? this.tail.val
            : undefined;
    }

    /**
     * @return {*}
     */
    pop() {
        if (!this.length) {
            return undefined;
        }
        const val = this.tail.val;
        --this.length;
        if (this.tail.prev) {
            this.tail = this.tail.prev;
            this.tail.next = null;
        } else {
            this.head = null;
            this.tail = null;
        }
        return val;
    }
    
    /**
     * @param {*} val
     * @return {void}
     */
    push(val) {
        if (this.length === this.size) {
            this.pop();
        }
        ++this.length;
        const node = new DequeNode(val);
        if (this.tail) {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        } else {
            this.head = node;
            this.tail = node;
        }
    }
    
    /**
     * @return {*}
     */
    shift() {
        if (!this.length) {
            return undefined;
        }
        const val = this.head.val;
        --this.length;
        if (this.head.next) {
            this.head = this.head.next;
            this.head.prev = null;
        } else {
            this.head = null;
            this.tail = null;
        }
        return val;
    }    

    /**
     * @param {*} val
     * @return {void}
     */
    unshift(val) {
        if (this.length === this.size) {
            this.pop();
        }
        ++this.length;
        const node = new DequeNode(val);
        if (this.head) {
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
        } else {
            this.head = node;
            this.tail = node;
        }
    }
}

module.exports = Deque;
