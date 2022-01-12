
// You should implement your task here.

module.exports = function towelSort (matrix) {
  return matrix ? matrix.map((element,index) => index % 2 ? element.reverse() : element).flat() : [];
}
``