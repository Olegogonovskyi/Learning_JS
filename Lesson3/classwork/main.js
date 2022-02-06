// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
let arr=[2,17,13,6,22,31,45,66,100,-18];
// // перебрати його циклом while
let i = 0;
while (i<=arr.length) {
    console.log(arr[i])
    i++
}
// // перебрати його циклом for

for (let number of arr) {
    console.log(number)
}
// перебрати циклом while та вивести  числа тільки з непарним індексом
let i = 0;
while (i<=arr.length) {
    if (i % 2 !== 0) {
    console.log(arr[i]) }
    i++
}
// // перебрати циклом for та вивести  числа тільки з непарним індексом
for (i=0; i<=arr.length; i++) {
    if (i % 2 !== 0) {
    console.log(arr[i])
    }
}
// // перебрати циклом while та вивести  числа тільки парні  значення
//
let i=0;
while (i<=arr.length) {
    if (arr[i] % 2 === 0) {
        console.log(arr[i])
    }
    i++
}
// // перебрати циклом for та вивести  числа тільки парні  значення
for (let number of arr) {
    if (number % 2 ===0) {
        console.log(number)
    }
}
// // замінити кожне число кратне 3 на слово "okten"

for (i=0; i<=arr.length; i++) {
    if (arr[i] % 3 === 0) {
    arr[i] = 'okten'
    }
}
console.log(arr)
// // 8. вивести масив в зворотньому порядку.
//
let arrReverse = arr.reverse()
console.log(arrReverse)

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

// // перебрати його циклом while
let i = 0;
while (i<=arrReverse.length) {
    console.log(arrReverse[i])
    i++
}
// // перебрати його циклом for

for (let number of arrReverse) {
    console.log(number)
}
// перебрати циклом while та вивести  числа тільки з непарним індексом
let i = 0;
while (i<=arrReverse.length) {
    if (i % 2 !== 0) {
    console.log(arrReverse[i]) }
    i++
}
// // перебрати циклом for та вивести  числа тільки з непарним індексом
for (i=0; i<=arrReverse.length; i++) {
    if (i % 2 !== 0) {
    console.log(arrReverse[i])
    }
}
// // перебрати циклом while та вивести  числа тільки парні  значення
//
let i=0;
while (i<=arrReverse.length) {
    if (arr[i] % 2 === 0) {
        console.log(arrReverse[i])
    }
    i++
}
// // перебрати циклом for та вивести  числа тільки парні  значення
for (let number of arrReverse) {
    if (number % 2 ===0) {
        console.log(number)
    }
}
// // замінити кожне число кратне 3 на слово "okten"
//
for (i=0; i<=arrReverse.length; i++) {
    if (arrReverse[i] % 3 === 0) {
    arrReverse[i] = 'okten'
    }

} console.log(arrReverse)















