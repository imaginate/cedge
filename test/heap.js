/**
 * Cedge
 * @file The unit tests for the *Heap* class.
 * @version 1.0.0-alpha.2
 * @see [Cedge](https://github.com/imaginate/cedge)
 *
 * @author Adam Smith <imagineadamsmith@gmail.com> (https://github.com/imaginate)
 * @copyright 2022 Adam A Smith <imagineadamsmith@gmail.com> (https://github.com/imaginate)
 */

const Heap = require('../src/heap.js');
const assert = require('assert');

suite('Heap(nums)', function() {
    let heap;
    test('new Heap(nums)', function() {
        heap = new Heap([1,2,3,4,5,6,7,8]);
    });
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
    test('this.clone()', function() {
        const clone = heap.clone();
        assert(heap !== clone);
        assert(typeof clone === 'object');
        assert(clone instanceof Heap);
        assert(heap.compare === clone.compare);
        assert(heap.empty() === clone.empty());
        assert(heap.length() === clone.length());
        assert(heap.maxLength() === clone.maxLength());
        assert(heap._heap.every((val, i) => val === clone._heap[i]));
    });
});

suite('Heap(nums, maxLength)', function() {
    let heap;
    test('new Heap(nums, maxLength)', function() {
        heap = new Heap([1,2,3,4,5,6,7,8], 5);
    });
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
    test('this.clone()', function() {
        const clone = heap.clone();
        assert(heap !== clone);
        assert(typeof clone === 'object');
        assert(clone instanceof Heap);
        assert(heap.compare === clone.compare);
        assert(heap.empty() === clone.empty());
        assert(heap.length() === clone.length());
        assert(heap.maxLength() === clone.maxLength());
        assert(heap._heap.every((val, i) => val === clone._heap[i]));
    });
});

suite('Heap()', function() {
    let heap;
    test('new Heap()', function() {
        heap = new Heap();
    });
    test('this.pop()', function() {
        assert(heap.pop() === undefined);
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
    test('this.clone()', function() {
        const clone = heap.clone();
        assert(heap !== clone);
        assert(typeof clone === 'object');
        assert(clone instanceof Heap);
        assert(heap.compare === clone.compare);
        assert(heap.empty() === clone.empty());
        assert(heap.length() === clone.length());
        assert(heap.maxLength() === clone.maxLength());
        assert(heap._heap.every((val, i) => val === clone._heap[i]));
    });
});

suite('Heap(maxLength)', function() {
    let heap;
    test('new Heap(maxLength)', function() {
        heap = new Heap(3);
    });
    test('this.pop()', function() {
        assert(heap.pop() === undefined);
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
    test('this.clone()', function() {
        const clone = heap.clone();
        assert(heap !== clone);
        assert(typeof clone === 'object');
        assert(clone instanceof Heap);
        assert(heap.compare === clone.compare);
        assert(heap.empty() === clone.empty());
        assert(heap.length() === clone.length());
        assert(heap.maxLength() === clone.maxLength());
        assert(heap._heap.every((val, i) => val === clone._heap[i]));
    });
});

suite('Heap(nums, "max-number")', function() {
    let heap;
    test('new Heap(nums, "max-number")', function() {
        heap = new Heap([1,2,3,4,5,6,7,8], 'max-number');
    });
    test('this.top()', function() {
        assert(heap.top() === 8);
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
        assert(heap.pop() === 8);
    });
    test('this.pop()', function() {
        assert(heap.pop() === 7);
    });
    test('this.top()', function() {
        assert(heap.top() === 6);
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
    test('this.push(8)', function() {
        heap.push(8);
    });
    test('this.top()', function() {
        assert(heap.top() === 8);
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
        assert(heap.pop() === 8);
    });
    test('this.top()', function() {
        assert(heap.top() === 6);
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
    test('this.push(4)', function() {
        heap.push(4);
    });
    test('this.top()', function() {
        assert(heap.top() === 6);
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
    test('this.clone()', function() {
        const clone = heap.clone();
        assert(heap !== clone);
        assert(typeof clone === 'object');
        assert(clone instanceof Heap);
        assert(heap.compare === clone.compare);
        assert(heap.empty() === clone.empty());
        assert(heap.length() === clone.length());
        assert(heap.maxLength() === clone.maxLength());
        assert(heap._heap.every((val, i) => val === clone._heap[i]));
    });
});

suite('Heap("max-number")', function() {
    let heap;
    test('new Heap("max-number")', function() {
        heap = new Heap('max-number');
    });
    test('this.pop()', function() {
        assert(heap.pop() === undefined);
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
        assert(heap.top() === 5);
    });
    test('this.push(6)', function() {
        heap.push(6);
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
    test('this.top()', function() {
        assert(heap.top() === 6);
    });
    test('this.push(2)', function() {
        heap.push(2);
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
    test('this.top()', function() {
        assert(heap.top() === 6);
    });
    test('this.clone()', function() {
        const clone = heap.clone();
        assert(heap !== clone);
        assert(typeof clone === 'object');
        assert(clone instanceof Heap);
        assert(heap.compare === clone.compare);
        assert(heap.empty() === clone.empty());
        assert(heap.length() === clone.length());
        assert(heap.maxLength() === clone.maxLength());
        assert(heap._heap.every((val, i) => val === clone._heap[i]));
    });
});

suite('Heap("max-number", maxLength)', function() {
    let heap;
    test('new Heap("max-number", maxLength)', function() {
        heap = new Heap('max-number', 3);
    });
    test('this.pop()', function() {
        assert(heap.pop() === undefined);
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
        assert(heap.top() === 2);
    });
    test('this.clone()', function() {
        const clone = heap.clone();
        assert(heap !== clone);
        assert(typeof clone === 'object');
        assert(clone instanceof Heap);
        assert(heap.compare === clone.compare);
        assert(heap.empty() === clone.empty());
        assert(heap.length() === clone.length());
        assert(heap.maxLength() === clone.maxLength());
        assert(heap._heap.every((val, i) => val === clone._heap[i]));
    });
});

suite('Heap(strs, "min-string")', function() {
    let heap;
    test('new Heap(strs, "min-string")', function() {
        heap = new Heap(['aa','a','b','abc','c','bc'], 'min-string');
    });
    test('this.top()', function() {
        assert(heap.top() === 'a');
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
    test('this.pop()', function() {
        assert(heap.pop() === 'a');
    });
    test('this.pop()', function() {
        assert(heap.pop() === 'aa');
    });
    test('this.top()', function() {
        assert(heap.top() === 'abc');
    });
    test('this.maxLength()', function() {
        assert(heap.maxLength() === Infinity);
    });
    test('this.length()', function() {
        assert(heap.length() === 4);
    });
    test('this.empty()', function() {
        assert(heap.empty() === false);
    });
    test('this.push("a")', function() {
        heap.push('a');
    });
    test('this.top()', function() {
        assert(heap.top() === 'a');
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
    test('this.pop()', function() {
        assert(heap.pop() === 'a');
    });
    test('this.top()', function() {
        assert(heap.top() === 'abc');
    });
    test('this.maxLength()', function() {
        assert(heap.maxLength() === Infinity);
    });
    test('this.length()', function() {
        assert(heap.length() === 4);
    });
    test('this.empty()', function() {
        assert(heap.empty() === false);
    });
    test('this.push("b")', function() {
        heap.push('b');
    });
    test('this.top()', function() {
        assert(heap.top() === 'abc');
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
    test('this.clone()', function() {
        const clone = heap.clone();
        assert(heap !== clone);
        assert(typeof clone === 'object');
        assert(clone instanceof Heap);
        assert(heap.compare === clone.compare);
        assert(heap.empty() === clone.empty());
        assert(heap.length() === clone.length());
        assert(heap.maxLength() === clone.maxLength());
        assert(heap._heap.every((val, i) => val === clone._heap[i]));
    });
});

suite('Heap(strs, "max-string")', function() {
    let heap;
    test('new Heap(strs, "max-string")', function() {
        heap = new Heap(['aa','a','b','abc','c','bc'], 'max-string');
    });
    test('this.top()', function() {
        assert(heap.top() === 'c');
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
    test('this.pop()', function() {
        assert(heap.pop() === 'c');
    });
    test('this.pop()', function() {
        assert(heap.pop() === 'bc');
    });
    test('this.top()', function() {
        assert(heap.top() === 'b');
    });
    test('this.maxLength()', function() {
        assert(heap.maxLength() === Infinity);
    });
    test('this.length()', function() {
        assert(heap.length() === 4);
    });
    test('this.empty()', function() {
        assert(heap.empty() === false);
    });
    test('this.push("c")', function() {
        heap.push('c');
    });
    test('this.top()', function() {
        assert(heap.top() === 'c');
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
    test('this.pop()', function() {
        assert(heap.pop() === 'c');
    });
    test('this.top()', function() {
        assert(heap.top() === 'b');
    });
    test('this.maxLength()', function() {
        assert(heap.maxLength() === Infinity);
    });
    test('this.length()', function() {
        assert(heap.length() === 4);
    });
    test('this.empty()', function() {
        assert(heap.empty() === false);
    });
    test('this.push("abcd")', function() {
        heap.push('abcd');
    });
    test('this.top()', function() {
        assert(heap.top() === 'b');
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
    test('this.clone()', function() {
        const clone = heap.clone();
        assert(heap !== clone);
        assert(typeof clone === 'object');
        assert(clone instanceof Heap);
        assert(heap.compare === clone.compare);
        assert(heap.empty() === clone.empty());
        assert(heap.length() === clone.length());
        assert(heap.maxLength() === clone.maxLength());
        assert(heap._heap.every((val, i) => val === clone._heap[i]));
    });
});
