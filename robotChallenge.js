"use strict";

//random name should be two capital letters (charcode 65 to 90)
//followed by two random numbers 0 to 9 (charcode )
//use String.fromCharCode(65 + Math.floor(Math.random*(90-65))) for each random letter
//use String.fromCharCode(48 + Math.floor(Math.random*(57-48))) for each random letter
//keep a static property that is a list of names generated so far to avoid collisions
class Robot {
  static robotNumbers = [];
  static randLett() {
    return String.fromCharCode(65 + Math.floor(Math.random()*(90-65)));
  };
  static randNum() {
    return String.fromCharCode(48 + Math.floor(Math.random()*(57-48)))
  };

  reset() {
    let potentialName;
    while (true) {
      potentialName = Robot.randLett() + Robot.randLett() + Robot.randNum() + Robot.randNum() + Robot.randNum();
      console.log(`potentialName is ${potentialName}`)
      if (!(Robot.robotNumbers.includes(potentialName))) {
        break;
      }
    }
    Robot.robotNumbers.push(potentialName);
    this.nameThing = potentialName;
  };
  name() {
    if (this.nameThing !== undefined) {
      return this.nameThing;
    }
    let potentialName;
    while (true) {
      potentialName = Robot.randLett() + Robot.randLett()+ Robot.randNum() + Robot.randNum() + Robot.randNum();
      console.log(`potentialName is ${potentialName}`)
      if (!(Robot.robotNumbers.includes(potentialName))) {
        break;
      }
    }
    this.nameThing = potentialName;
    Robot.robotNumbers.push(potentialName);
    return this.nameThing;
  }
}

// let rob = new Robot();
//
// let nam = rob.name();
// rob.reset();
// let newNam = rob.name();
// console.log(`nam is ${nam}`)
// console.log(`newNam is ${newNam}`)
module.exports = Robot;
