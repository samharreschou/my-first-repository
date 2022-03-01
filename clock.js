"use strict";

//clock keeps running list of clocks
//time at will construct a new clock if there doesn't exist a clock in clocks that has that same time
//returns the new clock object or the current clock object with that time

//comparison performed using the str property of the clock and the output of the
//getTimeStr static method

//all funcs take variable number of arguments

//constructor will take in the time string

//toString() is an instance method that will return the str property of the clock


class Clock {
  static allClocks = [];
  constructor(hours, minutes = 0) {
    console.log(`constructor arguments are: ${hours} and ${minutes}`)
    this.hours = hours;//hoursMinutes[0];
    this.minutes = minutes;//hoursMinutes[1];
    Clock.allClocks.push(this);
    //console.log(`constructor will create properties this.hours:${this.hours} and min: ${this.minutes} `)
  };
  // static getHoursAndMinutes(hz, m){
  //   console.log(`gethoursandmin args are: ${hz} and ${m}`)
  //   //returns hours and minutes in array form
  //   // if (m === undefined) {
  //   //   console.log(`m is undefined (m is ${m})`)
  //   //   return [hz,0];
  //   // }
  //   console.log(`hz is ${hz} and m is ${m}`)
  //   console.log(`gethoursandmin output will be ${[hz,m]}`)
  //   return [hz,m];
  // };

  toString() {
    console.log(`this.hours as in tostring are ${this.hours}`);
    console.log(`while this.minutes = ${this.minutes}`);

    let hoursStr, minStr;
    if (Number(this.hours) < 10) {
      console.log(`turns out this.hours is less than 10`)
      hoursStr = '0' + this.hours;
    }else{
      hoursStr = String(this.hours);
    };
    if (this.minutes < 10) {
      minStr = '0' + String(this.minutes);
    }else{
      minStr = String(this.minutes);
    }
    console.log(`tostring returns ${hoursStr + ':' + minStr}`)
    return hoursStr + ':' + minStr;
  };

  static at(hz, m=0) {
    console.log(`at arguments are: ${hz} and ${m}`)
    //let hoursMinutes = Clock.getHoursAndMinutes(hz, m);
    let matchingClock = Clock.allClocks.filter(clock => clock.hours === hz && clock.minutes === m);
    if (matchingClock.length > 0) {
      console.log(`at returns ${matchingClock[0]}`)
      return matchingClock[0];
    };
    console.log(`at returns new clock with construct args: ${hz} and ${m}`)
    return new Clock(hz, m);
  };

  getDaysHoursMin(min) {
    let dayz, hourz, minutez;
    dayz = Math.floor(min/(24*60));
    hourz = Math.floor((min - (dayz * 24 * 60))/60);
    minutez = min - (dayz * 24 * 60) - (hourz*60);
    console.log(`getdayshoursmin output is ${[dayz, hourz, minutez]}`)
    return [dayz, hourz, minutez];
  }
  subtract(minz){
    let [ days, hours, min ] = this.getDaysHoursMin(minz);
    if (hours > this.hours) {
      this.hours = 24 - (hours - this.hours);
    };
    if (min > this.minutes) {
      if (this.hours === 0) {
        this.hours = 23;
        this.minutes = 60 - min;
        console.log(`this minutes and hours are ${this.minutes}, ${this.hours}`);

        return this;
      }else{
      this.hours -= 1;
      this.minutes = 60 - (min - this.minutes);
      console.log(`this minutes and hours are ${this.minutes}, ${this.hours}`);

      return this}

    } else {
      this.minutes -= min;
      console.log(`this minutes and hours are ${this.minutes}, ${this.hours}`);

      return this;
    }
  };

  add(minz){
    let [ days, hours, min ] = this.getDaysHoursMin(minz);
    console.log(`days hrs, min are ${days}, ${hours}, ${min}`)
    if (hours + this.hours >= 24) {
      this.hours = hours + this.hours - 24;
    } else {
      this.hours += hours;
    }
    if (min + this.minutes >= 60) {
      if (this.hours === 24) {
        this.hours = 0;
        this.minutes = 120 - (min + this.minutes);
        console.log(`this minutes and hours are ${this.minutes}, ${this.hours}`);
        return this;
      } else {
      this.hours += 1;
      this.minutes = 120 - min + this.minutes;
      console.log(`this minutes and hours are ${this.minutes}, ${this.hours}`);
      return this;
    }
    } else{
      this.minutes += min;
      console.log(`this minutes and hours are ${this.minutes}, ${this.hours}`);
      return this;
    }
  };

};


module.exports = Clock;
