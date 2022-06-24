/**
 * Cedge
 * @file The unit tests for the *AVL* class.
 * @version 1.0.0.alpha
 * @see [Cedge](https://github.com/imaginate/cedge)
 *
 * @author Adam Smith <imagineadamsmith@gmail.com> (https://github.com/imaginate)
 * @copyright 2022 Adam A Smith <imagineadamsmith@gmail.com> (https://github.com/imaginate)
 */

const AVL = require('../src/avl.js');
const assert = require('assert');

suite('AVL(nums)', function() {
    const avl = new AVL([1,2,3,4,4,4,5,6,8,9,9,9]);
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
    test('this.has(4)', function() {
        assert(avl.has(4) === true);
    });
    test('this.count(4)', function() {
        assert(avl.count(4) === 3);
    });
    test('this.has(9)', function() {
        assert(avl.has(9) === true);
    });
    test('this.count(9)', function() {
        assert(avl.count(9) === 3);
    });
    test('this.inorder()', function() {
        const nums = [1,2,3,4,4,4,5,6,8,9,9,9];
        assert(avl.inorder().every((val, i) => val === nums[i]));
    });
    test('this.inorder(false)', function() {
        const nums = [1,2,3,4,5,6,8,9];
        assert(avl.inorder(false).every((val, i) => val === nums[i]));
    });
    test('this.postorder()', function() {
        const nums = [1,3,2,5,9,9,9,8,6,4,4,4];
        assert(avl.postorder().every((val, i) => val === nums[i]));
    });
    test('this.postorder(false)', function() {
        const nums = [1,3,2,5,9,8,6,4];
        assert(avl.postorder(false).every((val, i) => val === nums[i]));
    });
    test('this.preorder()', function() {
        const nums = [4,4,4,2,1,3,6,5,8,9,9,9];
        assert(avl.preorder().every((val, i) => val === nums[i]));
    });
    test('this.preorder(false)', function() {
        const nums = [4,2,1,3,6,5,8,9];
        assert(avl.preorder(false).every((val, i) => val === nums[i]));
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
        assert(avl.inorder().every((val, i) => val === nums[i]));
    });
    test('this.inorder(false)', function() {
        const nums = [2,3,4,5,6,8,9];
        assert(avl.inorder(false).every((val, i) => val === nums[i]));
    });
    test('this.postorder()', function() {
        const nums = [3,2,5,9,9,9,8,6,4,4,4];
        assert(avl.postorder().every((val, i) => val === nums[i]));
    });
    test('this.postorder(false)', function() {
        const nums = [3,2,5,9,8,6,4];
        assert(avl.postorder(false).every((val, i) => val === nums[i]));
    });
    test('this.preorder()', function() {
        const nums = [4,4,4,2,3,6,5,8,9,9,9];
        assert(avl.preorder().every((val, i) => val === nums[i]));
    });
    test('this.preorder(false)', function() {
        const nums = [4,2,3,6,5,8,9];
        assert(avl.preorder(false).every((val, i) => val === nums[i]));
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
        assert(avl.inorder().every((val, i) => val === nums[i]));
    });
    test('this.inorder(false)', function() {
        const nums = [1,2,3,4,5,6,8,9];
        assert(avl.inorder(false).every((val, i) => val === nums[i]));
    });
    test('this.postorder()', function() {
        const nums = [1,3,2,5,9,9,9,8,6,4,4,4];
        assert(avl.postorder().every((val, i) => val === nums[i]));
    });
    test('this.postorder(false)', function() {
        const nums = [1,3,2,5,9,8,6,4];
        assert(avl.postorder(false).every((val, i) => val === nums[i]));
    });
    test('this.preorder()', function() {
        const nums = [4,4,4,2,1,3,6,5,8,9,9,9];
        assert(avl.preorder().every((val, i) => val === nums[i]));
    });
    test('this.preorder(false)', function() {
        const nums = [4,2,1,3,6,5,8,9];
        assert(avl.preorder(false).every((val, i) => val === nums[i]));
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
        assert(avl.inorder().every((val, i) => val === nums[i]));
    });
    test('this.inorder(false)', function() {
        const nums = [1,2,3,4,5,6,8,9];
        assert(avl.inorder(false).every((val, i) => val === nums[i]));
    });
    test('this.postorder()', function() {
        const nums = [1,3,2,5,9,9,8,6,4,4,4];
        assert(avl.postorder().every((val, i) => val === nums[i]));
    });
    test('this.postorder(false)', function() {
        const nums = [1,3,2,5,9,8,6,4];
        assert(avl.postorder(false).every((val, i) => val === nums[i]));
    });
    test('this.preorder()', function() {
        const nums = [4,4,4,2,1,3,6,5,8,9,9];
        assert(avl.preorder().every((val, i) => val === nums[i]));
    });
    test('this.preorder(false)', function() {
        const nums = [4,2,1,3,6,5,8,9];
        assert(avl.preorder(false).every((val, i) => val === nums[i]));
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
        assert(avl.inorder().every((val, i) => val === nums[i]));
    });
    test('this.inorder(false)', function() {
        const nums = [1,2,3,4,5,6,8];
        assert(avl.inorder(false).every((val, i) => val === nums[i]));
    });
    test('this.postorder()', function() {
        const nums = [1,3,2,5,8,6,4,4,4];
        assert(avl.postorder().every((val, i) => val === nums[i]));
    });
    test('this.postorder(false)', function() {
        const nums = [1,3,2,5,8,6,4];
        assert(avl.postorder(false).every((val, i) => val === nums[i]));
    });
    test('this.preorder()', function() {
        const nums = [4,4,4,2,1,3,6,5,8];
        assert(avl.preorder().every((val, i) => val === nums[i]));
    });
    test('this.preorder(false)', function() {
        const nums = [4,2,1,3,6,5,8];
        assert(avl.preorder(false).every((val, i) => val === nums[i]));
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
        assert(avl.inorder().every((val, i) => val === nums[i]));
    });
    test('this.inorder(false)', function() {
        const nums = [1,2,3,4,5,6,7,8];
        assert(avl.inorder(false).every((val, i) => val === nums[i]));
    });
    test('this.postorder()', function() {
        const nums = [1,3,2,5,7,8,6,4,4,4];
        assert(avl.postorder().every((val, i) => val === nums[i]));
    });
    test('this.postorder(false)', function() {
        const nums = [1,3,2,5,7,8,6,4];
        assert(avl.postorder(false).every((val, i) => val === nums[i]));
    });
    test('this.preorder()', function() {
        const nums = [4,4,4,2,1,3,6,5,8,7];
        assert(avl.preorder().every((val, i) => val === nums[i]));
    });
    test('this.preorder(false)', function() {
        const nums = [4,2,1,3,6,5,8,7];
        assert(avl.preorder(false).every((val, i) => val === nums[i]));
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
        assert(avl.inorder().every((val, i) => val === nums[i]));
    });
    test('this.inorder(false)', function() {
        const nums = [1,2,3,4,5,6,7,8];
        assert(avl.inorder(false).every((val, i) => val === nums[i]));
    });
    test('this.postorder()', function() {
        const nums = [1,3,2,5,7,8,6,4,4];
        assert(avl.postorder().every((val, i) => val === nums[i]));
    });
    test('this.postorder(false)', function() {
        const nums = [1,3,2,5,7,8,6,4];
        assert(avl.postorder(false).every((val, i) => val === nums[i]));
    });
    test('this.preorder()', function() {
        const nums = [4,4,2,1,3,6,5,8,7];
        assert(avl.preorder().every((val, i) => val === nums[i]));
    });
    test('this.preorder(false)', function() {
        const nums = [4,2,1,3,6,5,8,7];
        assert(avl.preorder(false).every((val, i) => val === nums[i]));
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
        assert(avl.inorder().every((val, i) => val === nums[i]));
    });
    test('this.inorder(false)', function() {
        const nums = [1,2,3,5,6,7,8];
        assert(avl.inorder(false).every((val, i) => val === nums[i]));
    });
    test('this.postorder()', function() {
        const nums = [1,3,2,6,8,7,5];
        assert(avl.postorder().every((val, i) => val === nums[i]));
    });
    test('this.postorder(false)', function() {
        const nums = [1,3,2,6,8,7,5];
        assert(avl.postorder(false).every((val, i) => val === nums[i]));
    });
    test('this.preorder()', function() {
        const nums = [5,2,1,3,7,6,8];
        assert(avl.preorder().every((val, i) => val === nums[i]));
    });
    test('this.preorder(false)', function() {
        const nums = [5,2,1,3,7,6,8];
        assert(avl.preorder(false).every((val, i) => val === nums[i]));
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
        assert(avl.inorder().every((val, i) => val === nums[i]));
    });
    test('this.inorder(false)', function() {
        const nums = [1,2,3,5,6,7,8,9];
        assert(avl.inorder(false).every((val, i) => val === nums[i]));
    });
    test('this.postorder()', function() {
        const nums = [1,3,2,6,9,8,7,5];
        assert(avl.postorder().every((val, i) => val === nums[i]));
    });
    test('this.postorder(false)', function() {
        const nums = [1,3,2,6,9,8,7,5];
        assert(avl.postorder(false).every((val, i) => val === nums[i]));
    });
    test('this.preorder()', function() {
        const nums = [5,2,1,3,7,6,8,9];
        assert(avl.preorder().every((val, i) => val === nums[i]));
    });
    test('this.preorder(false)', function() {
        const nums = [5,2,1,3,7,6,8,9];
        assert(avl.preorder(false).every((val, i) => val === nums[i]));
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
        assert(avl.inorder().every((val, i) => val === nums[i]));
    });
    test('this.inorder(false)', function() {
        const nums = [1,2,3,5,6,7,8,9];
        assert(avl.inorder(false).every((val, i) => val === nums[i]));
    });
    test('this.postorder()', function() {
        const nums = [1,3,2,6,9,9,8,7,5];
        assert(avl.postorder().every((val, i) => val === nums[i]));
    });
    test('this.postorder(false)', function() {
        const nums = [1,3,2,6,9,8,7,5];
        assert(avl.postorder(false).every((val, i) => val === nums[i]));
    });
    test('this.preorder()', function() {
        const nums = [5,2,1,3,7,6,8,9,9];
        assert(avl.preorder().every((val, i) => val === nums[i]));
    });
    test('this.preorder(false)', function() {
        const nums = [5,2,1,3,7,6,8,9];
        assert(avl.preorder(false).every((val, i) => val === nums[i]));
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
        assert(avl.inorder().every((val, i) => val === nums[i]));
    });
    test('this.inorder(false)', function() {
        const nums = [1,2,3,5,6,7,8,9,10];
        assert(avl.inorder(false).every((val, i) => val === nums[i]));
    });
    test('this.postorder()', function() {
        const nums = [1,3,2,6,8,10,9,9,7,5];
        assert(avl.postorder().every((val, i) => val === nums[i]));
    });
    test('this.postorder(false)', function() {
        const nums = [1,3,2,6,8,10,9,7,5];
        assert(avl.postorder(false).every((val, i) => val === nums[i]));
    });
    test('this.preorder()', function() {
        const nums = [5,2,1,3,7,6,9,9,8,10];
        assert(avl.preorder().every((val, i) => val === nums[i]));
    });
    test('this.preorder(false)', function() {
        const nums = [5,2,1,3,7,6,9,8,10];
        assert(avl.preorder(false).every((val, i) => val === nums[i]));
    });
});
