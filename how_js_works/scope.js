//* -------------------------
//*  Scope in JavaScript
//* -------------------------

//? Scope in JavaScript refers to the  visibility  and lifetime of variables. When a variable is declared,
//  it is bound to a specific scope, and its accessibility is determined by that scope.

// todo We have a Global Scope, Function Scope and Block Scope

//* -------------------------
// * Lexical Scoping:
//* -------------------------
// ? Lexical scoping is a way of managing variable access in JavaScript based on the physical structure of the code.

//? Lexical scoping in JavaScript is like a set of rules that determines where a variable can be used in your code. It follows
//  the physical structure of your code, so if a variable is declared inside a function or block, it can usually be used only
//  within that function or block.

//simple laxical; scoping  means who can use where can use a variable

//  var a = 5;
//  var b = 10;
//  what will be the value of a?

//* -------------------------
//  * Scope Chaining:
//* -------------------------
//? Definition: Scope chaining means  when we are looking for the value of a variable, checks the
// current scope and then looks in the outer (enclosing) scopes until it finds the variable or reaches the global scope.

// ========= ***** Key Concept: Variables in inner scopes have access to variables in their outer scopes, creating a chain of
// accessible scopes but vice versa not possible discussed in interview question ***========

// * Global Scope:
//? Variables: Variables declared outside of any function or block have global scope.
//? Access: Global variables are accessible from any part of the code, including inside functions and blocks.

//  var globalVariable = "I am a global variable";

// function exampleFunction() {
//   console.log(globalVariable); // Accessible within the function
// }

// console.log(globalVariable); // Accessible globally

//  *Function Scope:
// Variables: Variables declared inside a function have function scope.
// Access: Function-scoped variables are only accessible within the function where they are declared.
//  function exampleFunction() {
//     var functionScopedVar = "I am a function-scoped variable";
//     console.log(functionScopedVar); // Accessible within the function
//   }

// console.log(functionScopedVar); // Error: functionScopedVar is not defined

//  * Block Scope:
// Variables: Variables declared with let and const inside a block (e.g., an if statement or a for loop) have block scope.
// Access: Block-scoped variables are only accessible within the block where they are declared.

//! ------------------------------
// ! Interview Question
//! -----------------------------

//!  Global Variable vs. Local Variable:
//? Global Variable: A variable declared in the global scope is referred to as a global variable.
// It has global visibility and can be accessed from anywhere in the code.

//? Local Variable: A variable declared within a function (function scope) or a block (block scope)
// is often referred to as a local variable. It has local visibility, limited to the function or block where it's declared.
//global scope
const globalVariable = "I'm a global variable";

function myFunction() {
  // Function scope
  const functionVariable = "I'm a function variable";

  if (true) {
    // Block scope
    const blockVariable = "I'm a block variable";
    console.log(blockVariable);//found its scope
    console.log(functionVariable);//not found on its own scope moves above to next scope that is myfunction
    console.log(globalVariable);// not in own scope move above to fmyfunction ,not found there moves to global there it found
  }
  console.log(functionVariable);//found on its scope
  console.log(globalVariable);//higher scoppe
  console.log(blockVariable);// ERROR cant move to lower scope
}

myFunction();
