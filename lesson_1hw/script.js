let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?");
    time = prompt("Введите дату", "YYYY-MM-DD");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?");
    }
}

start();

let appData = {
    budjet: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", "");
        b = prompt("Во сколько обойдется?", "");

        if (typeof (a) === 'string' &&
            (typeof (a) != null &&
                (typeof (b) != null &&
                    a != '' &&
                    b != '' &&
                    a.length < 50))) {
            console.log("done");
            appData.expenses[a] = b;
        } else {
            //вопрос заново
        }
    }
}

chooseExpenses();

appData.moneyPerDay = (appData.budjet / 30).toFixed(1);
alert("Ежедневный бюджет: " + appData.moneyPerDay);

function detectLevel() {
    if (appData.moneyPerDay < 100) {
        alert("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        alert("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
        alert("Высокий уровень достатка");
    } else {
        alert("Произошла ошибка");
    }
}

detectLevel();


function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");

        appData.monthIncome = (save / 100 / 12 * percent).toFixed(1);
        alert("Доход в месяц с Вашего депозита: " + appData.monthIncome + " руб.");
    }
}
checkSavings();



function detectDayBudget() {
    appData.dayIncome = Number(appData.monthIncome / 30).toFixed(1);
    alert("Доход в день с Вашего депозита: " + appData.dayIncome + " руб.");

    appData.moneyPerDayAndIncome = (Number(appData.dayIncome) + Number(appData.moneyPerDay)).toFixed(1);
    alert("Дневной бюджет: " + appData.moneyPerDayAndIncome + " руб.");
}

detectDayBudget();


function chooseOptExpenses() {
    appData.optionalExpenses = {
        1.: prompt("Статья необязательных расходов?", ""),
        2.: prompt("Статья необязательных расходов?", ""),
        3.: prompt("Статья необязательных расходов?", "")
    }
}

chooseOptExpenses();