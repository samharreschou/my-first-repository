function reverse(str) {
  return str.split('').reverse().join('');
}

a=reverse('hello');                  // returns "olleh"
b=reverse('The quick brown fox');    // returns "xof nworb kciuq ehT"

console.log(a,b)
