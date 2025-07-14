/*
 * Star Pattern Right Angle Triangle Matrix
 * This code generates a right angle triangle matrix of stars based on the input size.
 * It also counts the total number of stars printed.
 */

console.log("Star Pattern Right Angle Triangle Matrix");

function starPattern(n) {
  console.log("Star Pattern for Given Number  =", n);
  let totalStar = 0;
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
      row = row + " * ";
      totalStar++;
    }
    console.log(row);
  }
  console.log("Total Star ==>", totalStar);
}

starPattern(4);
