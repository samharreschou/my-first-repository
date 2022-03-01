function isAllUnique(string) {
  // ...
  //sanitize by lowercasing and removing spaces
  string = string.toLowerCase().replaceAll(' ','');
  let stringObj = {};
  for (let idx = 0; idx < string.length; idx += 1) {
    if (string[idx] in stringObj) {
      return false
    }
    stringObj[string[idx]] = 1;
  }
  return true
}

a= isAllUnique('The quick brown fox jumped over a lazy dog');  // false
f=isAllUnique('123,456,789');                                 // false
e=isAllUnique('The big apple');                               // false
d=isAllUnique('The big apPlE');                               // false
c=isAllUnique('!@#$%^&*()');                                  // true
b=isAllUnique('abcdefghijklmnopqrstuvwxyz');                  // true

console.log(a,f,e,d,c,b);
