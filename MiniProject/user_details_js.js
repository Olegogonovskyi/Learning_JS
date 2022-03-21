let url = new URL(location.href);
console.log(url)
let id = url.searchParams.get('id')
console.log(id)

fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((response) => response.json())
    .then(jsonResponses => {
        console.log(jsonResponses)
        aboutuser = JSON.stringify(jsonResponses)
        userdetails = document.createElement('div')
        userdetails.classList.add ('userdetails')
        userdetails.innerHTML = aboutuser
        // let anch = document.createElement("a")
        // anch.href = `./post-details.html?id=${id}`
        //     anch.innerText = `Всі пости ${jsonResponses.name}`
        // userdetails.appendChild(anch)
        document.body.appendChild(userdetails)
    })
let button = document.createElement()
