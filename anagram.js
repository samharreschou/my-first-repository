"use strict";

class Anagram {
  constructor(word) {
    this.word = word.toLowerCase();
    console.log(this.word)
  }
  match(wordArrOG) {
    let wordArr = wordArrOG.map(wd => wd.toLowerCase());
    console.log(wordArr)
    let output = wordArr.filter(wd => wd !== this.word && wd.split('').every(letter => this.word.includes(letter)) && wd.length === this.word.length
    && this.word.split('').every(letter => wd.includes(letter)));
    console.log(output);
    let finalOutput = wordArrOG.filter(wd => output.includes(wd.toLowerCase()));
    console.log(finalOutput)
    return finalOutput;
  }


}


module.exports = Anagram;
