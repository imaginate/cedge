/**
 * Cedge
 * @file The unit tests for the *AVL* class.
 * @version 1.1.0
 * @see [Cedge](https://github.com/imaginate/cedge)
 *
 * @author Adam Smith <imagineadamsmith@gmail.com> (https://github.com/imaginate)
 * @copyright 2022 Adam A Smith <imagineadamsmith@gmail.com> (https://github.com/imaginate)
 */

const AVL = require('../src/avl.js');
const assert = require('assert');
const isArray = Array.isArray;

suite('AVL(nums)', function() {
    let avl;
    test('new AVL([1,2,3,4,4,4,5,6,8,9,9,9])', function() {
        avl = new AVL([1,2,3,4,4,4,5,6,8,9,9,9]);
    });
    test('this.empty()', function() {
        assert(avl.empty() === false);
    });
    test('this.length()', function() {
        assert(avl.length() === 12);
    });
    test('this.has(0)', function() {
        assert(avl.has(0) === false);
    });
    test('this.count(0)', function() {
        assert(avl.count(0) === 0);
    });
    test('this.next(0)', function() {
        assert(avl.next(0) === 1);
    });
    test('this.previous(0)', function() {
        assert(avl.previous(0) === undefined);
    });
    test('this.has(1)', function() {
        assert(avl.has(1) === true);
    });
    test('this.count(1)', function() {
        assert(avl.count(1) === 1);
    });
    test('this.next(1)', function() {
        assert(avl.next(1) === 2);
    });
    test('this.previous(1)', function() {
        assert(avl.previous(1) === undefined);
    });
    test('this.has(3)', function() {
        assert(avl.has(3) === true);
    });
    test('this.count(3)', function() {
        assert(avl.count(3) === 1);
    });
    test('this.next(3)', function() {
        assert(avl.next(3) === 4);
    });
    test('this.previous(3)', function() {
        assert(avl.previous(3) === 2);
    });
    test('this.has(4)', function() {
        assert(avl.has(4) === true);
    });
    test('this.count(4)', function() {
        assert(avl.count(4) === 3);
    });
    test('this.next(4)', function() {
        assert(avl.next(4) === 5);
    });
    test('this.previous(4)', function() {
        assert(avl.previous(4) === 3);
    });
    test('this.has(7)', function() {
        assert(avl.has(7) === false);
    });
    test('this.count(7)', function() {
        assert(avl.count(7) === 0);
    });
    test('this.next(7)', function() {
        assert(avl.next(7) === 8);
    });
    test('this.previous(7)', function() {
        assert(avl.previous(7) === 6);
    });
    test('this.has(8)', function() {
        assert(avl.has(8) === true);
    });
    test('this.count(8)', function() {
        assert(avl.count(8) === 1);
    });
    test('this.next(8)', function() {
        assert(avl.next(8) === 9);
    });
    test('this.previous(8)', function() {
        assert(avl.previous(8) === 6);
    });
    test('this.has(9)', function() {
        assert(avl.has(9) === true);
    });
    test('this.count(9)', function() {
        assert(avl.count(9) === 3);
    });
    test('this.next(9)', function() {
        assert(avl.next(9) === undefined);
    });
    test('this.previous(9)', function() {
        assert(avl.previous(9) === 8);
    });
    test('this.has(10)', function() {
        assert(avl.has(10) === false);
    });
    test('this.count(10)', function() {
        assert(avl.count(10) === 0);
    });
    test('this.next(10)', function() {
        assert(avl.next(10) === undefined);
    });
    test('this.previous(10)', function() {
        assert(avl.previous(10) === 9);
    });
    test('this.inorder()', function() {
        const nums = [1,2,3,4,4,4,5,6,8,9,9,9];
        const result = avl.inorder();
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.inorder(false)', function() {
        const nums = [1,2,3,4,5,6,8,9];
        const result = avl.inorder(false);
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.postorder()', function() {
        const nums = [1,3,2,5,9,9,9,8,6,4,4,4];
        const result = avl.postorder();
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.postorder(false)', function() {
        const nums = [1,3,2,5,9,8,6,4];
        const result = avl.postorder(false);
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.preorder()', function() {
        const nums = [4,4,4,2,1,3,6,5,8,9,9,9];
        const result = avl.preorder();
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.preorder(false)', function() {
        const nums = [4,2,1,3,6,5,8,9];
        const result = avl.preorder(false);
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.delete(0)', function() {
        assert(avl.delete(0) === false);
    });
    test('this.empty()', function() {
        assert(avl.empty() === false);
    });
    test('this.length()', function() {
        assert(avl.length() === 12);
    });
    test('this.delete(1)', function() {
        assert(avl.delete(1) === true);
    });
    test('this.length()', function() {
        assert(avl.length() === 11);
    });
    test('this.has(1)', function() {
        assert(avl.has(1) === false);
    });
    test('this.count(1)', function() {
        assert(avl.count(1) === 0);
    });
    test('this.inorder()', function() {
        const nums = [2,3,4,4,4,5,6,8,9,9,9];
        const result = avl.inorder();
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.inorder(false)', function() {
        const nums = [2,3,4,5,6,8,9];
        const result = avl.inorder(false);
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.postorder()', function() {
        const nums = [3,2,5,9,9,9,8,6,4,4,4];
        const result = avl.postorder();
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.postorder(false)', function() {
        const nums = [3,2,5,9,8,6,4];
        const result = avl.postorder(false);
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.preorder()', function() {
        const nums = [4,4,4,2,3,6,5,8,9,9,9];
        const result = avl.preorder();
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.preorder(false)', function() {
        const nums = [4,2,3,6,5,8,9];
        const result = avl.preorder(false);
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.add(1)', function() {
        avl.add(1);
    });
    test('this.empty()', function() {
        assert(avl.empty() === false);
    });
    test('this.length()', function() {
        assert(avl.length() === 12);
    });
    test('this.has(1)', function() {
        assert(avl.has(1) === true);
    });
    test('this.count(1)', function() {
        assert(avl.count(1) === 1);
    });
    test('this.inorder()', function() {
        const nums = [1,2,3,4,4,4,5,6,8,9,9,9];
        const result = avl.inorder();
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.inorder(false)', function() {
        const nums = [1,2,3,4,5,6,8,9];
        const result = avl.inorder(false);
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.postorder()', function() {
        const nums = [1,3,2,5,9,9,9,8,6,4,4,4];
        const result = avl.postorder();
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.postorder(false)', function() {
        const nums = [1,3,2,5,9,8,6,4];
        const result = avl.postorder(false);
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.preorder()', function() {
        const nums = [4,4,4,2,1,3,6,5,8,9,9,9];
        const result = avl.preorder();
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.preorder(false)', function() {
        const nums = [4,2,1,3,6,5,8,9];
        const result = avl.preorder(false);
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.delete(9)', function() {
        assert(avl.delete(9) === true);
    });
    test('this.empty()', function() {
        assert(avl.empty() === false);
    });
    test('this.length()', function() {
        assert(avl.length() === 11);
    });
    test('this.has(9)', function() {
        assert(avl.has(9) === true);
    });
    test('this.count(9)', function() {
        assert(avl.count(9) === 2);
    });
    test('this.inorder()', function() {
        const nums = [1,2,3,4,4,4,5,6,8,9,9];
        const result = avl.inorder();
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.inorder(false)', function() {
        const nums = [1,2,3,4,5,6,8,9];
        const result = avl.inorder(false);
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.postorder()', function() {
        const nums = [1,3,2,5,9,9,8,6,4,4,4];
        const result = avl.postorder();
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.postorder(false)', function() {
        const nums = [1,3,2,5,9,8,6,4];
        const result = avl.postorder(false);
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.preorder()', function() {
        const nums = [4,4,4,2,1,3,6,5,8,9,9];
        const result = avl.preorder();
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.preorder(false)', function() {
        const nums = [4,2,1,3,6,5,8,9];
        const result = avl.preorder(false);
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.delete(9, true)', function() {
        assert(avl.delete(9, true) === true);
    });
    test('this.empty()', function() {
        assert(avl.empty() === false);
    });
    test('this.length()', function() {
        assert(avl.length() === 9);
    });
    test('this.has(9)', function() {
        assert(avl.has(9) === false);
    });
    test('this.count(9)', function() {
        assert(avl.count(9) === 0);
    });
    test('this.inorder()', function() {
        const nums = [1,2,3,4,4,4,5,6,8];
        const result = avl.inorder();
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.inorder(false)', function() {
        const nums = [1,2,3,4,5,6,8];
        const result = avl.inorder(false);
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.postorder()', function() {
        const nums = [1,3,2,5,8,6,4,4,4];
        const result = avl.postorder();
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.postorder(false)', function() {
        const nums = [1,3,2,5,8,6,4];
        const result = avl.postorder(false);
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.preorder()', function() {
        const nums = [4,4,4,2,1,3,6,5,8];
        const result = avl.preorder();
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.preorder(false)', function() {
        const nums = [4,2,1,3,6,5,8];
        const result = avl.preorder(false);
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.add(7)', function() {
        avl.add(7);
    });
    test('this.empty()', function() {
        assert(avl.empty() === false);
    });
    test('this.length()', function() {
        assert(avl.length() === 10);
    });
    test('this.has(7)', function() {
        assert(avl.has(7) === true);
    });
    test('this.count(7)', function() {
        assert(avl.count(7) === 1);
    });
    test('this.inorder()', function() {
        const nums = [1,2,3,4,4,4,5,6,7,8];
        const result = avl.inorder();
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.inorder(false)', function() {
        const nums = [1,2,3,4,5,6,7,8];
        const result = avl.inorder(false);
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.postorder()', function() {
        const nums = [1,3,2,5,7,8,6,4,4,4];
        const result = avl.postorder();
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.postorder(false)', function() {
        const nums = [1,3,2,5,7,8,6,4];
        const result = avl.postorder(false);
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.preorder()', function() {
        const nums = [4,4,4,2,1,3,6,5,8,7];
        const result = avl.preorder();
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.preorder(false)', function() {
        const nums = [4,2,1,3,6,5,8,7];
        const result = avl.preorder(false);
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.delete(4)', function() {
        assert(avl.delete(4) === true);
    });
    test('this.empty()', function() {
        assert(avl.empty() === false);
    });
    test('this.length()', function() {
        assert(avl.length() === 9);
    });
    test('this.has(4)', function() {
        assert(avl.has(4) === true);
    });
    test('this.count(4)', function() {
        assert(avl.count(4) === 2);
    });
    test('this.inorder()', function() {
        const nums = [1,2,3,4,4,5,6,7,8];
        const result = avl.inorder();
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.inorder(false)', function() {
        const nums = [1,2,3,4,5,6,7,8];
        const result = avl.inorder(false);
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.postorder()', function() {
        const nums = [1,3,2,5,7,8,6,4,4];
        const result = avl.postorder();
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.postorder(false)', function() {
        const nums = [1,3,2,5,7,8,6,4];
        const result = avl.postorder(false);
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.preorder()', function() {
        const nums = [4,4,2,1,3,6,5,8,7];
        const result = avl.preorder();
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.preorder(false)', function() {
        const nums = [4,2,1,3,6,5,8,7];
        const result = avl.preorder(false);
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.delete(4, true)', function() {
        assert(avl.delete(4, true) === true);
    });
    test('this.empty()', function() {
        assert(avl.empty() === false);
    });
    test('this.length()', function() {
        assert(avl.length() === 7);
    });
    test('this.has(4)', function() {
        assert(avl.has(4) === false);
    });
    test('this.count(4)', function() {
        assert(avl.count(4) === 0);
    });
    test('this.inorder()', function() {
        const nums = [1,2,3,5,6,7,8];
        const result = avl.inorder();
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.inorder(false)', function() {
        const nums = [1,2,3,5,6,7,8];
        const result = avl.inorder(false);
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.postorder()', function() {
        const nums = [1,3,2,6,8,7,5];
        const result = avl.postorder();
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.postorder(false)', function() {
        const nums = [1,3,2,6,8,7,5];
        const result = avl.postorder(false);
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.preorder()', function() {
        const nums = [5,2,1,3,7,6,8];
        const result = avl.preorder();
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.preorder(false)', function() {
        const nums = [5,2,1,3,7,6,8];
        const result = avl.preorder(false);
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.add(9)', function() {
        avl.add(9);
    });
    test('this.empty()', function() {
        assert(avl.empty() === false);
    });
    test('this.length()', function() {
        assert(avl.length() === 8);
    });
    test('this.has(9)', function() {
        assert(avl.has(9) === true);
    });
    test('this.count(9)', function() {
        assert(avl.count(9) === 1);
    });
    test('this.inorder()', function() {
        const nums = [1,2,3,5,6,7,8,9];
        const result = avl.inorder();
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.inorder(false)', function() {
        const nums = [1,2,3,5,6,7,8,9];
        const result = avl.inorder(false);
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.postorder()', function() {
        const nums = [1,3,2,6,9,8,7,5];
        const result = avl.postorder();
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.postorder(false)', function() {
        const nums = [1,3,2,6,9,8,7,5];
        const result = avl.postorder(false);
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.preorder()', function() {
        const nums = [5,2,1,3,7,6,8,9];
        const result = avl.preorder();
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.preorder(false)', function() {
        const nums = [5,2,1,3,7,6,8,9];
        const result = avl.preorder(false);
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.add(9)', function() {
        avl.add(9);
    });
    test('this.empty()', function() {
        assert(avl.empty() === false);
    });
    test('this.length()', function() {
        assert(avl.length() === 9);
    });
    test('this.has(9)', function() {
        assert(avl.has(9) === true);
    });
    test('this.count(9)', function() {
        assert(avl.count(9) === 2);
    });
    test('this.inorder()', function() {
        const nums = [1,2,3,5,6,7,8,9,9];
        const result = avl.inorder();
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.inorder(false)', function() {
        const nums = [1,2,3,5,6,7,8,9];
        const result = avl.inorder(false);
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.postorder()', function() {
        const nums = [1,3,2,6,9,9,8,7,5];
        const result = avl.postorder();
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.postorder(false)', function() {
        const nums = [1,3,2,6,9,8,7,5];
        const result = avl.postorder(false);
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.preorder()', function() {
        const nums = [5,2,1,3,7,6,8,9,9];
        const result = avl.preorder();
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.preorder(false)', function() {
        const nums = [5,2,1,3,7,6,8,9];
        const result = avl.preorder(false);
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.add(10)', function() {
        avl.add(10);
    });
    test('this.empty()', function() {
        assert(avl.empty() === false);
    });
    test('this.length()', function() {
        assert(avl.length() === 10);
    });
    test('this.has(10)', function() {
        assert(avl.has(10) === true);
    });
    test('this.count(10)', function() {
        assert(avl.count(10) === 1);
    });
    test('this.inorder()', function() {
        const nums = [1,2,3,5,6,7,8,9,9,10];
        const result = avl.inorder();
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.inorder(false)', function() {
        const nums = [1,2,3,5,6,7,8,9,10];
        const result = avl.inorder(false);
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.postorder()', function() {
        const nums = [1,3,2,6,8,10,9,9,7,5];
        const result = avl.postorder();
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.postorder(false)', function() {
        const nums = [1,3,2,6,8,10,9,7,5];
        const result = avl.postorder(false);
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.preorder()', function() {
        const nums = [5,2,1,3,7,6,9,9,8,10];
        const result = avl.preorder();
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.preorder(false)', function() {
        const nums = [5,2,1,3,7,6,9,8,10];
        const result = avl.preorder(false);
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.clone()', function() {
        const clone = avl.clone();
        assert(avl !== clone);
        assert(typeof clone === 'object');
        assert(clone instanceof AVL);
        assert(avl.compare === clone.compare);
        assert(avl.empty() === clone.empty());
        assert(avl.length() === clone.length());
        verifyClonedNode(avl._root, clone._root);
    });
});

suite('AVL(nums, "number")', function() {
    let avl;
    test('new AVL([3,2,8,1,6,9,5,7,10], "number")', function() {
        avl = new AVL([3,2,8,1,6,9,5,7,10], 'number');
    });
    test('this.empty()', function() {
        assert(avl.empty() === false);
    });
    test('this.length()', function() {
        assert(avl.length() === 9);
    });
    test('this.has(0)', function() {
        assert(avl.has(0) === false);
    });
    test('this.count(0)', function() {
        assert(avl.count(0) === 0);
    });
    test('this.has(1)', function() {
        assert(avl.has(1) === true);
    });
    test('this.count(1)', function() {
        assert(avl.count(1) === 1);
    });
    test('this.inorder()', function() {
        const nums = [1,2,3,5,6,7,8,9,10];
        const result = avl.inorder();
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.inorder(false)', function() {
        const nums = [1,2,3,5,6,7,8,9,10];
        const result = avl.inorder(false);
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.postorder()', function() {
        const nums = [1,2,5,7,6,10,9,8,3];
        const result = avl.postorder();
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.postorder(false)', function() {
        const nums = [1,2,5,7,6,10,9,8,3];
        const result = avl.postorder(false);
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.preorder()', function() {
        const nums = [3,2,1,8,6,5,7,9,10];
        const result = avl.preorder();
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.preorder(false)', function() {
        const nums = [3,2,1,8,6,5,7,9,10];
        const result = avl.preorder(false);
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.add(4)', function() {
        avl.add(4);
    });
    test('this.empty()', function() {
        assert(avl.empty() === false);
    });
    test('this.length()', function() {
        assert(avl.length() === 10);
    });
    test('this.has(4)', function() {
        assert(avl.has(4) === true);
    });
    test('this.count(4)', function() {
        assert(avl.count(4) === 1);
    });
    test('this.inorder()', function() {
        const nums = [1,2,3,4,5,6,7,8,9,10];
        const result = avl.inorder();
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.inorder(false)', function() {
        const nums = [1,2,3,4,5,6,7,8,9,10];
        const result = avl.inorder(false);
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.postorder()', function() {
        const nums = [1,2,4,5,3,7,10,9,8,6];
        const result = avl.postorder();
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.postorder(false)', function() {
        const nums = [1,2,4,5,3,7,10,9,8,6];
        const result = avl.postorder(false);
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.preorder()', function() {
        const nums = [6,3,2,1,5,4,8,7,9,10];
        const result = avl.preorder();
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.preorder(false)', function() {
        const nums = [6,3,2,1,5,4,8,7,9,10];
        const result = avl.preorder(false);
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.clone()', function() {
        const clone = avl.clone();
        assert(avl !== clone);
        assert(typeof clone === 'object');
        assert(clone instanceof AVL);
        assert(avl.compare === clone.compare);
        assert(avl.empty() === clone.empty());
        assert(avl.length() === clone.length());
        verifyClonedNode(avl._root, clone._root);
    });
    test('new AVL([8,3,9,2,5,10,1,4,6], "number")', function() {
        avl = new AVL([8,3,9,2,5,10,1,4,6], 'number');
    });
    test('this.empty()', function() {
        assert(avl.empty() === false);
    });
    test('this.length()', function() {
        assert(avl.length() === 9);
    });
    test('this.has(0)', function() {
        assert(avl.has(0) === false);
    });
    test('this.count(0)', function() {
        assert(avl.count(0) === 0);
    });
    test('this.has(1)', function() {
        assert(avl.has(1) === true);
    });
    test('this.count(1)', function() {
        assert(avl.count(1) === 1);
    });
    test('this.inorder()', function() {
        const nums = [1,2,3,4,5,6,8,9,10];
        const result = avl.inorder();
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.inorder(false)', function() {
        const nums = [1,2,3,4,5,6,8,9,10];
        const result = avl.inorder(false);
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.postorder()', function() {
        const nums = [1,2,4,6,5,3,10,9,8];
        const result = avl.postorder();
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.postorder(false)', function() {
        const nums = [1,2,4,6,5,3,10,9,8];
        const result = avl.postorder(false);
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.preorder()', function() {
        const nums = [8,3,2,1,5,4,6,9,10];
        const result = avl.preorder();
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.preorder(false)', function() {
        const nums = [8,3,2,1,5,4,6,9,10];
        const result = avl.preorder(false);
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.add(7)', function() {
        avl.add(7);
    });
    test('this.empty()', function() {
        assert(avl.empty() === false);
    });
    test('this.length()', function() {
        assert(avl.length() === 10);
    });
    test('this.has(7)', function() {
        assert(avl.has(7) === true);
    });
    test('this.count(7)', function() {
        assert(avl.count(7) === 1);
    });
    test('this.inorder()', function() {
        const nums = [1,2,3,4,5,6,7,8,9,10];
        const result = avl.inorder();
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.inorder(false)', function() {
        const nums = [1,2,3,4,5,6,7,8,9,10];
        const result = avl.inorder(false);
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.postorder()', function() {
        const nums = [1,2,4,3,7,6,10,9,8,5];
        const result = avl.postorder();
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.postorder(false)', function() {
        const nums = [1,2,4,3,7,6,10,9,8,5];
        const result = avl.postorder(false);
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.preorder()', function() {
        const nums = [5,3,2,1,4,8,6,7,9,10];
        const result = avl.preorder();
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.preorder(false)', function() {
        const nums = [5,3,2,1,4,8,6,7,9,10];
        const result = avl.preorder(false);
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.clone()', function() {
        const clone = avl.clone();
        assert(avl !== clone);
        assert(typeof clone === 'object');
        assert(clone instanceof AVL);
        assert(avl.compare === clone.compare);
        assert(avl.empty() === clone.empty());
        assert(avl.length() === clone.length());
        verifyClonedNode(avl._root, clone._root);
    });
    test('new AVL([3,2,8,1,5,9,4,7,10], "number")', function() {
        avl = new AVL([3,2,8,1,5,9,4,7,10], 'number');
    });
    test('this.empty()', function() {
        assert(avl.empty() === false);
    });
    test('this.length()', function() {
        assert(avl.length() === 9);
    });
    test('this.has(0)', function() {
        assert(avl.has(0) === false);
    });
    test('this.count(0)', function() {
        assert(avl.count(0) === 0);
    });
    test('this.has(1)', function() {
        assert(avl.has(1) === true);
    });
    test('this.count(1)', function() {
        assert(avl.count(1) === 1);
    });
    test('this.inorder()', function() {
        const nums = [1,2,3,4,5,7,8,9,10];
        const result = avl.inorder();
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.inorder(false)', function() {
        const nums = [1,2,3,4,5,7,8,9,10];
        const result = avl.inorder(false);
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.postorder()', function() {
        const nums = [1,2,4,7,5,10,9,8,3];
        const result = avl.postorder();
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.postorder(false)', function() {
        const nums = [1,2,4,7,5,10,9,8,3];
        const result = avl.postorder(false);
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.preorder()', function() {
        const nums = [3,2,1,8,5,4,7,9,10];
        const result = avl.preorder();
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.preorder(false)', function() {
        const nums = [3,2,1,8,5,4,7,9,10];
        const result = avl.preorder(false);
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.add(6)', function() {
        avl.add(6);
    });
    test('this.empty()', function() {
        assert(avl.empty() === false);
    });
    test('this.length()', function() {
        assert(avl.length() === 10);
    });
    test('this.has(6)', function() {
        assert(avl.has(6) === true);
    });
    test('this.count(6)', function() {
        assert(avl.count(6) === 1);
    });
    test('this.inorder()', function() {
        const nums = [1,2,3,4,5,6,7,8,9,10];
        const result = avl.inorder();
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.inorder(false)', function() {
        const nums = [1,2,3,4,5,6,7,8,9,10];
        const result = avl.inorder(false);
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.postorder()', function() {
        const nums = [1,2,4,3,6,7,10,9,8,5];
        const result = avl.postorder();
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.postorder(false)', function() {
        const nums = [1,2,4,3,6,7,10,9,8,5];
        const result = avl.postorder(false);
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.preorder()', function() {
        const nums = [5,3,2,1,4,8,7,6,9,10];
        const result = avl.preorder();
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.preorder(false)', function() {
        const nums = [5,3,2,1,4,8,7,6,9,10];
        const result = avl.preorder(false);
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.clone()', function() {
        const clone = avl.clone();
        assert(avl !== clone);
        assert(typeof clone === 'object');
        assert(clone instanceof AVL);
        assert(avl.compare === clone.compare);
        assert(avl.empty() === clone.empty());
        assert(avl.length() === clone.length());
        verifyClonedNode(avl._root, clone._root);
    });
    test('new AVL([8,3,9,2,6,10,1,5,7], "number")', function() {
        avl = new AVL([8,3,9,2,6,10,1,5,7], 'number');
    });
    test('this.empty()', function() {
        assert(avl.empty() === false);
    });
    test('this.length()', function() {
        assert(avl.length() === 9);
    });
    test('this.has(0)', function() {
        assert(avl.has(0) === false);
    });
    test('this.count(0)', function() {
        assert(avl.count(0) === 0);
    });
    test('this.has(1)', function() {
        assert(avl.has(1) === true);
    });
    test('this.count(1)', function() {
        assert(avl.count(1) === 1);
    });
    test('this.inorder()', function() {
        const nums = [1,2,3,5,6,7,8,9,10];
        const result = avl.inorder();
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.inorder(false)', function() {
        const nums = [1,2,3,5,6,7,8,9,10];
        const result = avl.inorder(false);
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.postorder()', function() {
        const nums = [1,2,5,7,6,3,10,9,8];
        const result = avl.postorder();
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.postorder(false)', function() {
        const nums = [1,2,5,7,6,3,10,9,8];
        const result = avl.postorder(false);
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.preorder()', function() {
        const nums = [8,3,2,1,6,5,7,9,10];
        const result = avl.preorder();
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.preorder(false)', function() {
        const nums = [8,3,2,1,6,5,7,9,10];
        const result = avl.preorder(false);
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.add(4)', function() {
        avl.add(4);
    });
    test('this.empty()', function() {
        assert(avl.empty() === false);
    });
    test('this.length()', function() {
        assert(avl.length() === 10);
    });
    test('this.has(4)', function() {
        assert(avl.has(4) === true);
    });
    test('this.count(4)', function() {
        assert(avl.count(4) === 1);
    });
    test('this.inorder()', function() {
        const nums = [1,2,3,4,5,6,7,8,9,10];
        const result = avl.inorder();
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.inorder(false)', function() {
        const nums = [1,2,3,4,5,6,7,8,9,10];
        const result = avl.inorder(false);
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.postorder()', function() {
        const nums = [1,2,4,5,3,7,10,9,8,6];
        const result = avl.postorder();
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.postorder(false)', function() {
        const nums = [1,2,4,5,3,7,10,9,8,6];
        const result = avl.postorder(false);
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.preorder()', function() {
        const nums = [6,3,2,1,5,4,8,7,9,10];
        const result = avl.preorder();
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.preorder(false)', function() {
        const nums = [6,3,2,1,5,4,8,7,9,10];
        const result = avl.preorder(false);
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.clone()', function() {
        const clone = avl.clone();
        assert(avl !== clone);
        assert(typeof clone === 'object');
        assert(clone instanceof AVL);
        assert(avl.compare === clone.compare);
        assert(avl.empty() === clone.empty());
        assert(avl.length() === clone.length());
        verifyClonedNode(avl._root, clone._root);
    });
    test('new AVL([3,2,4,1], "number")', function() {
        avl = new AVL([3,2,4,1], 'number');
    });
    test('this.empty()', function() {
        assert(avl.empty() === false);
    });
    test('this.length()', function() {
        assert(avl.length() === 4);
    });
    test('this.has(0)', function() {
        assert(avl.has(0) === false);
    });
    test('this.count(0)', function() {
        assert(avl.count(0) === 0);
    });
    test('this.has(1)', function() {
        assert(avl.has(1) === true);
    });
    test('this.count(1)', function() {
        assert(avl.count(1) === 1);
    });
    test('this.inorder()', function() {
        const nums = [1,2,3,4];
        const result = avl.inorder();
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.inorder(false)', function() {
        const nums = [1,2,3,4];
        const result = avl.inorder(false);
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.postorder()', function() {
        const nums = [1,2,4,3];
        const result = avl.postorder();
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.postorder(false)', function() {
        const nums = [1,2,4,3];
        const result = avl.postorder(false);
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.preorder()', function() {
        const nums = [3,2,1,4];
        const result = avl.preorder();
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.preorder(false)', function() {
        const nums = [3,2,1,4];
        const result = avl.preorder(false);
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.delete(3)', function() {
        assert(avl.delete(3) === true);
    });
    test('this.empty()', function() {
        assert(avl.empty() === false);
    });
    test('this.length()', function() {
        assert(avl.length() === 3);
    });
    test('this.has(1)', function() {
        assert(avl.has(1) === true);
    });
    test('this.count(1)', function() {
        assert(avl.count(1) === 1);
    });
    test('this.inorder()', function() {
        const nums = [1,2,4];
        const result = avl.inorder();
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.inorder(false)', function() {
        const nums = [1,2,4];
        const result = avl.inorder(false);
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.postorder()', function() {
        const nums = [1,4,2];
        const result = avl.postorder();
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.postorder(false)', function() {
        const nums = [1,4,2];
        const result = avl.postorder(false);
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.preorder()', function() {
        const nums = [2,1,4];
        const result = avl.preorder();
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.preorder(false)', function() {
        const nums = [2,1,4];
        const result = avl.preorder(false);
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.clone()', function() {
        const clone = avl.clone();
        assert(avl !== clone);
        assert(typeof clone === 'object');
        assert(clone instanceof AVL);
        assert(avl.compare === clone.compare);
        assert(avl.empty() === clone.empty());
        assert(avl.length() === clone.length());
        verifyClonedNode(avl._root, clone._root);
    });
    test('new AVL([2,1,3,4], "number")', function() {
        avl = new AVL([2,1,3,4], 'number');
    });
    test('this.empty()', function() {
        assert(avl.empty() === false);
    });
    test('this.length()', function() {
        assert(avl.length() === 4);
    });
    test('this.has(0)', function() {
        assert(avl.has(0) === false);
    });
    test('this.count(0)', function() {
        assert(avl.count(0) === 0);
    });
    test('this.has(1)', function() {
        assert(avl.has(1) === true);
    });
    test('this.count(1)', function() {
        assert(avl.count(1) === 1);
    });
    test('this.inorder()', function() {
        const nums = [1,2,3,4];
        const result = avl.inorder();
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.inorder(false)', function() {
        const nums = [1,2,3,4];
        const result = avl.inorder(false);
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.postorder()', function() {
        const nums = [1,4,3,2];
        const result = avl.postorder();
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.postorder(false)', function() {
        const nums = [1,4,3,2];
        const result = avl.postorder(false);
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.preorder()', function() {
        const nums = [2,1,3,4];
        const result = avl.preorder();
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.preorder(false)', function() {
        const nums = [2,1,3,4];
        const result = avl.preorder(false);
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.delete(2)', function() {
        assert(avl.delete(2) === true);
    });
    test('this.empty()', function() {
        assert(avl.empty() === false);
    });
    test('this.length()', function() {
        assert(avl.length() === 3);
    });
    test('this.has(1)', function() {
        assert(avl.has(1) === true);
    });
    test('this.count(1)', function() {
        assert(avl.count(1) === 1);
    });
    test('this.inorder()', function() {
        const nums = [1,3,4];
        const result = avl.inorder();
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.inorder(false)', function() {
        const nums = [1,3,4];
        const result = avl.inorder(false);
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.postorder()', function() {
        const nums = [1,4,3];
        const result = avl.postorder();
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.postorder(false)', function() {
        const nums = [1,4,3];
        const result = avl.postorder(false);
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.preorder()', function() {
        const nums = [3,1,4];
        const result = avl.preorder();
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.preorder(false)', function() {
        const nums = [3,1,4];
        const result = avl.preorder(false);
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.clone()', function() {
        const clone = avl.clone();
        assert(avl !== clone);
        assert(typeof clone === 'object');
        assert(clone instanceof AVL);
        assert(avl.compare === clone.compare);
        assert(avl.empty() === clone.empty());
        assert(avl.length() === clone.length());
        verifyClonedNode(avl._root, clone._root);
    });
    test('new AVL([2,1,4,3,5], "number")', function() {
        avl = new AVL([2,1,4,3,5], 'number');
    });
    test('this.empty()', function() {
        assert(avl.empty() === false);
    });
    test('this.length()', function() {
        assert(avl.length() === 5);
    });
    test('this.has(0)', function() {
        assert(avl.has(0) === false);
    });
    test('this.count(0)', function() {
        assert(avl.count(0) === 0);
    });
    test('this.has(1)', function() {
        assert(avl.has(1) === true);
    });
    test('this.count(1)', function() {
        assert(avl.count(1) === 1);
    });
    test('this.inorder()', function() {
        const nums = [1,2,3,4,5];
        const result = avl.inorder();
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.inorder(false)', function() {
        const nums = [1,2,3,4,5];
        const result = avl.inorder(false);
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.postorder()', function() {
        const nums = [1,3,5,4,2];
        const result = avl.postorder();
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.postorder(false)', function() {
        const nums = [1,3,5,4,2];
        const result = avl.postorder(false);
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.preorder()', function() {
        const nums = [2,1,4,3,5];
        const result = avl.preorder();
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.preorder(false)', function() {
        const nums = [2,1,4,3,5];
        const result = avl.preorder(false);
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.delete(1)', function() {
        assert(avl.delete(1) === true);
    });
    test('this.empty()', function() {
        assert(avl.empty() === false);
    });
    test('this.length()', function() {
        assert(avl.length() === 4);
    });
    test('this.has(1)', function() {
        assert(avl.has(1) === false);
    });
    test('this.count(1)', function() {
        assert(avl.count(1) === 0);
    });
    test('this.inorder()', function() {
        const nums = [2,3,4,5];
        const result = avl.inorder();
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.inorder(false)', function() {
        const nums = [2,3,4,5];
        const result = avl.inorder(false);
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.postorder()', function() {
        const nums = [3,2,5,4];
        const result = avl.postorder();
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.postorder(false)', function() {
        const nums = [3,2,5,4];
        const result = avl.postorder(false);
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.preorder()', function() {
        const nums = [4,2,3,5];
        const result = avl.preorder();
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.preorder(false)', function() {
        const nums = [4,2,3,5];
        const result = avl.preorder(false);
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.clone()', function() {
        const clone = avl.clone();
        assert(avl !== clone);
        assert(typeof clone === 'object');
        assert(clone instanceof AVL);
        assert(avl.compare === clone.compare);
        assert(avl.empty() === clone.empty());
        assert(avl.length() === clone.length());
        verifyClonedNode(avl._root, clone._root);
    });
    test('new AVL([4,2,5,1,3], "number")', function() {
        avl = new AVL([4,2,5,1,3], 'number');
    });
    test('this.empty()', function() {
        assert(avl.empty() === false);
    });
    test('this.length()', function() {
        assert(avl.length() === 5);
    });
    test('this.has(0)', function() {
        assert(avl.has(0) === false);
    });
    test('this.count(0)', function() {
        assert(avl.count(0) === 0);
    });
    test('this.has(1)', function() {
        assert(avl.has(1) === true);
    });
    test('this.count(1)', function() {
        assert(avl.count(1) === 1);
    });
    test('this.inorder()', function() {
        const nums = [1,2,3,4,5];
        const result = avl.inorder();
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.inorder(false)', function() {
        const nums = [1,2,3,4,5];
        const result = avl.inorder(false);
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.postorder()', function() {
        const nums = [1,3,2,5,4];
        const result = avl.postorder();
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.postorder(false)', function() {
        const nums = [1,3,2,5,4];
        const result = avl.postorder(false);
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.preorder()', function() {
        const nums = [4,2,1,3,5];
        const result = avl.preorder();
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.preorder(false)', function() {
        const nums = [4,2,1,3,5];
        const result = avl.preorder(false);
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.delete(5)', function() {
        assert(avl.delete(5) === true);
    });
    test('this.empty()', function() {
        assert(avl.empty() === false);
    });
    test('this.length()', function() {
        assert(avl.length() === 4);
    });
    test('this.has(5)', function() {
        assert(avl.has(5) === false);
    });
    test('this.count(5)', function() {
        assert(avl.count(5) === 0);
    });
    test('this.inorder()', function() {
        const nums = [1,2,3,4];
        const result = avl.inorder();
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.inorder(false)', function() {
        const nums = [1,2,3,4];
        const result = avl.inorder(false);
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.postorder()', function() {
        const nums = [1,3,4,2];
        const result = avl.postorder();
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.postorder(false)', function() {
        const nums = [1,3,4,2];
        const result = avl.postorder(false);
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.preorder()', function() {
        const nums = [2,1,4,3];
        const result = avl.preorder();
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.preorder(false)', function() {
        const nums = [2,1,4,3];
        const result = avl.preorder(false);
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.clone()', function() {
        const clone = avl.clone();
        assert(avl !== clone);
        assert(typeof clone === 'object');
        assert(clone instanceof AVL);
        assert(avl.compare === clone.compare);
        assert(avl.empty() === clone.empty());
        assert(avl.length() === clone.length());
        verifyClonedNode(avl._root, clone._root);
    });
    test('new AVL([5,3,10,2,4,8,11,1,7,9,12], "number")', function() {
        avl = new AVL([5,3,10,2,4,8,11,1,7,9,12], 'number');
    });
    test('this.empty()', function() {
        assert(avl.empty() === false);
    });
    test('this.length()', function() {
        assert(avl.length() === 11);
    });
    test('this.has(0)', function() {
        assert(avl.has(0) === false);
    });
    test('this.count(0)', function() {
        assert(avl.count(0) === 0);
    });
    test('this.has(1)', function() {
        assert(avl.has(1) === true);
    });
    test('this.count(1)', function() {
        assert(avl.count(1) === 1);
    });
    test('this.inorder()', function() {
        const nums = [1,2,3,4,5,7,8,9,10,11,12];
        const result = avl.inorder();
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.inorder(false)', function() {
        const nums = [1,2,3,4,5,7,8,9,10,11,12];
        const result = avl.inorder(false);
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.postorder()', function() {
        const nums = [1,2,4,3,7,9,8,12,11,10,5];
        const result = avl.postorder();
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.postorder(false)', function() {
        const nums = [1,2,4,3,7,9,8,12,11,10,5];
        const result = avl.postorder(false);
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.preorder()', function() {
        const nums = [5,3,2,1,4,10,8,7,9,11,12];
        const result = avl.preorder();
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.preorder(false)', function() {
        const nums = [5,3,2,1,4,10,8,7,9,11,12];
        const result = avl.preorder(false);
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.delete(1)', function() {
        assert(avl.delete(1) === true);
    });
    test('this.empty()', function() {
        assert(avl.empty() === false);
    });
    test('this.length()', function() {
        assert(avl.length() === 10);
    });
    test('this.has(1)', function() {
        assert(avl.has(1) === false);
    });
    test('this.count(1)', function() {
        assert(avl.count(1) === 0);
    });
    test('this.inorder()', function() {
        const nums = [2,3,4,5,7,8,9,10,11,12];
        const result = avl.inorder();
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.inorder(false)', function() {
        const nums = [2,3,4,5,7,8,9,10,11,12];
        const result = avl.inorder(false);
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.postorder()', function() {
        const nums = [2,4,3,7,9,8,12,11,10,5];
        const result = avl.postorder();
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.postorder(false)', function() {
        const nums = [2,4,3,7,9,8,12,11,10,5];
        const result = avl.postorder(false);
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.preorder()', function() {
        const nums = [5,3,2,4,10,8,7,9,11,12];
        const result = avl.preorder();
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.preorder(false)', function() {
        const nums = [5,3,2,4,10,8,7,9,11,12];
        const result = avl.preorder(false);
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.clone()', function() {
        const clone = avl.clone();
        assert(avl !== clone);
        assert(typeof clone === 'object');
        assert(clone instanceof AVL);
        assert(avl.compare === clone.compare);
        assert(avl.empty() === clone.empty());
        assert(avl.length() === clone.length());
        verifyClonedNode(avl._root, clone._root);
    });
    test('new AVL([8,3,10,2,5,9,11,1,4,6,12], "number")', function() {
        avl = new AVL([8,3,10,2,5,9,11,1,4,6,12], 'number');
    });
    test('this.empty()', function() {
        assert(avl.empty() === false);
    });
    test('this.length()', function() {
        assert(avl.length() === 11);
    });
    test('this.has(0)', function() {
        assert(avl.has(0) === false);
    });
    test('this.count(0)', function() {
        assert(avl.count(0) === 0);
    });
    test('this.has(1)', function() {
        assert(avl.has(1) === true);
    });
    test('this.count(1)', function() {
        assert(avl.count(1) === 1);
    });
    test('this.inorder()', function() {
        const nums = [1,2,3,4,5,6,8,9,10,11,12];
        const result = avl.inorder();
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.inorder(false)', function() {
        const nums = [1,2,3,4,5,6,8,9,10,11,12];
        const result = avl.inorder(false);
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.postorder()', function() {
        const nums = [1,2,4,6,5,3,9,12,11,10,8];
        const result = avl.postorder();
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.postorder(false)', function() {
        const nums = [1,2,4,6,5,3,9,12,11,10,8];
        const result = avl.postorder(false);
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.preorder()', function() {
        const nums = [8,3,2,1,5,4,6,10,9,11,12];
        const result = avl.preorder();
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.preorder(false)', function() {
        const nums = [8,3,2,1,5,4,6,10,9,11,12];
        const result = avl.preorder(false);
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.delete(12)', function() {
        assert(avl.delete(12) === true);
    });
    test('this.empty()', function() {
        assert(avl.empty() === false);
    });
    test('this.length()', function() {
        assert(avl.length() === 10);
    });
    test('this.has(12)', function() {
        assert(avl.has(12) === false);
    });
    test('this.count(12)', function() {
        assert(avl.count(12) === 0);
    });
    test('this.inorder()', function() {
        const nums = [1,2,3,4,5,6,8,9,10,11];
        const result = avl.inorder();
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.inorder(false)', function() {
        const nums = [1,2,3,4,5,6,8,9,10,11];
        const result = avl.inorder(false);
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.postorder()', function() {
        const nums = [1,2,4,6,5,3,9,11,10,8];
        const result = avl.postorder();
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.postorder(false)', function() {
        const nums = [1,2,4,6,5,3,9,11,10,8];
        const result = avl.postorder(false);
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.preorder()', function() {
        const nums = [8,3,2,1,5,4,6,10,9,11];
        const result = avl.preorder();
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.preorder(false)', function() {
        const nums = [8,3,2,1,5,4,6,10,9,11];
        const result = avl.preorder(false);
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.clone()', function() {
        const clone = avl.clone();
        assert(avl !== clone);
        assert(typeof clone === 'object');
        assert(clone instanceof AVL);
        assert(avl.compare === clone.compare);
        assert(avl.empty() === clone.empty());
        assert(avl.length() === clone.length());
        verifyClonedNode(avl._root, clone._root);
    });
    test('new AVL([5,3,10,2,4,8,11,1,7,9,12,6], "number")', function() {
        avl = new AVL([5,3,10,2,4,8,11,1,7,9,12,6], 'number');
    });
    test('this.empty()', function() {
        assert(avl.empty() === false);
    });
    test('this.length()', function() {
        assert(avl.length() === 12);
    });
    test('this.has(0)', function() {
        assert(avl.has(0) === false);
    });
    test('this.count(0)', function() {
        assert(avl.count(0) === 0);
    });
    test('this.has(1)', function() {
        assert(avl.has(1) === true);
    });
    test('this.count(1)', function() {
        assert(avl.count(1) === 1);
    });
    test('this.inorder()', function() {
        const nums = [1,2,3,4,5,6,7,8,9,10,11,12];
        const result = avl.inorder();
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.inorder(false)', function() {
        const nums = [1,2,3,4,5,6,7,8,9,10,11,12];
        const result = avl.inorder(false);
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.postorder()', function() {
        const nums = [1,2,4,3,6,7,9,8,12,11,10,5];
        const result = avl.postorder();
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.postorder(false)', function() {
        const nums = [1,2,4,3,6,7,9,8,12,11,10,5];
        const result = avl.postorder(false);
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.preorder()', function() {
        const nums = [5,3,2,1,4,10,8,7,6,9,11,12];
        const result = avl.preorder();
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.preorder(false)', function() {
        const nums = [5,3,2,1,4,10,8,7,6,9,11,12];
        const result = avl.preorder(false);
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.delete(1)', function() {
        assert(avl.delete(1) === true);
    });
    test('this.empty()', function() {
        assert(avl.empty() === false);
    });
    test('this.length()', function() {
        assert(avl.length() === 11);
    });
    test('this.has(1)', function() {
        assert(avl.has(1) === false);
    });
    test('this.count(1)', function() {
        assert(avl.count(1) === 0);
    });
    test('this.inorder()', function() {
        const nums = [2,3,4,5,6,7,8,9,10,11,12];
        const result = avl.inorder();
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.inorder(false)', function() {
        const nums = [2,3,4,5,6,7,8,9,10,11,12];
        const result = avl.inorder(false);
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.postorder()', function() {
        const nums = [2,4,3,6,7,5,9,12,11,10,8];
        const result = avl.postorder();
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.postorder(false)', function() {
        const nums = [2,4,3,6,7,5,9,12,11,10,8];
        const result = avl.postorder(false);
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.preorder()', function() {
        const nums = [8,5,3,2,4,7,6,10,9,11,12];
        const result = avl.preorder();
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.preorder(false)', function() {
        const nums = [8,5,3,2,4,7,6,10,9,11,12];
        const result = avl.preorder(false);
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.clone()', function() {
        const clone = avl.clone();
        assert(avl !== clone);
        assert(typeof clone === 'object');
        assert(clone instanceof AVL);
        assert(avl.compare === clone.compare);
        assert(avl.empty() === clone.empty());
        assert(avl.length() === clone.length());
        verifyClonedNode(avl._root, clone._root);
    });
    test('new AVL([8,3,10,2,5,9,11,1,4,6,12,7], "number")', function() {
        avl = new AVL([8,3,10,2,5,9,11,1,4,6,12,7], 'number');
    });
    test('this.empty()', function() {
        assert(avl.empty() === false);
    });
    test('this.length()', function() {
        assert(avl.length() === 12);
    });
    test('this.has(0)', function() {
        assert(avl.has(0) === false);
    });
    test('this.count(0)', function() {
        assert(avl.count(0) === 0);
    });
    test('this.has(1)', function() {
        assert(avl.has(1) === true);
    });
    test('this.count(1)', function() {
        assert(avl.count(1) === 1);
    });
    test('this.inorder()', function() {
        const nums = [1,2,3,4,5,6,7,8,9,10,11,12];
        const result = avl.inorder();
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.inorder(false)', function() {
        const nums = [1,2,3,4,5,6,7,8,9,10,11,12];
        const result = avl.inorder(false);
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.postorder()', function() {
        const nums = [1,2,4,7,6,5,3,9,12,11,10,8];
        const result = avl.postorder();
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.postorder(false)', function() {
        const nums = [1,2,4,7,6,5,3,9,12,11,10,8];
        const result = avl.postorder(false);
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.preorder()', function() {
        const nums = [8,3,2,1,5,4,6,7,10,9,11,12];
        const result = avl.preorder();
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.preorder(false)', function() {
        const nums = [8,3,2,1,5,4,6,7,10,9,11,12];
        const result = avl.preorder(false);
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.delete(12)', function() {
        assert(avl.delete(12) === true);
    });
    test('this.empty()', function() {
        assert(avl.empty() === false);
    });
    test('this.length()', function() {
        assert(avl.length() === 11);
    });
    test('this.has(12)', function() {
        assert(avl.has(12) === false);
    });
    test('this.count(12)', function() {
        assert(avl.count(12) === 0);
    });
    test('this.inorder()', function() {
        const nums = [1,2,3,4,5,6,7,8,9,10,11];
        const result = avl.inorder();
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.inorder(false)', function() {
        const nums = [1,2,3,4,5,6,7,8,9,10,11];
        const result = avl.inorder(false);
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.postorder()', function() {
        const nums = [1,2,4,3,7,6,9,11,10,8,5];
        const result = avl.postorder();
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.postorder(false)', function() {
        const nums = [1,2,4,3,7,6,9,11,10,8,5];
        const result = avl.postorder(false);
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.preorder()', function() {
        const nums = [5,3,2,1,4,8,6,7,10,9,11];
        const result = avl.preorder();
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.preorder(false)', function() {
        const nums = [5,3,2,1,4,8,6,7,10,9,11];
        const result = avl.preorder(false);
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.clone()', function() {
        const clone = avl.clone();
        assert(avl !== clone);
        assert(typeof clone === 'object');
        assert(clone instanceof AVL);
        assert(avl.compare === clone.compare);
        assert(avl.empty() === clone.empty());
        assert(avl.length() === clone.length());
        verifyClonedNode(avl._root, clone._root);
    });
    test('new AVL([5,3,10,2,4,8,12,1,7,9,11,13,6,14], "number")', function() {
        avl = new AVL([5,3,10,2,4,8,12,1,7,9,11,13,6,14], 'number');
    });
    test('this.empty()', function() {
        assert(avl.empty() === false);
    });
    test('this.length()', function() {
        assert(avl.length() === 14);
    });
    test('this.has(0)', function() {
        assert(avl.has(0) === false);
    });
    test('this.count(0)', function() {
        assert(avl.count(0) === 0);
    });
    test('this.has(1)', function() {
        assert(avl.has(1) === true);
    });
    test('this.count(1)', function() {
        assert(avl.count(1) === 1);
    });
    test('this.inorder()', function() {
        const nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
        const result = avl.inorder();
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.inorder(false)', function() {
        const nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
        const result = avl.inorder(false);
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.postorder()', function() {
        const nums = [1,2,4,3,6,7,9,8,11,14,13,12,10,5];
        const result = avl.postorder();
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.postorder(false)', function() {
        const nums = [1,2,4,3,6,7,9,8,11,14,13,12,10,5];
        const result = avl.postorder(false);
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.preorder()', function() {
        const nums = [5,3,2,1,4,10,8,7,6,9,12,11,13,14];
        const result = avl.preorder();
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.preorder(false)', function() {
        const nums = [5,3,2,1,4,10,8,7,6,9,12,11,13,14];
        const result = avl.preorder(false);
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.delete(1)', function() {
        assert(avl.delete(1) === true);
    });
    test('this.empty()', function() {
        assert(avl.empty() === false);
    });
    test('this.length()', function() {
        assert(avl.length() === 13);
    });
    test('this.has(1)', function() {
        assert(avl.has(1) === false);
    });
    test('this.count(1)', function() {
        assert(avl.count(1) === 0);
    });
    test('this.inorder()', function() {
        const nums = [2,3,4,5,6,7,8,9,10,11,12,13,14];
        const result = avl.inorder();
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.inorder(false)', function() {
        const nums = [2,3,4,5,6,7,8,9,10,11,12,13,14];
        const result = avl.inorder(false);
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.postorder()', function() {
        const nums = [2,4,3,6,7,9,8,5,11,14,13,12,10];
        const result = avl.postorder();
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.postorder(false)', function() {
        const nums = [2,4,3,6,7,9,8,5,11,14,13,12,10];
        const result = avl.postorder(false);
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.preorder()', function() {
        const nums = [10,5,3,2,4,8,7,6,9,12,11,13,14];
        const result = avl.preorder();
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.preorder(false)', function() {
        const nums = [10,5,3,2,4,8,7,6,9,12,11,13,14];
        const result = avl.preorder(false);
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.clone()', function() {
        const clone = avl.clone();
        assert(avl !== clone);
        assert(typeof clone === 'object');
        assert(clone instanceof AVL);
        assert(avl.compare === clone.compare);
        assert(avl.empty() === clone.empty());
        assert(avl.length() === clone.length());
        verifyClonedNode(avl._root, clone._root);
    });
    test('new AVL([10,5,12,3,7,11,13,2,4,6,8,14,1,9], "number")', function() {
        avl = new AVL([10,5,12,3,7,11,13,2,4,6,8,14,1,9], 'number');
    });
    test('this.empty()', function() {
        assert(avl.empty() === false);
    });
    test('this.length()', function() {
        assert(avl.length() === 14);
    });
    test('this.has(0)', function() {
        assert(avl.has(0) === false);
    });
    test('this.count(0)', function() {
        assert(avl.count(0) === 0);
    });
    test('this.has(1)', function() {
        assert(avl.has(1) === true);
    });
    test('this.count(1)', function() {
        assert(avl.count(1) === 1);
    });
    test('this.inorder()', function() {
        const nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
        const result = avl.inorder();
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.inorder(false)', function() {
        const nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
        const result = avl.inorder(false);
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.postorder()', function() {
        const nums = [1,2,4,3,6,9,8,7,5,11,14,13,12,10];
        const result = avl.postorder();
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.postorder(false)', function() {
        const nums = [1,2,4,3,6,9,8,7,5,11,14,13,12,10];
        const result = avl.postorder(false);
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.preorder()', function() {
        const nums = [10,5,3,2,1,4,7,6,8,9,12,11,13,14];
        const result = avl.preorder();
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.preorder(false)', function() {
        const nums = [10,5,3,2,1,4,7,6,8,9,12,11,13,14];
        const result = avl.preorder(false);
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.delete(14)', function() {
        assert(avl.delete(14) === true);
    });
    test('this.empty()', function() {
        assert(avl.empty() === false);
    });
    test('this.length()', function() {
        assert(avl.length() === 13);
    });
    test('this.has(14)', function() {
        assert(avl.has(14) === false);
    });
    test('this.count(14)', function() {
        assert(avl.count(14) === 0);
    });
    test('this.inorder()', function() {
        const nums = [1,2,3,4,5,6,7,8,9,10,11,12,13];
        const result = avl.inorder();
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.inorder(false)', function() {
        const nums = [1,2,3,4,5,6,7,8,9,10,11,12,13];
        const result = avl.inorder(false);
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.postorder()', function() {
        const nums = [1,2,4,3,6,9,8,7,11,13,12,10,5];
        const result = avl.postorder();
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.postorder(false)', function() {
        const nums = [1,2,4,3,6,9,8,7,11,13,12,10,5];
        const result = avl.postorder(false);
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.preorder()', function() {
        const nums = [5,3,2,1,4,10,7,6,8,9,12,11,13];
        const result = avl.preorder();
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.preorder(false)', function() {
        const nums = [5,3,2,1,4,10,7,6,8,9,12,11,13];
        const result = avl.preorder(false);
        assert(result.length === nums.length);
        assert(result.every((val, i) => val === nums[i]));
    });
    test('this.clone()', function() {
        const clone = avl.clone();
        assert(avl !== clone);
        assert(typeof clone === 'object');
        assert(clone instanceof AVL);
        assert(avl.compare === clone.compare);
        assert(avl.empty() === clone.empty());
        assert(avl.length() === clone.length());
        verifyClonedNode(avl._root, clone._root);
    });
});

suite('AVL("string")', function() {
    let avl;
    test('new AVL("string")', function() {
        avl = new AVL('string');
    });
    test('this.clone()', function() {
        const clone = avl.clone();
        assert(avl !== clone);
        assert(typeof clone === 'object');
        assert(clone instanceof AVL);
        assert(avl.compare === clone.compare);
        assert(avl.empty() === clone.empty());
        assert(avl.length() === clone.length());
        verifyClonedNode(avl._root, clone._root);
    });
    test('this.delete("a")', function() {
        assert(avl.delete('a') === false);
    });
    test('this.empty()', function() {
        assert(avl.empty() === true);
    });
    test('this.length()', function() {
        assert(avl.length() === 0);
    });
    test('this.has("a")', function() {
        assert(avl.has('a') === false);
    });
    test('this.count("a")', function() {
        assert(avl.count('a') === 0);
    });
    test('this.next("a")', function() {
        assert(avl.next('a') === undefined);
    });
    test('this.previous("a")', function() {
        assert(avl.previous('a') === undefined);
    });
    test('this.inorder()', function() {
        const arr = avl.inorder();
        assert(isArray(arr) && arr.length === 0);
    });
    test('this.inorder(false)', function() {
        const arr = avl.inorder(false);
        assert(isArray(arr) && arr.length === 0);
    });
    test('this.postorder()', function() {
        const arr = avl.postorder();
        assert(isArray(arr) && arr.length === 0);
    });
    test('this.postorder(false)', function() {
        const arr = avl.postorder(false);
        assert(isArray(arr) && arr.length === 0);
    });
    test('this.preorder()', function() {
        const arr = avl.preorder();
        assert(isArray(arr) && arr.length === 0);
    });
    test('this.preorder(false)', function() {
        const arr = avl.preorder(false);
        assert(isArray(arr) && arr.length === 0);
    });
    test('this.add("a")', function() {
        avl.add('a');
    });
    test('this.empty()', function() {
        assert(avl.empty() === false);
    });
    test('this.length()', function() {
        assert(avl.length() === 1);
    });
    test('this.has("a")', function() {
        assert(avl.has('a') === true);
    });
    test('this.count("a")', function() {
        assert(avl.count('a') === 1);
    });
    test('this.next("a")', function() {
        assert(avl.next('a') === undefined);
    });
    test('this.previous("a")', function() {
        assert(avl.previous('a') === undefined);
    });
    test('this.has("b")', function() {
        assert(avl.has('b') === false);
    });
    test('this.count("b")', function() {
        assert(avl.count('b') === 0);
    });
    test('this.next("b")', function() {
        assert(avl.next('b') === undefined);
    });
    test('this.previous("b")', function() {
        assert(avl.previous('b') === 'a');
    });
    test('this.inorder()', function() {
        const strs = [ 'a' ];
        const result = avl.inorder();
        assert(result.length === strs.length);
        assert(result.every((val, i) => val === strs[i]));
    });
    test('this.inorder(false)', function() {
        const strs = [ 'a' ];
        const result = avl.inorder(false);
        assert(result.length === strs.length);
        assert(result.every((val, i) => val === strs[i]));
    });
    test('this.postorder()', function() {
        const strs = [ 'a' ];
        const result = avl.postorder();
        assert(result.length === strs.length);
        assert(result.every((val, i) => val === strs[i]));
    });
    test('this.postorder(false)', function() {
        const strs = [ 'a' ];
        const result = avl.postorder(false);
        assert(result.length === strs.length);
        assert(result.every((val, i) => val === strs[i]));
    });
    test('this.preorder()', function() {
        const strs = [ 'a' ];
        const result = avl.preorder();
        assert(result.length === strs.length);
        assert(result.every((val, i) => val === strs[i]));
    });
    test('this.preorder(false)', function() {
        const strs = [ 'a' ];
        const result = avl.preorder(false);
        assert(result.length === strs.length);
        assert(result.every((val, i) => val === strs[i]));
    });
    test('this.add("a")', function() {
        avl.add('a');
    });
    test('this.empty()', function() {
        assert(avl.empty() === false);
    });
    test('this.length()', function() {
        assert(avl.length() === 2);
    });
    test('this.has("a")', function() {
        assert(avl.has('a') === true);
    });
    test('this.count("a")', function() {
        assert(avl.count('a') === 2);
    });
    test('this.next("a")', function() {
        assert(avl.next('a') === undefined);
    });
    test('this.previous("a")', function() {
        assert(avl.previous('a') === undefined);
    });
    test('this.has("b")', function() {
        assert(avl.has('b') === false);
    });
    test('this.count("b")', function() {
        assert(avl.count('b') === 0);
    });
    test('this.next("b")', function() {
        assert(avl.next('b') === undefined);
    });
    test('this.previous("b")', function() {
        assert(avl.previous('b') === 'a');
    });
    test('this.inorder()', function() {
        const strs = [ 'a','a' ];
        const result = avl.inorder();
        assert(result.length === strs.length);
        assert(result.every((val, i) => val === strs[i]));
    });
    test('this.inorder(false)', function() {
        const strs = [ 'a' ];
        const result = avl.inorder(false);
        assert(result.length === strs.length);
        assert(result.every((val, i) => val === strs[i]));
    });
    test('this.postorder()', function() {
        const strs = [ 'a','a' ];
        const result = avl.postorder();
        assert(result.length === strs.length);
        assert(result.every((val, i) => val === strs[i]));
    });
    test('this.postorder(false)', function() {
        const strs = [ 'a' ];
        const result = avl.postorder(false);
        assert(result.length === strs.length);
        assert(result.every((val, i) => val === strs[i]));
    });
    test('this.preorder()', function() {
        const strs = [ 'a','a' ];
        const result = avl.preorder();
        assert(result.length === strs.length);
        assert(result.every((val, i) => val === strs[i]));
    });
    test('this.preorder(false)', function() {
        const strs = [ 'a' ];
        const result = avl.preorder(false);
        assert(result.length === strs.length);
        assert(result.every((val, i) => val === strs[i]));
    });
    test('this.delete("b")', function() {
        assert(avl.delete('b') === false);
    });
    test('this.empty()', function() {
        assert(avl.empty() === false);
    });
    test('this.length()', function() {
        assert(avl.length() === 2);
    });
    test('this.has("a")', function() {
        assert(avl.has('a') === true);
    });
    test('this.count("a")', function() {
        assert(avl.count('a') === 2);
    });
    test('this.next("a")', function() {
        assert(avl.next('a') === undefined);
    });
    test('this.previous("a")', function() {
        assert(avl.previous('a') === undefined);
    });
    test('this.has("b")', function() {
        assert(avl.has('b') === false);
    });
    test('this.count("b")', function() {
        assert(avl.count('b') === 0);
    });
    test('this.next("b")', function() {
        assert(avl.next('b') === undefined);
    });
    test('this.previous("b")', function() {
        assert(avl.previous('b') === 'a');
    });
    test('this.inorder()', function() {
        const strs = [ 'a','a' ];
        const result = avl.inorder();
        assert(result.length === strs.length);
        assert(result.every((val, i) => val === strs[i]));
    });
    test('this.inorder(false)', function() {
        const strs = [ 'a' ];
        const result = avl.inorder(false);
        assert(result.length === strs.length);
        assert(result.every((val, i) => val === strs[i]));
    });
    test('this.postorder()', function() {
        const strs = [ 'a','a' ];
        const result = avl.postorder();
        assert(result.length === strs.length);
        assert(result.every((val, i) => val === strs[i]));
    });
    test('this.postorder(false)', function() {
        const strs = [ 'a' ];
        const result = avl.postorder(false);
        assert(result.length === strs.length);
        assert(result.every((val, i) => val === strs[i]));
    });
    test('this.preorder()', function() {
        const strs = [ 'a','a' ];
        const result = avl.preorder();
        assert(result.length === strs.length);
        assert(result.every((val, i) => val === strs[i]));
    });
    test('this.preorder(false)', function() {
        const strs = [ 'a' ];
        const result = avl.preorder(false);
        assert(result.length === strs.length);
        assert(result.every((val, i) => val === strs[i]));
    });
    test('this.delete("a")', function() {
        assert(avl.delete('a') === true);
    });
    test('this.empty()', function() {
        assert(avl.empty() === false);
    });
    test('this.length()', function() {
        assert(avl.length() === 1);
    });
    test('this.has("a")', function() {
        assert(avl.has('a') === true);
    });
    test('this.count("a")', function() {
        assert(avl.count('a') === 1);
    });
    test('this.next("a")', function() {
        assert(avl.next('a') === undefined);
    });
    test('this.previous("a")', function() {
        assert(avl.previous('a') === undefined);
    });
    test('this.inorder()', function() {
        const strs = [ 'a' ];
        const result = avl.inorder();
        assert(result.length === strs.length);
        assert(result.every((val, i) => val === strs[i]));
    });
    test('this.inorder(false)', function() {
        const strs = [ 'a' ];
        const result = avl.inorder(false);
        assert(result.length === strs.length);
        assert(result.every((val, i) => val === strs[i]));
    });
    test('this.postorder()', function() {
        const strs = [ 'a' ];
        const result = avl.postorder();
        assert(result.length === strs.length);
        assert(result.every((val, i) => val === strs[i]));
    });
    test('this.postorder(false)', function() {
        const strs = [ 'a' ];
        const result = avl.postorder(false);
        assert(result.length === strs.length);
        assert(result.every((val, i) => val === strs[i]));
    });
    test('this.preorder()', function() {
        const strs = [ 'a' ];
        const result = avl.preorder();
        assert(result.length === strs.length);
        assert(result.every((val, i) => val === strs[i]));
    });
    test('this.preorder(false)', function() {
        const strs = [ 'a' ];
        const result = avl.preorder(false);
        assert(result.length === strs.length);
        assert(result.every((val, i) => val === strs[i]));
    });
    test('this.delete("a")', function() {
        assert(avl.delete('a') === true);
    });
    test('this.empty()', function() {
        assert(avl.empty() === true);
    });
    test('this.length()', function() {
        assert(avl.length() === 0);
    });
    test('this.has("a")', function() {
        assert(avl.has('a') === false);
    });
    test('this.count("a")', function() {
        assert(avl.count('a') === 0);
    });
    test('this.next("a")', function() {
        assert(avl.next('a') === undefined);
    });
    test('this.previous("a")', function() {
        assert(avl.previous('a') === undefined);
    });
    test('this.inorder()', function() {
        const arr = avl.inorder();
        assert(isArray(arr) && arr.length === 0);
    });
    test('this.inorder(false)', function() {
        const arr = avl.inorder(false);
        assert(isArray(arr) && arr.length === 0);
    });
    test('this.postorder()', function() {
        const arr = avl.postorder();
        assert(isArray(arr) && arr.length === 0);
    });
    test('this.postorder(false)', function() {
        const arr = avl.postorder(false);
        assert(isArray(arr) && arr.length === 0);
    });
    test('this.preorder()', function() {
        const arr = avl.preorder();
        assert(isArray(arr) && arr.length === 0);
    });
    test('this.preorder(false)', function() {
        const arr = avl.preorder(false);
        assert(isArray(arr) && arr.length === 0);
    });
    test('this.add("h")', function() {
        avl.add('h');
    });
    test('this.add("g")', function() {
        avl.add('g');
    });
    test('this.add("f")', function() {
        avl.add('f');
    });
    test('this.add("e")', function() {
        avl.add('e');
    });
    test('this.empty()', function() {
        assert(avl.empty() === false);
    });
    test('this.length()', function() {
        assert(avl.length() === 4);
    });
    test('this.has("e")', function() {
        assert(avl.has('e') === true);
    });
    test('this.count("e")', function() {
        assert(avl.count('e') === 1);
    });
    test('this.next("e")', function() {
        assert(avl.next('e') === 'f');
    });
    test('this.previous("e")', function() {
        assert(avl.previous('e') === undefined);
    });
    test('this.inorder()', function() {
        const strs = [ 'e','f','g','h' ];
        const result = avl.inorder();
        assert(result.length === strs.length);
        assert(result.every((val, i) => val === strs[i]));
    });
    test('this.inorder(false)', function() {
        const strs = [ 'e','f','g','h' ];
        const result = avl.inorder(false);
        assert(result.length === strs.length);
        assert(result.every((val, i) => val === strs[i]));
    });
    test('this.postorder()', function() {
        const strs = [ 'e','f','h','g' ];
        const result = avl.postorder();
        assert(result.length === strs.length);
        assert(result.every((val, i) => val === strs[i]));
    });
    test('this.postorder(false)', function() {
        const strs = [ 'e','f','h','g' ];
        const result = avl.postorder(false);
        assert(result.length === strs.length);
        assert(result.every((val, i) => val === strs[i]));
    });
    test('this.preorder()', function() {
        const strs = [ 'g','f','e','h' ];
        const result = avl.preorder();
        assert(result.length === strs.length);
        assert(result.every((val, i) => val === strs[i]));
    });
    test('this.preorder(false)', function() {
        const strs = [ 'g','f','e','h' ];
        const result = avl.preorder(false);
        assert(result.length === strs.length);
        assert(result.every((val, i) => val === strs[i]));
    });
    test('this.add("e")', function() {
        avl.add('e');
    });
    test('this.add("e")', function() {
        avl.add('e');
    });
    test('this.empty()', function() {
        assert(avl.empty() === false);
    });
    test('this.length()', function() {
        assert(avl.length() === 6);
    });
    test('this.has("e")', function() {
        assert(avl.has('e') === true);
    });
    test('this.count("e")', function() {
        assert(avl.count('e') === 3);
    });
    test('this.next("e")', function() {
        assert(avl.next('e') === 'f');
    });
    test('this.previous("e")', function() {
        assert(avl.previous('e') === undefined);
    });
    test('this.inorder()', function() {
        const strs = [ 'e','e','e','f','g','h' ];
        const result = avl.inorder();
        assert(result.length === strs.length);
        assert(result.every((val, i) => val === strs[i]));
    });
    test('this.inorder(false)', function() {
        const strs = [ 'e','f','g','h' ];
        const result = avl.inorder(false);
        assert(result.length === strs.length);
        assert(result.every((val, i) => val === strs[i]));
    });
    test('this.postorder()', function() {
        const strs = [ 'e','e','e','f','h','g' ];
        const result = avl.postorder();
        assert(result.length === strs.length);
        assert(result.every((val, i) => val === strs[i]));
    });
    test('this.postorder(false)', function() {
        const strs = [ 'e','f','h','g' ];
        const result = avl.postorder(false);
        assert(result.length === strs.length);
        assert(result.every((val, i) => val === strs[i]));
    });
    test('this.preorder()', function() {
        const strs = [ 'g','f','e','e','e','h' ];
        const result = avl.preorder();
        assert(result.length === strs.length);
        assert(result.every((val, i) => val === strs[i]));
    });
    test('this.preorder(false)', function() {
        const strs = [ 'g','f','e','h' ];
        const result = avl.preorder(false);
        assert(result.length === strs.length);
        assert(result.every((val, i) => val === strs[i]));
    });
    test('this.add("d")', function() {
        avl.add('d');
    });
    test('this.add("c")', function() {
        avl.add('c');
    });
    test('this.add("a")', function() {
        avl.add('a');
    });
    test('this.add("a")', function() {
        avl.add('a');
    });
    test('this.add("a")', function() {
        avl.add('a');
    });
    test('this.empty()', function() {
        assert(avl.empty() === false);
    });
    test('this.length()', function() {
        assert(avl.length() === 11);
    });
    test('this.has("a")', function() {
        assert(avl.has('a') === true);
    });
    test('this.count("a")', function() {
        assert(avl.count('a') === 3);
    });
    test('this.next("a")', function() {
        assert(avl.next('a') === 'c');
    });
    test('this.previous("a")', function() {
        assert(avl.previous('a') === undefined);
    });
    test('this.inorder()', function() {
        const strs = [ 'a','a','a','c','d','e','e','e','f','g','h' ];
        const result = avl.inorder();
        assert(result.length === strs.length);
        assert(result.every((val, i) => val === strs[i]));
    });
    test('this.inorder(false)', function() {
        const strs = [ 'a','c','d','e','f','g','h' ];
        const result = avl.inorder(false);
        assert(result.length === strs.length);
        assert(result.every((val, i) => val === strs[i]));
    });
    test('this.postorder()', function() {
        const strs = [ 'a','a','a','d','c','f','h','g','e','e','e' ];
        const result = avl.postorder();
        assert(result.length === strs.length);
        assert(result.every((val, i) => val === strs[i]));
    });
    test('this.postorder(false)', function() {
        const strs = [ 'a','d','c','f','h','g','e' ];
        const result = avl.postorder(false);
        assert(result.length === strs.length);
        assert(result.every((val, i) => val === strs[i]));
    });
    test('this.preorder()', function() {
        const strs = [ 'e','e','e','c','a','a','a','d','g','f','h' ];
        const result = avl.preorder();
        assert(result.length === strs.length);
        assert(result.every((val, i) => val === strs[i]));
    });
    test('this.preorder(false)', function() {
        const strs = [ 'e','c','a','d','g','f','h' ];
        const result = avl.preorder(false);
        assert(result.length === strs.length);
        assert(result.every((val, i) => val === strs[i]));
    });
    test('this.add("b")', function() {
        avl.add('b');
    });
    test('this.empty()', function() {
        assert(avl.empty() === false);
    });
    test('this.length()', function() {
        assert(avl.length() === 12);
    });
    test('this.has("b")', function() {
        assert(avl.has('b') === true);
    });
    test('this.count("b")', function() {
        assert(avl.count('b') === 1);
    });
    test('this.next("b")', function() {
        assert(avl.next('b') === 'c');
    });
    test('this.previous("b")', function() {
        assert(avl.previous('b') === 'a');
    });
    test('this.inorder()', function() {
        const strs = [ 'a','a','a','b','c','d','e','e','e','f','g','h' ];
        const result = avl.inorder();
        assert(result.length === strs.length);
        assert(result.every((val, i) => val === strs[i]));
    });
    test('this.inorder(false)', function() {
        const strs = [ 'a','b','c','d','e','f','g','h' ];
        const result = avl.inorder(false);
        assert(result.length === strs.length);
        assert(result.every((val, i) => val === strs[i]));
    });
    test('this.postorder()', function() {
        const strs = [ 'b','a','a','a','d','c','f','h','g','e','e','e' ];
        const result = avl.postorder();
        assert(result.length === strs.length);
        assert(result.every((val, i) => val === strs[i]));
    });
    test('this.postorder(false)', function() {
        const strs = [ 'b','a','d','c','f','h','g','e' ];
        const result = avl.postorder(false);
        assert(result.length === strs.length);
        assert(result.every((val, i) => val === strs[i]));
    });
    test('this.preorder()', function() {
        const strs = [ 'e','e','e','c','a','a','a','b','d','g','f','h' ];
        const result = avl.preorder();
        assert(result.length === strs.length);
        assert(result.every((val, i) => val === strs[i]));
    });
    test('this.preorder(false)', function() {
        const strs = [ 'e','c','a','b','d','g','f','h' ];
        const result = avl.preorder(false);
        assert(result.length === strs.length);
        assert(result.every((val, i) => val === strs[i]));
    });
    test('this.delete("e", true)', function() {
        assert(avl.delete('e', true) === true);
    });
    test('this.empty()', function() {
        assert(avl.empty() === false);
    });
    test('this.length()', function() {
        assert(avl.length() === 9);
    });
    test('this.has("e")', function() {
        assert(avl.has('e') === false);
    });
    test('this.count("e")', function() {
        assert(avl.count('e') === 0);
    });
    test('this.next("e")', function() {
        assert(avl.next('e') === 'f');
    });
    test('this.previous("e")', function() {
        assert(avl.previous('e') === 'd');
    });
    test('this.inorder()', function() {
        const strs = [ 'a','a','a','b','c','d','f','g','h' ];
        const result = avl.inorder();
        assert(result.length === strs.length);
        assert(result.every((val, i) => val === strs[i]));
    });
    test('this.inorder(false)', function() {
        const strs = [ 'a','b','c','d','f','g','h' ];
        const result = avl.inorder(false);
        assert(result.length === strs.length);
        assert(result.every((val, i) => val === strs[i]));
    });
    test('this.postorder()', function() {
        const strs = [ 'a','a','a','c','b','f','h','g','d' ];
        const result = avl.postorder();
        assert(result.length === strs.length);
        assert(result.every((val, i) => val === strs[i]));
    });
    test('this.postorder(false)', function() {
        const strs = [ 'a','c','b','f','h','g','d' ];
        const result = avl.postorder(false);
        assert(result.length === strs.length);
        assert(result.every((val, i) => val === strs[i]));
    });
    test('this.preorder()', function() {
        const strs = [ 'd','b','a','a','a','c','g','f','h' ];
        const result = avl.preorder();
        assert(result.length === strs.length);
        assert(result.every((val, i) => val === strs[i]));
    });
    test('this.preorder(false)', function() {
        const strs = [ 'd','b','a','c','g','f','h' ];
        const result = avl.preorder(false);
        assert(result.length === strs.length);
        assert(result.every((val, i) => val === strs[i]));
    });
    test('this.clone()', function() {
        const clone = avl.clone();
        assert(avl !== clone);
        assert(typeof clone === 'object');
        assert(clone instanceof AVL);
        assert(avl.compare === clone.compare);
        assert(avl.empty() === clone.empty());
        assert(avl.length() === clone.length());
        verifyClonedNode(avl._root, clone._root);
    });
});

/**
 * @private
 * @param {?AVLNode} node
 * @param {?AVLNode} clone
 * @return {void}
 */
function verifyClonedNode(node, clone) {
    if (!node || !clone) {
        assert(node === clone);
        return;
    }
    assert(node.val === clone.val);
    assert(node.count === clone.count);
    assert(node.balance === clone.balance);
    verifyClonedNode(node.left, clone.left);
    verifyClonedNode(node.right, clone.right);
}
