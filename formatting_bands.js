let test = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

//steps:
//change each 'country' property to 'Canada'
//make first letters of each word in band name capitalized
//remove all dots from bandnames (.replace('.', ''))
//fundamentally a mapping problem
function processBands(bands) {
  // bands.forEach(band => band.country = 'Canada')
  bands.forEach(band => {
    band.name = removePeriods(band.name);
    band.name = capit3(band.name);
    band.country = 'Canada';
  })
  return bands
  }

function capitalizeAndRemovePeriods(name) {
  return capit3(removePeriods(name))
};

function removePeriods(name) {
  return name.replaceAll('.','');
};

function capit3(name) {
  return name.split(' ') //have array of words
            .map(word => word.split('')) //have array of arrays of letters
            .map(wdArr => [wdArr[0].toUpperCase()].concat(wdArr.slice(1)) ) //transformed arrays of letters into leading capitals arrays of letters
            .map(modWdArr => modWdArr.join('')) //joined each of these leading capitals arrays together
            .join(' ') //joined the array together
            };

console.log(processBands(test));


bands.map(band => )
// should return:
/*[
  { name: 'Sunset Rubdown', country: 'Canada', active: false },
  { name: 'Women', country: 'Canada', active: false },
  { name: 'A Silver Mt Zion', country: 'Canada', active: true },
]
*/
