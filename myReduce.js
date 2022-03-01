function myReduce(array, func, initial) {
  if (initial === undefined) {
    initial = array.slice(0,1);
    array = array.slice(1);
  };
  array.forEach(elem => initial = func(initial, elem));
  return initial
}

function myReduce2(array, func, initial) {
  if (initial === undefined) {
    initial = array.slice(0,1);
    array = array.slice(1);
  };
  for (let idx = 0; idx < array.length; idx += 1) {
    initial = func(initial, array[idx], idx, array);
  }
  // array.forEach(elem => initial = func(initial, elem));
  return initial
}

let smallest = (result, value) => (result <= value ? result : value);
let sum = (result, value) => result + value;

console.log(myReduce2([5, 12, 15, 1, 6], smallest));           // 1
console.log(myReduce2([5, 12, 15, 1, 6], sum, 10));            // 49

function longestWord(words) {
  return myReduce2(words, longest)
};

function longest(result, currentWord) {
  return currentWord.length >= result.length ? currentWord : result;
}

console.log(longestWord(['abc', 'launch', 'targets', '']));      // "targets"
