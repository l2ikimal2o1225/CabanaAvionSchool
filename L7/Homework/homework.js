// Do not change any of the function names
// makeCat('Marucs', 12);
function makeCat(name, age) {
  // create a new object with a name property with the value set to the name argument
  // add an age property to the object with the value set to the age argument
  // add a method called meow that returns the string 'Meow!'
  // return the object
  let property = {};
  property.name = name.toString();
  property.age = age;
  property.meow = function(){
    return "Meow!";
  };
  return property;
  // console.log(property);
}
// makeCat('adolf', 4);
// let obj = {};
// obj.x = 1;
// obj.y = 2;
// addProperty(obj,'testPropName');
function addProperty(object , property) {
  // add the property to the object with a value of null
  // return the object
  // note: the property nsame is NOT 'property'.  The name is the value of the argument called property (a string)
  let myObject = object;
  myObject[property] = null;
  return myObject;
}

// invokingMethod.hiddenString();
// console.log(invokingMethod);
// invokeMethod(invokingMethod,'hiddenString');
function invokeMethod(object, method) {
  // method is a string that contains the name of a method on the object
  // invoke this method
  // nothing needs to be returned
  // let myInvoke = {};
  // myInvoke.test;
  // myInvoke.invoke = function(){
  //   this.test = object.method;
  // };
  // myInvoke.invoke();
  // // console.log(myInvoke.method);
  // console.log(myInvoke);
  object[method]();
  
}
let item = new Object();
item.myNum = 888;
multiplyMysteryNumberByFive(item);
function multiplyMysteryNumberByFive(mysteryNumberObject) {
  // mysteryNumberObject has a property called mysteryNumber
  // multiply the mysteryNumber property by 5 and return the product
 let item = new Object();
 item = mysteryNumberObject;
 item.prod = mysteryNumberObject["mysteryNumber"] * 5;
 return item.prod;
}
deleteProperty(item, 'myNum');
function deleteProperty(object, property) {
  // remove the property from the object
  // return the object
  // let myObj = new Object();
  // let propDelete =property;
  // delete myObj.propDelete;
  let myObject = object;
  delete myObject[property];
  return myObject;
}

function newUser(name, email, password) {
  // create a new object with properties matching the arguments passed in.
  // return the new object
  let user = new Object();
  user.name = name;
  user.email = email;
  user.password = password;
  return user;
}

function hasEmail(user) {
  // return true if the user has a value for the property 'email'
  // otherwise return false
  let myUser = new Object();
  myUser = user;
  myUser.decide = user['email'];
  if(myUser.decide == null) return false;
  else{
    return true;
  }
}
// const obj = {
//   x: true,
// };
// hasProperty(obj, 'x');
function hasProperty(object, property) {
  // return true if the object has the value of the property argument
  // property is a string
  // otherwise return false
  let propName;
  let myObj = new Object();
  myObj = object;
  for (let key in myObj) {
    propName = key;
  }
  
  if(propName == property){
    // console.log(true);
    return true;
  }
  else{
    // console.log(false);
    return false;
  }
  // console.log(property);
  // console.log(object);
}

function verifyPassword(user, password) {
  // check to see if the provided password matches the password property on the user object
  // return true if they match
  // otherwise return false
  let checker;
  let myUser = new Object();
  myUser = user;
  // for (let key in myUser) {
  //   if(myUser[key] == password)return true;
  //   else{ return false;}
  // }
  if(myUser['password'] == password)return true;
  else{return false;}
}
// const user = {
//   password: 'I love js!',
// };
// const password = 'I love js even more!';
// updatePassword(user,password);
function updatePassword(user, newPassword) {
  // replace the existing password on the user object with the value of newPassword
  // return the object
  let myPassword = newPassword.toString();
  let myObj = new Object();
  myObj['password'] = newPassword;
  return myObj;
}
// const user = {
//   friends: ['Francis', 'Victor', 'Luis', 'Mikko', 'Claire'],
// };
// const newFriend = 'Jaime';
// addFriend(user,newFriend);
function addFriend(user, newFriend) {
  // user has a property called friends that is an array
  // add newFriend to the end of the friends array
  // return the user object
  let myObject = new Object();
  myObject = user;
  myObject['friends'].push(newFriend);
  return myObject;
}
// let users = [
//   { isPremium: false }, 
//   { isPremium: false }, 
//   { isPremium: false }, 
//   { isPremium: false }, 
//   { isPremium: false }, 
// ];
// setUsersToPremium(users);
function setUsersToPremium(users) {
  // users is an array of user objects.
  // each user object has the property 'isPremium'
  // set each user's isPremium property to true
  // return the users array
  let myUser = users;
  
  let myArray = [
    {no: 1},
    {no: 2},
    {no: 3},
    {no: 4},
    {no: 5},
  ];

  // for (let key in myUser) {
  //   if (myUser.hasOwnProperty(key)) {          //translation for lower code
  //     let element = myUser[key];
  //     element['isPremium'] = true;
      
  //     // console.log(myUser[key]+" "+myUser[isPremium]);
  //   }
  // }
  for (let index = 0; index < myUser.length; index++) {
    if(myUser.hasOwnProperty(index)){
      let element = myUser[index];
      element['isPremium'] = true;
    }
    
  }
  // console.log(myUser);
  return myUser;
  // console.log(myArray[objIndex]);
  // myArray[objIndex].no = 7;
  // console.log(myArray[objIndex]);
  // console.log(myArray);

}

// sumUserPostLikes(userTest);
function sumUserPostLikes(user) {
  // user has an array property called 'posts'
  // posts is an array of post objects
  // each post object has an integer property called 'likes'
  // sum together the likes from all the post objects
  // return the sum
  let myObject = user;
  let element = new Object();
  let sum = 0;
  for (let key in myObject['posts']) {
    let element = myObject['posts'][key];
    sum += element['likes'];
    // if (myObject.hasOwnProperty(key)) {
    //   const element = myObject['posts'][key];
    //   console.log(element);
    // }
  }
  // console.log~(sum);
  return sum;
}
// const storeItem = {
//   price: 80,
//   discountPercentage: 0.1,
// };
// const storeItem2 = {
//   price: 5,
//   discountPercentage: 0.5,
// };
// addCalculateDiscountPriceMethod(storeItem);
function addCalculateDiscountPriceMethod(storeItem) {
  let storeObject = new Object();
  storeObject = storeItem;
  let price;
  // let elementPrice = new Array();
  storeObject.calculateDiscountPrice = function(){
    let discountedPrice;
    for (let key in storeObject) {
      let elementPrice = storeObject['price'];
      let elementDiscValue = storeObject['discountPercentage'];
      price =  elementPrice * elementDiscValue;
      discountedPrice = elementPrice - price;
    }
    return discountedPrice;  
  };
  storeObject.calculateDiscountPrice();
  console.log(storeObject.calculateDiscountPrice());
  return storeObject;
  // add a method to the storeItem object called 'calculateDiscountPrice'
  // this method should multiply the storeItem's 'price' and 'discountPercentage' to get the discount
  // the method then subtracts the discount from the price and returns the discounted price
  // return storeItem at the end of the function
  // example: 
  // price -> 20
  // discountPercentage -> .2
  // discountPrice = 20 - (20 * .2)
  
}

module.exports = {
  makeCat,
  addProperty,
  invokeMethod,
  multiplyMysteryNumberByFive,
  deleteProperty,
  newUser,
  hasEmail,
  hasProperty,
  verifyPassword,
  updatePassword,
  addFriend,
  setUsersToPremium,
  sumUserPostLikes,
  addCalculateDiscountPriceMethod,
};