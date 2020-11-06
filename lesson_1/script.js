//"use strict";

//a = 5;
//console.log(a);

//var number = 5;
//var string = "Hello!";
//var sym = Symbol();
//var boolean = true;
//null; // не существует
//undefined; // значения нет
//var obj = {};

//console.log(4 / 0);
//console.log('string' * 4);

//let something;
//console.log(something);

//let person = {
//    name: "John",
//    age: 25,
//    isMarried: false
//};

//console.log(person.name);

//let arr = ['plum.png', 'orange.jpg', 'apple.bmp'];

//console.log(arr[0]);

////alert("Hello!");

////let answer = confirm("Are u sure?");

////console.log(answer);

////let answer = +prompt("Есть ли Вам 18?", "Да");

////console.log(typeof(answer));

////console.log("art" + " - object");

////console.log(4 + +" - object");



//let incr = 10,
//    decr = 10;

//console.log(incr++);
//console.log(decr--);

//console.log("2" === 2);

//let isChecked = true,
//    isClose = true,
//    isClyu = true;

//console.log(!isChecked || isClose);





////console.log(typeof(String(false+"")));

////console.log("ww" + 5);
////console.log('https://vk.com/catalog/' + 5);

//////to Number

////console.log(typeof(Number("5")));

////console.log(typeof(5 + '5'));

////console.log(typeof(parseInt('15px', 10)));

////let ans = +prompt("Hello?", '');

////// 0, '', null, undefined, Nan

////let switcher = null;

////if (switcher) {
////   console.log("working..");
////}

////switcher = 1;

////if (switcher) {
////   console.log("working..");
////}


////// 2)
////console.log(typeof(Boolean("5")));

////// 3)
//console.log(typeof(!!"5"));

////let num = 50;

//////while (num < 55) {
//////    console.log(num);
//////    num++
//////}

////do {
////    console.log(num);
////    num++
////}

////while (num < 55)

//for (let i = 1; i < 8; i++) {
//    if (i == 6) {
//        continue;
//    }
//    console.log(i);
//}

//let num = 20;

//function showFirstMessage(text) {
//    alert(text);

//    console.log(num);
//}

//showFirstMessage("Hello World");
//console.log(num);

//let calc = function calc(a,b) {
//    return (a + b);
//}

//let calc = (a,b) => a + b

//console.log(calc(3,4));
//console.log(calc(2,2));



//function retVar() {
//    let num = 50;
//    return num;
//}

//let anotherNum = retVar();
//console.log(anotherNum);

//let str = "Test";
//console.log(str.toUpperCase());
//console.log(str.toLowerCase());

//let twelve = "12.2px";

////console.log(Math.round(twelve));

//console.log(parseInt(twelve));
//console.log(parseFloat(twelve));



/* Callback функция - создается для того чтобы быть уверенным, что функции будут выполняться в требуемом порядке */ 

//function learnJS(lang, callback) {
//    console.log("Я учу" + lang);
//    callback();
//}

//learnJS("JavaScript", function() {
//    console.log("Я прошел третий урок")
//})

//let options = {
//    width: 1024,
//    height: 1034,
//    name: "test"
//};

//console.log(options.name);
//options.bool = false;
//options.colors = {
//    border: "black",
//    bg: "red"
//};

//delete options.bool;

//console.log(options);


//for (let key in options) {
//    console.log('Свойство ' + key + ' имеет значение ' + options[key])
//}

//console.log(Object.keys(options).length);



//let arr = ['first', 2, 3, 'fourth', 5];


////for (let i = 0; i < arr.length; i++) {
////    console.log(arr[i])
////}

//arr.forEach(function(item, i, mass) {
//    console.log(i + ': ' + item + ' (массив: ' + mass + ')');
//})

//console.log(arr);

//let mass = [1,3,4,6,7];

//for (let key of mass) {
//    console.log(key)
//}



//let ans = prompt("", ""),
//    arr = [];

//arr = ans.split(',');
//console.log(arr);


//let arr = ['aweaqwe', 'asdads', 'asdasd', 'asdad'],
//    i = arr.join(', ');

//console.log(i);


//let arr = [1, 15, 4],
//    i = arr.sort(compareNum);

//    function compareNum(a,b) {
//        return a-b;
//    }

//console.log(arr);

//let soldier = {
//    health: 400,
//    armor: 100
//};

//let john = {
//    health: 100
//};

//john.__proto__ = soldier;

//console.log(john);
//console.log(john.armor);


//let box = document.getElementById("box"),
//    btn = document.getElementsByTagName("button"),
//    circle = document.getElementsByClassName("circle"),
//    heart = document.querySelectorAll(".heart"),
//    oneHeart = document.querySelector(".selector"),
//    wrapper = document.querySelector('.wrapper');

//box.style.backgroundColor = 'blue';
//btn[1].style.borderRadius = '100%';

//circle[0].style.backgroundColor = 'red';
//circle[1].style.backgroundColor = 'yellow';
//circle[2].style.backgroundColor = 'green';

//for (let i = 0; i < heart.length; i++) {
//    heart[i].style.backgroundColor = 'blue';
//}

// callback функция - функция внутри функции, для соблюдения стройгой последовательности

//heart.forEach(function(item, i, arr) { 
//    item.style.backgroundColor = 'green';
//});

//let div = document.createElement('div'),
//    text = document.createTextNode('Тут был я');

//div.classList.add('black');

//div.innerHTML = '<h1>Hello World!</h1>';
//div.textContent = 'Hello World!';


//document.body.appendChild(div);
//wrapper.appendChild(div);
//document.body.insertBefore(div, circle[0]);
//document.body.removeChild(circle[1]);
//wrapper.removeChild(heart[1]);

//document.body.replaceChild(btn[1], circle[1]);

//console.log(div);

//let btn = document.querySelectorAll('button'),
//    wrap = document.querySelector('.wrapper'),
//    link = document.querySelector('a');

//btn[0].onclick = function () {
//    alert('Вы нажали первую кнопку');
//};

//btn[0].onclick = function () {
//    alert('Вы опять нажали первую кнопку');
//};

//btn[0].addEventListener('click', function(event) {
//    let target = event.target;
//    target.style.display = 'none';
//    console.log('Произошло событие: ' + event.type + ' на элементе ' + event.target);
//});

//wrap.addEventListener('click', function() {
//    console.log('Произошло событие: ' + event.type + ' на элементе ' + event.target);
//});


//link.addEventListener('click', function(event) {
//    event.preventDefault();
//    console.log('Произошло событие: ' + event.type + ' на элементе ' + event.target);
//});

//btn.forEach(function(item) {
//    item.addEventListener('mouseleave', function(event) {
//        console.log("Вышли!");
//    })
//});

//btn[0].addEventListener('click', function() {
//    alert('Вы опять нажали первую кнопку');
//});

//btn[0].addEventListener('mouseenter', function() {
//    alert('Вы навели на первую кнопку');
//})

/* Стрелочная функция */ 

//let sum = (a, b) => a + b;

/* Более короткая форма для:

let sum = function(a, b) {
  return a + b;
};
*/

//alert( sum(1, 2) );

// touchstart
// touchmove
// touchend
// touchenter
// touchleave
// touchcancel

window.addEventListener('DOMContentLoaded', function() {
    let box = document.querySelector('.box');

    //box.addEventListener('touchstart', function(e) {
    //    e.preventDefault();
    //    console.log(e.target);
    //    console.log(e.touches[0].target);
    //    console.log(e.changedTouches);
    //    console.log(e.targetTouches);

    //});

    box.addEventListener('touchmove', function(e) {
        e.preventDefault();
        console.log('Red box: ' + e.touches[0].pageX);
    });

    //box.addEventListener('touchend', function(e) {
    //    e.preventDefault();
    //    console.log('Red box: touchend');
    //});

    //new RegExp('pattern', 'flags');
    ///pattern/



    //console.log(ans.search(reg));
    //console.log(ans.match(reg));
    //console.log(reg.test(ans));

    // i - неважен регистр
    // g - глобальные
    // m - многострочность

    // \d - число \D - не число
    // \w W слово/не слово
    // \s S пробел / не пробел

    //let pass = prompt('Введите пароль');
    //console.log(pass.replace(/./g, "*"));
    //alert('12-45-67'.replace(/-/g, ':'));

    //let ans = prompt("Введите число");
    //let reg = /\d/g;
    //console.log(ans.match(reg));

    let str = 'My name is R2D2';
    console.log(str.match(/\w\d\w\d/i/));
});