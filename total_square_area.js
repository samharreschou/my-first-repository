let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

console.log(totalArea(rectangles));    // 141

// steps:
// instantiate accumulator
// iterate through array
// at each element in the array add to accumulator product of two elements of each subarray
// return accumulator



function totalArea2(rectArr) {
  return rectArr.reduce((prev, curr) => prev + (curr[0]*curr[1]),0)
};

function totalArea(rectArr) {
  let areas = rectArr.map(elem => elem[0] * elem[1]);
  return areas.reduce((prev, curr) => prev + curr);
}

function totalSquareArea2(rectArr) {
  return totalArea(rectArr.filter(elem => elem[0] === elem[1]))
};

function totalSquareArea(rectArr) {
  let squares = rectArr.filter(rect => rect[0] === rect[1]);
  let areasOfSquares = squares.map(square => square[0] * square[1]);
  let sumOfSquareAreas = areasOfSquares.reduce((prev, curr) => prev + curr);
  return sumOfSquareAreas;
};


console.log(totalSquareArea(rectangles))
