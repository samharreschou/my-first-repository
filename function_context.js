Problem 1:

let person = {
  firstName: 'Rick ',
  lastName: 'Sanchez',
  fullName: this.firstName + this.lastName,
};

console.log(person.fullName);

logs 'undefined + undefined   -> NaN'

The function logs NaN because the execution context for person.fullName is the Global Environment
and the global object has no properties defined for firstName and lastName
--> undefined + undefined is not a number so NaN


Problem 2:

// franchise.allMovies() will return 'undefined undefined'
// because the execution context for allMovies() is the global env where name and number are not defined
// since there is a string ' ' in the return line being added, undefined and undefine will be implicitly coerced to 'undefined' and 'undefined'
//
// this can be fixed with the following code:

let franchise = {
  name: 'How to Train Your Dragon',
//  that: this,
  allMovies: function() {
    return [1, 2, 3].map(number => {
      console.log(this.name + ' ' + number)
    }
  )
  }
  //allMovies: (this.allMovies1).bind(this)
};


franchise.allMovies.call(franchise);


PROBLEM 3:


let franchise = {
  name: 'How to Train Your Dragon',
  allMovies: function() {
    let that = this;
    return [1, 2, 3].map(function(number) {
      return that.name + ' ' + number;
    });
  },
};

let a = franchise.allMovies.call(franchise);

console.log(a)


PROBLEM 4:
function myFilter(array, func, last) {
  let result = [];

  array.forEach(function(value) {
    if (func.call(last,value)) {
      result.push(value);
    }
  });

  return result;
}

let filter = {
  allowedValues: [5, 6, 9],
}

console.log(myFilter([2, 1, 3, 4, 5, 6, 9, 12], function(val) {
  return this.allowedValues.indexOf(val) >= 0;
}, filter)) // returns [5, 6, 9]
