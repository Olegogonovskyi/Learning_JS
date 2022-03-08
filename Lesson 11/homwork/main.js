// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage

let formone = document.getElementsByTagName('form')[0];
formone.onsubmit = function (e) {
    e.preventDefault();
    localStorage.setItem('user', JSON.stringify({Name: e.target.Name.value, Age: e.target.Age.value}))}

//     -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми
// об'єкти зберігаються в масиві в локальному сховищі.

let formtwo = document.getElementsByTagName('form')[1];
formtwo.onsubmit = function (e) {
    e.preventDefault();
    localStorage.setItem('car', JSON.stringify({model: e.target.model.value, type: e.target.type.value, volume: e.target.volume.value}))
}
