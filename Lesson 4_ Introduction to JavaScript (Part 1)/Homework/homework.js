//In these first 6 questions, replace `null` with the answer

//create a string variable, it can contain anything
const newString = "mariejois" ;
console.log();
//create a number variable, it an be any number
const newNum = 1225 ;

//create a boolean variable
const newBool = true ;

//solve the following math problem
const newSubtract = 10 - 5;

//Solve the following math problem
const newMultiply = 10 *  40 ;

//Solve the following math problem:
const newModulo = 21 % 5  ;



//In the next 22 problems you will compete the function. All of your code will go inside of the function braces. 
//Make sure you use return when the prompt asks you to.
//hint: console.log() will NOT work. 
//Do not change any of the function names

//Example 1:
function returnString(str) {
  //simply return the string provided: str
  // console.log(str);
  return str;
}
// returnString(newString);

function add(x, y) {
  // x and y are numbers
  // add x and y together and return the value
  // code here
  const answer = x + y;
  // console.log(answer);
  return answer
}
add(newNum, newSubtract);
function subtract(x, y) {
  // subtract y from x and return the value
  // code here
  const answer = x - y;
  // console.log(answer);
  return answer
}
// subtract(newNum , newSubtract);
function multiply(x, y) {
  // multiply x by y and return the value
  // code here
  const answer = x * y;
  // console.log(answer);
  return answer
}
// multiply(newNum , newSubtract);
function divide(x, y) {
  // divide x by y and return the value
  // code here
  const answer = x / y;
  // console.log(answer);
  return answer
}
// divide(newNum, newSubtract);
function areEqual(x, y) {
  // return true if x and y are the same
  // otherwise return false
  // code here
  let toEqual = true;
  if(x == y){
    toEqual = true;
  }
  else{
    toEqual = false;
  }
  console.log(toEqual);
}
// areEqual(12, 1);
function areSameLength(str1, str2) {
  // return true if the two strings have the same length
  // otherwise return false
  // code here
  let ifSame = true;
  if(str1.length == str2.length){
    ifSame = true;
  }
  else{
    ifSame = false;
  }
  console.log(ifSame);
}
// areSameLength("ones" , "one");


function lessThanNinety(num) {
  // return true if the function argument: num , is less than ninety
  // otherwise return false
  // code here
  let result = true;
  if(num<90){
    result=true;
  }else{
    result=false;
  }
  // console.log(result);
}
// lessThanNinety(91);
function greaterThanFifty(num) {
  // return true if num is greater than fifty
  // otherwise return false
  // code here
  let result = true;
  if(num>50){
    result=true;
  }else{
    result=false;
  }
}

function getRemainder(x, y) {
  // return the remainder from dividing x by y
  // code here
  
  const result = x % y;
  return result;
}

function isEven(num) {
  // return true if num is even
  // otherwise return false
  // code here
  let result = true;
  if((num%2) == 0){
    result = true;
  }else{
    result= false;
  }
  // console.log(result);
  return result;

}
// isEven(121);
function isOdd(num) {
  // return true if num is odd
  // otherwise return false
  // code here
  
  let result = true;
  if((num%2) == 1){
    result = true;
  }else{
    result= false;
  }
  console.log(result);
  return result;
  
}

function square(num) {
  // square num and return the new value
  // hint: NOT square root!
  // code here
  const result = Math.pow(num,2);
  // console.log(result);
  return result;
}

function cube(num) {
  // cube num and return the new value
  // code here
  const result = Math.pow(num,3);
  // console.log(result);
  return result;
}

function raiseToPower(num, exponent) {
  // raise num to whatever power is passed in as exponent
  // code here
  const result = Math.pow(num, exponent);
  return result;
}
function roundNumber(num) {
  // round num and return it
  // code here
  const result = Math.round(num);
  return result;
}

function roundUp(num) {
  // round num up and return it
  // code here
  const result = Math.ceil(num);
  return result;
}

function addExclamationPoint(str) {
  // add an exclamation point to the end of str and return the new string
  // 'hello world' -> 'hello world!'
  // code here
  const result = str.concat('! qwe');
  
  return result;
}
addExclamationPoint("hello world");
function combineNames(firstName, lastName) {
  // return firstName and lastName combined as one string and separated by a space.
  // 'Avion', 'School' -> 'Avion School'
  // code here
  const result = firstName.concat(' '+lastName);
  // console.log(result);
  return result;
}

function getGreeting(name) {
  // Take the name string and concatenate other strings onto it so it takes the following form:
  // 'Sam' -> 'Hello Sam!'
  // code here
  const helloStr = "Hello ";
  const result = helloStr.concat(name+"!");
  // console.log(result);
  return result;
}
// getGreeting("Jester");
// The next three questions will have you implement math area formulas. 
// If you can't remember these area formulas then head over to Google.
 
function getRectangleArea(length, width) {
  // return the area of the rectangle by using length and width
  // code here
  const result = length * width;
  // console.log(result);
  return result;  
}
// getRectangleArea(25, 32);
function getTriangleArea(base, height) {
  // return the area of the triangle by using base and height
  // code here
  const result = 0.5 * base * height;
  // console.log(result);
  return result;
}
// getTriangleArea(25,310);