

function multiplyAllPairs(arr1, arr2) {
  let products = [];
  //iterate through arr1 and take product of each elem with each elem of array2 all the while adding to products arr
  arr1.forEach(elem1 => arr2.forEach(elem2 => products.push(elem1 * elem2)));
  return products.sort((a,b)=>a-b);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]))
