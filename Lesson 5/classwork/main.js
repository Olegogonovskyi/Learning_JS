// - Дано натуральное число n. Выведите все числа от 1 до n.
let n = (argument) => {
    for (let i = 1; i <= argument; i++) {
        document.write(`${i}, `)
            }
}
n(100);

// - Даны два целых числа A и В .
//     Выведите все числа от A до B включительно, в порядке возрастания,
//     если A < B, или в порядке убывания в противном случае.
let wtf = (a,b) => {
    if (a<b) {
        for (let i = a; i <= b; i++) {
            document.write(`${i}, `)

        }
    } else if (a>b) {
        for (let i = a; i >= b; i--) {
            document.write(`${i}, `)

        }
    }
}
wtf(100,200);

// -   функція Приймає масив та число "i", та міняє місцями об`єкт
// який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
//
 let wtf2 = (arr, i) => {
     let a = arr[i];
     arr[i] = arr[i+1];
    arr[i+1] = a
     document.write(arr)
 }

wtf2([9,8,0,4], 0)
wtf2([9,8,0,4], 1)
wtf2([9,8,0,4], 2)



















