//* ==========================================
//*    ECMAScript Features (2021) / ES12
//* =========================================

//? List of new useful features added in ES8  👇
// String.prototype.replaceAll("old","new")
// Logical Assignment Operators (||=, &&=, ??=)
// Numeric Separators
// Promise.any()

//* ==========================================
//*  String.prototype.replaceAll("old" , "new")
//* =========================================
//? replaceAll in JavaScript is a function that replaces all occurrences of a specified value with
//  another value in a given string.

//? Replacing all occurrences of a word:
 const originalString = "Hello, world! Hello again.";
 const newString = originalString.replaceAll("Hello", "Hi");
 console.log(newString);

//? Replacing multiple spaces with a single space:
const text = "This   has   extra       spaces.";
const normalizedText = text.replaceAll(/\s+/g, " ");
console.log(normalizedText);

//* =====================================================
//*  Logical Assignment Operators (||=, &&=, ??=){like +=,-+,..}
//* ====================================================

//? Logical OR-Assignment (||=): logic is simple in || one or is enough.if 1st left one is true then no need to go
// for the 2nd 1st is assign directly .But if 1st one is falsy then every thing on 2nd if it is true then true else false
//so,so if first one is falsy then directly assign 2nd

// let x = false;
// x ||= true; // equivalent to: x = x || true;
// console.log(x); // Output: true

// let y = 10;
// y ||= 20; since 1st one is 10 i.e true so assign 1st one
// console.log(y); // Output: 10 (unchanged)
//---------------------------------------------------------------------------------------------------------
//? Logical AND-Assignment (&&=): in && both should be true so if first one is falsy then no need to go for 2nd as
//ans will be false assign first one and if 1st one is true then everything is depend on 2nd if t then t else f
//assign the 2nd

// let x = true;
// x &&= false; // equivalent to: x = x && false;
// console.log(x); // Output: false

let y = 0;
y &&= 20; // equivalent to: y = y && 20;
console.log(y); // Output: 20

//* ======================
//*  Numeric Separators
//* ====================
//? This feature allows underscores (_) to be used as separators within numeric literals to improve readability.
const bigNumber = 1_000_000;
console.log(bigNumber);
// Output: 1000000;

//* ======================
//*  Promise.any()
//* ====================
//? Promise.any(): This method takes an iterable of Promise objects and returns a single Promise that resolves as soon as any of the input Promises fulfill.

const promise1 = new Promise((resolve, reject) =>
  setTimeout(resolve, 200, "Promise 1")
);
const promise2 = new Promise((resolve, reject) =>
  setTimeout(reject, 100, "Promise 2")
);
const promise3 = new Promise((resolve, reject) =>
  setTimeout(resolve, 300, "Promise 3")
);

Promise.any([promise1, promise2, promise3]).then((value) => console.log(value));

//? Difference: while Promise.race() does indeed consider both fulfilled and rejected Promises, Promise.any() only looks for fulfillment among the input Promises. If all input Promises are rejected, Promise.any() will reject with an AggregateError containing all the rejection reasons.
