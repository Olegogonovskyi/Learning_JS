// - Создать произвольный елемент с id = text.
//     Используя JavaScript, сделайте так,
//     чтобы при клике на кнопку исчезал элемент с id="text".

// Создайте кнопку, при клике на которую, она будет скрывать сама себя
let divtext = document.getElementById('text');
divtext.onclick = function () {
divtext.style.display = 'none'
};
// створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити
// вік чи меньше він ніж 18, та повідомити про це користувача
let formone = document.getElementsByTagName('form')[0];
formone.onsubmit = function (e) {
    e.preventDefault();
    if (e.target.Вік.value < 18) {
        formone.style.display = 'none';
        console.log('ти ще замалий')
    } else {
        console.log('Молодець, можеш проходити')
    }
};
// - Создайте меню, которое раскрывается/сворачивается при клике


// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.

