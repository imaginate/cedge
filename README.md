# Cedge ![tests outcome](https://github.com/imaginate/cedge/actions/workflows/test.yml/badge.svg) ![coverage](https://img.shields.io/badge/coverage-91%25-brightgreen.svg?style=flat) ![version](https://img.shields.io/badge/version-1.0.0--beta-brightgreen.svg?style=flat)

Cedge is a collection of major data structures missing from the standard
JavaScript library that are designed for competitive programming. The name
Cedge is a portmanteau of the words *competitive* and *edge*, and as it
implies Cedge will give you a competitive edge for whatever JavaScript
programming you are doing. Cedge is available for [Node.js](#user-content-node-js)
and [competitive programming](#user-content-competitive-programming). If
desired a distributable for browsers can be added. Send an [email](mailto:imagineadamsmith@gmail.com)
to ask for a browser distributable.

At present the supported data structures are:
- **[AVL](https://github.com/imaginate/cedge/blob/master/API.md#user-content-avl-prototype-constructor)** <br/>
  A self-balancing binary search tree that stores any type of data and allows
  you to provide a custom comparator for non-standard data or a different
  desired outcome. It includes inorder, preorder, and postorder outputs along
  with an includes and amount of verifications.
- **[Deque](https://github.com/imaginate/cedge/blob/master/API.md#user-content-deque-prototype-constructor)** <br/>
  A double-ended queue that stores any type of data desired and allows you to
  set a limit to the amount of data stored (e.g. ideal for an LRU cache).
- **[Heap](https://github.com/imaginate/cedge/blob/master/API.md#user-content-heap-prototype-constructor)** <br/>
  A minimum or maximum priority queue that stores any type of data, allows you
  to use a custom comparator for non-standard data or a different desired
  outcome, and allows you to set a limit to the amount of data stored.
- **[Queue](https://github.com/imaginate/cedge/blob/master/API.md#user-content-queue-prototype-constructor)** <br/>
  A queue that stores any type of data. It also includes *pop*, *push*,
  *shift*, and *unshift* rather than just the standard *enqueue* and *dequeue*
  (note that *Queue.prototype.pop* runs in `O(n)` time whereas
  *Deque.prototype.pop* runs in `O(1)` time).
- **[Stack](https://github.com/imaginate/cedge/blob/master/API.md#user-content-stack-prototype-constructor)** <br/>
  A stack that stores any type of data. It offers core stack methods like
  *Stack.prototype.top* and *Stack.prototype.empty* that an *Array*
  implementation is missing.

<a name="node-js"></a>
## Node.js

```sh
npm install cedge
```

```js
const cedge = require('cedge');
const avl = new cedge.AVL(...);
const deque = new cedge.Deque(...);
const heap = new cedge.Heap(...);
const queue = new cedge.Queue(...);
const stack = new cedge.Stack(...);
```

<a name="competitive-programming"></a>
## Competitive Programming

This method requires `bash`, GNU `sed`, `git`, and `xclip`. First run this
installation script.

```sh
# install any missing requirements
#   sudo [apt-get|dnf|...] install [xclip|...]

# cd to wherever you would like to store the cedge repository
git clone https://github.com/imaginate/cedge.git

# save this function for future use
cat <<'EOF' >> ~/.bashrc

##############################################################################
# This function enables you to quickly copy a Cedge JavaScript data structure
# so that you may paste it into your competitive programming editor. You may
# paste the copied code below the JavaScript function that holds your solution
# and reference the data structure class as long as any reference to the class
# is not immediately executed. Otherwise you would need to paste the code
# before the immediately executed expression. Also note when copying the
# `Queue` class that due to a collision in LeetCode you must use the name
# `MyQueue` instead of `Queue`. LeetCode pollutes the environment with a
# disappointing queue class implementation.
#
# @param {string} srcfile
# @return {void}
##############################################################################
c()
{
  cat "$1" \
    | sed -e '/^module\.exports/ d' \
    | xclip -selection clipboard -i
}
EOF
```

Next all you need to do any time you have a competition is navigate to the
`src` directory within your saved copy of the Cedge repository, use the `c`
function in your terminal to copy the needed class, and paste it in your
competition's editor. Note to use the `c` function immediately after
installation you need to run `. ~/.bashrc` to reload the config file (it is
automatically loaded every time you start a new user shell).

```sh
cd cedge/src
c queue.js
```

## Participate

Feel free to make a pull request (make sure that all existing tests pass and
any new features you add have accompanying tests written for them). It is
recommended that you contact the project owner, Adam, to ask if a potential
new feature would be accepted before you go through the effort to develop it.

- [Issue/Suggestion](https://github.com/imaginate/cedge/issues)
- [Contact](mailto:imagineadamsmith@gmail.com)

