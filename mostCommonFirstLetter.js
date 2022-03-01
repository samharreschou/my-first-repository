function mostCommonFirstLetter(arr) {
  let firstLetterArr = arr.map(elem => elem[0])
  let letterOccurrences = {};
  firstLetterArr.forEach(elem => {
    if (elem in letterOccurrences) {
      letterOccurrences[elem] += 1;
    } else {
      letterOccurrences[elem] = 1;
    }
  })
  function maxOcc(a,b) {
    if (a[1] > b[1]) {
      return a
    }
    return b
  }
  return Object.entries(letterOccurrences).reduce(maxOcc)[0]
};

let names = ['Heather', 'Gisella', 'Katsuki', 'Hua', 'Katy', 'Kathleen', 'Otakar'];

console.log(mostCommonFirstLetter(names));

//console.log(names.reduce(function (prev, curr, idx, arr) {

//}))
