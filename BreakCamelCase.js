/*
Complete the solution so that the function will break up camel casing, using a space between words.
Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
*/

function solution(string) {
  let arr = [];
  string.split("").forEach((e) => {
    if (e === e.toUpperCase()) {
      arr.push(" ");
      arr.push(e);
    } else {
      arr.push(e);
    }
  });
  return arr.join("");
}
