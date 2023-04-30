/*
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. 
The string can contain any char.
*/

function XO(str) {
  //code here
  let countX = 0;
  let countO = 0;

  str.split("").forEach((e) => {
    if (e === "x" || e === "X") {
      countX++;
    }
    if (e === "o" || e === "O") {
      countO++;
    }
  });

  return countX === countO;
}
