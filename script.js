// let allExpense = [];

// function calculateExpense() {
//   let expense = +prompt("Մուտքագրեք բենզինի ծախսը");
//   let mhGaloons = 0;
//   if (expense == -1) {
//     const allExpenseValue =
//       allExpense.reduce((a, b) => a + b, 0) / allExpense.length;
//     console.log(allExpenseValue);
//     return;
//   }
//   let road = +prompt("Մուտքագրեք անցած ճանապարհը");

//   mhGaloons = road / expense;
//   allExpense.push(mhGaloons);
//   console.log(mhGaloons);
//   calculateExpense();
// }

// calculateExpense();

// 2.1.18
const allSales = [];
const percent = 9;
const share = 200;

function countIncome() {
  let income = 0;
  let sale = +prompt("Введите объем продаж в долларах");
  if (sale == -1) {
    const allSalesValue = allSales.reduce((acc, value) => acc + value, 0);
    console.log(`${Math.trunc(allSalesValue)}$`);
    return;
  }
  income = (sale * percent) / 100 + share;
  console.log(`${Math.trunc(income)}$`);
  allSales.push(income);
  countIncome();
}

countIncome();
