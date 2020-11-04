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



function retVar() {
    let num = 50;
    return num;
}

let anotherNum = retVar();
console.log(anotherNum);

let str = "Test";
console.log(str.toUpperCase());
console.log(str.toLowerCase());

let twelve = "12.2px";

//console.log(Math.round(twelve));

console.log(parseInt(twelve));
console.log(parseFloat(twelve));

