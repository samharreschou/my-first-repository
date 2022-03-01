

//steps:
//map onto each array to repeat the 0th element 1th element number of times
//join all of those arrays together (perhaps using reduce?)
//or make into one giant reduce

function buyFruit2(deepArr) {
  return deepArr
          .map(arr => {
            let newArr = [];
            for (let idx = 0; idx < arr[1]; idx += 1) {
              newArr.push(arr[0])
            }
            return newArr
          })
          .reduce((prev, curr) => prev.concat(curr));
}

function buyFruit4(grocArr) {
  return grocArr.flatMap(sub => Array(sub[0]).fill(sub[1]));
}

// return deepArr.reduce((prev, curr) =>
// //   prev.concat(curr[0].repeat(curr[1]).split(/(curr[0])/).join('').split(' ')
// // , []))
function buyFruit3(deepArr) {
  return deepArr.flatMap(elem => [elem[0], ...elem[0].repeat(elem[1]).split(/elem[0]/)])
}

function buyFruit(deepArr) {
  return deepArr.reduce((prev, curr) =>
    prev.concat(curr[0].repeat(curr[1]).match(new RegExp(curr[0], `g`)))
  , [])
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]
