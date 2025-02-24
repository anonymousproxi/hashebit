/*Q10) Write a function to reverse a string.
Input - Hello
Outpur - olleH*/
function reverseString(str) {
  const reversedChars = str.split("").reverse();
  const reversedString = reversedChars.join("");
  return reversedString;
}

const input = "Hello";
const output = reverseString(input);
console.log(output);
