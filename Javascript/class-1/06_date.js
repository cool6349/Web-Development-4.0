//Date

let myDate= new Date();

console.log(myDate);
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toTimeString());

let myStamp = Date.now();
console.log(myStamp);

let newDate = new Date();
console.log(newDate.getDate()); // 21
console.log(newDate.getMonth()); // 4
console.log(newDate.getFullYear());  // 2024