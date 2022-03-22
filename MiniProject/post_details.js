let url = new URL(location.href);
console.log(url)
let id = url.searchParams.get('id')
console.log(id)
let commentblock = document.createElement('div')
commentblock.classList.add('commentblock')


fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((response) => response.json())
    .then(jsonResponses => {
        let post = document.getElementsByClassName('post')[0]
        let postdetail = JSON.stringify(jsonResponses)
    post.innerHTML = postdetail
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
            .then((response) => response.json())
            .then(jsonResponses => {
                for (const comment of jsonResponses) {
                    let singlecomment = document.createElement('div')
                    singlecomment.classList.add('comment')
                    singlecomment.innerText = comment.body

                    commentblock.appendChild(singlecomment)
                    document.body.appendChild(commentblock)
                }

            })




    })