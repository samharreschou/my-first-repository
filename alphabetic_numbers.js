const zeroThru19 = [
  'zero',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten',
  'eleven',
  'twelve',
  'thirteen',
  'fourteen',
  'fifteen',
  'sixteen',
  'seventeen',
  'eighteen',
  'nineteen'
];

function alphabeticNumberSort(arr) {
  let obj = {}
  arr.forEach((elem, idx) => obj[elem] = zeroThru19[idx]);
  console.log(obj);
  let entr = Object.entries(obj);
  entr.sort((a,b) => {
    if (b[1] > a[1]) {
      return -1
    } else if (b[1]<a[1]) {
      return 1
    } else {
      return 0
    }
  })
  return entr.map(elem => elem[0])
}

console.log(alphabeticNumberSort([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]))
