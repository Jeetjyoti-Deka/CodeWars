/*
Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, 
which is the number of times you must multiply the digits in num until you reach a single digit.

For example (Input --> Output):

39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
*/

function persistence(num) {
  //code me
  if (Math.floor(num / 10) === 0) return 0;
  let count = 0;
  while (Math.floor(num / 10) !== 0) {
    num = num
      .toString()
      .split("")
      .reduce((acc, cur) => acc * Number(cur), 1);
    count++;
  }
  return count;
}
