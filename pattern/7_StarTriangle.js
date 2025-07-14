/*
 * Star Triangle Pattern Right Angle
 * This code generates a right angle triangle matrix of numbers based on the input size.
 * It also counts the total number of stars printed.
 */

console.log(" Star Triangle Pattern Right Angle");

function starPattern(n) {
  console.log("Star Pattern for Given Number  =", n);
  let totalStar = 0;
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n - i; j++) {
      row = row + " ";
      totalStar++;
    }
    for (let k = 0; k < i + 1; k++) {
      row = row + "*";
      totalStar++;
    }
    console.log(row);
  }
  console.log("Total Star ==>", totalStar);
}

starPattern(4);
