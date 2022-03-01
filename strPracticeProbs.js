console.log(1)
let firstName = 'Sam';
let lastName = 'Harreschou';
let fullName = `${firstName} ${lastName}`;

console.log(fullName);

console.log('prob 2');
console.log(firstName.concat(lastName));

console.log('prob 3')
let fullNameArr = fullName.split(' ');
console.log(fullNameArr)

console.log('prob 4')
function p(num) {console.log(`problem ${num}`)};
let language = 'JavaScript'
console.log(`first occur at ${language.indexOf('S')}`)
let idx = language.indexOf('S')

p(5);
let charCode = language.charCodeAt(idx);
console.log(charCode)

p(6)

console.log(String.fromCharCode(charCode));

p(7)
console.log(language.lastIndexOf('a'));

p(8)
let a = 'a'
let b = 'b'
console.log(a<b)
b='B'
console.log(a<b)

p(9)
let aIndex = language.indexOf('a');
let vIndex = language.indexOf('v');
console.log(language.substr(aIndex, 4))
console.log(language.substr(vIndex,4))


p(10)
console.log(language.substring(aIndex, 4))
console.log(language.substring(vIndex, 4))

function log(thing) {console.log(thing)};

p(11)
let fact1 = 'JavaScript is fun'
let fact2 = 'Kids like it too'

let compoundSentence = fact1 + ' ' + fact2.toLowerCase();
log(compoundSentence)

p(12)
log(fact1[0])
log(fact2[0])

p(13)
let pi = 22/7;
pi = pi.toString();
log(pi)
log(pi.lastIndexOf('14'));

p(14)
let boxNumber = (356).toString();
log(boxNumber)

p(15)
boxNumber = Number.parseInt(boxNumber)
log(typeof boxNumber)
boxNumber = String(boxNumber)
log(typeof boxNumber)

p(16)
const prompt = require('readline-sync').question
let name = prompt('what is your name?')
if (name.endsWith('!')) {
  name = name.slice(0,-1);
  console.log('hello ' + name.toUpperCase() + '. Why are we screaming?')
} else {
  console.log('hello ' + name)
}


function isUrl(str) {
  return str.match(/^https?\/\/\S*$/)
}
