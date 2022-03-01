"use strict";

// "1, 3, 7, 2, 4, 1" --> 1, 3, 7, 12, 14, 21
// "1-3, 1-2" --> 1, 2, 3, 11, 12
// "1:5:2" --> 1, 2, 3, 4, 5, 6, ... 12
// "104-2" --> 104, 105, ... 112
// "104-02" --> 104, 105, ... 202
// "545, 64:11" --> 545, 564, 565, .. 611


// inputs:
// -string
// Questions:
// (na)what do we do with invalid input or errors?
// (y)Will it always be a string?
// (n)can numbers be negative?
// (y)are leading zeros allowed?
// (y)can we assume that there wont be formatting errors on inputs such as double separators, separators without integers on either side etc?
// (NA)what do we do with other symbols?
// (ignore them) what do we do about spaces?
// outputs:
// -array of integers
//
// rules:
// -we know a number is short hand if the number to its left is less than it (to its left meaning to the left of the separator or comma to its left)
// // -commas indicate single numbers, separators indicate that a range needs to be filled in
// // -separators are all the same (:,-,..)
// //
// //
// // data struct:
// // -start as string, use regex to sanitize
// // -convert to array (need to use various array methods so this makes sense, plus final product is array)
// // -final output is going to be array too
// //
// // algorithm:
// // 1. sanitize input with regex (remove spaces)
// // 2. create array of numbers and separators (separate by commas) based on string (for example "3,2,1" -> [3,',',2,','])
// // 2.1 instantiate new array
// // 3. iterate through that array
// //   -if element contains a separator, then replace that element with an array of that element separated (pair)
// //   -convert shorthand numbers to numbers following above rules
// //   -if we detect a separator in the
// // 4. make another pass through array and deal with separators (add on with it)
// // 5. return final array (likely in place)
//
// function numConvert(str) {
//   let strCleaned = str.replace(/\s/g,''); //get rid of spaces
//   let containsDigit = x => /\d/.test(x);
//   let sepReg = /[\-:]|(\.\.)/;
//   let containsSep = x => sepReg.test(x);
//   let strArr = strCleaned.split(',').map(elem => {
//     if (containsDigit(elem) && !containsSep(elem)) return Number(elem);
//     return elem.replace(sepReg,' ').split(' ')
//                       }); //[1,2,3 [5,1], [2,2,5]]
//   // let prev = Array.isArray(strArr[0]) ? strArr.slice() : strArr[0];
//   // newArr = [prev];
//   // strArr.slice(1).forEach((elem, idx, arr) => {
//   //   newElem = countUpTo(prev, elem)
//   //   newArr.push(newElem);
//   //   prev = Array.isArray(newElem) ? newElem.slice() : newElem;
//   // });
//   // return newArr;
//   return convertFlatArr(strArr)
// }
//
// // function replaceSep(arr) {
// //   for (let idx = 0; idx < arr.length; idx += 1) {
// //
// //   }
// // }
// 104-2
// given a string:
// separate that string by commas ("1-3, 1-2" -> ['1-3', '1-2'] OR "1:5:2" -> ["1:5:2"]
// check each element to see if it contains a separator
//   -if it doesnt then convert that element to proper number based on the prev number and rules above
//   -if it does then replace the first separator with a comma then call split this on this string by comma
//   -check these elements to see if they contain a comma
//
//
//
// function convertSepToArr()
//
// function convertFlatArr(arr) {
//   let strArr = arr;
//   let prev = Array.isArray(strArr[0]) ? strArr.slice() : strArr[0];
//   newArr = [prev];
//   strArr.slice(1).forEach((elem, idx, arr) => {
//     newElem = countUpTo(prev, elem)
//     newArr.push(newElem);
//     prev = Array.isArray(newElem) ? newElem.slice() : newElem;
//   });
//   return newArr;
// }

// function countUpTo(str1, str2) {
//   if (Number(str2) > Number(str1)) return num2;
//   if (Array.isArray(num1) || Array.isArray(num2)) return num2;
//   while (str1.slice(-str2.length) !== str2) {
//     num1 += 1
//   };
//   return num1
// };

function numConvert(str) {
  //separate number by commas
  //iterate through number, if element is a number then convert to actual number
  //otherwise do the range expansion and replace element with that
  str = str.replace(/ /g, '');
  let newArr = str.split(',');
  console.log(newArr)
  let prev = newArr[0];
  let prevActual = false;

  if (isSep(newArr[0])) {
    prevActual = range1(prev);
    prev = prevActual.at(-1)
  };

  for (let idx = 1; idx < newArr.length; idx += 1) {
    console.log(newArr)
    if (isNumber(newArr[idx]))  {
      let newElem = countUpTo(String(prev), String(newArr[idx]));
      prev = newElem;
      newArr[idx] = newElem;
      continue;
    } else {
      console.log(`non-number thing is ${newArr[idx]}`)
      // let newArrElem = range1(String(prev)+':'+ newArr[idx]);
      let sepElem = newArr[idx].match(/^\d+$/g);
      let newArrElem = range1(String(countUpTo(String(prev), String(sepElem[0]))) + ':'+sepElem.slice(1).join(':'));
      console.log(`newArrElem is ${newArrElem}`)
      prev = newArrElem[1];
      newArr[idx] = newArrElem;
    }
  }

  //newArr = new

  return newArr.flat(Infinity).map(elem => Number(elem))
  }

function isNumber(str) {
  return /^\d+$/.test(str)
};
function isSep(str) {
  return !isNumber(str)
};

function range1(str) {
  //input is string range ,output is unexpanded number range
  //input like 1:1, 2-5,4-2-1
  //let arr = str.split(/[\-:]|(\.\.)/);
  let arr = str.match(/\d+/g)
  //now looks like [1,1], [2,5], [4,2,1]
  let prev = arr[0]; //first one
  for (let idx = 1; idx < arr.length; idx += 1) {
    let curr = arr[idx];
    arr[idx] = countUpTo(prev, curr);
    prev = arr[idx];
  }
  let strRange = [arr[0], arr.at(-1)]
  let numRange = strRange.map(elem => Number(elem));
  return expandRange(...numRange);
};

function expandRange(start, end) {
  if (start === end) return [start];
  let rangeArr = [];
  while (start !== end + 1) {
    rangeArr.push(start);
    start += 1;
  }
  return rangeArr
};

///range1('4:3:2:1')

function countUpTo(str1, str2) {
  let num1 = Number(str1);
  let num2 = Number(str2);
  if (num2 >= num1) return str2;
  while (String(num1).slice(-str2.length) !== str2) {
    num1 += 1;
  }
  return num1
}

let tests = {
  "1, 3, 7, 2, 4, 1" : "1, 3, 7, 12, 14, 21",
  "1-3, 1-2" : "1, 2, 3, 11, 12",
  "1:5:2" : "1, 2, 3, 4, 5, 6, ... 12",
  "104-2" : "104, 105, ... 112",
  "104-02" : "104, 105, ... 202",
  "545, 64:11" : "545, 564, 565, .. 611",

};

Object.entries(tests).map(elem => console.log(elem[0], elem[1], numConvert(elem[0])));
