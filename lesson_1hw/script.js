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
    savings: true,

    insideAppData: function () {
        console.log("Наша программа включает в себя данные: ");
        for (let key in appData) {
            console.log(key)
        }
    },

    chooseExpenses: function () {
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
                i = i - 1;
            }
        }
    },

    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budjet / 30).toFixed(1);
        alert("Ежедневный бюджет: " + appData.moneyPerDay);

        appData.dayIncome = Number(appData.monthIncome / 30).toFixed(1);
        alert("Доход в день с Вашего депозита: " + appData.dayIncome + " руб.");

        appData.moneyPerDayAndIncome = (Number(appData.dayIncome) + Number(appData.moneyPerDay)).toFixed(1);
        alert("Дневной бюджет: " + appData.moneyPerDayAndIncome + " руб.");
    },

    detectLevel: function () {
        if (appData.moneyPerDay < 100) {
            alert("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            alert("Средний уровень достатка");
        } else if (appData.moneyPerDay > 2000) {
            alert("Высокий уровень достатка");
        } else {
            alert("Произошла ошибка");
        }
    },

    checkSavings: function () {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");

            appData.monthIncome = (save / 100 / 12 * percent).toFixed(1);
            alert("Доход в месяц с Вашего депозита: " + appData.monthIncome + " руб.");
        }
    },

    chooseOptExpenses: function () {
        for (let i = 1; i < 3; i++) {
            let opt = prompt("Статья необязательных расходов?", "");
            appData.optionalExpenses[i] = opt;
        }
    },

    chooseIncome: function () {
        for (let i = 0; i < 1; i++) {
            let items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", "");
            if (typeof (items) === 'string' &&
                items != '' &&
                (typeof (items) != null)) {

                appData.income = items.split(', ');
                appData.income.push(prompt('Может что-то еще?', ""));
                appData.income.sort();
                console.log("Способы доп. заработка: ");
                appData.income.forEach(function (item, j, arr) {

                    console.log((j + 1) + ": " + item)
                })
            } else {
                i = i - 1;
            }
        }
    }
}