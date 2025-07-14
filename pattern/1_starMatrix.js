/*
 * Star Pattern Matrix
 * This code generates a square matrix of stars based on the input size.
 * It also counts the total number of stars printed.
 */

console.log("Star Pattern Matrix");

function starPattern(n) {
  console.log("Star Pattern for Given Number  =", n);
  let totalStar = 0;
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      row = row + " * ";
      totalStar++;
    }
    console.log(row);
  }
  console.log("Total Star ==>", totalStar);
}

starPattern(4);
