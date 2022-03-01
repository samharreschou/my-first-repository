// function myFilter(array, func) {
//   let newArr = [];
//   for (let idx = 0; idx < array.length; idx += 1) {
//     if (func(array[idx], idx, array)) newArr.push(array[idx]);
//   };
//   return newArr;
// };

//OR

function myFilter(array, func) {
  let newArr = [];
  array.forEach(elem => func(elem) ? newArr.push(elem) : true);
  return newArr;
}

let isPythagoreanTriple = function (triple) {
  return Math.pow(triple.a, 2) + Math.pow(triple.b, 2) === Math.pow(triple.c, 2);
};

let aaa = myFilter([{ a: 3, b: 4,  c: 5 },
          { a: 5, b: 12, c: 13 },
          { a: 1, b: 2,  c: 3 },], isPythagoreanTriple);

console.log(aaa);
// returns [ { a: 3, b: 4, c: 5 }, { a: 5, b: 12, c: 13 } ]

function multiplesOfThreeOrFive(values) {
  console.log(myFilter(values, isMultipleOfThreeOrFive));
}

function isMultipleOfThreeOrFive(value) {
  return value % 5 === 0 || value % 3 === 0;
}

multiplesOfThreeOrFive([1, 3, 5, 7, 11, 18, 16, 15]);  // [ 3, 5, 18, 15 ]
