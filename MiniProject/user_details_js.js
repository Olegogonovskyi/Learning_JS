let url = new url(location.href);
let id =    JSON.parse(url.searchParams.get('id'))

fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((response) => response.json())
    .then(jsonResponses => {
        userdetails = document.createElement('div')
        userdetails.classList.add ('userdetails')
        userdetails.innerText = jsonResponses.id

    })