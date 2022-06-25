# Cedge API

The API for each Cedge class.

- AVL
  - [AVL.prototype.constructor](#user-content-avl-prototype-constructor)
  - [AVL.prototype.add](#user-content-avl-prototype-add)
  - [AVL.prototype.clone](#user-content-avl-prototype-clone)
  - [AVL.prototype.count](#user-content-avl-prototype-count)
  - [AVL.prototype.delete](#user-content-avl-prototype-delete)
  - [AVL.prototype.empty](#user-content-avl-prototype-empty)
  - [AVL.prototype.has](#user-content-avl-prototype-has)
  - [AVL.prototype.length](#user-content-avl-prototype-length)
  - [AVL.prototype.inorder](#user-content-avl-prototype-inorder)
  - [AVL.prototype.postorder](#user-content-avl-prototype-postorder)
  - [AVL.prototype.preorder](#user-content-avl-prototype-preorder)
- Deque
  - [Deque.prototype.constructor](#user-content-deque-prototype-constructor)
  - [Deque.prototype.back](#user-content-deque-prototype-back)
  - [Deque.prototype.clone](#user-content-deque-prototype-clone)
  - [Deque.prototype.empty](#user-content-deque-prototype-empty)
  - [Deque.prototype.front](#user-content-deque-prototype-front)
  - [Deque.prototype.length](#user-content-deque-prototype-length)
  - [Deque.prototype.maxLength](#user-content-deque-prototype-maxLength)
  - [Deque.prototype.pop](#user-content-deque-prototype-pop)
  - [Deque.prototype.push](#user-content-deque-prototype-push)
  - [Deque.prototype.shift](#user-content-deque-prototype-shift)
  - [Deque.prototype.unshift](#user-content-deque-prototype-unshift)
- Heap
  - [Heap.prototype.constructor](#user-content-heap-prototype-constructor)
  - [Heap.prototype.empty](#user-content-heap-prototype-empty)
  - [Heap.prototype.length](#user-content-heap-prototype-length)
  - [Heap.prototype.maxLength](#user-content-heap-prototype-maxLength)
  - [Heap.prototype.pop](#user-content-heap-prototype-pop)
  - [Heap.prototype.push](#user-content-heap-prototype-push)
  - [Heap.prototype.top](#user-content-heap-prototype-top)
- Queue
  - [Queue.prototype.constructor](#user-content-queue-prototype-constructor)
  - [Queue.prototype.back](#user-content-queue-prototype-back)
  - [Queue.prototype.empty](#user-content-queue-prototype-empty)
  - [Queue.prototype.front](#user-content-queue-prototype-front)
  - [Queue.prototype.length](#user-content-queue-prototype-length)
  - [Queue.prototype.pop](#user-content-queue-prototype-pop)
  - [Queue.prototype.push](#user-content-queue-prototype-push)
  - [Queue.prototype.shift](#user-content-queue-prototype-shift)
  - [Queue.prototype.unshift](#user-content-queue-prototype-unshift)
- Stack
  - [Stack.prototype.constructor](#user-content-stack-prototype-constructor)
  - [Stack.prototype.empty](#user-content-stack-prototype-empty)
  - [Stack.prototype.length](#user-content-stack-prototype-length)
  - [Stack.prototype.pop](#user-content-stack-prototype-pop)
  - [Stack.prototype.push](#user-content-stack-prototype-push)
  - [Stack.prototype.top](#user-content-stack-prototype-top)

<a name="avl-prototype-constructor"></a>
## AVL.prototype.constructor

The *AVL* constructor. This is a self-balancing binary search tree. You may
provide an array of initial values. You may provide a custom comparator
method.

#### Parameters

- ***vals*** ` !Array<*> ` **optional** default = `[]`<br/>
  If *vals* is type `"function"` or `"string"` the *compare* parameter is set
  to *vals*, and *vals* is set to `[]`.
- ***compare*** ` (!function(*, *): number)|string ` **optional** default = `"number"`<br/>
  The method used to determine the order of the values. Must return a number
  less than `0` to sort *a* before *b*, equal to `0` to increase the count of
  the existing value (i.e. duplicate values are not saved directly to the
  tree; instead they increase an internal counter saved within the original
  value's node; so do **not** return `0` unless you can return the original's
  value in place of the equivalent's value), or greater than `0` to sort *b*
  before *a*. The default comparators are `"number"` which is `a - b` and
  `"string"` which is `a.localeCompare(b)`.

<a name="avl-prototype-add"></a>
## AVL.prototype.add

#### Parameters

- ***val*** ` * `

#### Returns

` void `

<a name="avl-prototype-clone"></a>
## AVL.prototype.clone

This method creates a new *AVL* instance and copies the entire existing state
to the new instance.

#### Returns

` !AVL `<br/>
The new *AVL* instance with the copied state is returned.

<a name="avl-prototype-count"></a>
## AVL.prototype.count

This method returns the count of *val* existing within the tree.

#### Parameters

- ***val*** ` * `

#### Returns

` number `

<a name="avl-prototype-delete"></a>
## AVL.prototype.delete

#### Parameters

- ***val*** ` * `
- ***all*** ` boolean ` **optional** default = `false`<br/>
  Denote whether you want to delete one occurrence of *val* or all occurrences
  of *val* (i.e. do you want to delete the duplicates).

#### Returns

` boolean `<br/>
The return value indicates whether *val* was found within the tree.

<a name="avl-prototype-empty"></a>
## AVL.prototype.empty

This method reports whether the tree is empty.

#### Returns

` boolean `<br/>
If the tree is empty `true` is returned. Otherwise `false` is returned.

<a name="avl-prototype-has"></a>
## AVL.prototype.has

#### Parameters

- ***val*** ` * `

#### Returns

` boolean `

<a name="avl-prototype-length"></a>
## AVL.prototype.length

This method gets the current length for the *AVL* instance.

#### Returns

` number `

<a name="avl-prototype-inorder"></a>
## AVL.prototype.inorder

This method returns an inorder-sorted array of the tree's values.

#### Parameters

- ***dups*** ` boolean ` **optional** default = `true`<br/>
  Denote whether you want duplicate values to be added to the resulting array.
  Note that duplicate values are added adjacent to each other since they
  represent one node.

#### Returns

` !Array<*> `

<a name="avl-prototype-postorder"></a>
## AVL.prototype.postorder

This method returns a postorder-sorted array of the tree's values.

#### Parameters

- ***dups*** ` boolean ` **optional** default = `true`<br/>
  Denote whether you want duplicate values to be added to the resulting array.
  Note that duplicate values are added adjacent to each other since they
  represent one node.

#### Returns

` !Array<*> `

<a name="avl-prototype-preorder"></a>
## AVL.prototype.preorder

This method returns a preorder-sorted array of the tree's values.

#### Parameters

- ***dups*** ` boolean ` **optional** default = `true`<br/>
  Denote whether you want duplicate values to be added to the resulting array.
  Note that duplicate values are added adjacent to each other since they
  represent one node.

#### Returns

` !Array<*> `

<a name="deque-prototype-constructor"></a>
## Deque.prototype.constructor

The *Deque* constructor. This is a double-ended queue. You may provide an
array of values which it pushes from index zero (i.e. index zero is the head)
to the deque. If the *maxLength* parameter is defined the length of the deque
is limited to *maxLength*. If limited the deque will purge the tail once the
length of the deque exceeds the *maxLength*.

#### Parameters

- ***vals*** ` !Array<*> ` **optional** default = `[]`<br/>
  If *vals* is type `"number"` the *maxLength* parameter is set to *vals*, and
  *vals* is set to `[]`.
- ***maxLength*** ` number ` **optional** default = `Infinity`<br/>
  *maxLength* is the maximum values the deque can hold. It will cut the tail
  before adding a new value when the maximum length is reached.

<a name="deque-prototype-back"></a>
## Deque.prototype.back

This method gets the value for the tail of the *Deque* instance.

#### Returns

` * `

<a name="deque-prototype-clone"></a>
## Deque.prototype.clone

This method creates a new *Deque* instance and copies the entire existing
state to the new instance.

#### Returns

` !Deque `<br/>
The new *Deque* instance with the copied state is returned.

<a name="deque-prototype-empty"></a>
## Deque.prototype.empty

This method reports whether the deque is empty.

#### Returns

` boolean `<br/>
If the deque is empty `true` is returned. Otherwise `false` is returned.

<a name="deque-prototype-front"></a>
## Deque.prototype.front

This method gets the value for the head of the *Deque* instance.

#### Returns

` * `

<a name="deque-prototype-length"></a>
## Deque.prototype.length

This method gets the current length for the *Deque* instance.

#### Returns

` number `

<a name="deque-prototype-maxlength"></a>
## Deque.prototype.maxLength

This method gets the maximum length for the *Deque* instance.

#### Returns

` number `

<a name="deque-prototype-pop"></a>
## Deque.prototype.pop

#### Returns

` * `

<a name="deque-prototype-push"></a>
## Deque.prototype.push

#### Parameters

- ***val*** ` * `

#### Returns

` void `

<a name="deque-prototype-shift"></a>
## Deque.prototype.shift

#### Returns

` * `

<a name="deque-prototype-unshift"></a>
## Deque.prototype.unshift

#### Parameters

- ***val*** ` * `

#### Returns

` void `

<a name="heap-prototype-constructor"></a>
## Heap.prototype.constructor

The *Heap* constructor. You may provide an unsorted array of values which it
clones and then heapifies in linear time (faster than individually pushing
each value into an empty heap which takes `O(n*log(n)) time)`. You may provide
a custom comparator method. You may provide a limit for the length of *Heap*.
If a limit is provided the heap will only keep the lowest *maxLength* count of
the values provided and will only add new values that would sort lower than
the top value. Note that limiting the heap increases the constructor's time
complexity to `O((n-maxLength)*log(n))`.

#### Parameters

- ***vals*** ` !Array<*> ` **optional** default = `[]`<br/>
  If *vals* is type `"function"` or `"string"` the *compare* parameter is set
  to *vals*, and *vals* is set to `[]`. If *vals* is type `"number"` the
  *maxLength* parameter is set to *vals*, and *vals* is set to `[]`.
- ***compare*** ` (!function(*, *): number)|string ` **optional** default = `"min-number"`<br/>
  If *compare* is type `"number"` the *maxLength* parameter is set to
  *compare*, and *compare* is set to `"number"`. *compare* is the method used
  to determine the order of the values. It must return a number less than or
  equal to `0` to sort *a* before *b* and a number greater than `0` to sort
  *b* before *a*. If *maxLength* is set *compare* decides if a value can stay
  or must go (the top value(s) is always cut). The default comparators are
  `"min-number"` which is `a - b`, `"max-number"` which is `b - a`,
  `"min-string"` which is `a.localeCompare(b)`, and `"max-string"` which is
  `b.localeCompare(a)`.
- ***maxLength*** ` number ` **optional** default = `Infinity`<br/>
  *maxLength* is the maximum values the heap can hold. It will only keep the
  lowest values within the heap (i.e. the top is cut).

<a name="heap-prototype-empty"></a>
## Heap.prototype.empty

This method reports whether the heap is empty.

#### Returns

` boolean `<br/>
If the heap is empty `true` is returned. Otherwise `false` is returned.

<a name="heap-prototype-length"></a>
## Heap.prototype.length

This method gets the current length of the *Heap* instance.

#### Returns

` number `

<a name="heap-prototype-maxlength"></a>
## Heap.prototype.maxLength

This method gets the maximum length of the *Heap* instance.

#### Returns

` number `

<a name="heap-prototype-pop"></a>
## Heap.prototype.pop

#### Returns

` * `

<a name="heap-prototype-push"></a>
## Heap.prototype.push

#### Parameters

- ***val*** ` * `

#### Returns

` void `

<a name="heap-prototype-top"></a>
## Heap.prototype.top

#### Returns

` * `

<a name="queue-prototype-constructor"></a>
## Queue.prototype.constructor

The *Queue* constructor (named *MyQueue* when copying for competitive
programming use to avoid a name collision with LeetCode's public *Queue*
class). You may provide an array of values which it pushes from index zero
(i.e. index zero is the head) to the queue. Note that *Queue.prototype.pop*
has a time complexity of `O(n)`. Use *Deque* to get a time complexity of
`O(1)` for *queue.pop*.

#### Parameters

- ***vals*** ` !Array<*> ` **optional** default = `[]`

<a name="queue-prototype-back"></a>
## Queue.prototype.back

This method gets the value for the tail of the *Queue* instance.

#### Returns

` * `

<a name="queue-prototype-empty"></a>
## Queue.prototype.empty

This method reports whether the queue is empty.

#### Returns

` boolean `<br/>
If the queue is empty `true` is returned. Otherwise `false` is returned.

<a name="queue-prototype-front"></a>
## Queue.prototype.front

This method gets the value for the head of the *Queue* instance.

#### Returns

` * `

<a name="queue-prototype-length"></a>
## Queue.prototype.length

This method gets the current length of the *Queue* instance.

#### Returns

` number `

<a name="queue-prototype-pop"></a>
## Queue.prototype.pop

#### Returns

` * `

<a name="queue-prototype-push"></a>
## Queue.prototype.push

#### Parameters

- ***val*** ` * `

#### Returns

` void `

<a name="queue-prototype-shift"></a>
## Queue.prototype.shift

#### Returns

` * `

<a name="queue-prototype-unshift"></a>
## Queue.prototype.unshift

#### Parameters

- ***val*** ` * `

#### Returns

` void `

<a name="stack-prototype-constructor"></a>
## Stack.prototype.constructor

The *Stack* constructor. You may provide an array of values to initiate the
*Stack* instance with. If you do provide initial values they are pushed to the
stack in ascending order (i.e. the last value in the array is the top value).

#### Parameters

- ***vals*** ` !Array<*> ` **optional** default = `[]`

<a name="stack-prototype-empty"></a>
## Stack.prototype.empty

This method reports whether the stack is empty.

#### Returns

` boolean `<br/>
If the stack is empty `true` is returned. Otherwise `false` is returned.

<a name="stack-prototype-length"></a>
## Stack.prototype.length

This method gets the current length of the stack.

#### Returns

` number `

<a name="stack-prototype-pop"></a>
## Stack.prototype.pop

This method removes the value at the top of the stack (i.e. the last value
pushed to the stack) and returns the removed value.

#### Returns

` * `<br/>
The value at the top of the stack (i.e. the last value pushed to the stack).
If the stack is empty `undefined` is returned.

<a name="stack-prototype-push"></a>
## Stack.prototype.push

This method adds a value to the top of the stack.

#### Parameters

- ***val*** ` * `

#### Returns

` void `

<a name="stack-prototype-top"></a>
## Stack.prototype.top

This method gets the value at the top of the stack (i.e. the last value pushed
to the stack).

#### Returns

` * `

