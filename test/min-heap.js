/**
 * Cedge
 * @file The unit tests for the `MinHeap` class.
 * @version 1.0.0.alpha
 * @see [Cedge](https://github.com/imaginate/cedge)
 *
 * @author Adam Smith <imagineadamsmith@gmail.com> (https://github.com/imaginate)
 * @copyright 2022 Adam A Smith <imagineadamsmith@gmail.com> (https://github.com/imaginate)
 */

const MinHeap = require('../src/min-heap.js');
const assert = require('assert');

suite('MinHeap(nums)', function() {
    const heap = new MinHeap([1,2,3,4,5,6,7,8]);
    test('this.getMin()', function() {
        assert(heap.getMin() === 1);
    });
    test('this.size', function() {
        assert(heap.size === Infinity);
    });
    test('this.length', function() {
        assert(heap.length === 8);
    });
    test('this.pop()', function() {
        assert(heap.pop() === 1);
    });
    test('this.pop()', function() {
        assert(heap.pop() === 2);
    });
    test('this.size', function() {
        assert(heap.size === Infinity);
    });
    test('this.length', function() {
        assert(heap.length === 6);
    });
    test('this.getMin()', function() {
        assert(heap.getMin() === 3);
    });
    test('this.push(1)', function() {
        heap.push(1);
    });
    test('this.getMin()', function() {
        assert(heap.getMin() === 1);
    });
    test('this.pop()', function() {
        assert(heap.pop() === 1);
    });
    test('this.getMin()', function() {
        assert(heap.getMin() === 3);
    });
    test('this.push(9)', function() {
        heap.push(9);
    });
    test('this.getMin()', function() {
        assert(heap.getMin() === 3);
    });
    test('this.size', function() {
        assert(heap.size === Infinity);
    });
    test('this.length', function() {
        assert(heap.length === 7);
    });
});

suite('MinHeap(nums, size)', function() {
    const heap = new MinHeap([1,2,3,4,5,6,7,8], 5);
    test('this.getMin()', function() {
        assert(heap.getMin() === 4);
    });
    test('this.size', function() {
        assert(heap.size === 5);
    });
    test('this.length', function() {
        assert(heap.length === 5);
    });
    test('this.pop()', function() {
        assert(heap.pop() === 4);
    });
    test('this.pop()', function() {
        assert(heap.pop() === 5);
    });
    test('this.size', function() {
        assert(heap.size === 5);
    });
    test('this.length', function() {
        assert(heap.length === 3);
    });
    test('this.getMin()', function() {
        assert(heap.getMin() === 6);
    });
    test('this.push(1)', function() {
        heap.push(1);
    });
    test('this.size', function() {
        assert(heap.size === 5);
    });
    test('this.length', function() {
        assert(heap.length === 4);
    });
    test('this.getMin()', function() {
        assert(heap.getMin() === 1);
    });
    test('this.pop()', function() {
        assert(heap.pop() === 1);
    });
    test('this.push(9)', function() {
        heap.push(9);
    });
    test('this.push(9)', function() {
        heap.push(9);
    });
    test('this.push(1)', function() {
        heap.push(1);
    });
    test('this.size', function() {
        assert(heap.size === 5);
    });
    test('this.length', function() {
        assert(heap.length === 5);
    });
    test('this.getMin()', function() {
        assert(heap.getMin() === 6);
    });
});

suite('MinHeap()', function() {
    const heap = new MinHeap();
    test('this.size', function() {
        assert(heap.size === Infinity);
    });
    test('this.length', function() {
        assert(heap.length === 0);
    });
    test('this.getMin()', function() {
        assert(isNaN(heap.getMin()));
    });
    test('this.push(1)', function() {
        heap.push(1);
    });
    test('this.size', function() {
        assert(heap.size === Infinity);
    });
    test('this.length', function() {
        assert(heap.length === 1);
    });
    test('this.getMin()', function() {
        assert(heap.getMin() === 1);
    });
    test('this.pop()', function() {
        assert(heap.pop() === 1);
    });
    test('this.size', function() {
        assert(heap.size === Infinity);
    });
    test('this.length', function() {
        assert(heap.length === 0);
    });
    test('this.getMin()', function() {
        assert(isNaN(heap.getMin()));
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
    test('this.size', function() {
        assert(heap.size === Infinity);
    });
    test('this.length', function() {
        assert(heap.length === 5);
    });
    test('this.getMin()', function() {
        assert(heap.getMin() === 1);
    });
});

suite('MinHeap(size)', function() {
    const heap = new MinHeap(3);
    test('this.size', function() {
        assert(heap.size === 3);
    });
    test('this.length', function() {
        assert(heap.length === 0);
    });
    test('this.getMin()', function() {
        assert(isNaN(heap.getMin()));
    });
    test('this.push(1)', function() {
        heap.push(1);
    });
    test('this.size', function() {
        assert(heap.size === 3);
    });
    test('this.length', function() {
        assert(heap.length === 1);
    });
    test('this.getMin()', function() {
        assert(heap.getMin() === 1);
    });
    test('this.pop()', function() {
        assert(heap.pop() === 1);
    });
    test('this.size', function() {
        assert(heap.size === 3);
    });
    test('this.length', function() {
        assert(heap.length === 0);
    });
    test('this.getMin()', function() {
        assert(isNaN(heap.getMin()));
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
    test('this.size', function() {
        assert(heap.size === 3);
    });
    test('this.length', function() {
        assert(heap.length === 3);
    });
    test('this.getMin()', function() {
        assert(heap.getMin() === 3);
    });
    test('this.push(2)', function() {
        heap.push(2);
    });
    test('this.size', function() {
        assert(heap.size === 3);
    });
    test('this.length', function() {
        assert(heap.length === 3);
    });
    test('this.getMin()', function() {
        assert(heap.getMin() === 3);
    });
    test('this.push(4)', function() {
        heap.push(4);
    });
    test('this.size', function() {
        assert(heap.size === 3);
    });
    test('this.length', function() {
        assert(heap.length === 3);
    });
    test('this.getMin()', function() {
        assert(heap.getMin() === 4);
    });
});
