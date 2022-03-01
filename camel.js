swapCase('CamelCase');              // "cAMELcASE"
swapCase('Tonight on XYZ-TV');      // "tONIGHT ON xyz-tv"

function swapCase(str) {
  console.log(str.split('').map(letter => {
    if (/[a-z]/.test(letter)) {
      return letter.toUpperCase()
    } else if (/[A-Z]/.test(letter)) {
      return letter.toLowerCase()
    } else {
      return letter
    }
  }).join(''))
}
