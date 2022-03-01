/*
input:
two version numbers:
-version number (string) composed of positive integers and periods
-no leading periods
-no consecutive periods (as in no empty sections)
-no ending with periods


-requirements
-each dot is sort of like a tens place separator but not really
- more similar to a sql order by first_group, second_group ... , nth group
-IS THERE AN INDETERMINATE AMOUNT OF DOTS?
assume yes
output:
-integers -1, 0, or 1 corresponding to
  -negative 1: version1 < version 2
  -positive 1: version1 > version2
  -zero: version1 and version2 are the same
  -null if we have any non-period or number characters, exapnd this to include consecutive periods, or leading periods

QUESTIONS: are leading zeros allowed:
ans: looks like not so

can sections of the version number be 0?:
yes

can sections of the version number be blank, spaces, other chars?

can we start with a period?
assume no

can we end with a period?
assume no

mental model1:
check for the null enducing things
turn both version1 and version2 into arrays using regex max
figure out which array is longer
go through a for loop that has index length of the shorter of the two arrays
at each of those indices compare the Number conversion of that element to the other one (version1 to version2)
if we have any that are greater than we return immediately
if we exit the loop that means they are all the same and in that case we either return the longer of the two
or if they are also the same length then we return 0

EXAMPLES:

compareVersions('0.1', '1') === -1
compareVersions('1.0', '1.1') === -1
compareVersions('1.1','1.0') === 1
compareVersions('1.2', '1.2.0.0') === 1
compareVersions('1.18.2','13.37') === 1
copmareVersions('1.2.3.4.5','1.2.3.4.5') ===1

DATA STRUCTURES:
use regex to detect explicit edge cases (non period non number etc)
start with two strings version1 and version2
get the length of each of those strings (integer)
compare the two lengths
convert these strings into lists using regex matching
compare the two arrays element by element using for loop
break the loop  and return if inequality occurs
if end of loop reached we then have to go back from

ALGORITHM:
1. check edge cases using regex etc:
  -no non-period or non-number chars
  -no consecutive periods
  -no leading periods (not regex)
2. if edge cases met then return null, else continue
3. use regex matching to convert version1 and version2 from strings to arrays version1Arr, version2Arr
4. instantiate variable lengthBasedOutcome to correspond to 0 if they are same length, 1 if version1Arr is longer, -1 if version2Arr is longer
5. instantiate for loop with index starting at 0, ending at length of shorter array and incrementing by 1
6. within the for loop we compare versionArr1[idx] to versionArr2[idx]
  -if at any loop version1Arr[idx] > version2Arr[idx] then return 1
  -if at any loop version1Arr[idx] < version2Arr[idx] then return -1
  -else continue
7. if we exit the loop without returning anything then we return lengthBasedOutcome
NOTE: dont forget to convert string chars to numbers!
run thru 1st testcase:
1. edgecase not met
2.continue
3. [0,1]-> version1Arr
  [1] -> version2Arr
4. 1 (version1Arr is longer)
5. -1st loop:
      -idx is 0 -> version2Arr[0] is 1, version1Arr[0] is 0
      -version2Arr[0] > version1...
        -> return -1

*/

function compareVersions(version1, version2) {
  let digitsOrDot = /[^0-9\.]/;
  let consecutiveDots = /\.\./;
  let endingDot = /.*\.$/;
  let startingDot = /^\./;
  if (digitsOrDot.test(version1) || digitsOrDot.test(version2)) return null;
  if (consecutiveDots.test(version1) || consecutiveDots.test(version2)) return null;
  if (startingDot.test(version1) || startingDot.test(version2)) return null;
  if (endingDot.test(version1) || endingDot.test(version2)) return null;
  //done with explicit edge cases

  let dotSplitter = /\./;
  let arr1 = version1.split(dotSplitter).map(elem => Number(elem));
  let arr2 = version2.split(dotSplitter).map(elem => Number(elem));
  let maxIndex = 0;
  let lengthBasedOutcome = 0;// = 0;
  //lengthBasedOutcome = 0;
  let len1 = arr1.length;
  let len2 = arr2.length;
  if (len1 > len2) {
    lengthBasedOutcome = 1
    maxIndex = len2;
  } else if (len1 < len2) {
    lengthBasedOutome = -1;
    maxIndex = len1;
  } else if (len1 === len2) {
    lengthBasedOutcome = 0;
    maxIndex = len1;
  };
  console.log(`arr1 is: ${arr1}`)
  console.log(`arr2 is ${arr2}`)
  console.log(`len1 is ${len1}`)
  console.log(`len2 is ${len2}`)
  console.log(`lengthBasedOutcome: ${lengthBasedOutcome}`)
  console.log(`maxIndex: ${maxIndex}`)
  for (let idx = 0; idx < maxIndex; idx += 1) {
    if (arr1[idx] > arr2[idx]) {
      console.log(1)
      return 1
    } else if (arr1[idx] < arr2[idx]) {
      console.log(-1)
      return -1
    }
  }
  console.log(lengthBasedOutcome)
  if (lengthBasedOutcome === 0) {
    return 0} else if (lengthBasedOutome === 1) {
      if (arr1.slice(maxIndex).every(elem => elem === 0)) return 0;
      return 1
  } else {
    return arr2.slice(maxIndex).every(elem => elem === 0) ? 0 : -1
  }
  return lengthBasedOutcome;
};

compareVersions('0.1', '1') //=== -1
compareVersions('1.0', '1.1') //=== -1
compareVersions('1.1','1.0') //=== 1
compareVersions('1.2', '1.2.0.0')// === 0
compareVersions('1.18.2','13.37') //=== -1
compareVersions('1.2.3.4.5','1.2.3.4.5') //===0
