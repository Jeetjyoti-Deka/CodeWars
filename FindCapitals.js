// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

var capitals = function (word) {
  // Write your code here
  let arr = [];
  word.split("").map((letter, i) => {
    if (letter.charCodeAt(0) >= 65 && letter.charCodeAt(0) <= 90) {
      arr.push(i);
    }
  });
  return arr;
};
