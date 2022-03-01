

function leadingSubstrings(str) {
  return str.split('')
            .reduce((prev, _, idx, arr) => prev.concat(arr.slice(0, idx + 1).join('')), []);
          }

function substrings(str) {
  return str.split('')
     .reduce((prev, _, idx) => prev.concat(...leadingSubstrings(str.slice(idx, str.length))), []);
}

function palindromes(str) {
  return substrings(str).filter(sub => sub.split('')
                                          .every((char, idx, arr) =>
                                            char === sub.split('').reverse()[idx])
                                       && sub.length !== 1);
}

console.log(palindromes('hello-madam-did-madam-goodbye'))

console.log(palindromes('knitting cassettes'))
