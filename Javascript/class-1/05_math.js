// math

let num1=100;
let num2=50;

let result=num1+num2;
console.log(result);
console.log(Math.abs(-result));  //make the result into possitive

console.log(Math.round(4.8));

console.log(Math.ceil(4.8));

console.log(Math.floor(4.8));

console.log(Math.min(4,7,2,8,4,7,5,));

console.log(Math.max(3,7,4,5,9,5,));


// How to generate a random number

console.log(Math.random());  // Random number

console.log(Math.floor(Math.random() * 10 + 1));

//In a optimise way







let min=10;
let max=20;
let random= Math.floor(Math.random()* (max-min +1))+min;
console.log(random);

//store the random element

let result2= "";
result2 = result2 +String(random);
console.log(result2);




