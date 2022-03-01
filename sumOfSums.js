
function sumOfSums(arr) {
  return arr.reduce((prev,curr) => prev.concat([prev[prev.length-1] + curr]), [0])
            .reduce((prev, curr) => prev + curr)
}


a =sumOfSums([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
b=sumOfSums([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
c=sumOfSums([4]);              // 4
d=sumOfSums([1, 2, 3, 4, 5]);  // 35

console.log(a,b,c,d)
