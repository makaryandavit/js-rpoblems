const numbers = [];

function findLargest() {
  let currentNumber = prompt("Write Number");
  numbers.push(+currentNumber);

  if (numbers.length == 10) {
    let maxNumber = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > maxNumber) {
        maxNumber = numbers[i];
      }
    }
    console.log("The largest number is ", maxNumber);
    console.log("Your numbers", numbers);
    return;
  }

  findLargest();
}

findLargest();
