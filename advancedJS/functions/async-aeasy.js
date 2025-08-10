/*
1.what is async?
2.what is await?
3.how async awaits works behind the scenes?
4.example of async and await
5.error handling
6.interviews
7.async await vs promise.then/.catch
=========================================================================================================*/
/*async is a keyword used before a function a create a async function
/syntax:-
// async function function_name(){
// code
//}

.A async function return a promise
 REMEMBER THE FACT THAT if you try to return a non-promise such a no, stringor etc then this async will wrap this
 with a promise and return it.
*/
//syntax:-
// async function function_name(){
// code
//}
async function getdata () {//alaways return a promise even non-promise wrapped in a promise
  return "saqlain";
}
const data = getdata();
console.log(data);
/*------------------------------------------------------output-----------------------------------------
Promise {<fulfilled>: 'saqlain'}
=>[[Prototype]]:Promise
[[PromiseState]]:"fulfilled"
[[PromiseResult]]:"saqlain"
----------------------------------------------------------------------------------------------*/
//my question is that how can we get the data saqlain out of this .simple by .then()
data.then((res) => {
  console.log(res);
})
//saqlain
//-------------------------------------- dive more into the promise and async --------------------------------------------------------
const p = new Promise((resolve, reject) => {
  resolve("promise isfullfilled")

});
async function wowdata() {
  return p;
}
const data1 = wowdata();
console.log(data1);
data1.then((res) => {
  console.log(res);
});
//--my question is in above code async function return p .but async always return promisei.e p will wrapped into a promise.logic
// says that but p is already a promise no need to wrappe p assign to data1---
/* ===================================== output ===================================
Promise {<pending>}
promise isfullfilled
Promise {<fulfilled>: undefined}

[[Prototype]]:Promise
[[PromiseState]]:"fulfilled"
[[PromiseResult]]:undefined
*/
//async and await are used to handle promises.to understand how they handle promises first
// we need to know how promises use to handle earlier
const a = new Promise((resolve, reject) => {
  resolve("promise fullfilled");
});
function get() {
  a.then((res) => {
    console.log(res);
  })
}
get();
//promise fullfilled
//==================== using async and await  ==================================
const b = new Promise((resolve, reject) => {
  resolve("promise fullfilled");
});
// NOTE AWAIT IS A KEYWORD USED INSIDE A ASYNC FUNCTION ONLY.
async function getdata1() {
  const val = await b; ////no use of then using await.
  console.log(val);
}
getdata1();
//promise fullfilled
//IG  NOWYOU THINK THAT AWAIT IS TO REPLCAE then() BUT IT IS MUCH MORE
//---------------------------------------------------------------------------------------------------------------------------
//LET US CREATE AN ACTUAL PROMISE I.E PROMISE IS USED TO HANDLE ASYNCHRONOUS OPERATION THAT TAKES SOMEW TIME using such example

const c = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise fullfilled");
  },10000);
});
async function getdata2() {
  const val2 = await c  //no use of then using await.
  console.log("saqlain");
  console.log(val2);
}
getdata2();
//when js engine start executing top to bottom in c value will come after 10s.so below codes start executing
// getdata2() called val2 holds c value but 10s required so js try to move below code as per logic but due to await
//it cant do it .it wait for 10s then print saqlain and promise fullfilled
//----------------------------------------------difference if then is used ---------------------------------------------------
function get3() {
  c.then((res) => {
    console.log(res);
  });
    console.log("saqlain");


}
get3();
//first saqlain then after 10s when promise is resolved promise fullfilled printed
//note:_ DUE TO AWAIT JS ENGINE WAIT FOE PROMISE  GETS RESOLVED
//-----------------------------------more on async and await --------------------------------------------
const c1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise fullfilled");
  }, 10000);
});


async function getdata2() {
  const val2 = await c1; //no use of then using await.
  console.log("saqlain");
  console.log(val2);
  const val3 = await c1;
  console.log("suhan");
  console.log(val3);
}
getdata2();
//for 10s Promise {<pending>}
/*after 10s
saqlain
promise fullfilled
 suhan
promise fullfilled
*/
//----------------------------------- more complex one ------------------------------------------------------

 const d = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise fullfilled");
  }, 5000);
});
const e = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise fullfilled");
  }, 10000);
});
async function getdata4() {
  console.log("hello")
  const val2 = await d; //no use of then using await.
  console.log("saqlain");
  console.log(val2);
  const val3 = await e;
  console.log("suhan");
  console.log(val3);
}
getdata4();
/*
initially Promise {<pending>} so js moves below codes there wait for d 5s
------ after 5s d promise resolved  ----------
saqlain
promise fullfilled
------ after 10s ----------
suhan
promise fullfilled

======================= what if d had 10000s and e had 5000s then at val2 10s wait during it 5s over for e it is resolved but upper
one has more 5s to get resolved aftrer 10s both executed
*/
/* ---------------------------------------imp  how behind the scene code executes ----------------
js has a one callstack so js is asingle stranded
at first callstack is empty
CALLSTACK
---empty
when getdata4(); called it enter into callstack
CALLSTACK
getdata()
so this function starts executing it log hello to console then move to line 154
1.but their is await the promise has 5s to get resolved will js wait here 5s ..ans is no so

2.getdata4() moves out of callstack so that main thread is not block does not freeze our page if any other thing
happening they will continue to happen

3.now after 5s getdata4() will again come and move ahead
4.then again at line no 157 encounter the await this 10s but 5s alreadyt gone more 5s
5.the getdata4() moves out of callstack then after 5s again move to 157 execute the code



*/
