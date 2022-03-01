letterCaseCount('abCdef 123');  // { lowercase: 5, uppercase: 1, neither: 4 }
letterCaseCount('AbCd +Ef');    // { lowercase: 3, uppercase: 3, neither: 2 }
letterCaseCount('123');         // { lowercase: 0, uppercase: 0, neither: 3 }
letterCaseCount('');            // { lowercase: 0, uppercase: 0, neither: 0 }

function letterCaseCount(str) {
  let upper = str.match(/[a-z]/g);
  let lower = str.match(/[A-Z]/g);
  console.log( {
    lowercase: lower === null ? 0 : lower.length,
    uppercase: upper === null ? 0 : upper.length,
    //neither:
    //neither: str.length - (this.uppercase + this.lowercase),
  })
}
