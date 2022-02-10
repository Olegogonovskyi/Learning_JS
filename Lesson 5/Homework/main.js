// // - створити функцію яка обчислює та повертає площу прямокутника висотою
// let PentArea = (a,b) => {
//     return (a*b)
// }
// console.log(PentArea(5,5))

// // - створити функцію яка обчислює та повертає площу кола
// let circleArea = (r) => {
//     return (Math.PI*Math.pow(r,2))
// }
// console.log(circleArea(10))
//
// // створити функцію яка обчислює та повертає площу циліндру
// let cylinderArea = (h,r) => {
//    return (2*Math.PI*Math.pow(r,2) + 2*Math.PI*r*h)
// }
//     console.log(cylinderArea(10,5));
// // - створити функцію яка приймає масив та виводить кожен його елемент
// let ar =[30, 12, 'dddd', true];
//
//     let arrLog = (array) => {
//     for (const arrayElement of array) {
//         console.log(arrayElement)
//     }
// }
// arrLog(ar);

// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент
// let textWrite = (txt) => (document.write(`<p> ${txt} </p>`))
// textWrite('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, laboriosam modi quas similique tempore voluptatum. At eveniet sunt vel vitae.')

// // створити функцію яка  створює ul з трьома елементами li.
// //     Текст li задати через аргумент всім однаковий
//
// let createUlLiwithFn = (item) => {
//         document.write(`<ul>`)
//         document.write(`<li> ${item} </li>`)
//         document.write(`<li> ${item} </li>`)
//         document.write(`<li> ${item} </li>`)
//         document.write(`</ul>`)
//     }
//
//     createUlLiwithFn('armstrong');

// // - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// //     Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
//
//
// let createUlLiCount = (count, item) => {
//     document.write(`<ul>`);
//     for (let i = 0; i < count; i++) {
//         document.write(`<li> ${item} </li>`)
//     }
//     document.write(`</ul>`)
// }
// createUlLiCount(10, 'Lorem ipsum dolor.');

// // - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві),
// //     та будує для них список
//
// let arrList = (param) => {
//     document.write(`<ul>`)
//     for (let i = 0; i < param.length; i++) {
//         document.write(`<li> ${param[i]} </li>`)
//     }
//     document.write(`</ul>`)
// }
// arrList ([1,34,-67, true, 'lorem', false]);

// // - створити функцію яка приймає масив об'єктів з ' +
// // 'наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
//
// let arrLogConsol = (array) => {
//     for (const arrayElement of array) {
//         document.write(`<div> ${arrayElement.id} ${arrayElement.name} ${arrayElement.age} </div>`)
//     }
//
// }
//
// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false}
// ];
// arrLogConsol(usersWithId);