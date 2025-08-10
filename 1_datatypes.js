//* ============================
//* Data Types Section
// 1.primitive dt.
 //2.object dt.
//* ============================

//* Data types define the type of values that a variable can hold.

//? Types of Primitive Data types

//? 1.Number: Represents numeric values, including integers and floating-point numbers.
// Example:123
var size = 5;
console.log(size);

//? 2.String: Represents a sequence of characters enclosed in single or double quotes.
// Example:
var name="saqlain";
console.log(name);

//? 3.Boolean: Represents a logical entity with two values: true or false.
// Example:true or false
var isRaining = true;
console.log(isRaining);

//? 4.undefined: Represents the absence of a value or an uninitialized variable.
// Example:
var age;
console.log(age);//since age is not initialsed but we print it so we get error

//? 5.Null: Represents the absence of a value. It is often used to explicitly forcefully written indicate that a variable or object property has no assigned value.
// Example:
var life = null;
console.log(life);

//? 6. BigInt: Represents integers of arbitrary precision
//  (available since ECMAScript 2020) to write it it has n in last of the number.
// Example:
// const bigNumber = 1234567890123456789012345678901234567890n;

//? 7.Symbol: Represents a unique and immutable data type, often used to create unique identifiers.
// Example:
// const mySymbol = Symbol("description");

// types of object dt
//1.an object
//2.an aaray
//3.a date

//! ============================
//! Data Types Interview Questions
//! ============================

//? 1: What is the difference between null and undefined in JavaScript❓
//null: it is like a toy box is is empty i.e due to initialsed null;
// undefined:it is a box which is not open yet i.e no valuye is initialised;

//? 2: What is the purpose of typeof operator in JavaScript❓
// yes in js we always giove var to datatypes but once we assigned
//  a value the of it implicitly data type assigned to it typeof variable
//  help to find its dt.

//? 3: What is the result of `typeof null` in JavaScript❓ANS-always object not null.
var badFeeling = null;
console.log(typeof badFeeling);

//? 4: What are primitive data types in JavaScript❓
// ans - these are immutable and of 7 types.

//? 5: Convert a string to a number?
// We just need to add the '+' sign before the string or use Number();
// Example:
var weight = "57";
console.log(typeof weight);
console.log(typeof +weight);
console.log(typeof Number(weight));
var image = '100';
image=+image;
console.log (typeof image);


//? 6: Convert a number to a string?
// We just need to add an empty string after the number add empty string(VARIABLE + '')
// Example:
let wow =10;
console.log(typeof wow);
console.log(typeof String(wow));
console.log(typeof (wow + ""));

//? 7: Explain the concept of truthy and falsy values in JavaScript. Provide examples.❓
//truthy values are the values considered to be true in a condition
//exmaple- true, non-empty string, non-zero values, array and object even are empty.
//falsy values are the values considered to be false in a condition
//example-false,empty strring,zero,null, undefined,NaN(not a number)

// //? 8: To check if a non-empty string is truthy or falsy in JavaScript, we can directly use if statement.

//* ==========  Data Types End Section ==========

//todo ---------------- todo Bonus ----------------------

//* ========== parseInt & parseFloat Section ==========
//? parseInt and parseFloat are both functions in JavaScript used for converting strings to numbers, but they have different use cases.

//* parseInt: Definition: parseInt is used to parse a string and convert it to an integer (whole number).
 const myString = "42";
 const myNumber = parseInt(myString, 10);
 console.log(myNumber); // Output: 42

 const myString1 = "42.5";
 const myNumber1 = parseInt(myString1);
 console.log(myNumber1); // Output: 42

//* parseFloat: Definition: parseFloat is used to parse a string and convert it to a floating-point number (decimal number).
const myString2 = "42.5";
const myNumber2 = parseFloat(myString2);
console.log(myNumber2); // Output: 42.5

//TODO  Key Differences:
//? parseInt is used for converting to integers and ignores anything after the decimal point.
//? parseFloat is used for converting to floating-point numbers, preserving the decimal part.
//? Both functions will attempt to convert as much of the string as possible until an invalid character is encountered.

//! Here are more examples
console.log(parseInt("123"));
// 123 (default base-10)
console.log(parseInt("123", 10));
// 123 (explicitly specify base-10)
console.log(parseInt("   123 "));
// 123 (whitespace is ignored)
console.log(parseInt("077"));
// 77 (leading zeros are ignored)
console.log(parseInt("1.9"));
// 1 (decimal part is truncated)

//! When we will not get an Output
console.log(parseInt("&123"));
console.log(parseInt("-123"));
console.log(parseInt("xyz"));
//output NaN (input can't be converted to an integer)

//? What is the purpose of the NaN value in JavaScript❓
// when a mathematical operation doesnt  yields a valid no.Also isNaN()is a function
//used to check a value is a no or not.
//❓ NaN!=NaN bcz both may not be from same origin i.e (typeof "xyz") gives NaN
// (typeof &*^) also gives NaN but both NaN ARE NOT FROM SAME ORIGIN
//* ========== parseInt & parseFloat End Section ==========
