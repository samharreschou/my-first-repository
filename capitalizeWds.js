wordCap('four score and seven');       // "Four Score And Seven"
wordCap('the javaScript language');    // "The Javascript Language"
wordCap('this is a "quoted" word');    // 'This Is A "quoted" Word'

function wordCap(str) {
  console.log(str.split(' ').map(elem => elem[0].toUpperCase() + elem.slice(1).toLowerCase()).join(' '));
}
