// let userlist = localStorage.getItem('userslist')
let wrap = document.createElement('div');
wrap.classList.add('wrap');
document.body.appendChild(wrap);

let userlist = JSON.parse(localStorage.getItem('userslist'));
for (let userlistElement of userlist) {
    let usersdiv = document.createElement('div');
    usersdiv.classList.add('usersdiv');
    wrap.appendChild(usersdiv)
    let h3username = document.createElement('h3')
    usersdiv.append(h3username);
    h3username.innerText = `name: ${userlistElement.name} - age: ${userlistElement.age}`
}

