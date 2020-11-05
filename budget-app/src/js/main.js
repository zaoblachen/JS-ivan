//·        Получить кнопку "Начать расчет" через id

let btnStart = document.getElementById("start");
console.log(btnStart);


//·        Получить все блоки в правой части программы через классы (которые имеют класс название-value, начиная с // и заканчивая //)

let budgetValue = document.querySelector(".budget-value"),
    daybudgetValue = document.querySelector(".daybudget-value"),
    levelValue = document.querySelector(".level-value"),
    expensesValue = document.querySelector(".expenses-value"),
    optionalexpensesValue = document.querySelector(".optionalexpenses-value"),
    incomeValue = document.querySelector(".income-value"),
    monthsavingsValue = document.querySelector(".monthsavings-value"),
    yearsavingsValue = document.querySelector(".yearsavings-value");

console.log(budgetValue);
console.log(daybudgetValue);
console.log(levelValue);
console.log(expensesValue);
console.log(optionalexpensesValue);
console.log(monthsavingsValue);
console.log(yearsavingsValue);


//·        Получить поля(input) c обязательными расходами через класс. (class=”expenses-item”)

let expensesItem = document.querySelectorAll(".expenses-item");
console.log(expensesItem);


//·        Получить кнопки “Утвердить” и “Рассчитать” через Tag, каждую в своей переменной. 

let expensesItemBtn = document.getElementsByTagName("button");
console.log(expensesItemBtn);

let optionalexpensesBtn = document.getElementsByTagName("button");
console.log(optionalexpensesBtn);

let countBudgetBtn = document.getElementsByTagName("button");
console.log(countBudgetBtn);

//·        Получить поля для ввода необязательных расходов (optionalexpenses-item) при помощи querySelectorAll

let optionalexpensesItem = document.querySelectorAll(".optionalexpenses-item");
console.log(optionalexpensesItem);

//·        Получить оставшиеся поля через querySelector (статьи возможного дохода, чекбокс, сумма, процент, год, месяц, день)

let chooseIncome = document.querySelector(".choose-income");
let checkSavings = document.querySelector(".checksavings");
let chooseSum = document.querySelector(".choose-sum");
let choosePercent = document.querySelector(".choose-percent");
let yearValue = document.querySelector(".year-value");
let monthValue = document.querySelector(".month-value");
let dayValue = document.querySelector(".day-value");


//3) Проверить, чтобы все работало и не было ошибок в консоли

//4) Добавить папку с уроком на свой GitHub

//Вопросы к этому заданию
//Как можно изменить размер шрифта элемента при помощи JS?