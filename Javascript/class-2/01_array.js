// Array

//An array in js is data structure to store multiple values of any type under a single name, including numbers, string, array and objects.
//An array is a zero-indexed meaning it starts from 0.
//An array is a collection of items stored at a cntiguous memory location.

//How to creat an array

let numArray = [1, 2, 3, 45, 10];
console.log(numArray); // [1,2,3,45,10]
console.log(typeof numArray); // array

let nums = 100;
let chars = "Pramod";

let arrayStore = [nums, chars];
console.log(arrayStore);

let randomArray = ["Pramod", "Ramesh", "Peeyush", 25];
console.log(randomArray);

//Accessing elements :

console.log(randomArray.length); // 4
console.log(randomArray[0]);

//in optimized way

//Print me the last value of randomArray
console.log(randomArray[3]);
console.log(randomArray[randomArray.length - 1]);

//Modifying the element :

randomArray[1] = "Suresh";
console.log(randomArray);

//Array Methods :

//Push method :
//The push() method adds one or more elements to the end of an array and returns the new length of the array.

let bikes = ["Pulsar", "Ninja", "KTM", "Harley", "Triumph"];
console.log(bikes);

bikes.push("Beneli","Audi");
console.log(bikes);

// Pop method :
// The pop() method removes the last element from an array and returns that element. This method changes the length of the array.

console.log(bikes.pop()); // Triumph
console.log(bikes.pop()); // Beneli
console.log(bikes);

// Slice method :
// The slice() method extracts a part of an array and returns the extracted part in a new array.

console.log(bikes.slice(1, 3)); // Output : ["Ninja", "KTM"]
console.log(bikes.slice(0, 4)); // 1st index will include and last index won't include

// Splice method :
// The splice() method adds/removes items to/from an array, and returns the removed item(s).

console.log(bikes.splice(0,4));  // start: the index at which you need to change the array
// deleteCount : The numbers you want to delete/extracts
// end: the index at which you need to stop changing the array

console.log(bikes.splice(0, 3));
console.log(bikes.splice(1, 4));