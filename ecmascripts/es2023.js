//* ==========================================
//*    ECMAScript Features (2022) / ES13
//* =========================================

//? List of new useful features added in ES8  👇
// Array.findLast(condition)
// Array.findLastIndex(condition)
// Array.prototype.toReversed()
// Array.prototype.toSorted(compareFn)
// Array.prototype.toSpliced(start, deleteCount, ...items to be addeed or  blank if want dlt only no add)
// Array.prototype.with(index, addedvalue)

//* ===============================================
//*  Array.findLast() & Array.findLastIndex()
//* ==============================================
//? This function will allow us to find element of the array based on a condition buy iteration
// from the last to first and return 1st matched one
 const array = [1, 2, 3, 4, 5, 6, 4];
 console.log(array.findLast((elem) => elem > 4));
 console.log(array.findLastIndex((elem) => elem >5));

//* ===============================================
//*  New Array.prototype functions
//* ==============================================

const myNames = ["vinod", "bahadur", "thapa", "kodyfier"];

//? Array.prototype.toReversed();
const reversedNum = myNames.toReversed();
console.log("original", myNames);
console.log("reversed", reversedNum);//['kodyfier', 'thapa', 'bahadur', 'vinod']
//todo if it's not working run in browser

//? Array.prototype.toSorted(compareFn);
const sortedArr = myNames.toSorted();
console.log("original", myNames);
console.log("sorted", sortedArr);

//? Array.prototype.toSpliced(start, deleteCount, ...items);
const splicedArr = myNames.toSpliced(1, 1, "thapaTechnical");
console.log("original", myNames);
console.log("spliced", splicedArr);

//? Array.prototype.with(index, value);
//* The with() method in JavaScript is used to change the value of an element at a specific index in an array.
// It takes two arguments: the index of the element to be changed and the new value.
//  It returns a new array with the changed element, leaving the original array unchanged.

const replaceWith = myNames.with(2, "thapaTechnical");
console.log("original", myNames);
console.log("replaced", replaceWith);// ['vinod', 'bahadur', 'thapaTechnical', 'kodyfier']
