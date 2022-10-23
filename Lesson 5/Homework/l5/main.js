arr_serar = [7,10, -98880, 118, 17.98, 1665, 56, 9041.89754]
let serar = (arr) => {
    let sum = 0
    for (let arrElement of arr) {
        sum = arrElement+sum
    }
    return sum/arr.length
}
document.write(serar(arr_serar))

let wowfun = (arr) => {
    let min = arr[0];
    let max = arr[0];
    for (let arrElement of arr) {
        if (arrElement<=min) {
            min = arrElement
        } else if (arrElement>=max) {
            max = arrElement

        }
    }
    document.write(`<div>MIN ${min}</div>`)
    document.write(`<div>MAX ${max}</div>`)
}
wowfun(arr_serar)