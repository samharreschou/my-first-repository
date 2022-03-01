function anagram2(word, list) {
  let wordArr = word.split('');
  let wordObj = wordArr.reduce(helper, {});
  let wordObjArr = list.map(elem => elem.split('').reduce(helper, {}));
  let matching = wordObjArr.filter(obj => Object.entries(obj).every(entry => entry[1] === wordObj[entry[0]]));
  return matching.map(elem => Object.keys(elem).join(''))
}

function helper(prev, curr) {
    if (curr in prev) {
      prev[curr] += 1
    } else {
      prev[curr] = 1
    };
    return prev
}

//create word object from the word with each letter and num occurences (map)
//create word object from each of the words in list same as above (map)
//convert word object list to word entries list (Object.entries())
//convert word to word entries list  (map Object.entries(elem))
//iterate through the object lst and check to see if there are matching keys and values (or matching entries every) do a filtering based on an every condition
//only return the values that meet the matching condition above

a = anagram('listen', ['enlists', 'google', 'inlets', 'banana']);  // [ "inlets" ]
b = anagram('listen', ['enlist', 'google', 'inlets', 'banana']);   // [ "enlist", "inlets" ]

console.log(a,b);

function anagram(word, list) {
  return list.filter(candidate => areAnagrams(candidate, word))
};

function areAnagrams2(candidate, word) {
  candidate = candidate.split('').reduce(helper, {});
  word = word.split('').reduce(helper, {});
  return Object.entries(candidate).every(([key, val]) => val === word[key]);
};

function areAnagrams(source, target) {
  let sourceLetters = source.split('').sort();
  let targetLetters = target.split('').sort();
  return compareArrays(sourceLetters, targetLetters);
};

function compareArrays(array1, array2) {
  return array1.join('') === array2.join('');
};
