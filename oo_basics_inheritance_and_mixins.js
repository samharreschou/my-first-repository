Problem 1:
class Vehicle {
  constructor(year) {
    this.year = year;
  }
}

class Truck extends Vehicle {
}

class Car extends Vehicle {
}

let truck = new Truck(2003);
console.log(truck.year); // 2003

let car = new Car(2015);
console.log(car.year); // 2015


Problem 2

class Vehicle {
  constructor(year) {
    this.year = year;
  }
}

class Truck extends Vehicle {
  startEngine() {
    console.log('Ready to go!')
  }
  constructor(year) {
    super(year)
    this.startEngine()
  }
}

let truck = new Truck(2003);
console.log(truck.year); // 2003

Problem 3
class Vehicle {
  constructor(year) {
    this.year = year;
  }
}

class Truck extends Vehicle {
  constructor(year, bedType) {
    super(year);
    this.bedType = bedType;
  }
}

class Car extends Vehicle {}

let truck1 = new Truck(2003, 'Short');
console.log(truck1.year);
console.log(truck1.bedType);



Problem 4
class Vehicle {
  startEngine() {
    return 'Ready to go!';
  }
}

class Truck extends Vehicle{
  startEngine(speed) {
    return super.startEngine() + ' Drive ' + String(speed) + ', please!'
  }
}

let truck1 = new Truck();
console.log(truck1.startEngine('fast'));

let truck2 = new Truck();
console.log(truck2.startEngine('slow'));



Problem 5
class Cat {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Hello! My name is ${this.name}!`;
  }
}

Object.assign(Cat.prototype, {walk: function(){console.log("Let's go for a walk!")}})

let kitty = new Cat("Sophie");
console.log(kitty.greet());
console.log(kitty.walk());



Problem 6
const swimMixin = {
  swim() {
    return `${this.name} is swimming.`;
  }
}

class Fish {
  constructor(name) {
    this.name = name;
  }
}

class Dog {
  constructor(name) {
    this.name = name;
  }
}

class Maltese extends Dog {}

Object.assign(Maltese.prototype, swimMixin);
Object.assign(Fish.prototype, swimMixin);

let dog1 = new Maltese("Buddy");
let fish1 = new Fish("Nemo");

console.log(dog1.swim());
console.log(fish1.swim());


Problem 7


let towMixin = {
  tow() {
    return 'I can tow a trailer!'
  }
}

class Truck {}

class Car {}

Object.assign(Truck.prototype, towMixin)

let truck = new Truck();
console.log(truck.tow());


Problem 8


const towMixin = {
  tow() {
    return "I can tow a trailer!";
  }
}

class Vehicle {
  constructor(year) {
    this.year = year;
  }
}

class Truck extends Vehicle {
  constructor(year) {
    super(year)
    Object.assign(this, towMixin);
  }
}

class Car extends Vehicle {}

let truck = new Truck(2002);
console.log(truck.year);
console.log(truck.tow());

let car = new Car(2015);
console.log(car.year);
