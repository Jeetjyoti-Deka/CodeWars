/*
The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in 
a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values 
that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.
*/

function rgb(r, g, b) {
  // complete this function
  r = r > 255 ? 255 : r;
  g = g > 255 ? 255 : g;
  b = b > 255 ? 255 : b;
  r = r < 0 ? 0 : r;
  g = g < 0 ? 0 : g;
  b = b < 0 ? 0 : b;

  let hex = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: "A",
    11: "B",
    12: "C",
    13: "D",
    14: "E",
    15: "F",
    16: "G",
    17: "H",
  };

  let arr = [];
  let q = 0;
  for (let i = 0; i < 3; i++) {
    if (i === 0) {
      q = r;
    } else if (i === 1) {
      q = g;
    } else {
      q = b;
    }
    let ans = [];

    let rem = 0;
    if (q === 0) {
      arr = [...arr, "00"];
    }
    while (q !== 0) {
      rem = q % 16;
      q = Math.floor(q / 16);
      ans.push(rem);
    }

    arr = [
      ...arr,
      ans
        .reverse()
        .map((e, i, a) => {
          if (a.length < 2) {
            return "0" + String(hex[e]);
          }
          return String(hex[e]);
        })
        .join(""),
    ];
  }

  return arr.join("");
}

// top answer
// function rgb(r, g, b){
// 	return toHex(r)+toHex(g)+toHex(b);
// }

// function toHex(d) {
//     if(d < 0 ) {return "00";}
//     if(d > 255 ) {return "FF";}
//     return  ("0"+(Number(d).toString(16))).slice(-2).toUpperCase()
// }