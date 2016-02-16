module.exports = looseInterleave

function looseInterleave () {
  var arrs = [].slice.call(arguments)
  var maxLength = Math.max.apply(Math, arrs.map(function (arr) {
    return arr.length
  }))

  var result = []

  for (var i = 0; i < maxLength; ++i) {
    arrs.forEach(function (arr) {
      if (arr.length > i) {
        result.push(arr[i])
      }
    })
  }

  return result
}
