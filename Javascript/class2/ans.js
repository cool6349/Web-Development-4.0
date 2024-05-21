// ## Questions ?

// - //todo? Print your birthday in the console using the Date object.
// let Bdate = "28-12-2001";
// console.log(new Date("12-28-2001"));
// - //todo? Print the current time in the console using the Date object.
let myDate = new Date();
console.log(myDate.toTimeString());
// - //todo? Print your current age in the console using the Date object.

let Bdate = new Date(28 - 12 - 2001);
console.log(myDate.toLocale - Bdate);

// - Q: What does the push method do in JavaScript arrays?

//-ans : push methode in JS add an element at the end of an array.

// - Q: What does the pop method do in JavaScript arrays?

// ans : pop methode pull out an element from the end of an array.

// - Q: Given the array let fruits = ["apple", "banana", "mango"];, what will be the result of fruits.push("orange");?

// -ans : ["apple", "banana", "mango","orange"]

let fruits = ["apple", "banana", "mango"];
fruits.push("orange");
console.log(fruits);

// - Q: Given the array let numbers = [1, 2, 3, 4, 5];, what will let last = numbers.pop(); do?

let numbers = [1, 2, 3, 4, 5];
let last = numbers.pop();

console.log(last); //5
console.log(numbers); //[1, 2, 3, 4]


// ```js
// Q: What will the following code output?
// let colors = ["red", "green", "blue"];
// colors.push("yellow");
// colors.pop();
// console.log(colors);   

// ANS : ["red", "green", "blue"];
// ```

// - Q: How can you add multiple elements to the end of an array in one push call?


fruits.push("chiku", "strawery", "Dragonruit");
console.log(fruits);

// ```js
// Q: What will be the result of the following code?
// let Stack = [];
// Stack.push(1);
// Stack.push(2);
// Stack.push(3);
// Stack.pop();
// Stack.pop();
// console.log(Stack);

// ANS : [1]

// ```

// ```js

// Q: Explain the following code:
// let letters = ["a", "b"]; // Here, an array called letters stores two values a and b.
// letters.push("c", "d");  // Hn this line push operation perform to the array letters.
// let lastLetter = letters.pop(); // Pop operation perform to the array and result store in a avariable.
// console.log(letters); // In this line it display the array .After push and pop operation the array letters will store ["a","b","c"].

// console.log(lastLetter);  // This shows which element pull out from the array.


// ```

// - Q.How can you check the length of an array after using push or pop?



// ```js
// Q: What will be the output of the following code?
// let myArray = [10, 20, 30];
// myArray.push(40);
// console.log(myArray.pop());  // ANS : 40 , this will display which element is pull uot.
// console.log(myArray);  // ANS : [10, 20, 30 ] ,It will show after push ,pop operation what in the myArray element
// // ```