function leadingSubstrings(str) {
  return str.split('')
            .reduce((prev, _, idx, arr) => prev.concat(arr.slice(0, idx + 1).join('')), []);
          }

a=leadingSubstrings('abc');      // ["a", "ab", "abc"]
b=leadingSubstrings('a');        // ["a"]
c=leadingSubstrings('xyzzy');

console.log(a,b,c)
//
//
// let text = 'the quick brown fox jumps over the lazy dog.';

function substrings2(str) {
  // return str.split('')
  //           .reduce((prev, curr, idx, arr) => prev.concat(...leadingSubstrings(arr.slice(1, idx + 1)), []))
  let newArr = [];
  strArr = str.split('');
  strArr.forEach((elem, idx, arr) => newArr.push(...leadingSubstrings(str.slice(idx, str.length))))
  return newArr;
}

function substrings(str) {
  return str.split('')
     .reduce((prev, _, idx) => prev.concat(...leadingSubstrings(str.slice(idx, str.length))), []);
}
console.log(substrings('abcde'))
