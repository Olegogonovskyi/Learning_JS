// Напишіть код,  котрий :
// -- отримує текст з параграфа з id "content"
// -- отримує текст з блоку з id "rules"
// -- замініть текст параграфа з id 'content' на будь-який інший
// -- замініть текст параграфа з id 'rules' на будь-який інший
// -- змініть кожному елементу колір фону на червоний
// -- змініть кожному елементу колір тексту на синій
// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
// -- поміняти колір тексту у всіх елементів fc_rules на червоний

let idcontent = document.getElementById('content');
console.log(idcontent.innerText);
idcontent.innerText = 'мама мила раму';
console.log(idcontent.innerText);

let idrules = document.getElementById('rules');
console.log(idrules.innerText);
idrules.innerText = 'правила існують для того, щоб їх порушувати';
console.log(idrules.innerText);

let changecolor = document.body
changecolor.style.background = 'red'
changecolor.style.color = 'blue'

let stringrules = document.getElementById('rules');
console.log(stringrules.classList.value)

let classelemfcrul = document.getElementsByClassName('fc_rules');
for (const classelemfcrulElement of classelemfcrul) {
    classelemfcrulElement.style.color = 'red'
}