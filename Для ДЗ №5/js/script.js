/* Меняем li местами */

let li = document.createElement("li");
let munuItem = document.querySelectorAll(".menu-item");

li.textContent = "Пятый элемент";
li.classList.add("menu-item");
console.log(li);

let menu = document.querySelector(".menu");
menu.appendChild(li);

menu.insertBefore(munuItem[2], munuItem[1]);

/* Замена картинки */

let img = document.

/* Меняем заголовок */

let titleChange = document.getElementById("title");
titleChange.textContent = "Мы продаем только подлинуую технику Apple";



/* Удаляем рекламу со страницы */

let advRemove = document.querySelector(".adv"),
    columnRemove = document.querySelectorAll(".column");
    console.log(advRemove);
    console.log(columnRemove);
columnRemove[1].removeChild(advRemove);


/* Спросить у пользователя отношение к технике apple и записать ответ в блок на странице с id "prompt" */

let relationApple = prompt("Какое Ваше отношение к технике Apple ?", ""),
    textRelationApple = document.getElementById("prompt");

textRelationApple.textContent = relationApple;
console.log(textRelationApple);



