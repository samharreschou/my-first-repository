PROBLEM 1:
console.log("Hello");
console.log([1,2,3]);
console.log({name: 'Srdjan'});


function newLog(obj) {
  console.log(Object.getPrototypeOf(obj).constructor.name)
  // console.log(typeof(obj))
}

newLog('hlel')
newLog([1,2,3]);
newLog({name:'3443'})


PROBLEM 2:

class Cat {}


PROBLEM 3
let kitty = new Cat();
PROBLEM 4
class Cat {
  constructor() {
    console.log("I'm a cat!")
  }
}

let kitty = new Cat();

PROBLEM 5
class Cat {
  constructor(name) {
    this.name = name;
    console.log(`Hi my name is ${this.name}`)
  }
}

let kitty = new Cat('Sophie');


PROBLEM 6
class Person {
  constructor(name = 'John Doe') {
    this.name = name;
  }
}

let person1 = new Person();
let person2 = new Person("Pepe");

console.log(person1.name); // John Doe
console.log(person2.name); // Pepe


PROBLEM 7
class Cat {
  constructor(name) {
    this.name = name;
  }
  rename(newName) {
    this.name = newName;
  }
}

let kitty = new Cat('Sophie');
console.log(kitty.name); // Sophie
kitty.rename('Chloe');
console.log(kitty.name); // Chloe


PROBLEM 8
class Cat {
  static genericGreeting() {
    console.log('Hello I am a cat')
  }
}

Cat.genericGreeting();


PROBLEM 9
class Cat {
  constructor(name) {
    this.name = name;
  }

  personalGreeting() {
    console.log('Hi my name is ' + this.name);
  }

  static genericGreeting() {
    console.log('Hello I am a cat')
  }
}


let kitty = new Cat("Sophie");
Cat.genericGreeting();
kitty.personalGreeting();
