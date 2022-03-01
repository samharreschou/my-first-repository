class Rectangle {
  constructor(width, length) {
    this.width = width;
    this.length = length;
  }

  getWidth() {
    return this.width;
  }

  getLength() {
    return this.length;
  }

  getArea() {
    return this.width * this.length;
  }
}

class Square extends Rectangle {
  constructor(sideLength) {
    super(sideLength, sideLength);
  };
};

let square = new Square(5);
console.log(`area of square = ${square.getArea()}`); // area of square = 25




//Problem 3:
class Cat {
  constructor(name) {
    this.name = name;
  }
  speaks() {
    return `${this.name} says meowwww.`;
  }
}

let fakeCat = Object.create(Cat.prototype);

console.log(fakeCat instanceof Cat); // logs true
console.log(fakeCat.name);           // logs undefined
console.log(fakeCat.speaks());       // logs undefined says meowwww.


//PROBLEM 4:
class Pet {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Cat extends Pet {
  constructor(name, age, color) {
    super(name, age);
    this.color = color;
  }
  info() {
    return `My cat ${this.name} is ${this.age} years old and has ${this.color} fur.`;
  }
}

let pudding = new Cat('Pudding', 7, 'black and white');
let butterscotch = new Cat('Butterscotch', 10, 'tan and white');

console.log(pudding.info());
console.log(butterscotch.info());


//PROBLEM 5:
class Vehicle {
  constructor(make, model, wheels) {
    this.make = make;
    this.model = model;
    this.wheels = wheels;
    //info function is the same
    //get wheel method is theV same
    //truck has 6 wheels, motorcycle 2, car: 4
    //all have make and model
    //truck also has payload as parameter to constructor
  }
  info() {
    return `${this.make} ${this.model}`;
  };
  getWheels() {
    return this.wheels;
  }
}

class Car extends Vehicle {
  constructor(make, model) {
    super(make, model, 4);
  }
}

class Motorcycle extends Vehicle {
  constructor(make, model) {
    super(make,model,2);
  }
}

class Truck extends Vehicle {
  constructor(make, model, payload) {
    super(make,model,6);
    this.payload = payload;
  }
}


//PROBLEM 6:
class Person {
  // constructor() {
  // }
  greeting(text) {
    console.log(text)
  };
}

class Shouter extends Person {
  // constructor() {
  //   super();
  // }
  greeting(text) {
    super.greeting(text.toUpperCase());
  };
}


let person = new Person();
let shouter = new Shouter();

person.greeting("Hello. It's very nice to meet you."); // Hello. It's very nice to meet you
shouter.greeting("Hello my friend."); // HELLO MY FRIEND.


//PROBLEM 8:



class Person {
  constructor(name) {
    this.name = name;
  }

  gait() {
    return "strolls";
  }
}

class Cat {
  constructor(name) {
    this.name = name;
  }

  gait() {
    return "saunters";
  }
}

class Cheetah{
  constructor(name) {
    this.name = name;
  }

  gait() {
    return "runs";
  }
}

let newMethod = {
  walk: function() {
    return `${this.name} ${this.gait()} forward`;
  }
};

Object.assign(Person.prototype,newMethod);
Object.assign(Cat.prototype, newMethod);
Object.assign(Cheetah.prototype, newMethod);

let mike = new Person("Mike");
console.log(mike.walk());
// "Mike strolls forward"

let kitty = new Cat("Kitty");
console.log(kitty.walk());
// "Kitty saunters forward"

let flash = new Cheetah("Flash");
console.log(flash.walk());
// "Flash runs forward"


//PROBLEM 10:
//shelter.adopt(ownerObj, petObj) --> adds pet obj to list of owner pets
//shelter.printAdoptions() --> prints owner first letter of name capitalized space last name cap
//has adopted the following pets: \n
//Pet constructor ==> type of animal , name of animal

class Pet {
  constructor(type, name) {
    this.type = type;
    this.name = name;
  }
}

class Owner {
  constructor(name){
    this.name = name[0].toUpperCase() + ' ' + name[1].toUpperCase() + name.slice(2);
    //this.pets = [];
    this.pets = [];
  }
  numberOfPets() {
    return this.pets.length;
  };
  printPets() {
    this.pets.forEach(pet => console.log(`a ${pet.type} named ${pet.name}`));
  };
}

class Shelter {
  constructor() {
    //this.pets = [];
    this.adoptions = {};
  }
  adopt(ownerObj, petObj) {
    if (ownerObj in this.adoptions) {
      this.adoptions[ownerObj].push(petObj);
    }
    else {
      this.adoptions[ownerObj] = [petObj];
    };
    ownerObj.pets.push(petObj);
    //this.adoptionspush([ownerObj, petObj]);
  };
  printAdoptions() {
    for (let ownerObj of Object.keys(this.adoptions)) {
      console.log(ownerObj)
      console.log(Object.keys(this.adoptions))
      console.log(`${ownerObj.name} has adopted the following pets:`)
      ownerObj.printPets();
      console.log('');
    }
    // console.log(`${} has adopted the following pets:`)
    //
    // function toPrintAdoptions(ownerName, adoptArr) {
    //   console.log(`${ownerName} has adopted the following pets:`);
    //   adoptArr.forEach(pet => console.log(`a ${pet.type} named ${pet.name}`));
    //   console.log('\n');
    // }
    // Object.keys(this.adoptions).forEach(ownerName => toPrintAdoptions(ownerName, this.adoptions[ownerName]));
  }
}


let butterscotch = new Pet('cat', 'Butterscotch');
let pudding      = new Pet('cat', 'Pudding');
let darwin       = new Pet('bearded dragon', 'Darwin');
let kennedy      = new Pet('dog', 'Kennedy');
let sweetie      = new Pet('parakeet', 'Sweetie Pie');
let molly        = new Pet('dog', 'Molly');
let chester      = new Pet('fish', 'Chester');

let phanson = new Owner('P Hanson');
let bholmes = new Owner('B Holmes');

let shelter = new Shelter();
shelter.adopt(phanson, butterscotch);
shelter.adopt(phanson, pudding);
shelter.adopt(phanson, darwin);
shelter.adopt(bholmes, kennedy);
shelter.adopt(bholmes, sweetie);
shelter.adopt(bholmes, molly);
shelter.adopt(bholmes, chester);
shelter.printAdoptions();
console.log(`${phanson.name} has ${phanson.numberOfPets()} adopted pets.`);
console.log(`${bholmes.name} has ${bholmes.numberOfPets()} adopted pets.`);


///PROBLEM 11:
class Banner {
  constructor(message) {
    this.message = message;
  }

  displayBanner() {
    console.log([this.horizontalRule(), this.emptyLine(), this.messageLine(), this.emptyLine(), this.horizontalRule()].join("\n"));
  }

  horizontalRule() {
    return `+${'-'.repeat(this.message.length + 2)}+`
  }

  emptyLine() {
    return `|${' '.repeat(this.message.length + 2)}|`
  }

  messageLine() {
    return `| ${this.message} |`
  }
}


let banner1 = new Banner('To boldly go where no one has gone before.');
banner1.displayBanner();
// +--------------------------------------------+
// |                                            |
// | To boldly go where no one has gone before. |
// |                                            |
// +--------------------------------------------+

let banner2 = new Banner('');
banner2.displayBanner();
// +--+
// |  |
// |  |
// |  |
// +--+
