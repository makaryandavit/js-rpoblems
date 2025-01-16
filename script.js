let allExpense = [];

function calculateExpense() {
  let expense = +prompt("Մուտքագրեք բենզինի ծախսը");
  let mhGaloons = 0;
  if (expense == -1) {
    const allExpenseValue =
      allExpense.reduce((a, b) => a + b, 0) / allExpense.length;
    alert(allExpenseValue);
    return;
  }
  let road = +prompt("Մուտքագրեք անցած ճանապարհը");

  mhGaloons = road / expense;
  allExpense.push(mhGaloons);
  alert(mhGaloons);
  calculateExpense();
}

calculateExpense();
