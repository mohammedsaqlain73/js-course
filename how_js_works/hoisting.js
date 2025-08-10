//? Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their
// scope before code execution. This means that no matter where functions and variables are declared, they are
//  moved to the top of their scope regardless of whether their scope is global or local.





//this mechansim define the variable and funtion tot of the exexcution
// var myvar ;//not the value is assigned                                           ======================
// function greet(){} reference of total function body also included                             /**/                                                                  //
                                                                                                /**/
console.log(myVar);                                                                            /**/
greet();                                                                                       /**/
const myVar = 10;                                                                               /**/
function greet() {                                                                          /**/
  console.log("Welcome, If you are reading this, Don't forget you are awesome");              /**/
};                                                                                           /**/
                                                                                            /**/
//====  by hoisting  mechanism  behind the scene---------------------------------------------------------------



//============================================================================================
//* Before executing our code, JavaScript engine scans the code and creates a property for each variable or function in the code.
//  For variable, It reserves space for them in memory and sets an initial value of undefined, and for functions it also
// reserves space but sets an initial value as a reference to the actual function in memory. That's why we can call a function,
//  but if we try to access a variable, we will get undefined.

console.log(b);//undefined
myfunction1();//hello world as reference is also passed
var b = 10;
function myfunction1() {
      alert("hello world");
}
//but with the arriaval of let varables types this concept is dead as it does not allow for hoisting as gives error
console.log(a); //undefined
myfunction(); //hello world as reference is also passed
let a = 10;
function myfunction() {
  alert("hello world");
}
//================ also since anonymous function is declared using const or let hoisting not posssible =======
console.log(myVar2);
greet();
const myVar2 = 10;
const greet = () => {
  console.log(
    "Welcome, If you are reading this, Don't forget you are awesome"
  );
};
