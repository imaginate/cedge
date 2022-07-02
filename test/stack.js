/**
 * Cedge
 * @file The unit tests for the *Stack* class.
 * @version 1.0.0.alpha
 * @see [Cedge](https://github.com/imaginate/cedge)
 *
 * @author Adam Smith <imagineadamsmith@gmail.com> (https://github.com/imaginate)
 * @copyright 2022 Adam A Smith <imagineadamsmith@gmail.com> (https://github.com/imaginate)
 */

const Stack = require('../src/stack.js');
const assert = require('assert');

suite('Stack(nums)', function() {
    let stack;
    test('new Stack(nums)', function() {
        stack = new Stack([1,2,3,4,5,6,7,8]);
    });
    test('this.top()', function() {
        assert(stack.top() === 8);
    });
    test('this.empty()', function() {
        assert(stack.empty() === false);
    });
    test('this.length()', function() {
        assert(stack.length() === 8);
    });
    test('this.pop()', function() {
        assert(stack.pop() === 8);
    });
    test('this.top()', function() {
        assert(stack.top() === 7);
    });
    test('this.length()', function() {
        assert(stack.length() === 7);
    });
    test('this.empty()', function() {
        assert(stack.empty() === false);
    });
    test('this.pop()', function() {
        assert(stack.pop() === 7);
    });
    test('this.top()', function() {
        assert(stack.top() === 6);
    });
    test('this.length()', function() {
        assert(stack.length() === 6);
    });
    test('this.empty()', function() {
        assert(stack.empty() === false);
    });
    test('this.push(1)', function() {
        stack.push(1);
    });
    test('this.top()', function() {
        assert(stack.top() === 1);
    });
    test('this.length()', function() {
        assert(stack.length() === 7);
    });
    test('this.empty()', function() {
        assert(stack.empty() === false);
    });
    test('this.pop()', function() {
        assert(stack.pop() === 1);
    });
    test('this.top()', function() {
        assert(stack.top() === 6);
    });
    test('this.length()', function() {
        assert(stack.length() === 6);
    });
    test('this.empty()', function() {
        assert(stack.empty() === false);
    });
    test('this.push(9)', function() {
        stack.push(9);
    });
    test('this.top()', function() {
        assert(stack.top() === 9);
    });
    test('this.length()', function() {
        assert(stack.length() === 7);
    });
    test('this.empty()', function() {
        assert(stack.empty() === false);
    });
    test('this.clone()', function() {
        const clone = stack.clone();
        assert(stack !== clone);
        assert(typeof clone === 'object');
        assert(clone instanceof Stack);
        assert(stack.empty() === clone.empty());
        assert(stack.length() === clone.length());
        assert(stack._stack.every((val, i) => val === clone._stack[i]));
    });
});

suite('Stack()', function() {
    let stack;
    test('new Stack(nums)', function() {
        stack = new Stack();
    });
    test('this.pop()', function() {
        assert(stack.pop() === undefined);
    });
    test('this.top()', function() {
        assert(stack.top() === undefined);
    });
    test('this.empty()', function() {
        assert(stack.empty() === true);
    });
    test('this.length()', function() {
        assert(stack.length() === 0);
    });
    test('this.push(1)', function() {
        stack.push(1);
    });
    test('this.top()', function() {
        assert(stack.top() === 1);
    });
    test('this.empty()', function() {
        assert(stack.empty() === false);
    });
    test('this.length()', function() {
        assert(stack.length() === 1);
    });
    test('this.pop()', function() {
        assert(stack.pop() === 1);
    });
    test('this.top()', function() {
        assert(stack.top() === undefined);
    });
    test('this.empty()', function() {
        assert(stack.empty() === true);
    });
    test('this.length()', function() {
        assert(stack.length() === 0);
    });
    test('this.push(1)', function() {
        stack.push(1);
    });
    test('this.top()', function() {
        assert(stack.top() === 1);
    });
    test('this.empty()', function() {
        assert(stack.empty() === false);
    });
    test('this.length()', function() {
        assert(stack.length() === 1);
    });
    test('this.push(2)', function() {
        stack.push(2);
    });
    test('this.top()', function() {
        assert(stack.top() === 2);
    });
    test('this.empty()', function() {
        assert(stack.empty() === false);
    });
    test('this.length()', function() {
        assert(stack.length() === 2);
    });
    test('this.push(3)', function() {
        stack.push(3);
    });
    test('this.top()', function() {
        assert(stack.top() === 3);
    });
    test('this.empty()', function() {
        assert(stack.empty() === false);
    });
    test('this.length()', function() {
        assert(stack.length() === 3);
    });
    test('this.push(4)', function() {
        stack.push(4);
    });
    test('this.top()', function() {
        assert(stack.top() === 4);
    });
    test('this.empty()', function() {
        assert(stack.empty() === false);
    });
    test('this.length()', function() {
        assert(stack.length() === 4);
    });
    test('this.pop()', function() {
        assert(stack.pop() === 4);
    });
    test('this.top()', function() {
        assert(stack.top() === 3);
    });
    test('this.empty()', function() {
        assert(stack.empty() === false);
    });
    test('this.length()', function() {
        assert(stack.length() === 3);
    });
    test('this.push(5)', function() {
        stack.push(5);
    });
    test('this.top()', function() {
        assert(stack.top() === 5);
    });
    test('this.empty()', function() {
        assert(stack.empty() === false);
    });
    test('this.length()', function() {
        assert(stack.length() === 4);
    });
    test('this.clone()', function() {
        const clone = stack.clone();
        assert(stack !== clone);
        assert(typeof clone === 'object');
        assert(clone instanceof Stack);
        assert(stack.empty() === clone.empty());
        assert(stack.length() === clone.length());
        assert(stack._stack.every((val, i) => val === clone._stack[i]));
    });
});
