// // - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// // створити пустий масив, наповнити його 10 об'єктами new User(....)

// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
// let arr = [];
// arr[0] = new User(0, 'Oleg', 'Ogon', 'ol@gmail.com', +380630311455);
// arr[1] = new User(10, 'Nata', 'Nitoy', 'olt@gmail.com', +380630311456);
// arr[2] = new User(32, 'Zlata', 'Pitoy', 'olzst@gmail.com', +380630311457);
// arr[3] = new User(3456, 'Ira', 'les', 'olsst@gmail.com', +380630311458);
// arr[4] = new User(44, 'Nadiya', 'Dores', 'olw3t@gmail.com', +380630871345);
// arr[5] = new User(535, 'Stepan', 'Maskiv', 'ol323t@gmail.com', +380630311465);
// arr[6] = new User(96, 'Olena', 'Paskiv', 'olt23e@gmail.com', +380630311444);
// arr[7] = new User(78, 'Ivan', 'Lask', 'olt233@gmail.com', +380630311423);
// arr[8] = new User(845, 'Bogdan', 'Merd', 'oew3lt@gmail.com', +380630311456);
// arr[9] = new User(954, 'Lesya', 'Perd', 'ol23t@gmail.com', +3806303114345);
//
// console.log(arr);
//
// // - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши
// // тільки об'єкти з парними id (filter)
//
//
// let newArr = arr.filter(function (item) {
//     if (item.id %2 === 0) {
//         return item
//     }
//     });
//
// console.log(newArr);
//
// // - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//
// let sortArr = arr.sort((a, b) => a.id-b.id)
// console.log(sortArr)
//
//
// // - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// // створити пустий масив, наповнити його 10 об'єктами Client
//
//
// class Client {
//
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
//
// let clasArr;
// clasArr = [
//     new Client(2627, 'lesko', 'Re', 'psd@ukr.net', 911, ['water', 'ice - cream', 'bread', 'coffee']),
//     new Client(263227, 'leska', 'Lolip', 'psd@ukr.net', 112, ['milk', 'coffee']),
//     new Client(27, 'Marta', 'Masla', 'wwpsd@ukr.net', 113, ['bread']),
//     new Client(7, 'Bianka', 'Kasla', 'psdye7@ukr.net', 121, ['coffee', 'beer', 'candys']),
//     new Client(217, 'Piter', 'Faska', 'ousd@ukr.net', 931, ['beer', 'hotdog']),
//     new Client(26, 'Bonie', 'Wenka', 'ir7d@ukr.net', 912, ['pizza', 'beer']),
//     new Client(33, 'Adic', 'Popil', 'imd6@ukr.net', 913, ['milk', 'chocolate', 'flowers', 'candys']),
//     new Client(98, 'Lenka', 'Kiva', 'pop9@ukr.net', 914, ['vegetables', 'ice - cream']),
//     new Client(74, 'Manks', 'Mycyk', 'po9@ukr.net', 915, ['bread']),
//     new Client(988, 'Turbo', 'Orew', 'ell3@ukr.net', 961, ['flowers', 'candys'])
// ];
// // Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//
// console.log(clasArr.sort((a, b) => a.order.length-b.order.length))

// classwork
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, ' +
// 'з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
function Fncarone (model, brand, year, maxspeed, engine) {
    this.model = model;
    this.brand = brand;
    this.year = year;
    this.maxspeed = maxspeed;
    this.engine = engine;
    this.drive = function () {
       console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`)
    }
    this.info = function () {
        console.log(`model - ${this.model}; brand - ${this.brand}; year - ${this.year}; maxspeed - ${this.maxspeed}; engine - ${this.engine};`)
    }
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxspeed = newSpeed;
        return this.maxspeed
    }
    this.changeYear = function (newValue) {
        this.year = newValue;
        return this.year
    }
    this.addDriver = function (driver) {
        this.driver = driver
    }

    }
    let carone = new Fncarone('Tank', 'Panzer', 1939, 60, 1.0);
console.log(carone)
carone.drive();
carone.info();
carone.increaseMaxSpeed (70);
carone.changeYear (1945);
carone.addDriver ('Hanz Zelmer');
carone.drive();
carone.info();

    class Carclasstwo {
        constructor(model, brand, year, maxspeed, engine) {
            this.model = model;
            this.brand = brand;
            this.year = year;
            this.maxspeed = maxspeed;
            this.engine = engine;

        }
        drive () {
            console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`)
        };
        info ()
        {
            for (const argument of this) {
                console.log(`${argument} - ${this[argument]}`);
            }}
        increaseMaxSpeed (newSpeed) {
            this.maxspeed = newSpeed;
        };
        changeYear (newValue) {
            this.year = newValue;
        };
        addDriver (driver) {
            this.driver = driver;
        }
    }


let cartwo = new Carclasstwo('911', 'Porshe', 1967, 180, 3.0);
console.log(cartwo)
cartwo.drive;
cartwo.info;
cartwo.increaseMaxSpeed (300);
cartwo.changeYear (1980);
cartwo.addDriver ({name: 'Bobyk'}














