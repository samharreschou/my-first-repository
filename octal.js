function octalToDecimal2(numberString) {
  let numberArr = numberString
      .split('')
      .map(Number)
      .map((elem, idx, arr) => elem * (8 ** idx))
      .reduce((prev, curr) => prev + curr);
  return numberArr;
};

function octalToDecimal(numberString) {
  return numberString
    .split('')
    .reverse()
    .reduce((prev, curr, idx, arr) => prev + (Number(curr) * (8 ** idx)), 0);
};
//convert string to list using split (split)
//reverse that list (.reverse)
//convert the list from integers to numbers (map Number)
//map changing each list item from octal to base 10 by multiplying element by 8 raised to the index power (map)
//add this list together (using reduce)

let a = octalToDecimal('1');           // 1
b =octalToDecimal('10');          // 8
c=octalToDecimal('130');         // 88
d=octalToDecimal('17');          // 15
e=octalToDecimal('2047');        // 1063
f=octalToDecimal('011');         // 9

console.log(a,b,c,d,e,f);
