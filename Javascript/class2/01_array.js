// Array

//An array in js is data structure to store multiple values of any type under a single name, including numbers, string, array and objects.
//An array is a zero-indexed meaning it starts from 0.
//An array is a collection of items stored at a cntiguous memory location.

//How to creat an array

let numArray = [1,4,6,3,8,9];
console.log(numArray);
console.log(typeof numArray);

let randomArray = ["Rudra",43,"Badal",65];
console.log(randomArray);

//Accessing the elements :

console.log(randomArray.length);
console.log(randomArray[3]);

// in optimised way

console.log(randomArray[randomArray.length - 1]);

//modifying the element

randomArray[2]='Param';
console.log(randomArray);


//Array Methode :
//Push Methode :

let bikes= ["pulsar","Ninja","KTM","Harley","Triumph"];
bikes.push("Beneli");
console.log(bikes);

//Pop
bikes.pop();
console.log(bikes);
