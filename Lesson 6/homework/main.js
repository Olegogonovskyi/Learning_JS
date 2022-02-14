// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

let somestring0 = 'hello world'
let strimgLong = (strng) => strng.length;
console.log(strimgLong(somestring0));

let somestring1 = 'lorem ipsum'
document.write(strimgLong(somestring1));

let somestring2 = 'avascript is cool'
alert(strimgLong(somestring2));

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

console.log(somestring0.toUpperCase());
console.log(somestring1.toUpperCase());
console.log(somestring2.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

let somestring3 = 'hello world';
console.log(somestring3.toLowerCase());
let somestring4 = 'LOREM IPSUM';
console.log(somestring4.toLowerCase());
let somestring5 = 'JAVASCRIPT IS COOL';
console.log(somestring5.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let dertystr = ' dirty string   ';
console.log(dertystr.trim());

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']
let arr =  (str) => {
    return str.split(' ');
}
let str = 'Каждый охотник желает знать';
//     document.write(arr(str));
//
// - Напишіть функцію delete_characters(str, length),
//     яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый

let str = 'Каждый охотник желает знать';
let delete_characters = (str, length) => str.substring(0, length);
document.writeln(delete_characters(str, 7));

// - Напишіть функцію insert_dash(str),
//     яка приймає рядок str як аргумент і вставляє тире (-) між словами.
//     При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
//
let str = "HTML JavaScript PHP";
let insert_dash = (str) => {
    return str.replaceAll(' ', '-').toUpperCase()
};
document.writeln(insert_dash(str));

// - Напишіть функцію, яка приймає рядок як аргумент
// і перетворює регістр першого символу рядка
// з нижнього регістру у верхній.
//
str = 'мама мила раму'
let charA = (str) => {
    return str.charAt(0).toUpperCase().concat(str.slice(1))
};
document.write(charA(str));

- Напишіть функцію capitalize(str), яка повертає рядок,
    у якому кожне слово починається з великої літери.

strsix = 'мене звати бонд, джеймс бонд' //str.charAt(0).toUpperCase().concat(str.slice(1))
// let capitalize = (str) => {
//    return str.map(item)
// };
//
// document.write(capitalize(strsix));

strsix = 'мене звати бонд, джеймс бонд'
let capitalize = (str) => {
    return str.split(' ').map(item => { return item.charAt(0).toUpperCase().concat(item.slice(1))}).join(' ');
};

document.write(capitalize(strsix));









