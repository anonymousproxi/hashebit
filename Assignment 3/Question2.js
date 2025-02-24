/*Q2) let str = 'I love my India'
output expected = 'India my love I' */
let str = "I love my India";

// Split the string into an array of words, reverse the array, and join it back
let reversedStr = str.split(" ").reverse().join(" ");

console.log(reversedStr);
