// Do not change any of the function names

function invokeCallback(cb) {
  // invoke cb
  function lastInvoke(cb) {
    return cb();
  }
  lastInvoke(cb);
  
  
  
}

function sumArray(numbers, cb) {
  // sum up all of the integers in the numbers array
  // pass the result to cb
  // no return is necessary
  function summation(acc,item) {
    return acc+item;
  }
  const i = numbers.reduce(summation,0);
  
  function invoke(cb) {
    return cb(i);
  }
  invoke(cb);
  // this.numbers = numbers;
  // this.cb = cb;
  // this.cb = this.numbers.reduce(function (acc,item) {
  //   return acc + item;
  // });
  // return cb;
}
// const myItem = [1,2,3,4,5];
// forEach(myItem);
function forEach(arr, cb) {
  // iterate over arr and pass its values to cb one by one
  // hint: you will be invoking cb multiple times (once for each value in the array)
  // let i = 0;
  // arr.forEach(myArray);
  // function myArray(item) {
  //   invoke(item);
  // }

  arr.forEach(testLoop);
  function testLoop(params) {
    cb(params);
  }

}


function map(arr, cb) {
  // create a new array
  // iterate over each value in arr, pass it to cb, then place the value returned from cb into the new arr
  // the new array should be the same length as the array argument
  let myArray = new Array();
  
  arr.forEach(testLoop);
  function testLoop(params,index) {
    
    console.log(params * params);
    return myArray[index] = params * params;

  }
  return myArray;

}

module.exports = {
  invokeCallback,
  sumArray,
  forEach,
  map,
};