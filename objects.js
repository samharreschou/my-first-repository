//problem 1:
function createGreeter(name) {
  //let msg = '';
  return {
    msg: '',
    name: name,
    morning: 'Good Morning',
    afternoon: 'Good Afternoon',
    evening: 'Good Evening',
    greet: function(timeOfDay) {
      let msg = '';
      switch (timeOfDay) {
        case 'morning':
          msg += `${this.morning} ${this.name}`;
          break;
        case 'afternoon':
          msg += `${this.afternoon} ${this.name}`;
          break;
        case 'evening':
          msg += `${this.evening} ${this.name}`;
          break;
      }

      console.log(msg);
    },
  };
}

let helloVictor = createGreeter('Victor');
helloVictor.greet('morning');
//= Good Morning Victor


//PROBLEM 2:
let item = {
  name: 'Foo',
  description: 'Fusce consequat dui est, semper.',
  price: 50,
  quantity: 100,
  discount: function(percent) {
    let discount = this.price * percent / 100;
    let newPrice = this.price - discount;
    //this.price -= discount;

    return newPrice;
  },
};

console.log(item.discount(20))
console.log(item.discount(50))
console.log(item.discount(25))


//PROBLEM 3:
console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
console.log(objectsEqual({}, {}));                                      // true
console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false

//to check if objects are equal you can just iterate over all of the keys of the object
//convert those keys into an array
//compare that array to the array created from the other object
//go item by item and if the item is in the other array, delete it from that array
//then move on to the next
//as soon as one item is not there return false


function objectsEqual(a, b) {
  // let objArr1 = Object.entries(obj1);
  // let objArr2 = Object.entries(obj2);
  //let objKeys1 = Object.keys(obj1);
  //let objKeys2 = Object.keys(obj2);
  // let objVals1 = Object.values(obj1);
  // let objVals2 = Object.values(obj2);
  // if (objKeys1.length !== objKeys2.length) return false;
  //return Object.keys(a).every(keyA => Object.keys(b).includes(keyA) && b[keyA] === a[keyA])// && Object.keys(b).every(keyB => Object.keys(b).includes(keyA) && b[keyA] === a[keyA])
  let firstDirection = Object.keys(a).every(keyA => keyA in b && b[keyA] === a[keyA]);
  let reverseDirection = Object.keys(b).every(keyB => keyB in a && a[keyB] === b[keyB]);
  return firstDirection && reverseDirection;
  //OR
  //return Object.keys(a).every(keyA => keyA in b && b[keyA] === a[keyA])
}

function actualObjectsEqual1(a,b) {
  if (objectsEqualDeep(a,b)) return true;

  return !!objectsEqualDeep(a,b);
}

function objectsEqualDeep(a,b) {
  if (typeof(a) !== 'object' || typeof(b) !== 'object') return false;
  if (Object.keys(a).length !== Object.keys(b).length) return false;
  function keyChecker(key) {
    if (key in b && key in a && b[key] === a[key]) {
      return true
    };
    if (key in b && key in a && b[key] !== a[key] && !(typeof(b[key]) === 'object' && typeof(a[key]) !== 'object')) {
      return true
    };
    if (key in b && key in a && typeof(b[key]) === 'object' && typeof(a[key]) === 'object') {
      return a[key] !== undefined && b[key] !== undefined && objectsEqualDeep(a[key],b[key]);
    }
    return false;
  }
  let firstDirection = Object.keys(a).every(keyChecker);
  let reverseDirection = Object.keys(b).every(keyChecker);
  if (firstDirection && reverseDirection) return true;
}

function keyChecker(key) {
  if (key in b && key in a && b[key] === a[key]) {
    return true
  };
  if (key in b && key in b && typeof(b[key]) === 'object' && typeof(a[key]) === 'object') {
    return objectsEqualDeep(a[key],b[key]);
  }
  return false
}

//   for (key1 of objKeys1) {
//     if (key1 in obj2 && obj2[key1] === obj1[key1]) {
//       continue;
//     }
//     return false;
//
//   }
//   return true;
// }
//
// function objectsEqualDeep(a, b) {
//   return (Object.keys(a).every(keyA => (keyA in b && b[keyA] === a[keyA]) || (objectsEqualDeep(a[keyA],b[keyA])))) && objectsEqualDeep(b,a);
// }


//PROBLEM 4:

function createStudent(name, year) {
  return {
    name: name,
    year: year,
    courses: [],
    info() {
      console.log(`${this.name} is a ${this.year} student`);
    },
    listCourses() {
      console.log(this.courses);
    },
    addCourse(courseObj) {
      this.courses.push(courseObj);
    },
    findCourseFromCode(code) {
      let course = false;
      for (let idx in this.courses) {
        if (this.courses[idx]['code'] === code) {
          course = this.courses[idx];
          break
        }
      }
    //  console.log(`course is ${course.code}`)
      return course;
    },
    addNote(code, note) {
      let course = this.findCourseFromCode(code);
      if (!course) return true;
      if ('note' in course) {
        course['note'] += '; ' + note;
        //return true;
      }
      else{
       course['note'] = note;
     }
    },
    updateNote(code, note) {
      let course = this.findCourseFromCode(code);
      if (course){
      course['note'] = note;
    }
    },
    viewNotes() {
      for (let course of this.courses) {
        if (Object.keys(course).includes('note')) {
          console.log(`${course.name}: ${course.note}`)
        }
      }
    }
}
}

let foo = createStudent('Foo', '1st');
foo.info();
// "Foo is a 1st year student"
foo.listCourses();
// [];
foo.addCourse({ name: 'Math', code: 101 });
foo.addCourse({ name: 'Advanced Math', code: 102 });
foo.listCourses();
// [{ name: 'Math', code: 101 }, { name: 'Advanced Math', code: 102 }]
foo.addNote(101, 'Fun course');
foo.addNote(101, 'Remember to study for algebra');
foo.viewNotes();
// "Math: Fun course; Remember to study for algebra"
foo.addNote(102, 'Difficult subject');
foo.viewNotes();
// "Math: Fun course; Remember to study for algebra"
// "Advance Math: Difficult subject"
foo.updateNote(101, 'Fun course');
foo.viewNotes();
// "Math: Fun course"
// "Advanced Math: Difficult subject"


//PROBLEM 5:

function createStudent(name, year) {
  return {
    name: name,
    year: year,
    courses: [],
    info() {
      console.log(`${this.name} is a ${this.year} student`);
    },
    listCourses() {
      console.log(this.courses);
    },
    addCourse(courseObj) {
      this.courses.push(courseObj);
    },
    findCourseFromCode(code) {
      let course = false;
      for (let idx in this.courses) {
        if (this.courses[idx]['code'] === code) {
          course = this.courses[idx];
          break
        }
      }
    //  console.log(`course is ${course.code}`)
      return course;
    },
    addNote(code, note) {
      let course = this.findCourseFromCode(code);
      if (!course) return true;
      if ('note' in course) {
        course['note'] += '; ' + note;
        //return true;
      }
      else{
       course['note'] = note;
     }
    },
    updateNote(code, note) {
      let course = this.findCourseFromCode(code);
      if (course){
      course['note'] = note;
    }
    },
    viewNotes() {
      for (let course of this.courses) {
        if (Object.keys(course).includes('note')) {
          console.log(`${course.name}: ${course.note}`)
        }
      }
    }
}
}

//let school = Object.create(createStudent);

let school = {
  yearOptions: ['1st','2nd','3rd','4th','5th'],
  students: [],
  //coursesOffered: [],
  avg(lst) {
    return lst.reduce((curr,prev) => curr + prev, 0) / lst.length;
  },
  //we will need to add in the names and course codes, and list of students with their grades pairings
  addStudent(student) {
    if (!this.yearOptions.includes(student.year)) {
      console.log('Invalid Year');
    };
    this.students.push(student);
    for (course of student.courses) {
      if (this.courses.map(elem => elem.name).includes(course.name)) {
        this.courses.filter(elem => elem.name === course.name)[0]['students'][student] = Object.keys(course).includes('grade') ? course['grade'] : 'In progress';
        continue;
      }
      this.courses.push({name: course.name, code: course.code, students: {student: Object.keys(course).includes('grade') ? course['grade'] : 'In progress'}})
    }
    //school.courses should look like: [{name: math, code: 100, students: {studentObj1: 90, studentObj2: 'In progress'}}, {nEXT COURSE}, ...]
  },
  enrollStudent(studentObj, courseName) {
    if (studentObj.courses.some(course => course.name === courseName)) {
      console.log("Already Enrolled");
    }
    else {
      let course = this.courses.filter(elem => elem.name === courseName)[0];
      course[students][studentObj] = 'In progress';
      studentObj.courses.push(course);
    };
  },
  addGrade(studentObj,courseName, grade) {
    let course = this.courses.filter(elem => elem.name === courseName)[0];
    course.students[studentObj] = grade;
    studentObj.courses.filter(elem => elem.name === courseName)[0]['grade'] = grade;
  },
  courseReport(courseName) {
    let course = this.courses.filter(elem => elem.name === courseName)[0];
    console.log(`=${courseName} Grades=`)
    let total = 0;
    let numStudents = 0;
    for (let key of Object.keys(course.students)) {
      if (course[students][key] === 'In progress') {
        continue;
      }
      console.log(`${key.name}: ${course[students][key]}`)

      numStudents += 1;
      total += course[students][key];

    }
    let avg = total / numStudents;
    console.log('---')
    console.log(`Course Average: ${avg}`)
  },
  getReportCard(studentObj){
    studentObj.courses.forEach(course => console.log(`${course.name}: ${course.grade}`));
  }

}


// Examples of created student objects with grades; methods on the objects are not shown here for brevity.
// The following are only showing the properties that aren't methods for the three objects
foo = createStudent('foo', '3rd');
foo.addCourse({ name: 'Math', code: 101, grade: 95, });
foo.addCourse({ name: 'Advanced Math', code: 102, grade: 90, });
foo.addCourse({ name: 'Physics', code: 202, });
// {
//   name: 'foo',
//   year: '3rd',
//   courses: [
//     { name: 'Math', code: 101, grade: 95, },
//     { name: 'Advanced Math', code: 102, grade: 90, },
//     { name: 'Physics', code: 202, }
//   ],
// }
//
// bar;
// {
//   name: 'bar',
//   year: '1st',
//   courses: [
//     { name: 'Math', code: 101, grade: 91, },
//   ],
// }
//
// qux;
// {
//   name: 'qux',
//   year: '2nd',
//   courses: [
//     { name: 'Math', code: 101, grade: 93, },
//     { name: 'Advanced Math', code: 102, grade: 90, },
//    ],
// }
 let barObj = {
  name: 'bar',
  year: '1st',
  courses: [
    { name: 'Math', code: 101, grade: 91, },
  ],
}

let bar = createStudent('bar', '1st');
Object.assign(bar,barObj);

let quxObj = {
  name: 'qux',
  year: '2nd',
  courses: [
    { name: 'Math', code: 101, grade: 93, },
    { name: 'Advanced Math', code: 102, grade: 90, },
   ],
}

let qux = createStudent('qux','2nd');
Object.assign(qux, quxObj)

//
// school.getReportCard(qux);
school.addStudent(qux);
school.addStudent(bar)
school.addStudent(foo)
school.enrollStudent(qux, 'Advanced Math');
school.enrollStudent(bar, 'Advanced Math');
school.enrollStudent(foo,'Advanced Math');
console.log(school);
//school.courseReport('Advanced Math');
