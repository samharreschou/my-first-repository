problem 1:
// function ancestors(lst = []) {
//   if (Object.getPrototypeOf(this) === null) {
//     return lst
//   }
//   lst = lst.concat(this.name);
//   this = Object.getPrototypeOf(this);
//   return ancestors(lst.concat())
// }

Object.prototype.ancestors = function(lst = []) {
  if (Object.getPrototypeOf(this) === Object.prototype) {
    return lst.concat('Object.prototype')
  }
  lst = lst.concat(Object.getPrototypeOf(this).name);
  return Object.getPrototypeOf(this).ancestors(lst)
}

// name property added to make objects easier to identify
let foo = {name: 'foo'};
let bar = Object.create(foo);
bar.name = 'bar';
let baz = Object.create(bar);
baz.name = 'baz';
let qux = Object.create(baz);
qux.name = 'qux';

console.log(qux.ancestors());  // returns ['baz', 'bar', 'foo', 'Object.prototype']
baz.ancestors();  // returns ['bar', 'foo', 'Object.prototype']
bar.ancestors();  // returns ['foo', 'Object.prototype']
foo.ancestors();  // returns ['Object.prototype']


console.log(baz.ancestors());
console.log(bar.ancestors());
console.log(foo.ancestors());


problem 2:


function Person(firstName, lastName, age, gender) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.gender = gender;
  // this.fullName = function(){console.log('fullname from person')};
  // this.communicate = function() {console.log('communicate from person')};
  // this.eat = function() {console.log('eat from person')};
  // this.sleep = function() {console.log('sleep from person')}
//   return {
//     firstName: firstName,
//     lastName: lastName,
//     age: age,
//     gender: gender,
//     fullName() {console.log('fullName from Person')},
//     communicate() {console.log('communicate from person')},
//     eat() {console.log('eat from person')},
//     sleep() {console.log('sleep from person')}
//   }
// }
}

Person.prototype.fullName = function(){console.log('fullname from person')};
Person.prototype.communicate = function() {console.log('communicate from person')};
Person.prototype.eat = function() {console.log('eat from person')};
Person.prototype.sleep = function() {console.log('sleep from person')};

function Doctor(firstName, lastName, age, gender, specialtization) {
  // let returnObj = new Person(firstName, lastName, age, gender);
  // // returnObj.specialization = specialization;
  // // Doctor.prototype.specialization = specialization;
  // // Doctor.prototype.diagnose = function() {
  // //   console.log('doctor diagnose')
  // // }
  // returnObj.specialtization = specialtization;
  // return returnObj;
  Person.call(this,firstName,lastName,age,gender);
  this.specialtization = specialtization;
};

Doctor.prototype = Person.prototype
Doctor.constructor = Doctor;
Doctor.prototype.diagnose = function() {console.log('doctor diagnose')};


// Doctor.prototype.diagnose = function() {console.log('doctor diagnose good')};
function Professor(firstName,lastName,age,gender,subject) {
  Person.call(this, firstName,lastName,age,gender);
  // this.firstName = firstName;
  // this.lastName = lastName;
  // this.age = age;
  // this.gender = gender;
  this.subject = subject;
}

Professor.prototype = Person.prototype;
Professor.constructor = Professor
Professor.prototype.teach = function() {console.log('professor teach')};


function Student(firstName, lastName, age, gender, degree) {
  Person.call(this, firstName,lastName,age,gender);
  // this.firstName = firstName;
  // this.lastName = lastName;
  // this.age = age;
  // this.gender = gender;
  this.degree = degree;
}

Student.prototype = Person.prototype;
Student.constructor = Student;
Student.prototype.study = function() {console.log('student study')};

function GraduateStudent(firstName, lastName, age, gender, degree, graduateDegree) {
  Student.call(firstName, lastName, age, gender, degree)
  // this.firstName = firstName;
  // this.lastName = lastName;
  // this.age = age;
  // this.gender = gender;
  // this.degree = degree;
  this['graduateDegree'] = graduateDegree;
}

GraduateStudent.prototype = Student.prototype;
GraduateStudent.constructor = GraduateStudent;
GraduateStudent.prototype.research = function(){console.log('grad student research')};

// Doctor.prototype = Person.prototype;
// Doctor.prototype.specialization =

//
let person = new Person('foo', 'bar', 21, 'gender');
console.log(person instanceof Person);     // logs true
person.eat();                              // logs 'Eating'
person.communicate();                      // logs 'Communicating'
person.sleep();                            // logs 'Sleeping'
console.log(person.fullName());            // logs 'foo bar'
//
let doctor = new Doctor('foo', 'bar', 21, 'gender', 'Pediatrics');
console.log(doctor instanceof Person);     // logs true
console.log(doctor instanceof Doctor);     // logs true
doctor.eat();                              // logs 'Eating'
doctor.communicate();                      // logs 'Communicating'
doctor.sleep();                            // logs 'Sleeping'
console.log(doctor.fullName());            // logs 'foo bar'
doctor.diagnose();                         // logs 'Diagnosing'
console.log(doctor.specialtization)
//
let graduateStudent = new GraduateStudent('foo', 'bar', 21, 'gender', 'BS Industrial Engineering', 'MS Industrial Engineering');
// logs true for next three statements
console.log(graduateStudent instanceof Person);
console.log(graduateStudent instanceof Student);
console.log(graduateStudent instanceof GraduateStudent);
graduateStudent.eat();                     // logs 'Eating'
graduateStudent.communicate();             // logs 'Communicating'
graduateStudent.sleep();                   // logs 'Sleeping'
console.log(graduateStudent.fullName());   // logs 'foo bar'
graduateStudent.study();                   // logs 'Studying'
graduateStudent.research();                // logs 'Researching'



PROBLEM 3:

class CircularQueue {
  constructor(bufferSize){
    this.bufferSize = bufferSize;
    this.buffer = (new Array(this.bufferSize)).fill(null);
  }
  dequeue() {
    if (this.buffer.every(elem => elem === null)){return null}
    let returnVal = this.buffer.shift()
    this.buffer.push(null);
    return returnVal;
  };
  enqueue(item) {
    if (!this.buffer.some(elem => elem === null)) {this.dequeue()};

    this.buffer[this.buffer.indexOf(null)] = item;//push(item);
  };
}



let queue = new CircularQueue(3);
console.log(queue.dequeue() === null);


queue.enqueue(1);
queue.enqueue(2);
console.log(queue.dequeue() === 1);

queue.enqueue(3);
queue.enqueue(4);
console.log(queue.dequeue() === 2);

queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(7);
console.log(queue.dequeue() === 5);
console.log(queue.dequeue() === 6);
console.log(queue.dequeue() === 7);
console.log(queue.dequeue() === null);

let anotherQueue = new CircularQueue(4);
console.log(anotherQueue.dequeue() === null);

anotherQueue.enqueue(1)
anotherQueue.enqueue(2)
console.log(anotherQueue.dequeue() === 1);

anotherQueue.enqueue(3)
anotherQueue.enqueue(4)
console.log(anotherQueue.dequeue() === 2);

anotherQueue.enqueue(5)
anotherQueue.enqueue(6)
anotherQueue.enqueue(7)
console.log(anotherQueue.dequeue() === 4);
console.log(anotherQueue.dequeue() === 5);
console.log(anotherQueue.dequeue() === 6);
console.log(anotherQueue.dequeue() === 7);
console.log(anotherQueue.dequeue() === null);
