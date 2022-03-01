function myOwnEvery2(array, func) {
  return array.filter(func).length === array.length;
};

function myOwnEvery(array, func) {
  for (let idx = 0; idx < array.length; idx += 1) {
    if (!func(array[idx], idx, array)) return false;
  };
  return true
};

let isAString = value => typeof value === 'string';
console.log(myOwnEvery(['a', 'a234', '1abc'], isAString));       // true

function areAllNumbers(array) {
  return myOwnEvery(array, isANumber)
}

function isANumber(value) {
  return typeof value === 'number' && !Number.isNaN(value);
}

let d = areAllNumbers([1, 5, 6, 7, '1']);             // false
let e = areAllNumbers([1, 5, 6, 7, 1]);               // true
let f = areAllNumbers([1, 5, 6, 7, NaN]);             // false

console.log(d,e,f);
