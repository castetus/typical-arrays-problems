
function customSort(array){
  return array.sort(function(a, b){
    return a - b
  })
}
exports.min = function min (array) {
  if (!array || array.length === 0){
    return 0
  }
  return customSort(array)[0]
}

exports.max = function max (array) {
  if (!array || array.length === 0){
    return 0
  }
  return customSort(array)[array.length - 1]
}

exports.avg = function avg (array) {
  if (!array || array.length === 0){
    return 0
  }
  return array.reduce((acc, cur) => {
    return acc + cur
  }) / array.length
}
