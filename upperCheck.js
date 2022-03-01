function isUppercase(str) {
  return str.toUpperCase() === str;
}

a=isUppercase('t');               // false
b=isUppercase('T');               // true
c=isUppercase('Four Score');      // false
d=isUppercase('FOUR SCORE');      // true
e=isUppercase('4SCORE!');         // true
f=isUppercase('');                // true

console.log(a,b,c,d,e,f)
