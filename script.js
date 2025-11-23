let userInputString = prompt("Age");
let userInteger = parseInt(userInputString,10);

if (isNaN(userInteger)) {
  console.log("Invalid Number.");
} else {
  var humanYears = 16*Math.log(userInteger) + 31;
  console.log(`You are ${humanYears} in dog years!`)
}