# Cedge API

The API for each Cedge class.

- [AVL.prototype.constructor](#avlprototypeconstructor)
- [AVL.prototype.add](#avlprototypeadd)
- [AVL.prototype.count](#avlprototypecount)
- [AVL.prototype.delete](#avlprototypedelete)
- [AVL.prototype.has](#avlprototypehas)
- [AVL.prototype.length](#avlprototypelength)
- [AVL.prototype.inorder](#avlprototypeinorder)
- [AVL.prototype.postorder](#avlprototypepostorder)
- [AVL.prototype.preorder](#avlprototypepreorder)
- [Deque.prototype.constructor](#dequeprototypeconstructor)
- [Deque.prototype.back](#dequeprototypeback)
- [Deque.prototype.front](#dequeprototypefront)
- [Deque.prototype.length](#dequeprototypelength)
- [Deque.prototype.maxLength](#dequeprototypemaxLength)
- [Deque.prototype.pop](#dequeprototypepop)
- [Deque.prototype.push](#dequeprototypepush)
- [Deque.prototype.shift](#dequeprototypeshift)
- [Deque.prototype.unshift](#dequeprototypeunshift)
- [Heap.prototype.constructor](#heapprototypeconstructor)
- [Heap.prototype.length](#heapprototypelength)
- [Heap.prototype.maxLength](#heapprototypemaxLength)
- [Heap.prototype.pop](#heapprototypepop)
- [Heap.prototype.push](#heapprototypepush)
- [Heap.prototype.top](#heapprototypetop)
- [Queue.prototype.constructor](#queueprototypeconstructor)
- [Queue.prototype.back](#queueprototypeback)
- [Queue.prototype.front](#queueprototypefront)
- [Queue.prototype.length](#queueprototypelength)
- [Queue.prototype.pop](#queueprototypepop)
- [Queue.prototype.push](#queueprototypepush)
- [Queue.prototype.shift](#queueprototypeshift)
- [Queue.prototype.unshift](#queueprototypeunshift)

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

## AVL.prototype.add

#### Parameters

- ***val*** ` * `

#### Returns

` void `

## AVL.prototype.count

This method returns the count of *val* existing within the tree.

#### Parameters

- ***val*** ` * `

#### Returns

` number `

## AVL.prototype.delete

#### Parameters

- ***val*** ` * `
- ***all*** ` boolean ` **optional** default = `false`<br/>
  Denote whether you want to delete one occurrence of *val* or all occurrences
  of *val* (i.e. do you want to delete the duplicates).

#### Returns

` boolean `<br/>
The return value indicates whether *val* was found within the tree.

## AVL.prototype.has

#### Parameters

- ***val*** ` * `

#### Returns

` boolean `

## AVL.prototype.length

This method gets the current length for the *AVL* instance.

#### Returns

` number `

## AVL.prototype.inorder

This method returns an inorder-sorted array of the tree's values.

#### Parameters

- ***dups*** ` boolean ` **optional** default = `true`<br/>
  Denote whether you want duplicate values to be added to the resulting array.
  Note that duplicate values are added adjacent to each other since they
  represent one node.

#### Returns

` !Array<*> `

## AVL.prototype.postorder

This method returns a postorder-sorted array of the tree's values.

#### Parameters

- ***dups*** ` boolean ` **optional** default = `true`<br/>
  Denote whether you want duplicate values to be added to the resulting array.
  Note that duplicate values are added adjacent to each other since they
  represent one node.

#### Returns

` !Array<*> `

## AVL.prototype.preorder

This method returns a preorder-sorted array of the tree's values.

#### Parameters

- ***dups*** ` boolean ` **optional** default = `true`<br/>
  Denote whether you want duplicate values to be added to the resulting array.
  Note that duplicate values are added adjacent to each other since they
  represent one node.

#### Returns

` !Array<*> `

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

## Deque.prototype.back

This method gets the value for the tail of the *Deque* instance.

#### Returns

` * `

## Deque.prototype.front

This method gets the value for the head of the *Deque* instance.

#### Returns

` * `

## Deque.prototype.length

This method gets the current length for the *Deque* instance.

#### Returns

` number `

## Deque.prototype.maxLength

This method gets the maximum length for the *Deque* instance.

#### Returns

` number `

## Deque.prototype.pop

#### Returns

` * `

## Deque.prototype.push

#### Parameters

- ***val*** ` * `

#### Returns

` void `

## Deque.prototype.shift

#### Returns

` * `

## Deque.prototype.unshift

#### Parameters

- ***val*** ` * `

#### Returns

` void `

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

## Heap.prototype.length

This method gets the current length of the *Heap* instance.

#### Returns

` number `

## Heap.prototype.maxLength

This method gets the maximum length of the *Heap* instance.

#### Returns

` number `

## Heap.prototype.pop

#### Returns

` * `

## Heap.prototype.push

#### Parameters

- ***val*** ` * `

#### Returns

` void `

## Heap.prototype.top

#### Returns

` * `

## Queue.prototype.constructor

The *Queue* constructor (named *MyQueue* when copying for competitive
programming use to avoid a name collision with LeetCode's public *Queue*
class). You may provide an array of values which it pushes from index zero
(i.e. index zero is the head) to the queue. Note that *Queue.prototype.pop*
has a time complexity of `O(n)`. Use *Deque* to get a time complexity of
`O(1)` for *queue.pop*.

#### Parameters

- ***vals*** ` !Array<*> ` **optional** default = `[]`

## Queue.prototype.back

This method gets the value for the tail of the *Queue* instance.

#### Returns

` * `

## Queue.prototype.front

This method gets the value for the head of the *Queue* instance.

#### Returns

` * `

## Queue.prototype.length

This method gets the current length of the *Queue* instance.

#### Returns

` number `

## Queue.prototype.pop

#### Returns

` * `

## Queue.prototype.push

#### Parameters

- ***val*** ` * `

#### Returns

` void `

## Queue.prototype.shift

#### Returns

` * `

## Queue.prototype.unshift

#### Parameters

- ***val*** ` * `

#### Returns

` void `

