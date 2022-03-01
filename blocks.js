"use strict";

/*

*/

//
// INPUTS:
// -string (case irrelevant)
// -does it have non letters? doesn't specifys so assume it may
//
// how are repeats handled, as in can there be words with multiple of the same letter?
//
// OUTPUTS:
// boolean (true or false)
// true if the word can be spelled,
// false if not
//
// rules:
// non-letter parts of string are sanitized (removed)
// empty strings are false
// ignore case
// only one side of a block can be used AND a block can only be used once
//
// data:
// start with string
// split string into array because we will need array methods for this
// convert block object into array of arrays (ie object.entries(etc))
// need a used and not used pile
// loop over the string and check for membership in the list if so then splice it away and put it in another
//
// algo:
// 1. sanitize string using regex eliminating non letters case insensitive
// 1.1 convert that string to uppercase (easier since it matches the blocks then)
// 2. check for edge cases (ie ''-> false)
// 3. convert string to arr using .split('')
// 4. convert blocks to arr of arrs (using entries(etc))
// 5. loop thru each letter of str arr
//  -check to see if the letter is in the unUsed array of arrays (use findIndexOf for this)
//   -if it is then pull that delete that letter from there (use splice to delete)
//   -if not then return false
// 6. if you make it through the loop of death then return true

const blocks = {
  'B':'O',   'X':'K',   'D':'Q',   'C':'P',   'N':'A',
'G':'T',   'R':'E',   'F':'S',   'J':'W',   'H':'U',
'V':'I',   'L':'Y',   'Z':'M',
};

function isBlockWord(str) {
  let cleanStr = str.replace(/[^a-zA-Z]/gi, '')
  if (cleanStr === '') return false;
  cleanStr = cleanStr.toUpperCase().split('');
  let blockEntries = Object.entries(blocks);
  for (let idx = 0; idx < cleanStr.length; idx += 1) {
  //  console.log(blockEntries)
    let blockIdx = blockEntries.findIndex(block => block.includes(cleanStr[idx]));
    //console.log(blockIdx)
    if (blockIdx === -1) return false;
    blockEntries.splice(blockIdx, 1); //TEST OUT YOUR SPLICE
  }
  return true;
};

let tests = {
  'BATCH': true,
  'BUTCH': false,
  'jest': true,
  'JEST': true,
  'JeSt': true,
  '2B7U _T25C#H*': false,
  '': false,
  '349 #(&_)': false,
  'JJJJ': false,
  'JW': false,
};

Object.entries(tests).map(elem => console.log(elem[0],isBlockWord(elem[0]), elem[1]));



// Interview to Determine Your Life's Success
// (no pressure)

// Problem Description
// You are given a list of numbers in a "short-hand" range where only the significant part of the next number is written because we know the numbers are always increasing (ex. "1, 3, 7, 2, 4, 1" represents [1, 3, 7, 12, 14, 21]). Some people use different separators for their ranges (ex. "1-3, 1-2", "1:3, 1:2", "1..3, 1..2" represent the same numbers [1, 2, 3, 11, 12]). Range limits are always inclusive.

// Your job is to return a list of complete numbers.

// The possible range separators are: ["-", ":", ".."]

// "1, 3, 7, 2, 4, 1" --> 1, 3, 7, 12, 14, 21
// "1-3, 1-2" --> 1, 2, 3, 11, 12
// "1:5:2" --> 1, 2, 3, 4, 5, 6, ... 12
// "104-2" --> 104, 105, ... 112
// "104-02" --> 104, 105, ... 202
// "545, 64:11" --> 545, 564, 565, .. 611

// TIME ENDS: 4:33
//
// Inputs:
// -a string composed of digits, spaces, commmas, and separators (-,:,..)
// -non-negative digits
// -valid separator notation (dont need to deal with invalid input)
//
//
// Outputs:
// -a list of integers corresponding to the shorthand notation following a set of rules (below):
//
// Rules:
// -we can treat all the separators the same
// -leading zeros are permitted (02 is same as 2 (int))
// -a comma afer a number indicates the starting number (eg 545, 64:11--> 545 indicates start of list at 545, indicates it is stand alone)
// -whenever the number on the right side of the spearator is smaller than the number on the left side, we assume that our range goes up until the next hundreds place if 2 digit number, thousands place if 3 digit, etc...
// -this is cummulative
// -comma has the same left right rule applied

// function replaceNum(arr) {
//   let newArr = [];
//   let prev;
//   arr.forEach((elem, idx, arr) => {
//     if (elem < prev) {
//       let currLen = String(elem).length;
//       let prevLen = String(prev).length;
//       if (currLen === prevLen) {
//         elem = Number('1' + String(elem));
//         newArr.push(elem);
//         return;
//       } else {
//         elem = String(prev)
//       }
//     }
//   })
// }
// function replaceNum(arr) {
//   //return arr.map((elem, idx, array) => countUpTo(elem, array[idx]))
//   return arr.slice(1).reduce((prev, curr) => [prev].concat([countUpTo(prev, curr)]),arr[0])
// }
//
// function countUpTo(num1, num2) {
// //  if (num1.length > num2.length) {
//     while (String(num1).slice(String(num1).length - String(num2).length) !== String(num2)) {
//       num1 += 1
//     }
//     return num1
//   //} else {
//
//   //}
// }
//
// let abc = [
//   {name: 'sam', food:'burger',employed:false},
//   {name:'mandy',food:'lobster',employed:true},
//   {name:'julia',food:'lobster',employed:true}
// ];
//
// abc.groupBy((elem) => elem.food)
//
// data struct:
// start with a string
// use regex to process this string (determine where the commas are, where the separators are, where the digits are)
// use match, or split with regex either way we end up with array
//
// treat ascending values as normal
//   --separators we treat as ascending range
//   --commas we treat as regular listed out integers in array (literal interpretation)
// treat descending values differently:
//   --commas we treat as a singular value that has a one elevated number place that is incremented from the previous value
//   --whereas separators we treat as range up to above stated ""
//
// need constant (likely dict) for separators to know what they are
// OR USE REGEX
//
// need to keep track of current item in array and previous item
//
// use a regular loop because complicated af
//
//
// Algo:
// 1. clean up somehow
// (replace different separators with just ':' for convenience
// (need function that handles commas and one that handles separators)
// 2. split into strArr (of chars) comprised only of commas, digits, and separators
//
// 3. loop through that array by index
//   -if you reach a comma, then call the comma function with the array and index
//   -if you reach separator, call sep func with arr and idx
//   -if you reach digit keep going
//   WITH THE RESULT OF COMMA, replace the idx and idx -1 and idx + 1 with the returned subarray (using shift)
//
//     -if you reach the end, return the mutated array (original)
//
// What do these do?
//   commaFunc replaces the comma and the two numbers on either side with their corresponding appropriate subArr according to the rules above [2, ',', 1]-> [2,11] which then gets added back to the array
//   sepFunc does the same for separators
//
//
// 1. clean up string
// 2. use while loop to go through array made from string
// 2.1 have an idx counter as I go through the loop to keep track of place
// 3. at each step in the loop call commaFunc, sepFunc depending on whether comma or sep, continue if digit, increment counter at each loop
//   3.1 insert subarray output of commafunc or sepFunc into array by slicing up
// 4. upon exiting loop once you reach end of array return the array
//
// function success(str) {
//   let cleanStr = str.replace(/\D|^[\.\.]|^\:/|^\-|^\/g,'');
//   let cleanArr = cleanStr.split('');
//   let idx = 0;
//   while (cleanArr[idx] !== undefined) {
//     if (cleanArr[idx] === ',') {
//       let subArr = commaFunc(cleanArr, idx);
//       cleanArr = cleanArr.slice(0,idx-1).concat(subArr, cleanArr.slice(idx+1))
//       continue;
//   } else if (["-",":",".."].includes(cleanArr[idx])) {
//     let subArr = sepFunc(cleanArr, idx);
//     cleanArr = cleanArr.slice(0,idx-1).concat(subArr, cleanArr.slice(idx+1))
// }}
//   return cleanArr}
//
//
//
// const SEP = [':',"..","-"];
//
//
// const tests = {
//   "1, 3, 7, 2, 4, 1": [  1, 3, 7, 12, 14, 21 ],
//   "1-3, 1-2" : [1, 2, 3, 11, 12],
//   "1:5:2": [1, 2, 3, 4, 5, 6, 12],
//   "104-2": [104, 105, 112],
//   "104-02": [104, 105, 202],
//   "545, 64:11": [545, 564,'...', 565,'...',  611],
//   "104:2": [104, 105, '...',112],
//   "104..2": [104, 105, '...',112],
//   "1009..3": [1009, 1010, 1011, 1012, 1013],
//   "100": [100],
//   "100,": [100],
//   "200,201": [200, 201],
//   "2008,7,5": [2008, 2017, 2025],
//   "2998,899,87,7,3": [2998,3899,3987, 3997,4003]
// };
//
// Object.entries(tests).map(elem => console.log(elem[0], success(elem[0]), elem[1]);
