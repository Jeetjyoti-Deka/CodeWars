/*
You are given the total volume m of the building. Being given m can you find the number n of 
cubes you will have to build?

https://www.codewars.com/kata/5592e3bd57b64d00f3000047/train/javascript
*/

function findNb(m) {
  // your code
  let n = 0;
  while (m > 0) {
    n = n + 1;
    m = m - n ** 3;
  }
  if (m === 0) {
    return n;
  } else {
    return -1;
  }
}
