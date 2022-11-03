let wrap = document.createElement('div');
wrap.classList.add('wrap');
document.body.appendChild(wrap);

fetch(`https://jsonplaceholder.typicode.com/users`)
.then((users) => users.json())
.then(allusers => {
    // console.log(allusers)
    for (let alluser of allusers) {
        let usersdiv = document.createElement('div');
        usersdiv.classList.add('usersdiv');
        wrap.appendChild(usersdiv)
        let h3username = document.createElement('h3')
        usersdiv.append(h3username);
        h3username.innerText = `name: ${alluser.name}`
        let userbutton = document.createElement('button')
        userbutton.innerText = 'Details'
        usersdiv.append(userbutton)
        userbutton.onclick = function () {
            fetch(`https://jsonplaceholder.typicode.com/posts?userId=${alluser.id}`)
                .then((allposts) => allposts.json())
                .then (allposts => {
                    for (let allpost of allposts) {
                        let postdiv = document.createElement('div')
                        postdiv.classList.add('postdiv')
                        usersdiv.appendChild(postdiv)
                        let postboby = document.createElement('p')
                        postboby.classList.add('postboby')
                        postdiv.appendChild(postboby)
                        postboby.innerText = `${allpost.title} ---- ${allpost.body}`
                        let postbutton = document.createElement('button')
                        postbutton.innerText = 'Comments'
                        postdiv.appendChild(postbutton)
                        postbutton.onclick = function () {
                            fetch(`https://jsonplaceholder.typicode.com/comments?postId=${allpost.id}`)
                                .then((allcoments) => allcoments.json()
                                    .then (allcoments => {
                                        for (let allcoment of allcoments) {
                                            let commentsblock = document.createElement('ul')
                                            postdiv.appendChild(commentsblock)
                                            commentsblock.innerText = `email: ${allcoment.email}____ ${allcoment.body}`
                                        }

                                    }))
                        }

                    }

                })



        }
    }
})

let form1 = document.getElementsByTagName('form')[0];
form1.onsubmit = function (e) {
    e.preventDefault()
    let lokalstoragetowlisd = localStorage.getItem('tows')
    let tow = {
        name: e.target.Name.value,
        howmuch: e.target.Howmuch.value,
        price: e.target.Price.value,
        url: e.target.Picture.value

    }
    if (!lokalstoragetowlisd) {
        let towstr = [];
        towstr.push(tow);
        localStorage.setItem('tows', `${JSON.stringify(towstr)}`)
    } else {
        let towstr = JSON.parse(lokalstoragetowlisd)
        towstr.push(tow)
        localStorage.setItem('tows', `${JSON.stringify(towstr)}`)
    }

    console.log(lokalstoragetowlisd)
}
