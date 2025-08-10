//* =========================================
//* String in JavaScript
//* =========================================

//? Strings in JavaScript are a fundamental data type that represents a sequence of characters.

// Note:
//? Strings created with single or double quotes works the same.
// There is no difference between the two.

//* String Properties:
//? length: Property that returns the length of the string (number of characters).

// const str = "Hello,    World!";
// console.log(str.length);
// including space n all

//* =========================================
//* Escape Character
//* =========================================

//? Escape Character: In JavaScript, the backslash \ is used as an escape character. It allows you to include special characters in a string.

// Code	   Result	    Description
// \'	    '	        Single quote
// \"	    "	        Double quote
// \\	    \	        Backslash

// let text = "My name is " Thapa Technical " & I am a Full Stack Developer. ";
// let text =
//   "My name is ' Thapa Technical ' & \\ I am a \"Full Stack \" Developer. ";
// // let text = 'My name is " Thapa Technical " & I am a Full Stack Developer. ';

// console.log(text);

//* =========================================
//* String Search Methods
//* =========================================

//? 2: String Search Methods
//? a:  indexOf(): The indexOf() method returns the index (position) of the first occurrence of a string in a string, or it returns -1 if the string is not found:
// syntax
// literal.indexOf(searchString)
//literal. indexOf(searchString, position)

// let text = "Vinod Thapa";
// console.log(text.indexOf("thapa"));
// The indexOf() method is case sensitive.
// console.log(text.indexOf("Thapa"));

// let strArr = Array.from(text);
// // console.log(strArr);
// let strMap = strArr.map((curElem, index) => `${curElem} - ${index}`);
// console.log(strMap);

//? b: lastIndexOf() : The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:
// syntax
// literal.lastIndexOf(searchString)
// literal.lastIndexOf(searchString, position)

// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let index = text.indexOf("JavaScript");
// let index = text.lastIndexOf("JavaScript");
// let index = text.lastIndexOf("JavaScript", 40);
// console.log(index);

//? c:  search(): The search() method searches a string for a string (or a regular expression) and returns the position of the match.
//* Returns the index number where the first match is found. Returns -1 if no match is found.

 //let text = "Hello JavaScript, welcome to our world best JavaScript course";
//let result = text.search('Javascript');//output -1 as s is small
 //let result = text.search(/javascript/i);
 //console.log(result);

//*👉 Important Tips indexOf/lastIndexOf vs search
// The search() method cannot take a second start position argument.
// The indexOf() method cannot take powerful search values (regular expressions) so give iutput even in case senisitve cond.
// They accept the same arguments (parameters), and return the same value

//? match() : Returns DEATILS OF an array of the matched value  or null if no match is found.

// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let result = text.match("Javascript");//output-null
// let result = text.search("JavaScript");//array of details index also.
//todo here the js converts the normal text into regular expression text.match(/JavaScript/); without the g flag.
// IF YOU ADD G EXPLICITLY THEN RETURN AN ARRAY HAVING  ALL MATCHES
// let result = text.match(/JavaScript/g);//o/p-[ 'JavaScript', 'JavaScript' ]
//also i can be added to breaak the case sensitive condition./javascript/gi.
//console.log(result);
// ========== search vs match =========
// 1.search gives the index of the first occurance of the string. can take i to make it
// case insensitive so gives only 1st ocr. index so / /g has no use.
//2.match gives the detailed array of the first match if global g not used.
// if the global g is implicitly given return an array having match value in total string while search gives for first occ..can take i

//? matchAll() : Returns an iterator of all matches, providing detailed information about each match.
//  Returns an empty iterator if no match is found.

//let text = "Hello JavaScript, welcome to our world best JavaScript course";
//let matchResult = text.matchAll("javascript");
 //let matchResult = text.matchAll("JavaScript");
//todo  here the js converts the normal text into regular expression text.match(/JavaScript/g); also adds the g flag at the end
//console.log(matchResult);//irterable  is return
//console.log(...matchResult);//three dot operator used to open the iterable object.
//====== match vs matchAll
//match return the first match array of details if g not as it convert to Regexp /javascript/ does not add g
//  used if g used explicitly then return the array having n no of given string if n matches in whole string of this.
//matchAll return iterable object of all matches as add g to /javascript/g internally if no match found null object

// for (let item of matchResult) {
//   console.log(item[0]);
// }

/* for (let index of matchResult) {
   console.log(index.index);
 }*/

// for (let { index } of matchResult) {
//   console.log(index);
// }

//? includes(): Returns true if the string contains the specified value, and false otherwise.
 //let text = "Hello JavaScript, welcome to our world best JavaScript course";
 //let includeResult = text.includes(/java/);// i cant possible
// let includeResult = text.includes("J");
 //console.log(includeResult);

// Note: includes() is case sensitive. includes() is an ES6 feature.

//? startsWith(): The startsWith() method returns true if a string begins with a specified value.Otherwise it returns false:
// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let result = text.startsWith("Helcome");
// let result = text.startsWith("Hello");
// console.log(result);

//* start position for the search can be specified
// let result = text.startsWith("welcome", 18);
// let result = text.startsWith("welcome", 17);
// console.log(result);

//? endsWith(): The endsWith() method returns true if a string ends with a specified value. Otherwise it returns false:

// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let result = text.endsWith("welcome");
// let result = text.endsWith("course");
// console.log(result);

//* =========================================
//* Extracting String Parts:
//* =========================================
//! Extracting String Parts:

//? String.prototype.substr() it is deprecated  ❌

//? a: slice() extracts a part of a string and returns the extracted part in a new string.
// syntax
// literal.slice(start, end); always upto  n-1 output

// Todo  JavaScript counts positions from zero.
//? First position is 0. Second position is 1.

// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let result = text.slice(6);
// let result = text.slice(6, 15);
// console.log(result);

// subString()++++---------- substring()

//? a: substring: Extracts a portion of the string based on starting and ending indices.
//* camelCase is used to separate words, substring is not to be intended as Sub String but as Substring
// syntax
// substring(indexStart) // index starts with 0
// substring(indexStart, indexEnd)

//* substring() is similar to slice(). The difference is that start and end values less than 0 (-1,-2 and etc...)are treated as 0 in substring().

// let text = "Hello JavaScript, welcome to our world best JavaScript course";
 //let result = text.slice(-30,-20);
 //console.log(result);
 //let result1 = text.substring(-6);
 //console.log(result1);


//! Homework
// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let result = text.substring(0);
// let result = text.substring(1);
// let result = text.substring(-5);
// console.log(result);

//! similarities
//todo  In both the slice() and substring() methods, the end parameter indicates the ending index up to which the extraction occurs,
//  but the character at the end index is excluded from the extracted substring.

//* =========================================
//* Interview Question
//* =========================================
//! What is the output for the following code?

// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let result = text.slice(1);
// let result = text.replace("H", "");
// let result = text.substring(1);
//? Optional
// let result = text.replace("JavaScript", "Vinod");
// let result = text.replaceAll("JavaScript", "Vinod");

// console.log(result);

//* =========================================
//* Extracting String Characters
//* =========================================
//! Extracting String Characters
// There are 3 methods for extracting string characters:

//? The charAt(position) Method
//? The charCodeAt(position) Method
//? The at(position) Method

//? literal.charAT() : The charAt() method returns the character at a specified index (position) in a string
// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let result = text.charAt(6);
// let result = text.charAt(-6);//not allowed
// console.log(result);

//? charCodeAt() : The charCodeAt() method returns the code of the character at a specified index in a string. The method returns a UTF-16 code (an integer between 0 and 65535).
// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let result = text.charCodeAt(6);
// console.log(result);

//todo ES2022 introduced the string method at():
//? The at() method returns the character at a specified index (position) in a string. The at() method returns the same as carAt().
// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let result = text.at(-6);
// console.log(result);

//todo Note
// The at() method is a new addition to JavaScript.
// It allows the use of negative indexes while charAt() do not.
// Now you can use myString.at(-2) instead of charAt(myString.length-2).

//* =========================================
//* Replacing String Content:
//* =========================================
//! Replacing String Content:
//?literal. replace() : The replace method is used to replace a specified value with another value.
// const str = "Hello, World!";
// const newStr = str.replace("World", "JavaScript");
// console.log(newStr); // Outputs: Hello, JavaScript!

//? Case-Insensitive Replacement: To perform a case-insensitive replacement, you can use the i flag in the regular expression.
// let originalString = "Hello, World! How are you, World?";
// let replacedString = originalString.replace(/world/gi, "vinod");
// console.log(replacedString);

//* =========================================
//* Other Useful Methods:
//* =========================================

//! Other Useful Methods:
//? toUpperCase and toLowerCase: Converts the string to uppercase or lowercase.
// const str = "JavaScript";
// console.log(str.toUpperCase()); // Outputs: JAVASCRIPT
// console.log(str.toLowerCase()); // Outputs: javascript

//? trim: Removes whitespace from both ends of the string.
// const str = "   Hello, World!   ";
// console.log(str.length);

// let trimStr = str.trim();
// console.log(trimStr);
// console.log(trimStr.length);

//? split: Splits the string into an array of substrings based on a specified delimiter/separator.
 const str = "apple,orange,banana";
let ans1 = str.split(",");
let ans2 = str.split(",").reverse();


let strArr = str.split(",").reverse().join();//reverse the string 
console.log(ans2);
console.log(ans1);
console.log(strArr);

//* =========================================
//* //! Interview Questions
//* =========================================

//! 1: Write a JavaScript function that prints the letters 'a' through 'z' in the console. You should use a loop to iterate through the letters and print each one on a new line.

// console.log("a".charCodeAt(0));
// console.log("z".charCodeAt(0));

// for (let char = 97; char <= 122; char++) {
//   console.log(String.fromCharCode(char));
// }

//! 2: Write a function to count the number of vowels in a string?

// const countVowels = (str) => {
//   const vowels = "aeiou";
//   let count = 0;
//   for (let char of str) {
//     console.log(char);
//     // console.log(str.includes(char));
//     if (vowels.includes(char)) {
//       count++;
//     }
//   }
//   return count;
// };
//   console.log(checkAllVowelPresentOrNot("my name u is vinod @  thapa"));
// console.log(countVowels("Hello a i o u world"));

//! 3: Write a function to check if all the vowels presents in a string or not?

// const checkAllVowelPresentOrNot = (str) => {
//   const vowels = "aeiou";
//   for (let char of vowels) {
//     // console.log(char);
//     // console.log(str.includes(char));
//     if (!str.includes(char)) {
//       return false;
//     }
//   }
//   return true;
// };

// console.log(checkAllVowelPresentOrNot("my name u is vinod @  thapa"));

//! 4: Write a JavaScript function to check if the given sting is Pangram or not?

const pangramChecker = (str) => {
  let inputArr = str.toLowerCase().split("");
  // console.log(inputArr);
  // // console.log("z".charCodeAt());
  const values = inputArr.filter(
    (curElem) =>
      curElem.charCodeAt() >= "a".charCodeAt() &&
      curElem.charCodeAt() <= "z".charCodeAt()
  );
  // console.log(values);

  return new Set(values).size === 26;

  // return [...new Set(values)].length === 26;
};

console.log(pangramChecker("The quick  @ brown fox jumps ove the lazy dog"));
