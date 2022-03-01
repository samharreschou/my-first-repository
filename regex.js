function isUrl(str) {
  return !!str.match(/^https?:\/\/\S*$/g)
}

a= isUrl('http://launchschool.com');   // -> true
b=isUrl('https://example.com');       // -> true
c=isUrl('https://example.com hello'); // -> false
// d=isUrl('   https://example.com');    // -> false

console.log(a,b,c)

function fields(str) {
  return str.split(/[ \t,]+/)
}

d=fields("Pete,201,Student");
// -> ['Pete', '201', 'Student']

e=fields("Pete \t 201    ,  TA");
// -> ['Pete', '201', 'TA']

f=fields("Pete \t 201");
// -> ['Pete', '201']

g=fields("Pete \n 201");
// -> ['Pete', '\n', '201']

console.log(d,e,f,g)



function mysteryMath(str) {
  return str.replace(/[+\-\/*]/g, '?')
}
er= mysteryMath('4 + 3 - 5 = 2')
//# -> '4 ? 3 - 5 = 2'

ed = mysteryMath('(4 * 3 + 2) / 7 - 1 = 1')
//# -> '(4 ? 3 + 2) / 7 - 1 = 1'
console.log(er, ed)
