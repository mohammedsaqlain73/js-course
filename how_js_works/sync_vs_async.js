//=====Synchronous code executes line by line, blocking further execution until each line is completed,

//====while asynchronous code allows other code to continue executing while it waits for an asynchronous operation to complete.

const fun2 = () => {
   console.log("fun2 starts and ends");
 };

  const fun1 = () => {
   console.log("fun1 is start");
   fun2();
   console.log("fun1 ends");
 };

 fun1();
// ============================ async execution() ===============================
const funt2 = () => {
  setTimeout(() => {
    console.log("fun2 starts and ends");
  }, 3000);
};

const funt1 = () => {
  console.log("fun1 is start");
  funt2();
  console.log("fun1 ends");
};
funt1();
// funt1 called it is exeuted then encountered func 2 goes there there is a settimeout which
//  is shows async behaviour i.e until it is executed execution of the prog not stopped but next one executed
//inside story this settimeout body moves out of call stack to web api when its its time for executiio moves to call stack 
