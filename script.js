const numbers = [];
function findTwoLargest() {
  let number = +prompt("Write number");
  numbers.push(number);

  if (numbers.length == 10) {
    for (let i = 0; i < numbers.length; i++) {
      for (let j = 0; j < numbers.length; j++) {
        if (numbers[j] > numbers[j + 1]) {
          let change = numbers[j];
          numbers[j] = numbers[j + 1];
          numbers[j + 1] = change;
        }
      }
    }
    console.log(
      "this is the second largest number",
      numbers[numbers.length - 2],
      "this is first largest number",
      numbers[numbers.length - 1]
    );
    return;
  }
  findTwoLargest();
}

findTwoLargest();
