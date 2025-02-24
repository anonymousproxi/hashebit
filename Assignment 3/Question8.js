/*Q8) Write a function to find repeated sum of digits until there is only a single digit in the number.
Example - 456 - 4+5+6 = 15 - 1+5 = 6.
*/
function digitalRoot(n) {
  let num = n;
  while (num >= 10) {
    num = num
      .toString()
      .split("")
      .reduce((sum, digit) => sum + parseInt(digit, 10), 0);
  }
  return num;
}

const num = 456;
const result = digitalRoot(num);
console.log(result);
