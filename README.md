# loose-interleave

[![Build Status](https://img.shields.io/travis/jarofghosts/loose-interleave.svg?style=flat-square)](https://travis-ci.org/jarofghosts/loose-interleave)
[![npm install](https://img.shields.io/npm/dm/loose-interleave.svg?style=flat-square)](https://www.npmjs.org/package/loose-interleave)
[![npm version](https://img.shields.io/npm/v/loose-interleave.svg?style=flat-square)](https://www.npmjs.org/package/loose-interleave)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/feross/standard)
[![License](https://img.shields.io/npm/l/loose-interleave.svg?style=flat-square)](https://github.com/jarofghosts/loose-interleave/blob/master/LICENSE)

interleave elements of input arrays until all elements are used

## example

```js
var interleave = require('loose-interleave')

interleave([1, 3], [2])
// => [1, 2, 3]
```

the module accepts multiple inputs and continues until all elements are used. for example,

```javascript
var a1 = [1, 4]
var a2 = [2, 5, 6]
var a3 = [3]

interleave(a1, a2, a3)
// => [1, 2, 3, 4, 5, 6]
```

## see also

[`interleave-array`](https://github.com/jarofghosts/interleave-array) is very similar but truncates the output to the length of the shortest input.

## license

MIT
