// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

let arr1 = [1,2,3,4,5];
for (let item1 of arr1) {
    console.log(item1)
}
let arr2 = ['Не','роби','мені','нерви','!'];
for (let item2 of arr2) {
    console.log(item2)
}

let arr3 = ['мама', 'мила', 'раму', 10, 'або', 20, 'раз', true];
for (let arr3Element of arr3) {
    console.log(arr3Element)
}

// Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

let arr4 = [];
arr4[0] = 'Matrix';
arr4[1] = 'Neo';
arr4[2] = 234;
arr4[3] = true;

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.


for ( i=0; i<=10; i++ ) {
    document.write( `<div>якийсь там текст 10 разів</div>` )
}

for (i=0; i<=10; i++) {
    document.write( `<div> якийсь там текст ${i} разів </div>` );
}

for (i=0; i<=20; i++) {
    document.write(`<h1>Якийсь там текст 20 разів</h1>` )
}

i=0;
while   (i<=20) {
    document.write(`<h1>Якийсь там текст ${i} разів</h1>` )
    i++
    }

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами)
// через звернення до конкретних індексів.
//     Вивести в консоль всі його елементи в циклі.

let arr5 =[];
arr5[0] = '1'
arr5[1] = '2'
arr5[2] = '3'
arr5[3] = 'red'
arr5[4] = 'alert'
arr5[5] = 'is'
arr5[6] = 'supper'
arr5[7] = 'game'
arr5[8] = true
arr5[9] = false

for (let i = 0; i < arr4.length; i++) {
    let arr4Element = arr4[i];
    console.log(arr4Element);

}

// Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (i=0; i<=10; i++) {
document.write(i)
    console.log(i)
}
// Створити цикл for на 100 ітерацій з кроком 1.
// Вивести поточний номер кроку через console.log та document.write

for (i=0; i<=100; i++) {
document.write(i)
    console.log(i)
}
// Створити цикл for на 100 ітерацій з кроком 2.
// Вивести поточний номер кроку через console.log та document.write

for (i=0; i<=100; i=i+2) {
document.write(i)
    console.log(i)
}

// Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (i=0; i<=100; i++) {
    if ( i % 2 ===0 ) {
        document.write(i);
        console.log(i);
    }
}

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (i=0; i<=100; i++) {
    if ( i % 2 !==0 ) {
        document.write(i);
        console.log(i);
    }
}










