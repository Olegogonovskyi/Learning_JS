// // - створити функцію яка обчислює та повертає площу
// // прямокутника зі сторонами а і б
//
// function PentArea (a,b) {
//     return a*b;
// }
// console.log(PentArea(10,20));

// // - створити функцію яка обчислює та повертає площу кола з радіусом r
// function circleArea (r) {
//     return Math.PI*Math.pow(r,2);
// }
// console.log(circleArea(10))

// // - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function cylinderArea (h,r) {
//     return 2*Math.PI*Math.pow(r,2) + 2*Math.PI*r*h;
// }
// console.log(cylinderArea(10,5));

// // створити функцію яка приймає масив та виводить кожен його елемент
// function arrLog () {
//     for (let i = 0; i < arguments.length; i++) {
//         const argument = arguments[i];
//         console.log(argument)
//     }
// }
// arrLog(30, 12, 'dddd', true)

// // - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function textWrite (txt) {
//     document.write(`<p> ${txt} </p>`)
// }
// textWrite('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, aperiam architecto consectetur consequatur delectus deleniti dolor dolorem dolores dolorum expedita ipsum laborum libero magni, molestias nesciunt numquam, porro possimus quis quos reiciendis rem sequi tempore vel veniam vero. Magnam, perspiciatis.')

// // - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function createUlLi(item) {
//     document.write(`<ul>`)
//     document.write(`<li> ${item} </li>`)
//     document.write(`<li> ${item} </li>`)
//     document.write(`<li> ${item} </li>`)
//     document.write(`</ul>`)
// }
// createUlLi('armstrong');
//
// // - створити функцію яка створює ul з трьома елементами li.
// //     Текст li задати через аргумент всім однаковий.
// //     Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function createUlLiCount (count, item) {
//     document.write(`<ul>`);
//     for (let i = 0; i < count; i++) {
//        document.write(`<li> ${item} </li>`)
//     }
//     document.write(`</ul>`)
// }
// createUlLiCount(10, 'Lorem ipsum dolor.');

// // - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// function arrList() {
//         document.write(`<ul>`);
//     for (let i = 0; i < arguments.length; i++) {
//         const argument = arguments[i];
//         document.write(`<li> ${argument} </li>`)
//     }
//     document.write(`</ul>`)
// }
// arrList(1,34,-67, true, 'lorem', false);

// - створити функцію яка приймає масив
// об'єктів з наступними полями id,name,age , ' +
// 'та виводить їх в документ. Для кожного об'єкту окремий блок.

















