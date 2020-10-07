// Do not change any of the function names
let testVariable = [2,3,5,4];
let testVariabeStr = ["istian","tinay","ahab"];
//Example 1:
function returnFirst(arr) {
  // return the first item from the array

  return arr[0];
}
// const testRun = returnLast(testVariable);
// console.log(testRun);
function returnLast(arr) {
  // return the last item of the array

  return arr.pop();
}
// const testRun = getArrayLength(testVariable);
// console.log(testRun);
function getArrayLength(arr) {
  // return the length of the array
  
  return arr.length;
}

// const funcLog = incrementByOne(testVariable);
// console.log(funcLog);
function incrementByOne(arr) {
  // arr is an array of integers  
  // increase each integer by one
  // return the array

  
  let outerElement = new Array();
  for (let index = 0; index < arr.length; index++) {
    let element = arr[index];
    element ++;
    outerElement[index] = element;
  }
  // console.log(outerElement);
  return outerElement;
}

// const funcLog = incrementByOne(testVariable);
// let funcLog = addItemToArray(testVariable,10);
// console.log(funcLog);
function addItemToArray(arr, item) {
  // add the item to the end of the array
  // return the array
  
  let outerElement = new Array();
  for (let index = 0; index < arr.length; index++) {  
    outerElement[index] = arr[index];  
  }
  outerElement.push(item);
  return outerElement;
}

// const funcTest = addItemToFront(testVariable, 11);
// console.log(funcTest);
function addItemToFront(arr, item) {
  // add the item to the front of the array
  // return the array
  // hint: use the array method .unshift

  let outerElement = new Array();
  for (let index = 0; index < arr.length; index++) {
    outerElement[index] = arr[index];
  }
  outerElement.unshift(item);
  // console.log(outerElement);
  return outerElement;
}

// wordsToSentence(testVariabeStr);
// console.log(wordsToSentence(testVariabeStr));
function wordsToSentence(words) {
  // words is an array of strings
  // return a string that is all of the words concatenated together
  // spaces need to be between each word
  // example: ['Hello', 'world!'] -> 'Hello world!'

  // console.log(words.join(" "));
  return words.join(" ");
  
}
contains(testVariable, 1);
function contains(arr, item) {
  // check to see if item is inside of arr
  // return true if it is, otherwise return false
  if(arr.includes(item) === true)
  {
    // console.log(true);
    return true;
  }else{
    // console.log(false);
    return false;
  }
}
// addNumbers(testVariable);
function addNumbers(numbers) {
  // numbers is an array of integers.
  // add all of the integers and return the value
  let retValue;
  for (let index = 0, sum = 0; index < numbers.length; index++) {
    sum+=numbers[index];
    
    retValue = sum;
  }
  return retValue;
}

function averageTestScore(testScores) {
  // testScores is an array.  Iterate over testScores and compute the average.
  // return the average
  let avgScore;
  let divScore;
  for (let index = 0, sum = 0; index < testScores.length; index++) {
    sum += testScores[index];
    divScore = sum;
  }
  avgScore = divScore / testScores.length;
  // console.log(avgScore);
  return avgScore;
}
// averageTestScore(testVariable);
function largestNumber(numbers) {
  // numbers is an array of integers
  // return the largest integer
  
  console.log(Math.max.apply(null,numbers));
  return Math.max.apply(null,numbers);
}
// largestNumber(testVariable);
multiplyArguments();
function multiplyArguments() {
  // use the arguments keyword to multiply all of the arguments together and return the product
  // if no arguments are passed in return 0
  // if one argument is passed in just return it
  let outerElement;
  let arrayArgs = new Array();
  
  if(arguments.length === 0){
    
    return 0;

  } 
  for (let index = 0, sum = 1; index < arguments.length; index++) {
    multiplier = sum * arguments[index];
    sum = multiplier;
    outerElement = multiplier;
  }    
  // console.log(outerElement);
  return outerElement;
  
  
  
  
}
// arg not modify code below this line.
// --------------------------------

module.exports = {
  returnFirst,
  returnLast,
  getArrayLength,
  incrementByOne,
  addItemToArray,
  addItemToFront,
  wordsToSentence,
  contains,
  addNumbers,
  averageTestScore,
  largestNumber,
  multiplyArguments,
};