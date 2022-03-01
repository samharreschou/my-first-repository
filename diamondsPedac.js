//PROBLEM:

//Write a function that displays a four-pointed diamond in an nxn grid, where n is an
//odd integer supplied as an argument to the function. You may assume that the argument will always be an odd integer.

//makes diaond shape that has progressively increasing then decreasing number of stars centered
//takes shape of diagonal nxn grid
//will have slices that start with

//input : ODD POSITIVE INTEGER
//output: diamond display



//Questions:
/*
what happens if neg diamond (assume no neg)
what chars define the diamond? (asterics)


*/

//EXAMPLES/TEST CASES:
//NA already there sufficiently

//DATA STRUCTURES:
//integer => array => display


//ALGORITHM:

//input called num
//instantiate counter at 1
//instantiate variabled numReached to false
//have a while loop that terminates when counter is less than 1
//at each loop this counter increments by +2 if counter < num, and then -2 after it is === num (as in if numReached is true)
//for each loop, the counter will determine the number of asterics and (num - counter )/2 is
     //the number of spaces on each side
     //use these vars to convert to string that will be displayed
//display this string at each line of the loop

//CODE:

function diamond(num) {
  let counter = 1;
  let numReached = false;
  while (counter >= 1) {
    let numSpaces = (num - counter)/2;
    let dispStr = ' '.repeat(numSpaces) + '*'.repeat(counter) + ' '.repeat(numSpaces);
    console.log(dispStr);
    if (counter === num) {
      numReached = true;
    };
    if (numReached) {
      counter -= 2;
    } else {
      counter += 2
    }
  }
}

diamond(1)
diamond(3)
diamond(9)
