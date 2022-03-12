// 1.Отримати відповідь з цього ресурсу відповідь,
//     та вивести в документ об'єкти. Застилізувати, ' +
// 'за допомоги css, щоб отримати 5 елементів в рядку.' +
// 'Для кожного елементу свій блок div.postВсі характеристики повинні ' +
// 'мати свої блоки всередені div.post https://jsonplaceholder.typicode.com/fetch

fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
        .then(jsonResponses => {
                let wrap = document.createElement('div')
                wrap.classList.add('wrap');
                for (const jsonRespons of jsonResponses) {
                    let post = document.createElement('div');
                    post.classList.add('post');
                    let h1 = document.createElement('h1')
                    let h3 = document.createElement('h3')
                    let litle = document.createElement('h4')
                    let body = document.createElement('h6')
                    h1.innerText = `userId: ${jsonRespons.userId}`
                    h3.innerText = `id: ${jsonRespons.id}`
                    litle.innerText = `title: ${jsonRespons.title}`
                    body.innerText = `body: ${jsonRespons.body}`
                    post.appendChild(h1)
                    post.appendChild(h3)
                    post.appendChild(litle)
                    post.appendChild(body)
                    wrap.appendChild(post)
                    document.body.append(wrap)

        }

    }

        )
