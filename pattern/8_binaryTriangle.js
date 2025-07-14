/*
 * Binary Triangle Pattern Right Angle
 * This code generates a right angle triangle matrix of numbers based on the input size.
 * It also counts the total number of stars printed.
 */

console.log("Binary Triangle Pattern Right Angle");

function starPattern(n) {
  console.log("Star Pattern for Given Number  =", n);
  let totalStar = 0;
  for (let i = 0; i < n; i++) {
    let row = "";
    let toggle = 1;
    for (let j = 0; j <= i; j++) {
      row = row + toggle;
      if (toggle == 1) toggle = 0;
      else toggle = 1;
      totalStar++;
    }
    console.log(row);
  }
  console.log("Total Star ==>", totalStar);
}

starPattern(4);
