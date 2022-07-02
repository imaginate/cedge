/**
 * Cedge
 * @file The unit tests for the *Deque* class.
 * @version 1.0.0.alpha
 * @see [Cedge](https://github.com/imaginate/cedge)
 *
 * @author Adam Smith <imagineadamsmith@gmail.com> (https://github.com/imaginate)
 * @copyright 2022 Adam A Smith <imagineadamsmith@gmail.com> (https://github.com/imaginate)
 */

const Deque = require('../src/deque.js');
const assert = require('assert');

suite('Deque(nums)', function() {
    let deque;
    test('new Deque(nums)', function() {
        deque = new Deque([1,2,3,4,5,6,7,8]);
    });
    test('this.front()', function() {
        assert(deque.front() === 1);
    });
    test('this.back()', function() {
        assert(deque.back() === 8);
    });
    test('this.maxLength()', function() {
        assert(deque.maxLength() === Infinity);
    });
    test('this.length()', function() {
        assert(deque.length() === 8);
    });
    test('this.empty()', function() {
        assert(deque.empty() === false);
    });
    test('this.pop()', function() {
        assert(deque.pop() === 8);
    });
    test('this.front()', function() {
        assert(deque.front() === 1);
    });
    test('this.back()', function() {
        assert(deque.back() === 7);
    });
    test('this.maxLength()', function() {
        assert(deque.maxLength() === Infinity);
    });
    test('this.length()', function() {
        assert(deque.length() === 7);
    });
    test('this.empty()', function() {
        assert(deque.empty() === false);
    });
    test('this.shift()', function() {
        assert(deque.shift() === 1);
    });
    test('this.front()', function() {
        assert(deque.front() === 2);
    });
    test('this.back()', function() {
        assert(deque.back() === 7);
    });
    test('this.maxLength()', function() {
        assert(deque.maxLength() === Infinity);
    });
    test('this.length()', function() {
        assert(deque.length() === 6);
    });
    test('this.empty()', function() {
        assert(deque.empty() === false);
    });
    test('this.push(1)', function() {
        deque.push(1);
    });
    test('this.front()', function() {
        assert(deque.front() === 2);
    });
    test('this.back()', function() {
        assert(deque.back() === 1);
    });
    test('this.maxLength()', function() {
        assert(deque.maxLength() === Infinity);
    });
    test('this.length()', function() {
        assert(deque.length() === 7);
    });
    test('this.empty()', function() {
        assert(deque.empty() === false);
    });
    test('this.unshift(8)', function() {
        deque.unshift(8);
    });
    test('this.front()', function() {
        assert(deque.front() === 8);
    });
    test('this.back()', function() {
        assert(deque.back() === 1);
    });
    test('this.maxLength()', function() {
        assert(deque.maxLength() === Infinity);
    });
    test('this.length()', function() {
        assert(deque.length() === 8);
    });
    test('this.empty()', function() {
        assert(deque.empty() === false);
    });
    test('this.clone()', function() {
        const clone = deque.clone();
        assert(deque !== clone);
        assert(typeof clone === 'object');
        assert(clone instanceof Deque);
        assert(deque.empty() === clone.empty());
        assert(deque.length() === clone.length());
        assert(deque.maxLength() === clone.maxLength());
        verifyClonedNextNode(deque._head, clone._head);
        verifyClonedPrevNode(deque._tail, clone._tail);
    });
});

suite('Deque(nums, maxLength)', function() {
    let deque;
    test('new Deque(nums, maxLength)', function() {
        deque = new Deque([1,2,3,4,5,6,7,8], 5);
    });
    test('this.front()', function() {
        assert(deque.front() === 1);
    });
    test('this.back()', function() {
        assert(deque.back() === 8);
    });
    test('this.maxLength()', function() {
        assert(deque.maxLength() === 5);
    });
    test('this.length()', function() {
        assert(deque.length() === 5);
    });
    test('this.empty()', function() {
        assert(deque.empty() === false);
    });
    test('this.pop()', function() {
        assert(deque.pop() === 8);
    });
    test('this.front()', function() {
        assert(deque.front() === 1);
    });
    test('this.back()', function() {
        assert(deque.back() === 4);
    });
    test('this.maxLength()', function() {
        assert(deque.maxLength() === 5);
    });
    test('this.length()', function() {
        assert(deque.length() === 4);
    });
    test('this.empty()', function() {
        assert(deque.empty() === false);
    });
    test('this.shift()', function() {
        assert(deque.shift() === 1);
    });
    test('this.front()', function() {
        assert(deque.front() === 2);
    });
    test('this.back()', function() {
        assert(deque.back() === 4);
    });
    test('this.maxLength()', function() {
        assert(deque.maxLength() === 5);
    });
    test('this.length()', function() {
        assert(deque.length() === 3);
    });
    test('this.empty()', function() {
        assert(deque.empty() === false);
    });
    test('this.push(1)', function() {
        deque.push(1);
    });
    test('this.front()', function() {
        assert(deque.front() === 2);
    });
    test('this.back()', function() {
        assert(deque.back() === 1);
    });
    test('this.maxLength()', function() {
        assert(deque.maxLength() === 5);
    });
    test('this.length()', function() {
        assert(deque.length() === 4);
    });
    test('this.empty()', function() {
        assert(deque.empty() === false);
    });
    test('this.unshift(8)', function() {
        deque.unshift(8);
    });
    test('this.front()', function() {
        assert(deque.front() === 8);
    });
    test('this.back()', function() {
        assert(deque.back() === 1);
    });
    test('this.maxLength()', function() {
        assert(deque.maxLength() === 5);
    });
    test('this.length()', function() {
        assert(deque.length() === 5);
    });
    test('this.empty()', function() {
        assert(deque.empty() === false);
    });
    test('this.push(9)', function() {
        deque.push(9);
    });
    test('this.push(10)', function() {
        deque.push(10);
    });
    test('this.front()', function() {
        assert(deque.front() === 8);
    });
    test('this.back()', function() {
        assert(deque.back() === 10);
    });
    test('this.maxLength()', function() {
        assert(deque.maxLength() === 5);
    });
    test('this.length()', function() {
        assert(deque.length() === 5);
    });
    test('this.empty()', function() {
        assert(deque.empty() === false);
    });
    test('this.unshift(11)', function() {
        deque.unshift(11);
    });
    test('this.unshift(12)', function() {
        deque.unshift(12);
    });
    test('this.front()', function() {
        assert(deque.front() === 12);
    });
    test('this.back()', function() {
        assert(deque.back() === 3);
    });
    test('this.maxLength()', function() {
        assert(deque.maxLength() === 5);
    });
    test('this.length()', function() {
        assert(deque.length() === 5);
    });
    test('this.empty()', function() {
        assert(deque.empty() === false);
    });
    test('this.clone()', function() {
        const clone = deque.clone();
        assert(deque !== clone);
        assert(typeof clone === 'object');
        assert(clone instanceof Deque);
        assert(deque.empty() === clone.empty());
        assert(deque.length() === clone.length());
        assert(deque.maxLength() === clone.maxLength());
        verifyClonedNextNode(deque._head, clone._head);
        verifyClonedPrevNode(deque._tail, clone._tail);
    });
});

suite('Deque()', function() {
    let deque;
    test('new Deque()', function() {
        deque = new Deque();
    });
    test('this.clone()', function() {
        const clone = deque.clone();
        assert(deque !== clone);
        assert(typeof clone === 'object');
        assert(clone instanceof Deque);
        assert(deque.empty() === clone.empty());
        assert(deque.length() === clone.length());
        assert(deque.maxLength() === clone.maxLength());
        verifyClonedNextNode(deque._head, clone._head);
        verifyClonedPrevNode(deque._tail, clone._tail);
    });
    test('this.pop()', function() {
        assert(deque.pop() === undefined);
    });
    test('this.shift()', function() {
        assert(deque.shift() === undefined);
    });
    test('this.front()', function() {
        assert(deque.front() === undefined);
    });
    test('this.back()', function() {
        assert(deque.back() === undefined);
    });
    test('this.maxLength()', function() {
        assert(deque.maxLength() === Infinity);
    });
    test('this.length()', function() {
        assert(deque.length() === 0);
    });
    test('this.empty()', function() {
        assert(deque.empty() === true);
    });
    test('this.push(1)', function() {
        deque.push(1);
    });
    test('this.front()', function() {
        assert(deque.front() === 1);
    });
    test('this.back()', function() {
        assert(deque.back() === 1);
    });
    test('this.maxLength()', function() {
        assert(deque.maxLength() === Infinity);
    });
    test('this.length()', function() {
        assert(deque.length() === 1);
    });
    test('this.empty()', function() {
        assert(deque.empty() === false);
    });
    test('this.pop()', function() {
        assert(deque.pop() === 1);
    });
    test('this.front()', function() {
        assert(deque.front() === undefined);
    });
    test('this.back()', function() {
        assert(deque.back() === undefined);
    });
    test('this.maxLength()', function() {
        assert(deque.maxLength() === Infinity);
    });
    test('this.length()', function() {
        assert(deque.length() === 0);
    });
    test('this.empty()', function() {
        assert(deque.empty() === true);
    });
    test('this.unshift(1)', function() {
        deque.unshift(1);
    });
    test('this.front()', function() {
        assert(deque.front() === 1);
    });
    test('this.back()', function() {
        assert(deque.back() === 1);
    });
    test('this.maxLength()', function() {
        assert(deque.maxLength() === Infinity);
    });
    test('this.length()', function() {
        assert(deque.length() === 1);
    });
    test('this.empty()', function() {
        assert(deque.empty() === false);
    });
    test('this.shift()', function() {
        assert(deque.shift() === 1);
    });
    test('this.front()', function() {
        assert(deque.front() === undefined);
    });
    test('this.back()', function() {
        assert(deque.back() === undefined);
    });
    test('this.maxLength()', function() {
        assert(deque.maxLength() === Infinity);
    });
    test('this.length()', function() {
        assert(deque.length() === 0);
    });
    test('this.empty()', function() {
        assert(deque.empty() === true);
    });
    test('this.push(1)', function() {
        deque.push(1);
    });
    test('this.push(2)', function() {
        deque.push(2);
    });
    test('this.push(3)', function() {
        deque.push(3);
    });
    test('this.front()', function() {
        assert(deque.front() === 1);
    });
    test('this.back()', function() {
        assert(deque.back() === 3);
    });
    test('this.maxLength()', function() {
        assert(deque.maxLength() === Infinity);
    });
    test('this.length()', function() {
        assert(deque.length() === 3);
    });
    test('this.empty()', function() {
        assert(deque.empty() === false);
    });
    test('this.unshift(4)', function() {
        deque.unshift(4);
    });
    test('this.unshift(5)', function() {
        deque.unshift(5);
    });
    test('this.unshift(6)', function() {
        deque.unshift(6);
    });
    test('this.front()', function() {
        assert(deque.front() === 6);
    });
    test('this.back()', function() {
        assert(deque.back() === 3);
    });
    test('this.maxLength()', function() {
        assert(deque.maxLength() === Infinity);
    });
    test('this.length()', function() {
        assert(deque.length() === 6);
    });
    test('this.empty()', function() {
        assert(deque.empty() === false);
    });
    test('this.pop()', function() {
        assert(deque.pop() === 3);
    });
    test('this.front()', function() {
        assert(deque.front() === 6);
    });
    test('this.back()', function() {
        assert(deque.back() === 2);
    });
    test('this.maxLength()', function() {
        assert(deque.maxLength() === Infinity);
    });
    test('this.length()', function() {
        assert(deque.length() === 5);
    });
    test('this.empty()', function() {
        assert(deque.empty() === false);
    });
    test('this.shift()', function() {
        assert(deque.shift() === 6);
    });
    test('this.front()', function() {
        assert(deque.front() === 5);
    });
    test('this.back()', function() {
        assert(deque.back() === 2);
    });
    test('this.maxLength()', function() {
        assert(deque.maxLength() === Infinity);
    });
    test('this.length()', function() {
        assert(deque.length() === 4);
    });
    test('this.empty()', function() {
        assert(deque.empty() === false);
    });
    test('this.clone()', function() {
        const clone = deque.clone();
        assert(deque !== clone);
        assert(typeof clone === 'object');
        assert(clone instanceof Deque);
        assert(deque.empty() === clone.empty());
        assert(deque.length() === clone.length());
        assert(deque.maxLength() === clone.maxLength());
        verifyClonedNextNode(deque._head, clone._head);
        verifyClonedPrevNode(deque._tail, clone._tail);
    });
});

suite('Deque(maxLength)', function() {
    let deque;
    test('new Deque(maxLength)', function() {
        deque = new Deque(4);
    });
    test('this.clone()', function() {
        const clone = deque.clone();
        assert(deque !== clone);
        assert(typeof clone === 'object');
        assert(clone instanceof Deque);
        assert(deque.empty() === clone.empty());
        assert(deque.length() === clone.length());
        assert(deque.maxLength() === clone.maxLength());
        verifyClonedNextNode(deque._head, clone._head);
        verifyClonedPrevNode(deque._tail, clone._tail);
    });
    test('this.pop()', function() {
        assert(deque.pop() === undefined);
    });
    test('this.shift()', function() {
        assert(deque.shift() === undefined);
    });
    test('this.front()', function() {
        assert(deque.front() === undefined);
    });
    test('this.back()', function() {
        assert(deque.back() === undefined);
    });
    test('this.maxLength()', function() {
        assert(deque.maxLength() === 4);
    });
    test('this.length()', function() {
        assert(deque.length() === 0);
    });
    test('this.empty()', function() {
        assert(deque.empty() === true);
    });
    test('this.push(1)', function() {
        deque.push(1);
    });
    test('this.push(2)', function() {
        deque.push(2);
    });
    test('this.push(3)', function() {
        deque.push(3);
    });
    test('this.front()', function() {
        assert(deque.front() === 1);
    });
    test('this.back()', function() {
        assert(deque.back() === 3);
    });
    test('this.maxLength()', function() {
        assert(deque.maxLength() === 4);
    });
    test('this.length()', function() {
        assert(deque.length() === 3);
    });
    test('this.empty()', function() {
        assert(deque.empty() === false);
    });
    test('this.unshift(4)', function() {
        deque.unshift(4);
    });
    test('this.unshift(5)', function() {
        deque.unshift(5);
    });
    test('this.unshift(6)', function() {
        deque.unshift(6);
    });
    test('this.front()', function() {
        assert(deque.front() === 6);
    });
    test('this.back()', function() {
        assert(deque.back() === 1);
    });
    test('this.maxLength()', function() {
        assert(deque.maxLength() === 4);
    });
    test('this.length()', function() {
        assert(deque.length() === 4);
    });
    test('this.empty()', function() {
        assert(deque.empty() === false);
    });
    test('this.pop()', function() {
        assert(deque.pop() === 1);
    });
    test('this.front()', function() {
        assert(deque.front() === 6);
    });
    test('this.back()', function() {
        assert(deque.back() === 4);
    });
    test('this.maxLength()', function() {
        assert(deque.maxLength() === 4);
    });
    test('this.length()', function() {
        assert(deque.length() === 3);
    });
    test('this.empty()', function() {
        assert(deque.empty() === false);
    });
    test('this.shift()', function() {
        assert(deque.shift() === 6);
    });
    test('this.front()', function() {
        assert(deque.front() === 5);
    });
    test('this.back()', function() {
        assert(deque.back() === 4);
    });
    test('this.maxLength()', function() {
        assert(deque.maxLength() === 4);
    });
    test('this.length()', function() {
        assert(deque.length() === 2);
    });
    test('this.empty()', function() {
        assert(deque.empty() === false);
    });
    test('this.unshift(7)', function() {
        deque.unshift(7);
    });
    test('this.unshift(8)', function() {
        deque.unshift(8);
    });
    test('this.unshift(9)', function() {
        deque.unshift(9);
    });
    test('this.front()', function() {
        assert(deque.front() === 9);
    });
    test('this.back()', function() {
        assert(deque.back() === 5);
    });
    test('this.maxLength()', function() {
        assert(deque.maxLength() === 4);
    });
    test('this.length()', function() {
        assert(deque.length() === 4);
    });
    test('this.empty()', function() {
        assert(deque.empty() === false);
    });
    test('this.push(10)', function() {
        deque.push(10);
    });
    test('this.push(11)', function() {
        deque.push(11);
    });
    test('this.push(12)', function() {
        deque.push(12);
    });
    test('this.front()', function() {
        assert(deque.front() === 9);
    });
    test('this.back()', function() {
        assert(deque.back() === 12);
    });
    test('this.maxLength()', function() {
        assert(deque.maxLength() === 4);
    });
    test('this.length()', function() {
        assert(deque.length() === 4);
    });
    test('this.empty()', function() {
        assert(deque.empty() === false);
    });
    test('this.clone()', function() {
        const clone = deque.clone();
        assert(deque !== clone);
        assert(typeof clone === 'object');
        assert(clone instanceof Deque);
        assert(deque.empty() === clone.empty());
        assert(deque.length() === clone.length());
        assert(deque.maxLength() === clone.maxLength());
        verifyClonedNextNode(deque._head, clone._head);
        verifyClonedPrevNode(deque._tail, clone._tail);
    });
});

suite('Deque(-maxLength)', function() {
    let deque;
    test('new Deque(-maxLength)', function() {
        deque = new Deque(-1);
    });
    test('this.pop()', function() {
        assert(deque.pop() === undefined);
    });
    test('this.shift()', function() {
        assert(deque.shift() === undefined);
    });
    test('this.front()', function() {
        assert(deque.front() === undefined);
    });
    test('this.back()', function() {
        assert(deque.back() === undefined);
    });
    test('this.maxLength()', function() {
        assert(deque.maxLength() === -1);
    });
    test('this.length()', function() {
        assert(deque.length() === 0);
    });
    test('this.empty()', function() {
        assert(deque.empty() === true);
    });
    test('this.push(1)', function() {
        deque.push(1);
    });
    test('this.unshift(2)', function() {
        deque.unshift(2);
    });
    test('this.front()', function() {
        assert(deque.front() === undefined);
    });
    test('this.back()', function() {
        assert(deque.back() === undefined);
    });
    test('this.maxLength()', function() {
        assert(deque.maxLength() === -1);
    });
    test('this.length()', function() {
        assert(deque.length() === 0);
    });
    test('this.empty()', function() {
        assert(deque.empty() === true);
    });
    test('this.clone()', function() {
        const clone = deque.clone();
        assert(deque !== clone);
        assert(typeof clone === 'object');
        assert(clone instanceof Deque);
        assert(deque.empty() === clone.empty());
        assert(deque.length() === clone.length());
        assert(deque.maxLength() === clone.maxLength());
        verifyClonedNextNode(deque._head, clone._head);
        verifyClonedPrevNode(deque._tail, clone._tail);
    });
});

/**
 * @private
 * @param {?DequeNode} node
 * @param {?DequeNode} clone
 * @return {void}
 */
function verifyClonedNextNode(node, clone) {
    if (!node || !clone) {
        assert(node === clone);
        return;
    }
    assert(node.val === clone.val);
    verifyClonedNextNode(node.next, clone.next);
}

/**
 * @private
 * @param {?DequeNode} node
 * @param {?DequeNode} clone
 * @return {void}
 */
function verifyClonedPrevNode(node, clone) {
    if (!node || !clone) {
        assert(node === clone);
        return;
    }
    assert(node.val === clone.val);
    verifyClonedPrevNode(node.prev, clone.prev);
}
