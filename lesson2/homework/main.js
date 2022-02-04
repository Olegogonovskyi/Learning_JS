// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код,
// який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = Math.round(Math.random()*60);

if (time<15) {
    console.log(time, 'Перша частина години');
} else if (time<30 && time>=15) {
    console.log(time, 'Друга частина години');
} else if (time<45 && time>=30) {
    console.log(time, 'Третя частина години');
} else if (time<=60 && time>=45) {
    console.log(time, 'Четверта частина години');
}
else    {
    console.log(time, 'Шось ти напартачив');
}

// У змінній day дано якесь число від 1 до 31. Потрібно визначити,
//     у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = Math.ceil(Math.random()*31);

if (day<10) {
    console.log(day, 'Перша частина місяця');
} else if (day<20 && day>=10) {
    console.log(day, 'Друга частина місяця');
} else if (day<32 && day>=20) {
    console.log(day, 'Третя частина місяця');
}
else    {
    console.log(day, 'Шось ти напартачив');
}
//
// У нас є змінна test, якщо дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)

// if (confirm('???')) {
//     test = 'Правильно';
// } else {
//     test = 'Неправильно';
// }
// console.log(test);

let test = confirm('???') ? 'Правильно' : 'Неправильно'
console.log(test);

// Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
//     Перевірте  скрипт при a, що дорівнює 1, 0, -3

let a = prompt('введіть 1 або 0 або -3')
if (a !==0) {
    console.log('Вірно')
} else {
    console.log('Невірно')
}

// Скласти розклад на тиждень за домопоги switch.
//     Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.

let WhatDay = prompt('Номер дня тижня');
switch (WhatDay) {
    case '1':
        console.log('Навчатись');
        break;
    case '2':
        console.log('Працювати');
        break;
    case '3':
        console.log('Робити вигляд що працюю');
        break;
    case '4':
        console.log('Напитись');
        break;
    case '5':
        console.log('Будуняка');
        break;
    case '6':
        console.log('Вихідний');
        break;
    case '7':
        console.log('Блін, завтра на роботу');
        break;
    default:
        console.log('То в наші плани не входило');
}
// - Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.
let year = prompt('введіть рік');
let vys = (year % 4);
switch (vys) {
    case 0:
        console.log(year, 'високосний');
        break;
    default:
        console.log(year, 'не високосний');
}


// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!

let quest = prompt('Яка «офіційна» назва JavaScript?');
if (quest === 'ECMAScript') {
    console.log('Правильно');
    } else  {
    console.log('Не знаєте? ECMAScript!');
}























