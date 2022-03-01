"use strict";
class Scrabble {
  constructor(wd) {
    this.word = wd;
  }
  static scoreDict = {
    aeioulnrst: 1,
    dg: 2,
    bcmp: 3,
    fhvwy: 4,
    k: 5,
    jx: 8,
    qz: 10
  }
  score() {
    if (this.word === null || this.word.includes('/n') || this.word.includes('/t') || this.word.trim() === '') {
      return 0;
    };
    let total = 0;
    this.word.toLowerCase().split('').forEach(
      letter =>{
        Object.keys(Scrabble.scoreDict).forEach(
        k => {
          if (k.includes(letter))
          total += Scrabble.scoreDict[k];
        })
      })

    return total;
  }
  static score(word) {
    if (word === null || word.includes('/n') || word.includes('/t') || word.trim() === '') {
      return 0;
    };
    let total = 0;
    word.toLowerCase().split('').forEach(
      letter =>{
        Object.keys(Scrabble.scoreDict).forEach(
        k => {
          if (k.includes(letter))
          total += Scrabble.scoreDict[k];
        })
      })

    return total;
  }
}


module.exports = Scrabble;
