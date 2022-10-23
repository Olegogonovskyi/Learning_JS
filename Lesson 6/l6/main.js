let a = 'hello world';
let b = [1,67,4532,990]
let delete_characters = (sttr, lenf) => sttr.substr(0, lenf)
let coursesAndDurationArray = [
    {title: 'JavascriptComplex', mounthDuration: 5},
    {title: 'History', mounthDuration: 10},
    {title: 'Language', mounthDuration: 8},
    {title: 'HTML', mounthDuration: 15},
    {title: 'Black magick', mounthDuration: 12},
    {title: 'Cards Taro', mounthDuration: 11},
    {title: 'QA', mounthDuration: 3},
    {title: 'Frontend', mounthDuration: 1},
]

document.write(`Довжина рядка ${a.length}`)
document.write(`<div>Розбитий рядок ${a.split('')}<div>`)
document.write(`<div>поділено ${a.substr(1, 3)}<div>`)
document.write(`<div>поділено функцією ${delete_characters(a, 6)}<div>`)
document.write(`<div> заміна ${a.replaceAll()}<div>`)
document.write(`<div>charAt(1) ${a.charAt(0)}<div>`)
document.write(`<div> slice(1) ${a.slice(1)}<div>`)
document.write(`<div> to string ${b.toString()}<div>`)
document.write(`<div> відсортувати ${coursesAndDurationArray.sort(function (a,b) {
    return a.mounthDuration - b.mounthDuration
})}<div>`)


let oho = coursesAndDurationArray.sort(function (a, b) {
    for (let coursesAndDurationArrayElement of coursesAndDurationArray) {
        if (coursesAndDurationArrayElement.mounthDuration > 5) {
            return a.mounthDuration - b.mounthDuration
    }
       }

})
console.log(oho)

function Nuser (id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.nameChange = function (newname) {
        this.name = newname;
        return this.name
    }
}

console.log(coursesAndDurationArray.sort((a, b) => b.mounthDuration - a.mounthDuration))
 console.log(coursesAndDurationArray.filter(ar => ar.mounthDuration <= 5).sort((a,b) => a.mounthDuration-b.mounthDuration))
let objStr = [
    {name: 'Копчений',
    year: 49,
    saper: true},
    {name: 'Койот',
        year: 23,
        saper: true},
    {name: 'Новіков',
        year: 32,
        saper: true},
    {name: 'Огоновський',
        year: 33,
        saper: true},
    {name: 'Роман',
        year: 49,
        saper: false},
    {name: 'Фугас',
        year: 40,
        saper: true},
    {name: 'Джоні',
        year: 22,
        saper: true},
    {name: 'Хоробрий',
        year: 45,
        saper: false},
    {name: 'Слоник',
        year: 32,
        saper: true},
    {name: 'Пух',
        year: 35,
        saper: true},
    {name: 'Відар',
        year: 27,
        saper: false},
];
let anotherSrt = objStr.reduce((sapers, spr) => {
    sapers.names = sapers.names + ' ' + spr.name;
    sapers.years.push(spr.year)
    return sapers

}, {
    names: '',
    years: []
});
document.write(`<div> форматована стрінга ${anotherSrt} </div>`)
console.log(anotherSrt)
document.write(` новий масив${
    objStr.map((saper, index) => {
        saper.id = index
        return saper
    })
}`)
console.log(objStr
    .map((saper, index) => {
    saper.id = index
    saper.best = Math.round(Math.random()*1000)
    return saper
})
    .sort((a,b) => b.best - a.best)
    .filter( saper => saper.saper)
)

let newUser = new Nuser(34, 'Ooleg', 'Ogonow','Oleg@ogo.com', 8900656)
console.log(new Nuser(1, 'Oleg', 'Ogo','Oleg@ogo.com', 8900656))
console.log(newUser)

let arr = [];
arr[0] = new Nuser(24, 'Oleууg', 'Ogon', 'ol@gmail.com', +380630311455);
arr[1] = new Nuser(10, 'Nata', 'Nitoy', 'olt@gmail.com', +380630311456);
arr[2] = new Nuser(32, 'Zlata', 'Pitoy', 'olzst@gmail.com', +380630311457);
arr[3] = new Nuser(3456, 'Ira', 'les', 'olsst@gmail.com', +380630311458);
arr[4] = new Nuser(44, 'Nadiya', 'Dores', 'olw3t@gmail.com', +380630871345);
arr[5] = new Nuser(535, 'Stepan', 'Maskiv', 'ol323t@gmail.com', +380630311465);
arr[6] = new Nuser(96, 'Olena', 'Paskiv', 'olt23e@gmail.com', +380630311444);
arr[7] = new Nuser(78, 'Ivan', 'Lask', 'olt233@gmail.com', +380630311423);
arr[8] = new Nuser(845, 'Bogdan', 'Merd', 'oew3lt@gmail.com', +380630311456);
arr[9] = new Nuser(9545, 'Lesya', 'Perd', 'ol23t@gmail.com', +3806303114345);


console.log(arr.filter(function (item) {
    if (item.id %2 === 0)
        return item
}))
console.log(arr.sort((a, b) => a.id - b.id))
arr[0].nameChange('Olenka')

console.log(arr)

