/*
You will be given an array of numbers. You have to sort the odd numbers in 
ascending order while leaving the even numbers at their original positions.
*/

function sortArray(array) {
  // Return a sorted array.
  let oddArr = array.filter((e) => e % 2 !== 0);
  oddArr = oddArr.sort((a, b) => a - b);
  let count = -1;
  return array.map((e) => {
    if (e % 2 !== 0) {
      count++;
      return oddArr[count];
    } else {
      return e;
    }
  });
}
