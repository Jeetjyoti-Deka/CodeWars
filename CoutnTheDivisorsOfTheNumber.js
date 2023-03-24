/*
Count the number of divisors of a positive integer n.
*/

function getDivisorsCnt(n) {
  // todo
  let num = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) num++;
  }
  return num;
}
