// // - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// // створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
let arr = [];
arr[0] = new User(0, 'Oleg', 'Ogon', 'ol@gmail.com', +380630311455);
arr[1] = new User(10, 'Nata', 'Nitoy', 'olt@gmail.com', +380630311456);
arr[2] = new User(32, 'Zlata', 'Pitoy', 'olzst@gmail.com', +380630311457);
arr[3] = new User(3456, 'Ira', 'les', 'olsst@gmail.com', +380630311458);
arr[4] = new User(44, 'Nadiya', 'Dores', 'olw3t@gmail.com', +380630871345);
arr[5] = new User(535, 'Stepan', 'Maskiv', 'ol323t@gmail.com', +380630311465);
arr[6] = new User(96, 'Olena', 'Paskiv', 'olt23e@gmail.com', +380630311444);
arr[7] = new User(78, 'Ivan', 'Lask', 'olt233@gmail.com', +380630311423);
arr[8] = new User(845, 'Bogdan', 'Merd', 'oew3lt@gmail.com', +380630311456);
arr[9] = new User(954, 'Lesya', 'Perd', 'ol23t@gmail.com', +3806303114345);

console.log(arr);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши
// тільки об'єкти з парними id (filter)


let newArr = arr.filter(function (item) {
    if (item.id %2 === 0) {
        return item
    }
    });

console.log(newArr);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let sortArr = arr.sort((a, b) => a.id-b.id)
console.log(sortArr)


// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client


class Client {

    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
};

let clasArr = [
    new Client(2627, 'lesko', 'bsko', 'psd@ukr.net', 911, [milk, bread, coffee]);
new Client(263227, 'lesko', 'bsko', 'psd@ukr.net', 911, [milk, bread, coffee]);
new Client(27, 'lesko', 'bsko', 'psd@ukr.net', 911, [milk, bread, coffee]);
new Client(7, 'lesko', 'bsko', 'psd@ukr.net', 911, [milk, bread, coffee]);
new Client(2627, 'lesko', 'bsko', 'psd@ukr.net', 911, [milk, bread, coffee]);
new Client(2627, 'lesko', 'bsko', 'psd@ukr.net', 911, [milk, bread, coffee]);
new Client(2627, 'lesko', 'bsko', 'psd@ukr.net', 911, [milk, bread, coffee]);
new Client(2627, 'lesko', 'bsko', 'psd@ukr.net', 911, [milk, bread, coffee]);
new Client(2627, 'lesko', 'bsko', 'psd@ukr.net', 911, [milk, bread, coffee]);
new Client(2627, 'lesko', 'bsko', 'psd@ukr.net', 911, [milk, bread, coffee]);
]






















