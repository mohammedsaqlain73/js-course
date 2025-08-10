//* call, apply, and bind are methods available in JavaScript for managing the this value of a function.
//! all 3 methods are only used in function not in object
//--------------------------------------------------------------------------------------------------------------------
let name = {
  firstname: "mohammed",
  lastname: "saqlain",
  printfullname:function ()  {
    console.log(this.firstname + " " + this.lastname) // this refers to the current object name this.key will gives its value
    //  of refered one
  },
}
name.printfullname();// mmohammed saqlian
let name2 = {
  firstname: "barsha",
  lastname: 'chhura',

}
// function borrow then these methods call apply and bind comes into the picture
//vvv imp concept --: i want that when i will call name printfullname function instead of mohammed saqlain it should be barsha chhura
// that menas i will want the this keyword to refer name2 object.now QUESTION how to make this refer name2.ANSWER is simple use them
//and the object in call will make this to refer that object
name.printfullname.call(name2);// barsha chhura


//but if we want to use a function for many objects then we keep it outside not inside pf anyone
let printfullname =function () {
  console.log(this.firstname + " " + this.lastname); // this refers to the current object name this.key will gives its value
  //  of refered one
};
let Name = {
  firstname: "mohammed",
  lastname: "saqlain",

};
let Name2 = {
  firstname: "barsha",
  lastname: "chhura",
};


printfullname.call(Name);
printfullname.call(Name2);

// now what if the function tkes arguments too
let printfullname1 = function (hometown,state) {
  console.log(`${this.firstname} ${this.lastname} from ${hometown} of ${state}`); // this refers to the current object name this.key will gives its value
  //  of refered one
};
let Name3 = {
  firstname: "mohammed",
  lastname: "saqlain",
};
let Name4 = {
  firstname: "barsha",
  lastname: "chhura",
};

printfullname1.call(Name3,"ctc","odisha");
printfullname1.call(Name4,"titlagarh","odisha");
//apply in same as call but it takes argument in list
printfullname1.apply(Name3, ["ctc", "odisha"]);
printfullname1.apply(Name4, ["titalagarh", "odisha"]);
//bind  has different concept than above two. bind bindes the function this given this reference and gives us a new function
// which we stored in a new one and by using new one we invoked it later
const saq = printfullname1.bind(Name4, "titalagarh-ctc", "odisha");//it creates a new copy of fullname with this reference of name4
saq();



      //==================================          over              ======================================================
//--------------------------------------------------------------------------------------------------------------------------
//* call:
//! Syntax: function.call(thisArg, arg1, arg2, ...)
//? Invokes a function with a specified this value and individual arguments.

// function greet(message) {
//   console.log(`${message}, ${this.name}!`);
// }

// const person = {
//   name: "John",
// };

// greet.call(person, "hello");

//* apply:
// Syntax: function.apply(thisArg, [arg1, arg2])
//? Invokes a function with a specified this value and an array or array-like object of arguments.

// function greet(message) {
//   console.log(`${message}, ${this.name}!`);
// }

// const person = { name: "John" };

// greet.apply(person, ["hello"]);

//todo In modern JavaScript, with the introduction of the spread operator (...), the need for apply has diminished, and you can often achieve the same result with call and the spread operator.

// function greet(message, punctuation) {
//   console.log(`${message}, ${this.name}${punctuation}`);
// }

// const person = { name: "John" };
// const argsArray = ["Hello", "!"];

// // Using apply
// greet.apply(person, argsArray);
// // Output: Hello, John!

// // Using call and spread operator
// greet.call(person, ...argsArray);
// // Output: Hello, John!

//* bind:
//? Syntax: function.bind(thisArg, arg1, arg2, ...)
//* Creates a new function with a specified this value and any initial arguments. Unlike call and apply,
//  bind does not immediately invoke the function but returns a new function that can be invoked later.

//? Use Cases:
//* Use call when you want to invoke a function with a specific this value and individual arguments.

//* Use apply when you want to invoke a function with a specific this value and an array or array-like object of arguments.

//* Use bind when you want to create a new function with a specific this value and initial arguments without immediately invoking it. The new function can be invoked later.

const bioData = {
  name: "Thapa Technical",
  age: 30,
  gender: "Male",

  greet: function () {
    console.log(
      `Hi, I'm ${this.name}. I'm ${this.age} years old, and I identify as ${this.gender}.`
    );
  },
};
// // Example usage:
// // bioData.greet();
// bioData.greet.call(bioData);

//? Imagine you have two objects: bioData and student. The greet method is defined in the bioData object, and you want to use it to display the information from the student object.

let student = { name: "vinod", age: "29", gender: "male" };
// bioData.greet.call(student);

// bioData.greet.apply(student);

// student = bioData.greet.bind(student);
// student();

// Explanation
// The greet method is defined in the bioData object, and it uses this to refer to its own properties.
// student is a separate object with properties like name, age, and gender.
// By using call(student), you are telling the greet method to temporarily consider the student object as its own object (this), allowing it to access and display the properties of the student object.
// So, call is a way to borrow a method from one object and use it for another object, temporarily setting the this value to the provided object.

//* the main difference is that call immediately invokes the function with the specified this value, while bind creates a new function with the specified this value and initial arguments but doesn't invoke the function immediately. You need to invoke the new function returned by bind separately.

// // more example
function greet(message) {
  console.log(`${message}, ${this.name}!`);
}

const person = { name: "vinod" };

greet.call(person, "Hello");
greet.apply(person, ["Hey"]);

const anotherWay = greet.bind(person, "hello");
anotherWay();
