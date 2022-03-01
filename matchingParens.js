function isBalanced(str) {
  let lst = str.split('');
  function helper(arr, leftParen=false, ogArr=str, actualIdx=0) {
    //let leftParen = false;
    //for (let idx = 0; idx < arr.length; idx += 1){
    if (arr.length === 0) {
      return true}
    // } else if (arr.length === 1) {
    //   return false
    // }
    let idx = 0;
    while (idx < arr.length) {
      debugger;
      if (arr[idx] === '(' && !leftParen) {
  debugger;
        leftParen = true;
        idx += 1;
  debugger;
      } else if (arr[idx] === '(' && leftParen) {
        let newIdx = helper(arr.slice(idx + 1,arr.length), true)
        return helper(arr.slice(idx)) && helper(arr.)
  debugger;
        if (!(newIdx >= 0)) {
  debugger;
          return false
        } else {
  debugger;
          idx += newIdx
  debugger;
        }
      } else if (arr[idx] === ')' && leftParen) {
  debugger;
        leftParen = false;
  debugger;
        return helper(arr.slice(idx+1))
      } else if (arr[idx] === ')' && !leftParen) {
  debugger;
          return false
        } else {
  debugger;
        idx += 1
  debugger;
      }
    }
    debugger;
    if (leftParen) {
  debugger;
      return false
    } else {
  debugger;
      return true
    }
  }
  debugger;
  let a = helper(lst)
  console.log(a)
  return !!a
}

//start with left paren = false
//if you encounter a left paren then you set left paren to true and keep going
//if you encounter a right paren and left paren is true then you set left paren again to false and keep going
//if you encounter a right paren and left paren is false then return false
//if you encounter a left paren and left paren is true then call helper with the leftHand set to true
//on the outside check if that call to helper is true or false, if it is false then return false, if it is true then keep going starting from idx set
  //the end of the helper idx (so just reassign the index)

//convert string to list
//iterate thru lst
//when you reach a left paren ( set leftParen to true then keep going
//when you reach another left paren recursively call the function
//when you reach a right paren, check if leftParen is true and if so then set leftParen to false and keep going

//when you get right paren, check to see if leftParen is true if so then set leftParen to false and keep going
 //BASECASE when LIST IS EMPTY: if leftParen is true then return false, otherwise return true



a=isBalanced('What (is) this?');        // true 8 t
b=isBalanced('What is) this?');         // false f f
c=isBalanced('What (is this?');         // falsef f
d=isBalanced('((What) (is this))?');    // true 6 t
e=isBalanced('((What)) (is this))?');   // false 6 t
f=isBalanced('Hey!');                   // true t t
g=isBalanced(')Hey!(');                 // false f f
h=isBalanced('What ((is))) up(');       // false 9 t

console.log(a,b,c,d,e,f,g,h)
