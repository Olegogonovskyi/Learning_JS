// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
function minOfthreeNum (a,b,c) {
    let min;
    (a<b && a<c) ? min=a : (b<a && b<c) ? min=b : (c<a && c<b) ? min=c : min=0;
    return min;
}

console.log(minOfthreeNum(37373, 541, 652))

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
function maxOfthreeNum (a,b,c) {
    let max;
    (a>b && a>c) ? max=a : (b>a && b>c) ? max=b : (c>a && c>b) ? max=c : max=0;
    return max;
}


console.log(maxOfthreeNum(-10, 10, 110))

// - створити функцію яка повертає найбільше число з масиву
let newArr = [];
newArr[0] = Math.floor(Math.random()*1000);
newArr[1] = Math.floor(Math.random()*1000);
newArr[2] = Math.floor(Math.random()*1000);
newArr[3] = Math.floor(Math.random()*1000);
newArr[4] = Math.floor(Math.random()*1000);
newArr[5] = Math.floor(Math.random()*1000);
newArr[6] = Math.floor(Math.random()*1000);
newArr[7] = Math.floor(Math.random()*1000);
newArr[8] = Math.floor(Math.random()*1000);
newArr[9] = Math.floor(Math.random()*1000);

function maxNum (arr) {
    let max=0;
    for (const arrElement of arr) {
        if (max < arrElement) {
            max = arrElement
        }
    }
    return max
}
console.log(newArr);
console.log(maxNum(newArr));

// - створити функцію яка повертає найменьше число з масиву

function minNum (arr) {
    let min= arr[0];
    for (const arrElement of arr) {
        if (min > arrElement) {
            min = arrElement
        }
    }
    return min
}
console.log(newArr);
console.log(minNum(newArr));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
function sumArr (arr) {
        let sum= 0;
    for (const arrElement of arr) {
        sum =arrElement + sum
    }
    return sum
}
console.log(newArr);
console.log(sumArr(newArr));
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

function averageArr (arr) {
        let sum= 0;
    for (const arrElement of arr) {
        sum =arrElement + sum
    }
    return sum/arr.length
}
console.log(newArr);
console.log(averageArr(newArr));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше,
//     а виводить найбільше (Math використовувати заборонено);

function dyvna () {
    let min = arguments[0];
    let max = arguments[0];
    for (const argument of arguments) {
        (min >= argument) ? min = argument : max = argument;
    }

    console.log(max);
    return min;
}
console.log( dyvna(69,90,80, 100, 234, 90000, -1333))

let min = dyvna(12,39,90) + 100;
console.log(min)

// - створити функцію яка заповнює масив рандомними числами



















