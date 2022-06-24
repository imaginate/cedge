/**
 * Cedge
 * @file The *AVL* class.
 * @version 1.0.0.alpha
 * @see [Cedge](https://github.com/imaginate/cedge)
 *
 * @author Adam Smith <imagineadamsmith@gmail.com> (https://github.com/imaginate)
 * @copyright 2022 Adam A Smith <imagineadamsmith@gmail.com> (https://github.com/imaginate)
 *
 * @see [JSDoc3](https://jsdoc.app)
 * @see [Closure Compiler JSDoc Syntax](https://developers.google.com/closure/compiler/docs/js-for-compiler)
 */

var AVL = (function() {

    class AVLNode {
        /**
         * @private
         * @param {*} val
         *     Must be a comparable value.
         * @param {?AVLNode=} parent
         *     If *parent* is `null` then it is considered the root node.
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
         * The *AVL* constructor. This is a self-balancing binary search tree.
         * You may provide an array of initial values. You may provide a
         * custom comparator method.
         *
         * @param {!Array<*>=} vals = `[]`
         *     If *vals* is type `"function"` or `"string"` the *compare*
         *     parameter is set to *vals*, and *vals* is set to `[]`.
         * @param {((!function(*, *): number)|string)=} compare = `"number"`
         *     The method used to determine the order of the values. Must
         *     return a number less than `0` to sort *a* before *b*, equal to
         *     `0` to increase the count of the existing value (i.e. duplicate
         *     values are not saved directly to the tree; instead they
         *     increase an internal counter saved within the original value's
         *     node; so do **not** return `0` unless you can return the
         *     original's value in place of the equivalent's value), or
         *     greater than `0` to sort *b* before *a*. The default
         *     comparators are `"number"` which is `a - b` and `"string"`
         *     which is `a.localeCompare(b)`.
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
                    ? defaultStringCompare
                    : defaultNumberCompare;
            }

            /**
             * This is the internal pointer to the root of the tree. Do
             * **not** overwrite this property. It is meant for internal use
             * only.
             *
             * @private
             * @export
             * @const {?AVLNode}
             */
            this._root = null;

            /**
             * This is the comparator used by the tree instance. It should be
             * treated as read-only. If you overwrite this property you will
             * change the results of future comparisons.
             *
             * @public
             * @export
             * @const {!function(*, *): number}
             */
            this.compare = compare;

            /**
             * This is the internal value for the length of the tree. Do
             * **not** overwrite this property. It is meant for internal use
             * only.
             *
             * @private
             * @export
             * @const {number}
             */
            this._length = 0;

            for (let i = 0; i < vals.length; ++i) {
                this.add(vals[i]);
            }
        }

        /**
         * @public
         * @export
         * @param {*} val
         * @return {void}
         */
        add(val) {
            ++this._length;

            if (!this._root) {
                this._root = new AVLNode(val);
                return;
            }

            let node = this._root;
            let parent = null;
            let compared = 0;

            // insert the *val*
            while (node) {
                compared = this.compare(val, node.val);
                if (compared === 0) {
                    ++node.count;
                    return;
                }
                parent = node;
                node = compared < 0
                    ? node.left
                    : node.right;
            }
            node = new AVLNode(val, parent);
            if (compared < 0) {
                parent.left = node;
            } else {
                parent.right = node;
            }

            // rebalance the tree
            while (parent) {
                if (node === parent.left) {
                    if (parent.balance < 0) {
                        let grandparent = parent.parent;
                        if (node.balance > 0) {
                            let child = node.right;
                            rotateLeftRight(node, parent);
                            node = child;
                        } else {
                            rotateRight(node, parent);
                        }
                        repairRotation(this, node, parent, grandparent);
                        break;
                    } else if (--parent.balance === 0) {
                        break;
                    }
                } else {
                    if (parent.balance > 0) {
                        let grandparent = parent.parent;
                        if (node.balance < 0) {
                            let child = node.left;
                            rotateRightLeft(node, parent);
                            node = child;
                        } else {
                            rotateLeft(node, parent);
                        }
                        repairRotation(this, node, parent, grandparent);
                        break;
                    } else if (++parent.balance === 0) {
                        break;
                    }
                }
                node = parent;
                parent = node.parent;
            }
        }

        /**
         * This method creates a new *AVL* instance and copies the entire
         * existing state to the new instance.
         *
         * @public
         * @export
         * @return {!AVL}
         *     The new *AVL* instance with the copied state is returned.
         */
        clone() {
            const avl = new AVL(this.compare);
            avl._length = this._length;
            avl._root = cloneAVLNode(this._root);
            return avl;
        }

        /**
         * This method returns the count of *val* existing within the tree.
         *
         * @public
         * @export
         * @param {*} val
         * @return {number}
         */
        count(val) {
            if (!this._length) {
                return 0;
            }
            let node = this._root;
            while (node) {
                const compared = this.compare(val, node.val);
                if (compared === 0) {
                    return node.count;
                }
                node = compared < 0
                    ? node.left
                    : node.right;
            }
            return 0;
        }

        /**
         * @public
         * @export
         * @param {*} val
         * @param {boolean=} all = `false`
         *     Denote whether you want to delete one occurrence of *val* or
         *     all occurrences of *val* (i.e. do you want to delete the
         *     duplicates).
         * @return {boolean}
         *     The return value indicates whether *val* was found within the
         *     tree.
         */
        delete(val, all = false) {
            if (!this._length) {
                return false;
            }

            let node = this._root;
            let parent = null;
            let compared = 0;

            // delete the *val*
            while (node) {
                compared = this.compare(val, node.val);
                if (compared === 0) {
                    --this._length;
                    if (--node.count) {
                        if (!all) {
                            return true;
                        }
                        while (node.count) {
                            --node.count;
                            --this._length;
                        }
                    }
                    break;
                }
                parent = node;
                node = compared < 0
                    ? node.left
                    : node.right;
            }
            if (!node) {
                return false;
            }
            if (node.balance < 0) {
                const prev = findPrevNode(node);
                node.val = prev.val;
                node.count = prev.count;
                node = prev;
                parent = node.parent;
            } else if (node.balance > 0 || node.right) {
                const next = findNextNode(node);
                node.val = next.val;
                node.count = next.count;
                node = next;
                parent = node.parent;
            }
            if (parent.left === node) {
                parent.left = node.left || node.right;
                if (parent.left) {
                    parent.left.parent = parent;
                }
                ++parent.balance;
            } else {
                parent.right = node.left || node.right;
                if (parent.right) {
                    parent.right.parent = parent;
                }
                --parent.balance;
            }

            // rebalance the tree
            let grandparent = parent.parent;
            if (parent.balance > 1) {
                node = parent.right;
                const balance = node.balance;
                if (balance < 0) {
                    const child = node.left;
                    rotateRightLeft(node, parent);
                    node = child;
                } else {
                    rotateLeft(node, parent);
                }
                repairRotation(this, node, parent, grandparent);
                if (balance === 0) {
                    return true;
                }
            } else if (parent.balance < -1) {
                node = parent.left;
                const balance = node.balance;
                if (balance > 0) {
                    const child = node.right;
                    rotateLeftRight(node, parent);
                    node = child;
                } else {
                    rotateRight(node, parent);
                }
                repairRotation(this, node, parent, grandparent);
                if (balance === 0) {
                    return true;
                }
            } else if (parent.balance === 0) {
                node = parent;
            } else {
                return true;
            }
            parent = grandparent;
            while (parent) {
                grandparent = parent.parent;
                if (node === parent.left) {
                    if (parent.balance > 0) {
                        node = parent.right;
                        const balance = node.balance;
                        if (balance < 0) {
                            let child = node.left;
                            rotateRightLeft(node, parent);
                            node = child;
                        } else {
                            rotateLeft(node, parent);
                        }
                        repairRotation(this, node, parent, grandparent);
                        if (balance === 0) {
                            break;
                        }
                    } else if (++parent.balance > 0) {
                        break;
                    } else {
                        node = parent;
                    }
                } else {
                    if (parent.balance < 0) {
                        node = parent.left;
                        const balance = node.balance;
                        if (node.balance > 0) {
                            let child = node.right;
                            rotateLeftRight(node, parent);
                            node = child;
                        } else {
                            rotateRight(node, parent);
                        }
                        repairRotation(this, node, parent, grandparent);
                        if (balance === 0) {
                            break;
                        }
                    } else if (--parent.balance < 0) {
                        break;
                    } else {
                        node = parent;
                    }
                }
                parent = grandparent;
            }
            return true;
        }

        /**
         * This method reports whether the tree is empty.
         *
         * @public
         * @export
         * @return {boolean}
         *     If the tree is empty `true` is returned. Otherwise `false` is
         *     returned.
         */
        empty() {
            return !this._length;
        }

        /**
         * @public
         * @export
         * @param {*} val
         * @return {boolean}
         */
        has(val) {
            if (!this._length) {
                return false;
            }
            let node = this._root;
            while (node) {
                const compared = this.compare(val, node.val);
                if (compared === 0) {
                    return true;
                }
                node = compared < 0
                    ? node.left
                    : node.right;
            }
            return false;
        }

        /**
         * This method gets the current length for the *AVL* instance.
         *
         * @public
         * @export
         * @return {number}
         */
        length() {
            return this._length;
        }

        /**
         * This method returns an inorder-sorted array of the tree's values.
         *
         * @public
         * @export
         * @param {boolean=} dups = `true`
         *     Denote whether you want duplicate values to be added to the
         *     resulting array. Note that duplicate values are added adjacent
         *     to each other since they represent one node.
         * @return {!Array<*>}
         */
        inorder(dups = true) {
            const vals = [];
            if (dups) {
                saveInorderDups(this._root, vals);
            } else {
                saveInorder(this._root, vals);
            }
            return vals;
        }

        /**
         * This method returns a postorder-sorted array of the tree's values.
         *
         * @public
         * @export
         * @param {boolean=} dups = `true`
         *     Denote whether you want duplicate values to be added to the
         *     resulting array. Note that duplicate values are added adjacent
         *     to each other since they represent one node.
         * @return {!Array<*>}
         */
        postorder(dups = true) {
            const vals = [];
            if (dups) {
                savePostorderDups(this._root, vals);
            } else {
                savePostorder(this._root, vals);
            }
            return vals;
        }

        /**
         * This method returns a preorder-sorted array of the tree's values.
         *
         * @public
         * @export
         * @param {boolean=} dups = `true`
         *     Denote whether you want duplicate values to be added to the
         *     resulting array. Note that duplicate values are added adjacent
         *     to each other since they represent one node.
         * @return {!Array<*>}
         */
        preorder(dups = true) {
            const vals = [];
            if (dups) {
                savePreorderDups(this._root, vals);
            } else {
                savePreorder(this._root, vals);
            }
            return vals;
        }
    }

    /**
     * @private
     * @param {?AVLNode} node
     * @param {?AVLNode=} parent = `null`
     * @return {?AVLNode}
     */
    function cloneAVLNode(node, parent = null) {
        if (!node) {
            return null;
        }
        const clone = new AVLNode(node.val, parent);
        clone.left = cloneAVLNode(node.left, clone);
        clone.right = cloneAVLNode(node.right, clone);
        clone.count = node.count;
        clone.balance = node.balance;
        return clone;
    }

    /**
     * @param {number} a
     * @param {number} b
     * @return {number}
     */
    function defaultNumberCompare(a, b) {
        return a - b;
    }

    /**
     * @param {string} a
     * @param {string} b
     * @return {number}
     */
    function defaultStringCompare(a, b) {
        return a.localeCompare(b);
    }

    /**
     * @private
     * @param {!AVLNode} node
     * @return {!AVLNode}
     */
    function findNextNode(node) {
        node = node.right;
        while (node.left) {
            node = node.left;
        }
        return node;
    }

    /**
     * @private
     * @param {!AVLNode} node
     * @return {!AVLNode}
     */
    function findPrevNode(node) {
        node = node.left;
        while (node.right) {
            node = node.right;
        }
        return node;
    }

    /**
     * @private
     * @param {!AVL} tree
     * @param {!AVLNode} node
     * @param {!AVLNode} parent
     * @param {?AVLNode} grandparent
     * @return {void}
     */
    function repairRotation(tree, node, parent, grandparent) {
        node.parent = grandparent;
        if (!grandparent) {
            tree._root = node;
            return;
        }
        if (parent === grandparent.left) {
            grandparent.left = node;
        } else {
            grandparent.right = node;
        }
    }

    /**
     * @private
     * @param {!AVLNode} node
     * @param {!AVLNode} parent
     * @return {void}
     */
    function rotateLeft(node, parent) {
        const child = node.left;
        parent.right = child;
        if (child) {
            child.parent = parent;
        }
        node.left = parent;
        parent.parent = node;

        if (node.balance === 0) {
            --node.balance;
            --parent.balance;
        } else {
            node.balance = 0;
            parent.balance = 0;
        }
    }

    /**
     * @private
     * @param {!AVLNode} node
     * @param {!AVLNode} parent
     * @return {void}
     */
    function rotateLeftRight(node, parent) {
        const grandparent = parent;
        parent = node;
        node = parent.right;

        let child = node.left;
        parent.right = child;
        if (child) {
            child.parent = parent;
        }
        node.left = parent;
        parent.parent = node;

        child = node.right;
        grandparent.left = child;
        if (child) {
            child.parent = grandparent;
        }
        node.right = grandparent;
        grandparent.parent = node;

        if (node.balance < 0) {
            parent.balance = 0;
            grandparent.balance = 1;
        } else if (node.balance > 0) {
            parent.balance = -1;
            grandparent.balance = 0;
        } else {
            parent.balance = 0;
            grandparent.balance = 0;
        }
        node.balance = 0;
    }

    /**
     * @private
     * @param {!AVLNode} node
     * @param {!AVLNode} parent
     * @return {void}
     */
    function rotateRight(node, parent) {
        const child = node.right;
        parent.left = child;
        if (child) {
            child.parent = parent;
        }
        node.right = parent;
        parent.parent = node;

        if (node.balance === 0) {
            ++node.balance;
            ++parent.balance;
        } else {
            node.balance = 0;
            parent.balance = 0;
        }
    }

    /**
     * @private
     * @param {!AVLNode} node
     * @param {!AVLNode} parent
     * @return {void}
     */
    function rotateRightLeft(node, parent) {
        const grandparent = parent;
        parent = node;
        node = parent.left;

        let child = node.right;
        parent.left = child;
        if (child) {
            child.parent = parent;
        }
        node.right = parent;
        parent.parent = node;

        child = node.left;
        grandparent.right = child;
        if (child) {
            child.parent = grandparent;
        }
        node.left = grandparent;
        grandparent.parent = node;

        if (node.balance < 0) {
            parent.balance = 1;
            grandparent.balance = 0;
        } else if (node.balance > 0) {
            parent.balance = 0;
            grandparent.balance = -1;
        } else {
            parent.balance = 0;
            grandparent.balance = 0;
        }
        node.balance = 0;
    }

    /**
     * @private
     * @param {?AVLNode} node
     * @param {!Array<*>} vals
     * @return {void}
     */
    function saveInorder(node, vals) {
        if (!node) {
            return;
        }
        saveInorder(node.left, vals);
        vals.push(node.val);
        saveInorder(node.right, vals);
    }

    /**
     * @private
     * @param {?AVLNode} node
     * @param {!Array<*>} vals
     * @return {void}
     */
    function saveInorderDups(node, vals) {
        if (!node) {
            return;
        }
        saveInorderDups(node.left, vals);
        let count = node.count;
        while (count--) {
            vals.push(node.val);
        }
        saveInorderDups(node.right, vals);
    }

    /**
     * @private
     * @param {?AVLNode} node
     * @param {!Array<*>} vals
     * @return {void}
     */
    function savePostorder(node, vals) {
        if (!node) {
            return;
        }
        savePostorder(node.left, vals);
        savePostorder(node.right, vals);
        vals.push(node.val);
    }

    /**
     * @private
     * @param {?AVLNode} node
     * @param {!Array<*>} vals
     * @return {void}
     */
    function savePostorderDups(node, vals) {
        if (!node) {
            return;
        }
        savePostorderDups(node.left, vals);
        savePostorderDups(node.right, vals);
        let count = node.count;
        while (count--) {
            vals.push(node.val);
        }
    }

    /**
     * @private
     * @param {?AVLNode} node
     * @param {!Array<*>} vals
     * @return {void}
     */
    function savePreorder(node, vals) {
        if (!node) {
            return;
        }
        vals.push(node.val);
        savePreorder(node.left, vals);
        savePreorder(node.right, vals);
    }

    /**
     * @private
     * @param {?AVLNode} node
     * @param {!Array<*>} vals
     * @return {void}
     */
    function savePreorderDups(node, vals) {
        if (!node) {
            return;
        }
        let count = node.count;
        while (count--) {
            vals.push(node.val);
        }
        savePreorderDups(node.left, vals);
        savePreorderDups(node.right, vals);
    }

    return AVL;
})();

module.exports = AVL;
