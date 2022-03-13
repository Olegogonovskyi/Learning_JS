// // 1.Отримати відповідь з цього ресурсу відповідь,
// //     та вивести в документ об'єкти. Застилізувати, ' +
// // 'за допомоги css, щоб отримати 5 елементів в рядку.' +
// // 'Для кожного елементу свій блок div.postВсі характеристики повинні ' +
// // 'мати свої блоки всередені div.post https://jsonplaceholder.typicode.com/fetch
//
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then((response) => response.json())
//         .then(jsonResponses => {
//                 let wrap = document.createElement('div')
//                 wrap.classList.add('wrap');
//                 for (const jsonRespons of jsonResponses) {
//                     let post = document.createElement('div');
//                     post.classList.add('post');
//                     let h1 = document.createElement('h1')
//                     let h3 = document.createElement('h3')
//                     let litle = document.createElement('h4')
//                     let body = document.createElement('h6')
//                     h1.innerText = `userId: ${jsonRespons.userId}`
//                     h3.innerText = `id: ${jsonRespons.id}`
//                     litle.innerText = `title: ${jsonRespons.title}`
//                     body.innerText = `body: ${jsonRespons.body}`
//                     post.appendChild(h1)
//                     post.appendChild(h3)
//                     post.appendChild(litle)
//                     post.appendChild(body)
//                     wrap.appendChild(post)
//                     document.body.append(wrap)
//
//         }
//
//     }
//
//         )

// 2.Отримати відповідь з цього ресурсу відповідь,
//     та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

fetch('https://jsonplaceholder.typicode.com/comments')
    .then((response) => response.json())
    .then(comments => {
        let divcomm = document.createElement('div')
        divcomm.classList.add('comment')

        for (const comment of comments) {

            let postId = document.createElement('h1')
            postId.innerText = coment.postId
            divcomm.appendChild(postId)
            let id = document.createElement('h3')
            id.innerText = `coment.id: ${coment.id}`
            divcomm.appendChild(id)
            let names = document.createElement('h4')
            names.innerText = `name: ${coment.name}`
            divcomm.appendChild(names)
            let email = document.createElement('h4')
            email.innerText = `email ${coment.email}`
            divcomm.appendChild(email)
            let bodys = document.createElement('p')
            bodys.innerText = `body ${coment.body}`
            divcomm.appendChild(bodys);
            document.body.append(divcomm)


        }
    })



