let url = new URL(location.href);
console.log(url)
let id = url.searchParams.get('id')
console.log(id)
let wrap = document.getElementsByClassName('wrap')[0]


fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((response) => response.json())
    .then(jsonResponses => {
                   let aboutuser = JSON.stringify(jsonResponses)
        let userdetails = document.createElement('div')
        userdetails.classList.add ('userdetails')
        userdetails.innerHTML = aboutuser
        // let anch = document.createElement("a")
        // anch.href = `./post-details.html?id=${id}`
        //     anch.innerText = `Всі пости ${jsonResponses.name}`
        // userdetails.appendChild(anch)
        wrap.appendChild(userdetails)

    })

let button = document.createElement('button')
button.innerText = `Всі пости`
wrap.appendChild(button)
button.onclick = function () {
            fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
            .then((response) => response.json())
            .then(jsonResponses => {
                    for (const postitem of jsonResponses) {
                            let forposts = document.getElementsByClassName(`forposts`)[0]
                            let post = document.createElement('div')
                            post.classList.add ('post')
                            post.innerText = `Назва посту: ${postitem.title}`
                            let postbutton = document.createElement('button')
                            postbutton.innerText = 'Коментарі до посту'
                            postbutton.onclick = function () {
                                    location.href = `./post-details.html?id=${postitem.id}`
                            }
                            forposts.append(post,postbutton)



                    }



            })

}


