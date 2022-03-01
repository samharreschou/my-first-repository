function sum(digits) {
  return String(digits)
    .split('')
    .reduce((prev, curr) => prev + Number(curr), 0)
};

a =sum(23);           // 5
b=sum(496);          // 19
c=sum(123456789);    // 45

console.log(a,b,c)
