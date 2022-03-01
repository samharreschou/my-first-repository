"use strict";

// PEDAC
//
// Problem:
//
// input:
//   -string
//   -integer
// output:
//   -new encrypted string
// rules:
// -case is maintained
// -can int be negative? 0?
//   -assume yes
// -only letters are altered in the cipher
// -if alphabet is exceeded then you wrap around
// what happens if empty input or partially missing or error ? assume all valid

let tests = [
  ['A', 0, 'A'],
  ['y',5,'d'],
  ['a',47,'v'],
  ['ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25, "ZABCDEFGHIJKLMNOPQRSTUVWXY"],
  ['The quick brown fox jumps over the lazy dog!',5,"Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"],
  ['There are, as you can see, many punctuations. Right?; Wrong?', 2, "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"],
  ['ABCDEFGHIJKLMNOPQRSTUVWXYZ', 0, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'],
  ['a',-1,'z'],
];

//tests.map(elem => console.log(encrypt(elem[0],elem[1])))



// ALGO:
// use arrays!
// 1. check if int is 0, if so return str
// 2. split str into list (include non letters)
// 3. loop through lst and check if element is cap, lower letter or not letter at all
//   -if capital, retreive corresponding capital letter and sub into array
//   -if lower do the same
//   -if not letter then just return it
// 4. join together the array and return this new string
//
// function to retreive letter:
// input: letter, int
// output: corresponding letter or the same thing
//algo:
// 1. if char is letter and if so whether capital or lower
// 2. if not letter, then return the value
// 3. if capital then determine location in cap array
//   -if lower do the same for the lower array
// 4. given current index, add the integer offset
// 5. if offset makes idx between -alphalength and alphabet.length (<alpha.length) then return the letter at position idx
// 6. if above or below idx then get remainder when dividing by alphalength and do again


function encrypt(str, num) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const lowerLst = alphabet.split('');
  const upperLst = alphabet.toUpperCase().split('')
  return str.split('').map(char => getChar(char, num)).join('')
};

function getChar(char, num) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const lowerLst = alphabet.split('');
  const upperLst = alphabet.toUpperCase().split('')
  let len = alphabet.length;
  let currIdx;
  if (lowerLst.includes(char)) {
    console.log(`char is ${char}`)
    currIdx = lowerLst.indexOf(char);
    console.log(`curr idx before is ${currIdx}`)
    currIdx = currIdx + num;
    console.log(`after is: ${currIdx}`)
    if (Math.abs(currIdx) > 25) currIdx = currIdx % len;
    return lowerLst.at(currIdx)
  } else if (upperLst.includes(char)) {
    console.log(`char is ${char}`)
    currIdx = upperLst.indexOf(char)
    console.log(`curr idx before is ${currIdx}`)
    if (Math.abs(currIdx) > 25) currIdx = currIdx % len;
    return upperLst.at(currIdx)
    console.log(`after is: ${currIdx}`)
  } else {
    console.log('no conditions met char returned')
    return currIdx
  }
}
console.log(getChar('a',0)); //a
console.log(getChar('z',1)); //a
console.log(getChar('B',-2)); //Z
console.log(getChar('A',25*3));
console.log(getChar('A',25*-3));
console.log(getChar('4',4)); // '4'
