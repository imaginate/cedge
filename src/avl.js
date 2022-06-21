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
     * @private
     * @param {*} val
     *     Must be a comparable value.
     * @param {?AVLNode=} parent
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
     * @param {!Array<*>=} vals = `[]`
     *     If `vals` is type `function` or `string` the `compare` parameter is
     *     set to `vals`, and `vals` is set to `[]`.
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
                ? defaultStringCompare
                : defaultNumberCompare;
        }

        /**
         * This is the internal pointer to the root of the tree. Do **not**
         * overwrite this property. It is meant for internal use only.
         *
         * @private
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
         * This is the internal value for the length of the tree. Do **not**
         * overwrite this property. It is meant for internal use only.
         *
         * @private
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

        // insert the `val`
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
     * @public
     * @export
     * @param {*} val
     * @param {boolean=} all = `false`
     *     Denote whether you want to delete one occurrence of `val` or all
     *     occurrences of `val` (i.e. do you want to delete the duplicates).
     * @return {boolean}
     *     The return value indicates whether `val` was found within the tree.
     */
    delete(val, all = false) {
        if (!this._length) {
            return false;
        }

        let node = this._root;
        let parent = null;
        let compared = 0;

        // delete the `val`
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
        } else if (parent.balance < 1) {
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
                } else if (++parent.balance === 0) {
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
                } else if (--parent.balance === 0) {
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
            let compared = this.compare(val, node.val);
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
     * This method gets the current length for the `AVL` instance.
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
     * @return {!Array<*>}
     */
    inorder() {
    }

    /**
     * This method returns a postorder-sorted array of the tree's values.
     *
     * @public
     * @export
     * @return {!Array<*>}
     */
    postorder() {
    }

    /**
     * This method returns a preorder-sorted array of the tree's values.
     *
     * @public
     * @export
     * @return {!Array<*>}
     */
    preorder() {
    }
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

module.exports = AVL;
