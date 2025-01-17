// problem 2.19
let perTime = 10;
let more40 = 1.5;

function calculateSallary() {
  let times = +prompt("Введите число рабочих часов (-1, если авод закончен)");
  let sallary = 0;
  if (times == -1) {
    return;
  }

  if (times > 40) {
    sallary = times * (perTime * more40);
  } else {
    sallary = times * perTime;
  }
  console.log(`${sallary}$`);

  calculateSallary();
}

calculateSallary();
