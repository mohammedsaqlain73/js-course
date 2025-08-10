/*
PROMISES ARE THE SPECIAL TYPE OF OBJETCS TO HANDLE THE ASYNCHRONOUS CODE IN JAVASCRIPT(ASYNCHRONOUS OPERATONS MEANS IT TAKE SOME
X TIME TO EXECUTE and during that time below codes executes.)
*/
// BEFORE PROMISES HOW JS WAS THERE
/* ================= TAKE THE EXAMPLE OF A E-COMMERCE WEBSITE =============================
  WE HAVE A CART ======> TWO MORE APIS=======1.1ST API TAKE CART AND RETURN US THE ORDER DETAILS AND
  2.2ND API TAKE ORDER ID THEN TAKE YOU TO ORDER PAGE. HOW WILL DO THIS
*/
const cart = ["shoes", "jeans", "shirt"];
createOrder(cart);//api return orderid
proceedtoPayment(orderid);
//both the apis are asynchronous as we dont know how much time would both take and 2nd deopend on the first in such case
//in old days we were using callbacks to handle async operations
createOrder(cart, () => {
  proceedtoPayment(orderid);
});
// now the createorder api create orderid then call the proceed payment
//but is this good practice.ans is no it may call payment api twice or never call it we cant trust
// another api which is made by someone else and payment is not in our control its under another api. to solve this promise came
const promise = createOrder(cart); //when this line starts executing it returns us a EMPTY OBJECT staored in promise
// { data : undefined }                                           sine a asyn operation takes some time during
//  that time code it executes bu t when it get completed fill that undefined with some data.here it is orderid.{ data : oderid }
//  promises
//  have a function then
promise.then((orderid) => {
  proceedtoPayment(orderid);
})
//here also using callbacks but earlier one we didnt had any control
//=================================== real worlsd example ===============================================================
const api = fetch("https://official-joke-api.appspot.com/jokes/random");
console.log(api);//pending as fetch is a promsie just hover on it you will see it .this fetch takes some time it  execute
//so a asyn operation below codes will execute initially fetch which is promise is in ppending state.later fulfilled or rejected
//? Pending: Initial state, neither fulfilled nor rejected.
//* Fulfilled(Resolved): The operation completed successfully.
//! Rejected: The operation failed or encountered an error.
//o/p:- promise{<pending>}
/*[[Prototype]]:Promise
[[PromiseState]]:"stete"
[[PromiseResult]]:Response(the data we want)*/
api.then((data) => {
  console.log(data)
});
//defination : it is a placeholder which will be filled with some values in future by a asyn operation.
// ================== promise the solver of callback hell ==================================================
const cart2 = ["shoes", "jeans", "shirt"];
createOrder(cart,()=> {
  proceedtoPayment(orderid, () => {
    showordersummery(payInfo, () => {
      updateWalletbalance();
    })
  });
});
//in the above one api call another and it goes on and this is called callback hell.solve by promises
createOrder(cart)
  .then((orderid) => proceedtoPayment(orderid))
  .then((payInfo) => howordersummery(payInfo))
  .then(()=> updateWalletbalance())
//if you dont use arrow function then write return else you will be in trblm
createOrder(cart)
  .then(function (orderid) {
    return proceedtoPayment(orderid)

  })
  .then(function (payInfo) {
   return howordersummery(payInfo)
  })
  .then(function () {
    return updateWalletbalance()
  });
