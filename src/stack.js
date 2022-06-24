/**
 * Cedge
 * @file The *Stack* class.
 * @version 1.0.0.alpha
 * @see [Cedge](https://github.com/imaginate/cedge)
 *
 * @author Adam Smith <imagineadamsmith@gmail.com> (https://github.com/imaginate)
 * @copyright 2022 Adam A Smith <imagineadamsmith@gmail.com> (https://github.com/imaginate)
 *
 * @see [JSDoc3](https://jsdoc.app)
 * @see [Closure Compiler JSDoc Syntax](https://developers.google.com/closure/compiler/docs/js-for-compiler)
 */

var Stack = (function() {

    class Stack {
        /**
         * The *Stack* constructor. You may provide an array of values to
         * initiate the *Stack* instance with. If you do provide initial
         * values they are pushed to the stack in ascending order (i.e. the
         * last value in the array is the top value).
         *
         * @public
         * @param {!Array<*>=} vals = `[]`
         * @constructor
         */
        constructor(vals = []) {
            /**
             * This is the internal containing array for the stack. Do **not**
             * overwrite this property. It is meant for internal use only.
             *
             * @private
             * @export
             * @const {!Array<*>}
             */
            this._stack = vals.slice();
        }

        /**
         * This method creates a new *Stack* instance and copies the entire
         * existing state to the new instance.
         *
         * @public
         * @export
         * @return {!Stack}
         *     The new *Stack* instance with the copied state is returned.
         */
        clone() {
            return new Stack(this._stack);
        }

        /**
         * This method reports whether the stack is empty.
         *
         * @public
         * @export
         * @return {boolean}
         *     If the stack is empty `true` is returned. Otherwise `false` is
         *     returned.
         */
        empty() {
            return !this._stack.length;
        }

        /**
         * This method gets the current length of the stack.
         *
         * @public
         * @export
         * @return {number}
         */
        length() {
            return this._stack.length;
        }

        /**
         * This method removes the value at the top of the stack (i.e. the
         * last value pushed to the stack) and returns the removed value.
         *
         * @public
         * @export
         * @return {*}
         *     The value at the top of the stack (i.e. the last value pushed
         *     to the stack). If the stack is empty `undefined` is returned.
         */
        pop() {
            return this._stack.length
                ? this._stack.pop()
                : undefined;
        }

        /**
         * This method adds a value to the top of the stack.
         *
         * @public
         * @export
         * @param {*} val
         * @return {void}
         */
        push(val) {
            this._stack.push(val);
        }

        /**
         * This method gets the value at the top of the stack (i.e. the last
         * value pushed to the stack).
         *
         * @public
         * @export
         * @return {*}
         */
        top() {
            return this._stack.length
                ? this._stack[this._stack.length - 1]
                : undefined;
        }
    }

    return Stack;
})();

module.exports = Stack;
