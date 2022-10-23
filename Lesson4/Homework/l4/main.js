// function square(a,b) {
//     return a*b;
// }
let square = (a,b) => {return a*b};
// function circle(r) {
//     return Math.PI*Math.pow(r,2)
// }
let circle = (r) => { return Math.PI*Math.pow(r,2)};

let arrtex = ['Oleg', 'loves', 'Olena']
function arrwritter(arr) {
    for (let arrElement of arr) {
        document.write(`${arrElement} `)
    }
}
function parwritter(txt) {
    document.write(`<p>${txt} </p>`)
}
function ulliwritterf(txt) {
    document.write(`<ul>`)
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${txt}</li>`)
    }
    document.write(`</ul>`)
}
function ulliwritter(txt, x) {
    document.write(`<ul>`)
    for (let i = 0; i < x; i++) {
        document.write(`<li>${txt}</li>`)
    }
    document.write(`</ul>`)
}
function arrwr() {
    document.write(`<ul>`);
    for (let i = 0; i < arguments.length; i++) {
        const argument = arguments[i];
        document.write(`<li>${argument}</li>`)
    }
    document.write(`</ul>`);
}
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];
function objWritter(obj) {
    for (let objElement of obj) {
        document.write(`<div> ${objElement.id}: ${objElement.name} - age is ${objElement.age} </div>`)
    }
}
function bigger(c,d) {
    if (c>d) {
        document.write(`Bigger number ${c}`)
    } else if (c === d) {
        document.write(`There are no bigger number`)
    } else {
        document.write(`Bigger number ${d}`)
    }
}
function counterer(arr) {
let x = 0;
    for (let i = 0; i < arr.length; i++) {
        const arrElement = arr[i];
        x = x+arrElement
    }
    document.write(`<div> Sum is ${x} </div>`);
}

function endarr(arr) {
    let z = 0
    let newarr = []

    for (let i = arr.length-1; i >= 0; i--) {
        let arrElement = arr[i];
        newarr[z] = arrElement
        z=z+1


    }
    document.write(newarr)
}

document.write(`<div>${square(10,12)}</div>`)
document.write(`<div>${circle(15)}</div>`)
arrwritter(arrtex)
parwritter(`Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab aperiam asperiores atque corporis doloremque dolorum earum facere, hic inventore ipsum nihil nobis nulla optio placeat quam repellat sequi sint tempora voluptatum? Adipisci amet assumenda beatae consequuntur deserunt, iusto, natus officiis, porro praesentium quisquam recusandae repellendus! Aliquam debitis deleniti doloremque, ducimus ea eaque esse et ex explicabo ipsam iusto laudantium molestiae nemo nobis placeat quae quis ratione, tempora vel vitae. Aliquid aut nemo suscipit? Aperiam deserunt dolorem ducimus earum iusto magni maxime praesentium quisquam sit veritatis! Accusamus ad assumenda autem enim, esse eum expedita modi nihil nostrum qui, temporibus voluptates!`)
ulliwritterf(`Lorem ipsum dolor sit amet.`)
ulliwritter(`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, suscipit?`, 10)
arrwr(54,-56, true, 10000, `fingers`, true)
objWritter(usersWithId)
bigger(186363632, 7373);
let arrcoun = [5623,111, 362, 1.77589, -4562, 36296, -462424374, 1127745353]
counterer(arrcoun)
endarr(arrcoun)

