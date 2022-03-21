let url = new URL(location.href);
console.log(url)
let id = url.searchParams.get('id')
console.log(id)


fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
    .then((response) => response.json())
    .then(jsonResponses => {
        let post = document.getElementsByClassName('post')[0]
        let postdetail = JSON.stringify(jsonResponses)
    post.innerHTML = postdetail




    })