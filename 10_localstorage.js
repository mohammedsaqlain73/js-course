//* ==============================
//* LocalStorage
//* ==============================

//? 1.The localStorage object allows you to save key/value pairs in the browser to save data in browser
// bcz someday you come back to same website your credentials should not be wastwd

//2. it store the data with no expiration date. data is not not deleted when browser is closed  and are available  for future use.

//3.local storage is available in window. so without window it is also accessable.

// How to add the data from localStorage
//====== the first one is key and one is value  ==========
localStorage.setItem("youtubeJsCourse", "addingData");

// How to get the data from localStorage
//====== retrive through key =======
localStorage.getItem("youtubeJsCourse");

// How to remove the data from localStorage using key
localStorage.removeItem("youtubeJsCourse");

//todo Local Storage can only store strings, so when you want to store a complex data structure like an array or an object
//  you need to convert it to a string using JSON.stringify:

//* JSON.stringify: Converts a JavaScript object into a JSON string.
// Useful when you want to send data to a server or store it in a text file, as JSON is a common data interchange format.
//syntax:- JSoN.stringify(literal)

 const data = { name: "Vinod", age: 30, city: "pune" };
 const jsonString1 = JSON.stringify(data);
 console.log(jsonString1);
 //Output: '{"name":"Vinod","age":30,"city":"pune"}'

//* JSON.parse: Converts a JSON string into a JavaScript object.
// Useful when you receive JSON data from a server or read it from a file, and you want to work with it as a JavaScript object.

const jsonString = '{"name":"saqlain","age":21,"city":"bbsr"}';
const parsedData = JSON.parse(jsonString);
console.log(parsedData);
// Output: { name: 'Vinod', age: 30, city: 'pune' }


/*N                        CONCLUSION

=================  js object ---> string use -------:JSON.stringify();
==================   string  -----> js object --------:JSON.parse();

*/
