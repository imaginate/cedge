/**
 * Cedge
 * @file The exported `cedge` container. It has each Cedge class for its
 *     properties. Note that the `cedge` object does not use a prototype (i.e.
 *     methods like `Object.prototype.toString` are not available and the
 *     `Object.prototype.hasOwnProperty` method is not needed because the
 *     object has no inherited prototypical properties to filter out).
 * @version 1.0.0.alpha
 * @see [Cedge](https://github.com/imaginate/cedge)
 *
 * @author Adam Smith <imagineadamsmith@gmail.com> (https://github.com/imaginate)
 * @copyright 2022 Adam A Smith <imagineadamsmith@gmail.com> (https://github.com/imaginate)
 *
 * @see [JSDoc3](https://jsdoc.app)
 * @see [Closure Compiler JSDoc Syntax](https://developers.google.com/closure/compiler/docs/js-for-compiler)
 */

/**
 * @public
 */
const cedge = Object.create(null);

/**
 * @public
 * @export
 */
cedge.AVL = require('./avl.js');

/**
 * @public
 * @export
 */
cedge.Deque = require('./deque.js');

/**
 * @public
 * @export
 */
cedge.Heap = require('./heap.js');

/**
 * @public
 * @export
 */
cedge.Queue = require('./queue.js');

/**
 * @public
 * @export
 */
cedge.Stack = require('./stack.js');

module.exports = cedge;
