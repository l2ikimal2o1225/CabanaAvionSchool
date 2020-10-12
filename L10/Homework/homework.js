// Do not change any of the function names

function counter() {
  // Return a function that when invoked increments and returns a counter variable.
  // Example: const newCounter = counter();
  // newCounter(); // 1
  // newCounter(); // 2
  function invoke(){
    let counter = 0;
    return function(){
      return counter += 1;
    }
  }
  return invoke();
}

function cacheFunction(cb) {
  // use closure to create a cache for the cb function
  // the function that you return should accept a single argument and invoke cb with that argument
  // when the function you return is invoked with an argument it should save that argument and its result
  // when the function you return is called again with an argument that it has seen before it should not call cb
  // but should instead directly returned the previous result
  // example:
  // cb -> function(x) { return x * x; }
  // if the function you return is invoked with 5 it would pass 5 to cb(5) and return 25
  // if the function you return is invoked again with 5 it will look on an object in the closure scope
  // and return 25 directly and will not invoke cb again
  // function closure(cb) {
  //   let myCb = cb;
  //   return function(x){
  //     myCb();
  //     const l = x*2;
  //     return l;
  //   }
  // }
  // const i = closure(cb);
  // // const test = i(cb);
  // return i;
  function myCache(x) {
    // const theCache = myCache(x);
    x();
    x();
    return function(retVal){
      
      let i = retVal *2
      
      return i;
    }
  }
  return myCache(cb);
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  counter,
  cacheFunction,
};