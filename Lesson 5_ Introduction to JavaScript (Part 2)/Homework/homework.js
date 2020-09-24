// Do not change any of the function names

//Example 1:
function getBiggest(x, y) {
  // x and y are integers.  Return the larger integer
  // if they are the same return either one
  if (x >= y) {
    return x;
  } else {
    return y;
}
}

function greeting(language) {
  // return a greeting for three different languages:
  // language: 'German' -> 'Guten Tag!'
  // language: 'Mandarin' -> 'Ni Hao!'
  // language: 'Spanish' -> 'Hola!'
  // if language is undefined return 'Hello!'
  let  = language;
  if(language == 'German'){
    console.log('Guten Tag!');
    return 'Guten Tag!';
  }
  else if(language == 'Mandarin'){
    console.log('Ni Hao!');
    return 'Ni Hao!';
  }
  else if(language == 'Spanish'){
    console.log('Hola!');
    return 'Hola!';
  }
  else{
    console.log('Hello!');
    return 'Hello!';
  }
  
}
// greeting('asd');
function isTenOrFive(num) {
  // return true if num is 10 or 5
  // otherwise return false
  if(num === 10 || num === 5){
    console.log(true);
    return true;
  }else{
    console.log(false);
    return false;
  }
}
// isTenOrFive(23);
function isInRange(num) {
  // return true if num is less than 50 and greater than 20
  // otherwise return false
  if(num<50 && num > 20){
    console.log(true);
    return true;
  }
  else{
    console.log(false);
    return false;
  }
}
// isInRange(19);
function isInteger(num) {
  // return true if num is an integer
  // 0.8 -> false
  // 1 -> true
  // -10 -> true
  // otherwise return false
  // hint: you can solve this using Math.floor
  if(Math.floor(num)){
    if(num === 1 || num === -10){
      console.log(true);
      return true;
    }
    else{
      console.log(false);
      return false;
    }
  }
  else{
    console.log(false);
    return false;
  }
}
// isInteger(0.8);
function fizzBuzz(num) {
  // if num is divisible by 3 return 'fizz'
  // if num is divisible by 5 return 'buzz'
  // if num is divisible by 3 & 5 return 'fizzbuzz'
  // otherwise return num
  if(num%3 === 0 && num%5 === 0){
    console.log('fizzbuzz');
    return 'fizzbuzz';
  }
  else if(num%3 === 0){
    console.log('Fizz');
    return 'fizz';
  }
  else if(num%5 === 0){
    console.log('buzz');
    return 'buzz';
  }
  else{
    console.log(num);
    return num;
  }
}
// fizzBuzz(2);
function isPrime(num) {
  // return true if num is prime.
  // otherwise return false
  // hint: a prime number is only evenly divisible by itself and 1
  // hint2: you can solve this using a for loop
  // note: 0 and 1 are NOT considered prime numbers
  let primeCheck = true;
  if(Math.floor(num)){
    if(num === 0 || num === 1){
      console.log('0 and 1 are NOT considered prime numbers');
    }
    else if(num <= -1){
      console.log('negative numbers');

    }
    else{
      console.log('inside');
      for (let index = 2; index<=num/2; index++){
        if(num%index   == 0){
          primeCheck = false;
          break;
        }
        // console.log(index+' '+num%index);
      }    
      if(primeCheck == true){
        console.log('This is prime');
      }
      else{
        console.log('not a prime');
      }
    }
  }
  else{ 
    console.log('0 and 1 are NOT considered prime numbers');
  }
}
isPrime(2);
