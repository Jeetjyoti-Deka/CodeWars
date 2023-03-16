/*
Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.
*/

function alphabetPosition(text) {
  text = text.toLowerCase();
  let arr = [];
  for (let i = 0; i < text.length; i++) {
    if (97 <= text.charCodeAt(i) && text.charCodeAt(i) <= 122) {
      arr.push(text.charCodeAt(i) - 96);
    }
  }
  return arr.join(" ");
}
