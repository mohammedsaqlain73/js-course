//* ==========================================
//*    ECMAScript Features (2017) / ES8
//* =========================================

//? List of new useful features added in ES8  👇
// String padding
// Object.values()
// Object.entries()
// Trailing commas in function parameter lists and calls
// Async functions

//* =====================
//*  String padding
//* =====================

//? String padding in JavaScript is a way to add extra characters (like spaces) to a string to make it a specific length.
//=============string padding is used to make a string of specific size by adding symbol at start or end ================


//----------------------------------------------------------------------------------------------------------------------
//1.stringliterl.padStart(length,"type of symbol"):- add symbol from start and mkae to of  given length
//2.stringliterl.padEnd(length,"type of symbol") add symbol from end and make it of given length.by defualt it is space

//todo  Use Case: Makes formatting text easier and more predictable, especially for tables, alignments, and UI elements.
//---------------------------------------------------------------------------------------------------------------------

//? Using padStart() to pad from the beginning:
 const companyName = "edusaq";
 const paddName = companyName.padStart(3);//already size is 6 how can make it 3 so no changes
const paddedName = companyName.padStart(15);
const paddedName1 = companyName.padStart(15,"*");
 console.log(paddedName);//          edusaq
console.log(paddedName.length);//15
console.log(paddedName1);//*********edusaq


//? Using padEnd() to pad from the end:
 const paddedName2 = companyName.padEnd(15);
 const paddedName3 = companyName.padEnd(15, "$");
console.log(paddedName2);
console.log(paddedName3);


//? If the original string is already longer than or equal to targetLength, it's returned as-is.

//* =====================
//*  trailing commas
//* ====================
//? This feature allows to have keep commas in function declarations, functions calls,
//  array literal & object literal for future use:

// // Function parameter list
//------------------------------------------------------------------------------------------------
function greet(name, age,) {
  console.log(`Hello ${name}, you are ${age} years old.`);
}

// // Function call
greet("John", 30, );//comma at the end to add new one if in future

//------------------------------------------------------------------------------------------------
function greet(name, age, boolean) {
  console.log(`Hello ${name}, you are ${age} years old.`);
}

// // Function call
greet("John", 30, true);

// // Array literal
const colors = ["red", "green", "blue"];

// // Object literal
// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 30,
// };

//* ======================================
//*  Object.entries() & Object.values()
//* ======================================
//? We have already covered in our Objects Section. Please watch the section for same

//* ======================================
//*  Async Await - Async Functions
//* ======================================
//? We will cover later in the video and you gonna love that part & our final project is based on async await .
