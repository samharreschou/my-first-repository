staggeredCase('I Love Launch School!');        // "I LoVe lAuNcH ScHoOl!"
staggeredCase('ALL_CAPS');                     // "AlL_CaPs"
staggeredCase('ignore 77 the 4444 numbers');   // "IgNoRe 77 ThE 4444 nUmBeRs"


function staggeredCase2(str) {
  console.log(str.split('').map((chr, idx, arr) => {
    if (idx % 2 === 0) {
      return chr.toUpperCase()
    }
    return chr.toLowerCase();
  }).join(''))
}

function staggeredCase(str) {
  let counter = true;
  console.log(
    str.split('').map((chr) => {
      if (!/[a-z]/i.test(chr)) {
        return chr;
      } else if (counter) {
        counter = !counter;
        return chr.toUpperCase()
      } else {
        counter = !counter;
        return chr.toLowerCase();
      }
    }).join('')
  )
}
