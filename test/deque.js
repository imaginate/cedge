/**
 * Cedge
 * @file The unit tests for the `Deque` class.
 * @version 1.0.0.alpha
 * @see [Cedge](https://github.com/imaginate/cedge)
 *
 * @author Adam Smith <imagineadamsmith@gmail.com> (https://github.com/imaginate)
 * @copyright 2022 Adam A Smith <imagineadamsmith@gmail.com> (https://github.com/imaginate)
 */

const Deque = require('../src/deque.js');
const assert = require('assert');

suite('Deque(nums)', function() {
    const deque = new Deque([1,2,3,4,5,6,7,8]);
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
});

suite('Deque(nums, maxLength)', function() {
    const deque = new Deque([1,2,3,4,5,6,7,8], 5);
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
});

suite('Deque()', function() {
    const deque = new Deque();
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
});

suite('Deque(maxLength)', function() {
    const deque = new Deque(4);
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
});
