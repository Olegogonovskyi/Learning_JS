fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => response.json()).then(jsonResponses => {
    let wrap = document.createElement('div')
wrap.classList.add('wrap')
        document.body.appendChild(wrap)
    for (const user of jsonResponses) {
        let user = document.createElement('div')
        user.classList.add('user')
        wrap.appendChild(user)

            }
}

)