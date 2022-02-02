
// Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log , alert, document.writelet hel ='hello';
let hel = 'hello'
{let xxx = hel
console.log(xxx);
alert(xxx);
document.write(xxx);}

let o ='owu';
{let xxx = o
console.log(xxx);
alert(xxx);
document.write(xxx);}

let c ='com';
{
    let xxx = c
    console.log(xxx);
    alert(xxx);
    document.write(xxx);
}

let u ='ua';
{
    let xxx = u
    console.log(xxx);
    alert(xxx);
    document.write(xxx);
}

let n1 = 1;
{
    let xxx = n1
    console.log(xxx);
    alert(xxx);
    document.write(xxx);
}

let n10 =10;
{
    let xxx = n10
    console.log(xxx);
    alert(xxx);
    document.write(xxx);
}

let nnn =-999;
{
    let xxx = nnn
    console.log(xxx);
    alert(xxx);
    document.write(xxx);
}

let nn =123;
{
    let xxx = nn
    console.log(xxx);
    alert(xxx);
    document.write(xxx);
}

let pi =3.14;
{
    let xxx = pi
    console.log(xxx);
    alert(xxx);
    document.write(xxx);
}

let notpi =2.7;
{
    let xxx = notpi
    console.log(xxx);
    alert(xxx);
    document.write(xxx);
}

let ven =16;
{
    let xxx = ven
    console.log(xxx);
    alert(xxx);
    document.write(xxx);
}

let rig =true;
{
    let xxx = rig
    console.log(xxx);
    alert(xxx);
    document.write(xxx);
}

let nrig =false;
{
    let xxx = nrig
    console.log(xxx);
    alert(xxx);
    document.write(xxx);
}

// Переприсвоїти кожній змінній з завдання значення на довільне.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write
hel ='bye';
{let xxx = hel
    console.log(xxx);
    alert(xxx);
    document.write(xxx);}

o ='oun';
{let xxx = o
    console.log(xxx);
    alert(xxx);
    document.write(xxx);}

c ='net';
{
    let xxx = c
    console.log(xxx);
    alert(xxx);
    document.write(xxx);
}

u ='uk';
{
    let xxx = u
    console.log(xxx);
    alert(xxx);
    document.write(xxx);
}

n1 = 2;
{
    let xxx = n1
    console.log(xxx);
    alert(xxx);
    document.write(xxx);
}

n10 =20;
{
    let xxx = n10
    console.log(xxx);
    alert(xxx);
    document.write(xxx);
}

nnn =-333;
{
    let xxx = nnn
    console.log(xxx);
    alert(xxx);
    document.write(xxx);
}

nn =321;
{
    let xxx = nn
    console.log(xxx);
    alert(xxx);
    document.write(xxx);
}

pi =4.13;
{
    let xxx = pi
    console.log(xxx);
    alert(xxx);
    document.write(xxx);
}

notpi =7.2;
{
    let xxx = notpi
    console.log(xxx);
    alert(xxx);
    document.write(xxx);
}

ven =30;
{
    let xxx = ven
    console.log(xxx);
    alert(xxx);
    document.write(xxx);
}

rig =false;
{
    let xxx = rig
    console.log(xxx);
    alert(xxx);
    document.write(xxx);
}

nrig =true;
{
    let xxx = nrig
    console.log(xxx);
    alert(xxx);
    document.write(xxx);
}

// Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person. (Не об'єкт)

let firstName = 'Oleg';
    let lastName ='Ogonovskyi'
let middleName = 'Yaroslavovych'
let person = firstName +' '+ lastName + ' ' + middleName;

console.log(`${firstName} ${lastName} ${middleName}`);
console.log(person)

// За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//     Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".



    firstName = prompt('тебе звати', firstName)
    middleName = prompt('по-батькові', middleName)
    let age = prompt('тобі', 31)
    alert(`Вітаю ${firstName} ${middleName}. Тобі ${age} років`)

// За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;

{
    let a = 100;
let b = '100';
let c = true;
console.log(typeof a)
console.log(typeof b)
console.log(typeof c)
}
//
// Визначити відповідний оператор в виразах що б вийшов відповідний результат.
//     В однакових виразах не використовувати однакові оператори!!!

// 5 ? 6 -> true
console.log(5<6)
// 5 ? 6 -> false
console.log(5>6)
// 5 ? 6 -> false
console.log(5 == 6)
// 5 ? 6 -> false
console.log(5 === 6)
// 10 ? 10 -> true
console.log(10 !== 6)
// 10 ? 10 -> true
console.log(10 == 10)
// 10 ? 10 -> false
console.log(10 < 10)
// 10 ? 10 -> false
console.log(10 > 10)
// 10 ? 10 -> false
console.log(10 != 10)
// 123 ? '123' -> false
console.log(123 < '123')
// 123 ? '123' -> true
console.log(123 == '123')

