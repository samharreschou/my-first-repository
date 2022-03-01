"use strict";

//
//
// input:
// string that can contain digits, spaces, dashes dots parentheses (all sorts of spec chars)
//
// output:
// a valid phone number (as in a string of 10 digits)
//
// rules:
// phone number less than 10 digits return 10 0s
// if 10 digits then valid, return number
// if 11 digits with first number 1, trim 1 then return rest
// if 11 digits with first number not 1, then return 10 0s
// if more than 11 digits return 10 0s
//
// testcases:
const defaultNumber = '0000000000'
let tests1 = {
  '0000000000': defaultNumber,
  "asdk34d825s _34g253d  fg%&^<>$#*": '3482534253',
  "": defaultNumber,
  '342432': defaultNumber,
  '248373724723437824532': defaultNumber,
  "14378285848": "4378285848",
  "24378285848": defaultNumber
}

function tester(tests, fn) {
  Object.entries(tests).map(elem => console.log(fn(elem[0]), elem[1]))
}

function validNumber(str) {
  let cleanedStr = str.match(/\d/g)
  if (cleanedStr === null) return defaultNumber;
  cleanedStr = cleanedStr.join('');
  let len = cleanedStr.length;
  if (len < 10 || len > 11) return defaultNumber;
  if (len === 11 && cleanedStr[0] !== '1') return defaultNumber;
  if (len === 11) {
    return cleanedStr.slice(1);
  }
  return cleanedStr
}

tester(tests1, validNumber)
//Object.entries(tests).forEach(entry => console.log(validNumber(entry[0]), entry[1]))
//
// data structure:
// -string ---> use regex, we dont need fast lookup or higher order array functions
// -array
// -hash etc
// input is string we stay as string -> use regex match to get out a string of matching chars
//
//
// algorithm:
// 1. filter string using regex (remove non-digit chars)
// 2. check string length
//   -if length < 10: return 10 0s
//   -if length > 11 return 10 0s
//   -if length 10: return the string
//   -if length 11:
//     if 1st digit is 1 then return rest of string (without leading 1
//   -return 10 0s)
