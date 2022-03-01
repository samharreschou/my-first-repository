function myMap(array, func) {
  let newArr = [];
  array.forEach(elem => newArr.push(func(elem)));
  return newArr;
};

//OR

function myMap2(array, func) {
  let newArr = [];
  for (let idx = 0; idx < array.length; idx += 1) {
    newArr.push(func(array[idx], idx, array))
  }
  return newArr;
};

let plusOne = n => n + 1;
console.log(myMap2([1, 2, 3, 4], plusOne));       // [ 2, 3, 4, 5 ]

function getBooksTitle(books) {
  // ...
  let bookArr = function(bookObj) {
    return bookObj.title;
  }
  return myMap(books, bookArr);

};

let books = [
  {
    title: 'JavaScript and JQuery: Interactive Front-End Web Development',
    author: 'Jon Ducket',
    edition: '1st',
  },
  {
    title: 'Eloquent JavaScript: A Modern Introduction to Programming',
    author: 'Haverbeke',
    edition: '2nd',
  },
  {
    title: "Learning Web Design: A Beginner's Guide to HTML, CSS, JavaScript, and Web Graphics",
    author: 'Jennifer Niederst Robbins',
    edition: '4th',
  },
];

function getTitle(book) {
  return book['title'];
}

console.log(getBooksTitle(books));
// console output
[
  "JavaScript and JQuery: Interactive Front-End Web Development",
  "Eloquent JavaScript: A Modern Introduction to Programming",
  "Learning Web Design: A Beginner's Guide to HTML, CSS, JavaScript, and Web Graphics"
]
