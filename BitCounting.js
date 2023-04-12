/*
Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. 
You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
*/

var countBits = function (n) {
  //   let binary = n.toString(2);
  //   return binary.split('').filter(e => Number(e) === 1).length;

  let arr = [];
  while (n !== 0) {
    arr.push(n % 2);
    n = Math.floor(n / 2);
  }
  return arr.filter((e) => Number(e) === 1).length;
};
