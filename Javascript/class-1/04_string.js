// String
let name1 = "Pramod";
let name2 = "Kumar";
let name3 = "Jena";

let sentence = "He is a good boy"; // 16 char

// empty string "" " "
// console.log(name1 + " " + name2 + " " + name3 + "\n" + sentence);

// charAt() : function
// It returns the character at the specified index in a string.

console.log(sentence.charAt(10)); // e

// length
console.log(sentence.length); // 16

let lengthCheck =
    "   Lorem  ipsum dolor sit amet consectetur adipisicing elit. Doloribus at rerum ea minus nulla itaque ab vero ad asperiores exercitationem    ";
console.log(lengthCheck.length); // 134

// split()
// console.log(sentence.split(" "));
console.log(sentence.toUpperCase()); // HE IS A GOOD BOY
console.log(lengthCheck);
console.log(lengthCheck.trim());
console.log(lengthCheck);

//todo Task: 1
// Use all the string methods to demonstrate all the properties with examples.

// Example:
// let sentence = "He is a good boy"; // 16 char

// console.log(sentence.includes("is"));

//todo Task: 2
// Declare a sentence and include your name in that and check wheather your name is present or not using `include` method.

// Example:
// let sentence = Lorem ipsum dolor sit amet pramod consectetur adipisicing elit. Perferendis, nihil.




//Task: 1
//concat the string
let str1 = "Prasad";
let str2 = "Nahak";

console.log(str1.concat(' ', str2));

//endswith
let twx = "Life is Good!";

console.log(twx.endsWith('Good'));
console.log(twx.endsWith('Good', 12));

//indexof
const paragraph = "I think Ruth's dog is cuter than your dog!";

const searchTerm = 'dog';
const indexofFirst = paragraph.indexOf(searchTerm);

console.log(`The index of the first "${searchTerm}" is ${indexofFirst}`);
// Expected output: "The index of the first "dog" is 15"

console.log(
    `The index of the second "${searchTerm}" is ${paragraph.indexOf(searchTerm, indexofFirst + 1,)}`,);
    
// Expected output: "The index of the second "dog" is 38"

//padend

let string='uihdhfjhfjkrfkjhdfkhk jhbdhfds dfjsbkjf';

console.log(string.padEnd(10, '.'));

//padStart
console.log(string.padStart(5, '0'));

//repeat

let isk='Rudra';
console.log(isk.repeat(4));

//replace

let stri='thu eku hfy ski ejr ith ujf ';

console.log(stri.replace('hfy' , 'rrr'));

//replaceAll

let paragraph1='Everything is Good but Everything is not required ';

let para= /Everything/gi;

console.log(paragraph1.replaceAll(para, 'Nothing'));

//Task: 2
let sent = 'The quick brown fox jumps over the lazy dog.';

const word = 'ink';

console.log(
    `The word "${word}" ${sent.includes(word) ? 'is' : 'is not'} in the sentence`,);
// Expected output: "The word "fox" is in the sentence"


