/**
 * Cedge
 * @file The unit tests for the *Queue* class.
 * @version 1.0.0.alpha
 * @see [Cedge](https://github.com/imaginate/cedge)
 *
 * @author Adam Smith <imagineadamsmith@gmail.com> (https://github.com/imaginate)
 * @copyright 2022 Adam A Smith <imagineadamsmith@gmail.com> (https://github.com/imaginate)
 */

const Queue = require('../src/queue.js');
const assert = require('assert');

suite('Queue(nums)', function() {
    const queue = new Queue([1,2,3,4,5,6,7,8]);
    test('this.front()', function() {
        assert(queue.front() === 1);
    });
    test('this.back()', function() {
        assert(queue.back() === 8);
    });
    test('this.length()', function() {
        assert(queue.length() === 8);
    });
    test('this.empty()', function() {
        assert(queue.empty() === false);
    });
    test('this.pop()', function() {
        assert(queue.pop() === 8);
    });
    test('this.front()', function() {
        assert(queue.front() === 1);
    });
    test('this.back()', function() {
        assert(queue.back() === 7);
    });
    test('this.length()', function() {
        assert(queue.length() === 7);
    });
    test('this.empty()', function() {
        assert(queue.empty() === false);
    });
    test('this.shift()', function() {
        assert(queue.shift() === 1);
    });
    test('this.front()', function() {
        assert(queue.front() === 2);
    });
    test('this.back()', function() {
        assert(queue.back() === 7);
    });
    test('this.length()', function() {
        assert(queue.length() === 6);
    });
    test('this.empty()', function() {
        assert(queue.empty() === false);
    });
    test('this.push(1)', function() {
        queue.push(1);
    });
    test('this.front()', function() {
        assert(queue.front() === 2);
    });
    test('this.back()', function() {
        assert(queue.back() === 1);
    });
    test('this.length()', function() {
        assert(queue.length() === 7);
    });
    test('this.empty()', function() {
        assert(queue.empty() === false);
    });
    test('this.unshift(8)', function() {
        queue.unshift(8);
    });
    test('this.front()', function() {
        assert(queue.front() === 8);
    });
    test('this.back()', function() {
        assert(queue.back() === 1);
    });
    test('this.length()', function() {
        assert(queue.length() === 8);
    });
    test('this.empty()', function() {
        assert(queue.empty() === false);
    });
    test('this.clone()', function() {
        const clone = queue.clone();
        assert(queue !== clone);
        assert(typeof clone === 'object');
        assert(clone instanceof Queue);
        assert(queue.empty() === clone.empty());
        assert(queue.length() === clone.length());
        verifyClonedNode(queue._head, clone._head);
    });
});

suite('Queue()', function() {
    const queue = new Queue();
    test('this.front()', function() {
        assert(queue.front() === undefined);
    });
    test('this.back()', function() {
        assert(queue.back() === undefined);
    });
    test('this.length()', function() {
        assert(queue.length() === 0);
    });
    test('this.empty()', function() {
        assert(queue.empty() === true);
    });
    test('this.push(1)', function() {
        queue.push(1);
    });
    test('this.front()', function() {
        assert(queue.front() === 1);
    });
    test('this.back()', function() {
        assert(queue.back() === 1);
    });
    test('this.length()', function() {
        assert(queue.length() === 1);
    });
    test('this.empty()', function() {
        assert(queue.empty() === false);
    });
    test('this.shift()', function() {
        assert(queue.shift() === 1);
    });
    test('this.front()', function() {
        assert(queue.front() === undefined);
    });
    test('this.back()', function() {
        assert(queue.back() === undefined);
    });
    test('this.length()', function() {
        assert(queue.length() === 0);
    });
    test('this.empty()', function() {
        assert(queue.empty() === true);
    });
    test('this.push(1)', function() {
        queue.push(1);
    });
    test('this.push(2)', function() {
        queue.push(2);
    });
    test('this.push(3)', function() {
        queue.push(3);
    });
    test('this.front()', function() {
        assert(queue.front() === 1);
    });
    test('this.back()', function() {
        assert(queue.back() === 3);
    });
    test('this.length()', function() {
        assert(queue.length() === 3);
    });
    test('this.empty()', function() {
        assert(queue.empty() === false);
    });
    test('this.unshift(4)', function() {
        queue.unshift(4);
    });
    test('this.unshift(5)', function() {
        queue.unshift(5);
    });
    test('this.unshift(6)', function() {
        queue.unshift(6);
    });
    test('this.front()', function() {
        assert(queue.front() === 6);
    });
    test('this.back()', function() {
        assert(queue.back() === 3);
    });
    test('this.length()', function() {
        assert(queue.length() === 6);
    });
    test('this.empty()', function() {
        assert(queue.empty() === false);
    });
    test('this.pop()', function() {
        assert(queue.pop() === 3);
    });
    test('this.front()', function() {
        assert(queue.front() === 6);
    });
    test('this.back()', function() {
        assert(queue.back() === 2);
    });
    test('this.length()', function() {
        assert(queue.length() === 5);
    });
    test('this.empty()', function() {
        assert(queue.empty() === false);
    });
    test('this.shift()', function() {
        assert(queue.shift() === 6);
    });
    test('this.front()', function() {
        assert(queue.front() === 5);
    });
    test('this.back()', function() {
        assert(queue.back() === 2);
    });
    test('this.length()', function() {
        assert(queue.length() === 4);
    });
    test('this.empty()', function() {
        assert(queue.empty() === false);
    });
    test('this.clone()', function() {
        const clone = queue.clone();
        assert(queue !== clone);
        assert(typeof clone === 'object');
        assert(clone instanceof Queue);
        assert(queue.empty() === clone.empty());
        assert(queue.length() === clone.length());
        verifyClonedNode(queue._head, clone._head);
    });
});

/**
 * @private
 * @param {?DequeNode} node
 * @param {?DequeNode} clone
 * @return {void}
 */
function verifyClonedNode(node, clone) {
    if (!node || !clone) {
        assert(node === clone);
        return;
    }
    assert(node.val === clone.val);
    verifyClonedNode(node.next, clone.next);
}
