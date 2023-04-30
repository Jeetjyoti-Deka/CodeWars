/*
Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.

Square all numbers k (0 <= k <= n) between 0 and n.

Count the numbers of digits d used in the writing of all the k**2.

Implement the function taking n and d as parameters and returning this count.

Examples:

The function, when given n = 25 and d = 1 as argument, should return 11 since
the k*k that contain the digit 1 are:
1, 16, 81, 100, 121, 144, 169, 196, 361, 441.
So there are 11 digits 1 for the squares of numbers between 0 and 25.
*/

function nbDig(n, d) {
  let count = 0;
  while (n >= 0) {
    let sq = n * n + "";
    if (sq.includes(d + "")) {
      sq.split("").forEach((e) => {
        if (e === d + "") {
          count++;
        }
      });
    }
    n--;
  }
  return count;
}
