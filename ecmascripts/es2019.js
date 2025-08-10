//* ==========================================
//*    ECMAScript Features (2019) / ES10
//* =========================================

//? List of new useful features added in ES8  👇
// Array.prototype.{flat,flatMap}
// Object.fromEntries()
// String.prototype.{trimStart,trimEnd}
// Symbol.prototype.description
// Optional catch binding

//* ==================================
//*  Array.flat & Array.flatMap
//* ================================
//?arrayliteral.flat(values) is a new array instance method that can create a one-dimensional array from a multidimensional array.
// by default value is 1.i.e convert only one innermost nested array not all ,value 2 converts two innermost nested arrray

const nestedArray = [1, 2, [3, 4], 5];
const nestedArray1 = [1, [2, [3, 4]], 5];

const flattenedArray0 = nestedArray.flat();// [1, 2, 3, 4, 5]
const flattenedArray1=nestedArray1.flat()//[1,2,[3,4],5] //1 innermost nested one
const flattenedArray = nestedArray1.flat(2);// [1, 2, 3, 4, 5] // 2 innermost nested  ones
// console.log(flattenedArray);
//--------------------------------------------------------------------------------------------------------------------
//? flatMap() is combination of flat() + map()
// It’s useful when calling a function that returns an array in the map() callback, but you want your
//  resulted array to be flat i.e 1 array:

 const arr = ["My name", "is vinod", "thapa"];
const test = arr.map((curele) => {
  return curele.split(" ")//use return as body has {} otherwise return undefined to test
},
);
console.log(test);// [['my' ,'name']],[['is','vinod'],.....]
//-----------------------------------------------------------------------
const newArr = arr.flatMap((curVal) => curVal.split(" "));
console.log(newArr);//['My', 'name', 'is', 'vinod', 'thapa']


//* ============================
//*  Object.fromEntries(objectname)
//* =============================
//? Objects have an entries() method, since ES2017.
//? It returns an array containing all the object own properties, as an array of [key, value] pairs:


 const person = { name: "saq", age: 21 };
 const arr1 = Object.entries(person);
console.log(entries);//['name', 'saq'],['age', 21]


//------------------------------------------------------------------------------------------------------
//? ES2019 introduces a new Object.fromEntries(objectname) method,which can create a new object
// from such array of key ,value ['key','value'] created above using Object.entries()

 const newPerson = Object.fromEntries(arr1);
 console.log(newPerson);//{name: 'saq', age: 21}

// // // Now Think & let me know Why 🤔,
// console.log(person == newPerson); //false we compare objects by their reference not by value here reference is diiferent

//* ========================================
//* String.prototype.{trimStart,trimEnd}
//* =========================================

//? trimStart(): Return a new string with removed white space from the start of the original string
// console.log("Testing".trimStart());
// console.log("           Testing".trimStart());
// console.log("     Testing     ".trimStart());
// console.log("Testing    ".trimStart());

//? trimEnd(): Return a new string with removed white space from the end of the original string
// console.log("Testing".trimEnd());
// console.log("           Testing".trimEnd());
// console.log("     Testing     ".trimEnd());
// console.log("Testing    ".trimEnd());

//* ================================
//* Symbol.prototype.description
//* ===============================

//? In JavaScript, a Symbol is a primitive data type introduced in ECMAScript 2015 (ES6). It represents a unique
// identifier that is immutable and guaranteed to be unique. Symbols are often used as property keys in objects to avoid
//  naming conflicts.

//? symbol literal.description property is a new feature introduced in ECMAScript 2019 (ES10).
// It allows you to retrieve the description of a symbol.

const mySymbol = Symbol("This is my symbol");
 console.log(typeof mySymbol);//symbol
 console.log(mySymbol.description);//description:-This is my symbol

//* ================================
//*  Optional catch binding
//* ===============================
//? In ECMAScript 2019 (ES10), a new feature called "optional catch binding" was introduced for the try...catch statement.
//  This feature allows you to omit the parameter in the catch block, making it optional.

//? We previously had to do: 👇
try {
  //...
} catch (e) {
  //handle error
}

//? Now we can omit that optional parameter 👇
try {
  10 + 5;
} catch {
  console.log("there is an error");
}
