"use strict";

class Diamond {
//   constructor(letter) {
// //chars 65 to 90 are letters A thru Z
//   //for loop starts at 65 and continues until letter is reached
//   //whereupon it turns around then continues until at original letter
//   //'A'.charCodeAt() === 65
//   //or use String.fromCharCode(number)
//     this.letter = letter;
//     this.code = letter.charCodeAt();
//   }
  static makeDiamond(letter) {
    let diam = '';
    let letterCode = letter.charCodeAt();
    let charDiff = letterCode - 65;
    for (let charNum = 65; charNum <= letterCode; charNum += 1) {
      if (charDiff === 0) {
        console.log('A\n')
        return 'A\n';// true
      }
      if (charNum === 65) {
        diam += ' '.repeat(charDiff) + 'A' + ' '.repeat(charDiff) + '\n'
        console.log(' '.repeat(charDiff) + 'A' + ' '.repeat(charDiff) + '\n');
        continue;
      }
      diam += ' '.repeat(charDiff - (charNum - 65)) + String.fromCharCode(charNum) + ' '.repeat(2*(charNum - 65)-1) + String.fromCharCode(charNum) + ' '.repeat(charDiff - (charNum - 65)) + '\n';
      console.log(' '.repeat(charDiff - (charNum - 65)) + String.fromCharCode(charNum) + ' '.repeat(2*(charNum - 65)-1) + String.fromCharCode(charNum) + ' '.repeat(charDiff - (charNum - 65)) + '\n');
    };
    for (let charNum = 65 + charDiff -1 ; charNum >= 65; charNum -= 1) {
      // if (charDiff === 0) {
      //   console.log('A')
      //   return;// true
      // }
      if (charNum === 65) {
        console.log(' '.repeat(charDiff) + 'A' + ' '.repeat(charDiff) + '\n');
        diam += ' '.repeat(charDiff) + 'A' + ' '.repeat(charDiff) + '\n';
        return diam;
      }
      diam += ' '.repeat(charDiff - (charNum - 65)) + String.fromCharCode(charNum) + ' '.repeat(2*(charNum - 65)-1) + String.fromCharCode(charNum) + ' '.repeat(charDiff - (charNum - 65)) + '\n';
      console.log(' '.repeat(charDiff - (charNum - 65)) + String.fromCharCode(charNum) + ' '.repeat(2*(charNum - 65)-1) + String.fromCharCode(charNum) + ' '.repeat(charDiff - (charNum - 65)) + '\n');
    }
  }
}

// let d = new Diamond();
// d.makeDiamond('A')

module.exports = Diamond;
       // F - A = 5 --> 5 * 2 - 1 = 9
//      A //5,0
//     B B //4, 1
//    C   C //3,3
//   D     D   //2, 5
//  E       E // 1, 7
// F         F// 0 spaces b4, 9 betweem
//  E       E // 1 space b4, 7 between
//   D     D //2 spaces b4, 5 between
//    C   C // 3 spaces b4, 3 between
//     B B //4 spaces before, 1 space betw
//      A // 5 spaces before
