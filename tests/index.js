var test = require('tape')

var interleave = require('../')

test('interleaves regardless of length', function (t) {
  t.deepEqual(interleave([1, 3], [2]), [1, 2, 3])
  t.end()
})

test('takes lots of arrays', function (t) {
  var a1 = [1, 4]
  var a2 = [2, 5, 6]
  var a3 = [3]

  t.deepEqual(interleave(a1, a2, a3), [1, 2, 3, 4, 5, 6])
  t.end()
})
