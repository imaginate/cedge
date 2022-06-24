/**
 * Cedge
 * @file The unit tests for the *Heap* class.
 * @version 1.0.0.alpha
 * @see [Cedge](https://github.com/imaginate/cedge)
 *
 * @author Adam Smith <imagineadamsmith@gmail.com> (https://github.com/imaginate)
 * @copyright 2022 Adam A Smith <imagineadamsmith@gmail.com> (https://github.com/imaginate)
 */

const Heap = require('../src/heap.js');
const assert = require('assert');

suite('Heap(nums)', function() {
    const heap = new Heap([1,2,3,4,5,6,7,8]);
    test('this.top()', function() {
        assert(heap.top() === 1);
    });
    test('this.maxLength()', function() {
        assert(heap.maxLength() === Infinity);
    });
    test('this.length()', function() {
        assert(heap.length() === 8);
    });
    test('this.empty()', function() {
        assert(heap.empty() === false);
    });
    test('this.pop()', function() {
        assert(heap.pop() === 1);
    });
    test('this.pop()', function() {
        assert(heap.pop() === 2);
    });
    test('this.top()', function() {
        assert(heap.top() === 3);
    });
    test('this.maxLength()', function() {
        assert(heap.maxLength() === Infinity);
    });
    test('this.length()', function() {
        assert(heap.length() === 6);
    });
    test('this.empty()', function() {
        assert(heap.empty() === false);
    });
    test('this.push(1)', function() {
        heap.push(1);
    });
    test('this.top()', function() {
        assert(heap.top() === 1);
    });
    test('this.maxLength()', function() {
        assert(heap.maxLength() === Infinity);
    });
    test('this.length()', function() {
        assert(heap.length() === 7);
    });
    test('this.empty()', function() {
        assert(heap.empty() === false);
    });
    test('this.pop()', function() {
        assert(heap.pop() === 1);
    });
    test('this.top()', function() {
        assert(heap.top() === 3);
    });
    test('this.maxLength()', function() {
        assert(heap.maxLength() === Infinity);
    });
    test('this.length()', function() {
        assert(heap.length() === 6);
    });
    test('this.empty()', function() {
        assert(heap.empty() === false);
    });
    test('this.push(9)', function() {
        heap.push(9);
    });
    test('this.top()', function() {
        assert(heap.top() === 3);
    });
    test('this.maxLength()', function() {
        assert(heap.maxLength() === Infinity);
    });
    test('this.length()', function() {
        assert(heap.length() === 7);
    });
    test('this.empty()', function() {
        assert(heap.empty() === false);
    });
});

suite('Heap(nums, maxLength)', function() {
    const heap = new Heap([1,2,3,4,5,6,7,8], 5);
    test('this.top()', function() {
        assert(heap.top() === 4);
    });
    test('this.maxLength()', function() {
        assert(heap.maxLength() === 5);
    });
    test('this.length()', function() {
        assert(heap.length() === 5);
    });
    test('this.empty()', function() {
        assert(heap.empty() === false);
    });
    test('this.pop()', function() {
        assert(heap.pop() === 4);
    });
    test('this.top()', function() {
        assert(heap.top() === 5);
    });
    test('this.maxLength()', function() {
        assert(heap.maxLength() === 5);
    });
    test('this.length()', function() {
        assert(heap.length() === 4);
    });
    test('this.empty()', function() {
        assert(heap.empty() === false);
    });
    test('this.pop()', function() {
        assert(heap.pop() === 5);
    });
    test('this.top()', function() {
        assert(heap.top() === 6);
    });
    test('this.maxLength()', function() {
        assert(heap.maxLength() === 5);
    });
    test('this.length()', function() {
        assert(heap.length() === 3);
    });
    test('this.empty()', function() {
        assert(heap.empty() === false);
    });
    test('this.push(1)', function() {
        heap.push(1);
    });
    test('this.top()', function() {
        assert(heap.top() === 1);
    });
    test('this.maxLength()', function() {
        assert(heap.maxLength() === 5);
    });
    test('this.length()', function() {
        assert(heap.length() === 4);
    });
    test('this.empty()', function() {
        assert(heap.empty() === false);
    });
    test('this.pop()', function() {
        assert(heap.pop() === 1);
    });
    test('this.top()', function() {
        assert(heap.top() === 6);
    });
    test('this.maxLength()', function() {
        assert(heap.maxLength() === 5);
    });
    test('this.length()', function() {
        assert(heap.length() === 3);
    });
    test('this.empty()', function() {
        assert(heap.empty() === false);
    });
    test('this.push(9)', function() {
        heap.push(9);
    });
    test('this.top()', function() {
        assert(heap.top() === 6);
    });
    test('this.maxLength()', function() {
        assert(heap.maxLength() === 5);
    });
    test('this.length()', function() {
        assert(heap.length() === 4);
    });
    test('this.empty()', function() {
        assert(heap.empty() === false);
    });
    test('this.push(9)', function() {
        heap.push(9);
    });
    test('this.top()', function() {
        assert(heap.top() === 6);
    });
    test('this.maxLength()', function() {
        assert(heap.maxLength() === 5);
    });
    test('this.length()', function() {
        assert(heap.length() === 5);
    });
    test('this.empty()', function() {
        assert(heap.empty() === false);
    });
    test('this.push(1)', function() {
        heap.push(1);
    });
    test('this.top()', function() {
        assert(heap.top() === 6);
    });
    test('this.maxLength()', function() {
        assert(heap.maxLength() === 5);
    });
    test('this.length()', function() {
        assert(heap.length() === 5);
    });
    test('this.empty()', function() {
        assert(heap.empty() === false);
    });
});

suite('Heap()', function() {
    const heap = new Heap();
    test('this.maxLength()', function() {
        assert(heap.maxLength() === Infinity);
    });
    test('this.length()', function() {
        assert(heap.length() === 0);
    });
    test('this.empty()', function() {
        assert(heap.empty() === true);
    });
    test('this.top()', function() {
        assert(heap.top() === undefined);
    });
    test('this.push(1)', function() {
        heap.push(1);
    });
    test('this.maxLength()', function() {
        assert(heap.maxLength() === Infinity);
    });
    test('this.length()', function() {
        assert(heap.length() === 1);
    });
    test('this.empty()', function() {
        assert(heap.empty() === false);
    });
    test('this.top()', function() {
        assert(heap.top() === 1);
    });
    test('this.pop()', function() {
        assert(heap.pop() === 1);
    });
    test('this.maxLength()', function() {
        assert(heap.maxLength() === Infinity);
    });
    test('this.length()', function() {
        assert(heap.length() === 0);
    });
    test('this.empty()', function() {
        assert(heap.empty() === true);
    });
    test('this.top()', function() {
        assert(heap.top() === undefined);
    });
    test('this.push(1)', function() {
        heap.push(1);
    });
    test('this.push(2)', function() {
        heap.push(2);
    });
    test('this.push(3)', function() {
        heap.push(3);
    });
    test('this.push(4)', function() {
        heap.push(4);
    });
    test('this.push(5)', function() {
        heap.push(5);
    });
    test('this.maxLength()', function() {
        assert(heap.maxLength() === Infinity);
    });
    test('this.length()', function() {
        assert(heap.length() === 5);
    });
    test('this.empty()', function() {
        assert(heap.empty() === false);
    });
    test('this.top()', function() {
        assert(heap.top() === 1);
    });
});

suite('Heap(maxLength)', function() {
    const heap = new Heap(3);
    test('this.maxLength()', function() {
        assert(heap.maxLength() === 3);
    });
    test('this.length()', function() {
        assert(heap.length() === 0);
    });
    test('this.empty()', function() {
        assert(heap.empty() === true);
    });
    test('this.top()', function() {
        assert(heap.top() === undefined);
    });
    test('this.push(1)', function() {
        heap.push(1);
    });
    test('this.maxLength()', function() {
        assert(heap.maxLength() === 3);
    });
    test('this.length()', function() {
        assert(heap.length() === 1);
    });
    test('this.empty()', function() {
        assert(heap.empty() === false);
    });
    test('this.top()', function() {
        assert(heap.top() === 1);
    });
    test('this.pop()', function() {
        assert(heap.pop() === 1);
    });
    test('this.maxLength()', function() {
        assert(heap.maxLength() === 3);
    });
    test('this.length()', function() {
        assert(heap.length() === 0);
    });
    test('this.empty()', function() {
        assert(heap.empty() === true);
    });
    test('this.top()', function() {
        assert(heap.top() === undefined);
    });
    test('this.push(1)', function() {
        heap.push(1);
    });
    test('this.push(2)', function() {
        heap.push(2);
    });
    test('this.push(3)', function() {
        heap.push(3);
    });
    test('this.push(4)', function() {
        heap.push(4);
    });
    test('this.push(5)', function() {
        heap.push(5);
    });
    test('this.maxLength()', function() {
        assert(heap.maxLength() === 3);
    });
    test('this.length()', function() {
        assert(heap.length() === 3);
    });
    test('this.empty()', function() {
        assert(heap.empty() === false);
    });
    test('this.top()', function() {
        assert(heap.top() === 3);
    });
    test('this.push(2)', function() {
        heap.push(2);
    });
    test('this.maxLength()', function() {
        assert(heap.maxLength() === 3);
    });
    test('this.length()', function() {
        assert(heap.length() === 3);
    });
    test('this.empty()', function() {
        assert(heap.empty() === false);
    });
    test('this.top()', function() {
        assert(heap.top() === 3);
    });
    test('this.push(4)', function() {
        heap.push(4);
    });
    test('this.maxLength()', function() {
        assert(heap.maxLength() === 3);
    });
    test('this.length()', function() {
        assert(heap.length() === 3);
    });
    test('this.empty()', function() {
        assert(heap.empty() === false);
    });
    test('this.top()', function() {
        assert(heap.top() === 4);
    });
});
