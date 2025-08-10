//* ==========================================
//*    ECMAScript Features (2020) / ES11
//* =========================================

//? List of new useful features added in ES8  👇
// BigInt
// Nullish Coalescing Operator ??
// Optional Chaining Operator ?.
// promise.allSettled

//* ===================
//*  BigInt
//* ================
//? BigInt: BigInt in JavaScript is a data type used to represent and perform operations on large integers that
// exceed the limits of regular numbers.
const maxNumber = Number.MAX_SAFE_INTEGER;
console.log(maxNumber); //9007199254740991

//? Creating BigInts:
//? - Using the `n` suffix:

// Using the BigInt() constructor:
const anotherLargeNumber = BigInt("123456789012345678901234567890");
console.log(anotherLargeNumber);
console.log(typeof anotherLargeNumber);

// let maxNumber = Number.MAX_SAFE_INTEGER;
// maxNumber = BigInt(maxNumber);
// let num = maxNumber + 10n;
// console.log(num);

//* =======================================
//*  Nullish Coalescing Operator ??
//* ===================================

let favNum = 0; // your favourite values
userFavNum = favNum || 10;
console.log(userFavNum); //10 as in js 0 is false and when 1st one is false then or return  return second
//--------------------------------------------------------------------------------------------------------------
// tackle this js has nullish cascading operator ?? t provides a concise way to handle nullish (null or undefined) values.
// It returns its right-hand operand when its left-hand operand is null or undefined, otherwise, it returns the left-hand operand.
let favNum1 = 0; // your favourite values
userFavNum1 = favNum1 ?? 10; //if 1st opnew is null or undefined then only 2nd one else first one
console.log(userFavNum); //0 as 0 is not nullk or undefined
//---------------------------------------------------------------------------------------------------------------------------
let favNum2 = null; // your favourite values
userFavNum2 = favNum2 ?? 10; //if 1st opnew is null or undefined then only 2nd one else first one
console.log(userFavNum2); //10
//* =======================================
//*  Optional Chaining Operator (?.)
//* =======================================

//? It provides a concise way to access properties of an object without worrying about the existence of intermediate properties.
//  It's particularly useful when working with nested objects or accessing properties of objects that may be null or undefined.

const person = {
  name: "John",
  address: {
    city: "bbsr",
    zipCode: 12345,
  },
};
//------------------------------------------------------------------------------------------
//? Accessing nested properties without optional chaining
const sui = person.address;
console.log(sui); //{city: 0, zipCode: 12345}
// now i asked you to find the city name only whole adress
const cityname = person.address.city;
console.log(cityname); // bbsr
//----------------------------------( ?.) --------------------------------------------------------
// for some reason address is not present then  what would happen.===>then error .
// to handle this error use tricks if city not present
const cityname1 = person.address ? person.address.city : "city not found"; //if person k inner wala add. hai i.e true then city
console.log(cityname1);
//js developer saw that length of above can be short  if person.address present then why p.add.city direct write ?.city
const cityname2 = person.address?.city || "city not found"; //if person k inner wala add.present then addd k inner wala city ?.city or else CNF
console.log(cityname2);
//----------------------------------------------------------------------------------------------------------
//what will happen if the city name is 0 then above code will give city not found to solve this we will use ??
const cityname3 = person.address?.city ?? "city not found"; //if person k inner wala add.present then addd k inner wala city ?.city or else CNF
console.log(cityname3);

//---------------------------------------------- Another Example (?.) chaining  ---------------------------------------------

const person1 = {
  name: "John",
  address: {
    city: "New York",
    zipCode: 12345,
    coordinates: {
      latitude: 40.7128,
      longitude: -74.006,
    },
  },
};

const latitude = person.address?.coordinates?.latitude ?? "not present"; //if p's add presnt and inside it corod. present
//  then print  latt else not found
console.log(latitude);

//* =======================================
//*  Promise.allSettled()
//* ===================================
//? We will cover later in our Promises section part of the video and you gonna love that part.
