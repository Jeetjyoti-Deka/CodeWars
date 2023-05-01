/*
You will be given an Array(a), starting position (i) and number of portion to return (n) . 
Your task is to return n portion of the array (a) starting from position (i ). 
The starting position could be negative, in that case you should start counting reverse direction till you get all your n portion. 
In case you can not find the exact n portion of elements counting from the starting position i or the starting position i is out of the 
index of the array, you should return -1 (throw an ArgumentOutOfRangeException in C#).
*/

function portion(a, i, n) {
  if (i > 0) {
    if (i + n > a.length) return -1;
    let arr = [];
    while (n > 0) {
      arr.push(a[i]);
      i++;
      n--;
    }
    return arr;
  } else {
    if (Math.abs(i) + n > a.length) return -1;
    let arr = [];
    while (n > 0) {
      arr.push(a[a.length + i - 1]);
      i--;
      n--;
    }
    return arr.reverse();
  }
}
