'use strict';


var money = prompt("Ваш бюджет на месяц?");
var time = prompt("Введите дату", "YYYY-MM-DD");

var appData = {
    moneyData: money,
    timeData: time,
    expenses: {},
    optionalExpenses: "",
    income: [],
    savings: false
}

let expenses = new Object;

expenses.st1 = prompt("Введите обязательную статью расходов в этом месяце");
expenses.cash1 = prompt("Во сколько обойдется?");

expenses.st2 = prompt("Введите обязательную статью расходов в этом месяце");
expenses.cash2 = prompt("Во сколько обойдется?");

alert(Number(expenses.cash1) + Number(expenses.cash2));