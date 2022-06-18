/**
 * Cedge
 * @file The `AVL` class.
 * @version 1.0.0.alpha
 * @see [Cedge](https://github.com/imaginate/cedge)
 *
 * @author Adam Smith <imagineadamsmith@gmail.com> (https://github.com/imaginate)
 * @copyright 2022 Adam A Smith <imagineadamsmith@gmail.com> (https://github.com/imaginate)
 *
 * @see [JSDoc3](https://jsdoc.app)
 * @see [Closure Compiler JSDoc Syntax](https://developers.google.com/closure/compiler/docs/js-for-compiler)
 */

class AVLNode {
    /**
     * @param {*} val
     *     Must be a comparable value.
     * @param {AVLNode=} parent
     *     If `parent` is `null` then it is considered the `root` node.
     * @constructor
     */
    constructor(val, parent = null) {
        this.val = val;
        this.left = null;
        this.right = null;
        this.count = 1;
        this.parent = parent;
        this.balance = 0;
    }
}

class AVL {
    /**
     * The `AVL` constructor. This is a self-balancing binary search tree. You
     * may provide an array of initial values. You may provide a custom
     * comparator method.
     *
     * @param {*[]=} vals = `[]`
     *     If `vals` is type `function` the `compare` parameter is set to
     *     `vals` value, and `vals` is set to `[]`.
     * @param {((!function(*, *): number)|string)=} compare = `"number"`
     *     The method used to determine the order of the values. Must return
     *     a number less than `0` to sort `a` before `b`, equal to `0` to
     *     increase the count of the existing value (i.e. duplicate values are
     *     not saved directly to the tree; instead they increase an internal
     *     counter saved within the original value's node; so do **not**
     *     return `0` unless you can return the original's value in place of
     *     the equivalent's value), or greater than `0` to sort `b` before
     *     `a`. The default comparators are `"number"` which is `a - b` and
     *     `"string"` which is `a.localeCompare(b)`.
     * @constructor
     */
    constructor(vals = [], compare = 'number') {
        switch (typeof vals) {
            case 'function':
            case 'string':
                compare = vals;
                vals = [];
        }
        if (typeof compare === 'string') {
            compare = compare === 'string'
                ? this.defaultStringCompare
                : this.defaultNumberCompare;
        }
        this.root = null;
        this.length = 0;
        this.compare = compare;
        for (let i = 0; i < vals.length; ++i) {
            this.add(vals[i]);
        }
    }
    
    /**
     * @param {*} val
     * @return {void}
     */
    add(val) {
        ++this.length;
        if (!this.root) {
            this.root = new AVLNode(val);
            return;
        }
        let node = this.root;
        let parent;
        let compared;
        while (node) {
            compared = this.compare(val, node.val);
            if (compared === 0) {
                ++node.count;
                return;
            }
            parent = node;
            if (compared < 0) {
                node = node.left;
            } else {
                node = node.right;
            }
        }
        node = new AVLNode(val, parent);
        if (compared < 0) {
            parent.left = node;
        } else {
            parent.right = node;
        }
        // ADD SELF-BALANCING CODE
    }

    /**
     * @param {number} a
     * @param {number} b
     * @return {number}
     */
    defaultNumberCompare(a, b) {
        return a - b;
    }

    /**
     * @param {string} a
     * @param {string} b
     * @return {number}
     */
    defaultStringCompare(a, b) {
        return a.localeCompare(b);
    }

    /**
     * @param {*} val
     * @param {boolean=} all = `false`
     *     Denote whether you want to delete one occurrence of `val` or all
     *     occurrences of `val` (i.e. do you want to delete the duplicates).
     * @return {boolean}
     */
    delete(val, all = false) {
        if (!this.length) {
            return false;
        }
        --this.length;
        // ADD DELETE CODE
    }

    /**
     * @param {*} val
     * @return {boolean}
     */
    has(val) {
    }

    /**
     * @return {!Array<*>}
     */
    inorder() {
    }

    /**
     * @return {!Array<*>}
     */
    postorder() {
    }

    /**
     * @return {!Array<*>}
     */
    preorder() {
    }
}

module.exports = AVL;
