a=isBalanced('What (is) this?');        // true
b=isBalanced('What is) this?');         // false
c=isBalanced('What (is this?');         // false
d=isBalanced('((What) (is this))?');    // true
e=isBalanced('((What)) (is this))?');   // false
f=isBalanced('Hey!');                   // true
g=isBalanced(')Hey!(');                 // false
h=isBalanced('What ((is))) up(');       // false

console.log(a,b,c,d,e,f,g,h)

function isBalanced(str) {
  let parenTally = 0
  for (let idx = 0; idx < str.length; idx += 1) {
    if (str[idx] === ')') {
      parenTally -= 1
    } else if (str[idx] === '(') {
      parenTally += 1}
    if (parenTally < 0) {
      return false
    }
  }
  return parenTally === 0
}
