const { log } = require("console");
const fs = require("fs");

//allFileContents is a string
const allFileContents = fs.readFileSync(
  "/home/yoyo/repos/aoc2023/challenge_1/input.txt",
  "utf-8"
);

let afcArray = allFileContents.split(/\r?\n/);
let firstIndex = -1;
let firstword = "";
let alphaRegex =
  /zerone|oneight|twone|threeight|fiveight|sevenine|eightwo|eighthree|nineight|one|two|three|four|five|six|seven|eight|nine|[0-9]/g;
let totalIndex = 0;
let resultArray = [];

afcArray.forEach((element) => {
  let index = 0;
  console.log(totalIndex);

  let array = element.match(alphaRegex);
  for (let i = 0; i < array.length; i += 1) {
    let element = array[i];

    if (
      element === "one" ||
      element === "two" ||
      element === "three" ||
      element === "four" ||
      element === "five" ||
      element === "six" ||
      element === "seven" ||
      element === "eight" ||
      element === "nine" ||
      element === "zero" ||
      element === "zerone" ||
      element === "oneight" ||
      element === "twone" ||
      element === "threeight" ||
      element === "fiveight" ||
      element === "sevenine" ||
      element === "eightwo" ||
      element === "eighthree" ||
      element === "nineight"
    ) {
      switch (element) {
        case "zerone":
          array.splice(index, 1, "0", "1");
          break;
        case "oneight":
          array.splice(index, 1, "1", "8");
          break;
        case "twone":
          array.splice(index, 1, "2", "1");
          break;
        case "threeight":
          array.splice(index, 1, "3", "8");
          break;
        case "fiveight":
          array.splice(index, 1, "5", "8");
          break;
        case "sevenine":
          array.splice(index, 1, "7", 9);
          break;
        case "eightwo":
          array.splice(index, 1, "8", "2");
          break;
        case "eighthree":
          array.splice(index, 1, "8", "3");
          break;
        case "nineight":
          array.splice(index, 1, "9", "8");
          break;
        case "one":
          array.splice(index, 1, "1");
          break;
        case "two":
          array.splice(index, 1, "2");
          break;
        case "three":
          array.splice(index, 1, "3");
          break;
        case "four":
          array.splice(index, 1, "4");
          break;
        case "five":
          array.splice(index, 1, "5");
          break;
        case "six":
          array.splice(index, 1, "6");
          break;
        case "seven":
          array.splice(index, 1, "7");
          break;
        case "eight":
          array.splice(index, 1, "8");
          break;
        case "nine":
          array.splice(index, 1, "9");
          break;
        case "zero":
          array.splice(index, 1, "0");
          break;
      }
    }
    index++;
  }
  console.log(array);

  if (array.length === 1) {
    resultArray[totalIndex] = parseInt(array[0] + array[0]);
  } else {
    resultArray[totalIndex] = parseInt(array[0] + array[array.length - 1]);
  }
  totalIndex++;
});

console.log(resultArray);
console.log(resultArray.reduce((acc, currVal) => acc + currVal));
