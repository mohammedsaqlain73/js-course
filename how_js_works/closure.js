//* ------------------------------------
//*  Closure:
//* -------------------------------------

//? A closure is created when an inner function has access to the variables of its outer function,
// even after the outer function has finished executing due to heap.

function outerFunction() {
  var outerVariable = "I'm from outer";

  function innerFunction() {   //dont think that you call outer function then inner will also execute but not only execute when callled
    console.log(outerVariable);
  }
  return innerFunction;
}

var closureFunction = outerFunction(); // this return innerFunction assign  to a  variable
closureFunction();//this   closureFunction has innerfunction .calling  closureFunction  means calling inner
// the innerfunction will now execute it tend to print outerVariable but it is in outerfunction will already
//executed not in call stack.......then hero heap memory arrives which stored the outervariable when uterfunction
//was executing.
//----------------------------------------------------------------------------------------------------------------------
//* also one more example

function multiplier(factor) {
  return function (number) {
    console.log(number, factor);
    return number * factor;
  };
}

const double = multiplier(2);//it return the function and assign to double
console.log(double(5)); //when double is called that function is called  where number receive 5
                            /*  function (number) {
                                      console.log(number, factor);
                                           return number * factor; */


// but still that function can access the factor argument of multiplier function which is completed already due to closure

//=====================================-----------------------------------------------=======================================
// Here when we are calling the closureFunction() it is actually going to call the innerFunction()
// but in our executionContext the outerFunction is already popped  out. Still we can access the outerVariable
//  value and how we are able to access it, is what closure all about ?

// We just need to know that an inner function has always access to the variables of the outer (parent) function. That's it.

// Why is it like that? It's because the variable object of the parent function stays in memory even after
// the function returns, and our inner function has access to this variable object through the scope chain.

// It might be beneficial to clarify that the call stack is simply the execution order and it is not the same
// thing as the computer's memory, which is where the variables are held.  So even though the function was removed
// from the call stack, its variables are still maintained in memory until they are no longer needed and garbage
// collection comes and removes them.

