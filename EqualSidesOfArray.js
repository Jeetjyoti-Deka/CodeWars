/*
You are going to be given an array of integers. Your job is to take that array and find an index N 
where the sum of the integers to the left of N is equal to the sum of the integers to the right of 
N. If there is no index that would make this happen, return -1.
*/

function findEvenIndex(arr) {
  if (sum(arr.slice(1)) === 0) return 0;
  if (sum(arr.slice(0, arr.length - 1)) === 0) return arr.length - 1;
  for (let i = 1; i < arr.length - 1; i++) {
    let arr1 = arr.slice(0, i);
    let arr2 = arr.slice(i + 1);
    let sum1 = sum(arr1);
    let sum2 = sum(arr2);
    if (sum1 === sum2) return i;
  }
  return -1;
}

function sum(arr) {
  return arr.reduce((acc, cur) => acc + cur, 0);
}
