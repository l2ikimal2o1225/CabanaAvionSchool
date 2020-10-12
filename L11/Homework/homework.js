// Do not change any of the function names

// solve these recursively
// nFactorial(5);
function nFactorial(n) {
  // return the factorial for n
  // example:
  // the factorial of 3 is 6 (3 * 2 * 1)
  // console.log(n);
  
  if(n == 0){
    return 1;
  }
  let i = nFactorial(n-1);
  // console.log(n*i);
  return n *i;

}  
// nFibonacci(5);
function nFibonacci(n) {
  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  if(n<=1){
    return 1;
  }
  let x = nFibonacci(n-1);
  let y = nFibonacci(n-2);
  // console.log(x+y);
  return x + y;

}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  nFactorial,
  nFibonacci,
};