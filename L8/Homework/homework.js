// Do not change any of the function names

// createUserClass(userTest);
function createUserClass() {
  // create an ES6 class or a constructor function called User
  // it should accept an options object with username, name, email, and password properties
  // in the constructor set the username, name, email, and password properties
  // the constructor should have a method 'sayHi' on its prototype that returns the string 'Hello, my name is {{name}}'
  // {{name}} should be the name set on each instance
  // return the class
  function User(){
    let element;
    for (const key in arguments) {
      // console.log(arguments[key]);
      element = arguments[key];
    }
    this.username = element['username'];
    this.name = element['name'];
    this.email = element['email'];
    this.password = element['password'];

  }
  User.prototype.sayHi = function(){
    return "Hello, my name is "+this.name;
  };
  
  return User;
}

function addPrototypeMethod(Constructor) {
  // add a method to the constructor's prototype
  // the method should be called 'sayHi' and should return the string 'Hello World!'
  Constructor.prototype.sayHi = function(){
    return 'Hello World!';
  };
  return Constructor; 
}
const str = 'Hello';
addReverseString(str);
function addReverseString() {
  // add a method to the string constructor's prototype that returns a reversed copy of the string
  // name this method reverse
  // hint:
  // you will need to use 'this' inside of reverse
    
    let element = "";
    for (const key in arguments) {
       element = arguments[key];
    }
    // console.log(element.split("").reverse().join(""));
  String.prototype.reverse = function(){
    this.newStr = element;
    return this.newStr.split("").reverse().join("");
  }
    
    // const toTest = new String();
    // toTest.reverse();
    // console.log(toTest.reverse());
    console.log(arguments.reverse);
    // return toTest.reverse();    
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  createUserClass,
  addPrototypeMethod,
  addReverseString,
};