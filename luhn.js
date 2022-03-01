//1111 becomes 2121

//2121 -> 2+1+2+1 = 6 is the checksum --> is not valid
//7733 -> 20 is the checksum ---> is valid


/*
INPUT:
string of arbitrary length, ignore non numeric chars

OUTPUT:
true.false (verify this)

rules:
transform the number from left to right alternating digits, doubling them and subtracting 9 from that product if it is over 10
go from right to left on number, every other digit is doubled
if the product is >10 then subtract 9, replace that number with this one
add together the digits

how are null inputs handled Or invalid inputs?
how are single digit numbers handled
how are leading zeros handled? assume they are valid
how are negatives handled? assume no negatives

DATA STRUCTURES:
input is string --keep as string to use regex on to remove non-digits
need to tranform number to lundt number using above rules: use a list for this
(str converted to lst) mapping
reduce to get sum another list
number and we check % 10 to see if 0 (return boolean)

steps:
1. sanitize with regex (replace non-digits with '')
2. check for edge cases (if '' then return false, )
3. split into list of chars
4. map onto that list conversion to numbers
5. reverse the list
6. map for odd indexed elements multiply by 2 and sub 9 if over 9
8. use reduce to sum
9. return whether sum modulo 10 is 0

*/

mainTests = {
  "1111": false,
  "8763": true,
  "2323 2005 7766 3554": true,
  "2323 2005_$#&#@% 7766 3asdasf554": true,
  "2323 2005 7766 3553": false,
  "3" : false,
  "0": true,
  "00": true,
  "": false,
  "afsdbjwefjwgfe    $%^#%#@*&^": false,
};

function lunh(str) {
  let cleanStr = str.replaceAll(/\D/g,'');
  // console.log(str, cleanStr)
  if (cleanStr === '') return false;
  let numArr = cleanStr.split('').map(elem => Number(elem)).reverse();
  let lunhArr = numArr.map((elem, idx) => {
    if (idx % 2 === 1) {
      let doubled = elem * 2;
      return doubled > 9 ? doubled - 9 : doubled
    } else {
      return elem
    }
  });
  return lunhArr.reduce((prev, curr) => prev + curr) % 10 === 0
}

Object.entries(mainTests).forEach((elem,idx) => console.log(elem[0], lunh(elem[0]), elem[1]));
//data structures
