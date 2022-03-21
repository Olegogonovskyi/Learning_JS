
let wrap = document.getElementsByClassName('wrap')[0];

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => response.json())
    .then(jsonResponses => {

    for (const user of jsonResponses) {
        let userbox = document.createElement('div')
        userbox.classList.add('userbox')
        let anch = document.createElement('a')
        anch.innerText = `${user.id} - ${user.name}`
        anch.href = `./user_details.html?id=${user.id}`
        console.log(user.id)
        userbox.appendChild(anch)
        wrap.appendChild(userbox)
    }});

