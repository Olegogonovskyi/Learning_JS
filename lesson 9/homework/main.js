
// Все робити за допомоги js.
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

let divel= document.createElement('div');
divel.classList.add('wrap','collapse','alpha', 'beta');
divel.innerText = "Приймеш синю пігулку — і казці кінець. Ти прокинешся в своєму ліжку і повіриш, що це був сон. " +
    "Приймеш червону пігулку — увійдеш у країну чудес. Я покажу тобі, чи глибока кроляча нора.";
divel.style.background = 'grey';
divel.style.color = 'green';
divel.style.fontSize = '30px';
document.body.append(divel);

let divelclone = divel.cloneNode(divel);
document.body.append(divelclone);

// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву
// створює li та додає його до блоку .menu
// Завдання робити через цикли.

let arr = ['Main','Products','About us','Contacts'];

let arrapend = (arr) => {
    let menuclasses = document.getElementsByClassName('menu')
    let menuclas = menuclasses[0]
    for (const string of arr) {
        let arrelement = document.createElement('li')
        arrelement.innerText = 'string'
        menuclas.append(arrelement)
    }
}
console.log(arrapend(arr))
