class MyQueueNode {
    /**
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
     * The `MyQueue` constructor (named `MyQueue` instead of `Queue` due to a
     * name collision with the globally defined `Queue` class on LeetCode).
     * You may provide an array of values which it pushes from index zero
     * (i.e. index zero is the head) to the queue. Note that
     * `MyQueue.prototype.pop` has a time complexity of O(n). Use `Deque` to
     * get a time complexity of O(1) for `Deque.prototype.pop`.
     *
     * @param {*[]=} vals = `[]`
     * @constructor
     */
    constructor(vals = []) {
        this.head = null;
        this.tail = null;
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
        if (this.head.next) {
            const node = this.head;
            while (node.next.next) {
                node = node.next;
            }
            node.next = null;
            this.tail = node;
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
        ++this.length;
        const node = new MyQueueNode(val);
        if (this.tail) {
            this.tail.next = node;
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
        ++this.length;
        const node = new MyQueueNode(val);
        if (this.head) {
            node.next = this.head;
            this.head = node;
        } else {
            this.head = node;
            this.tail = node;
        }
    }
}
