let url = new URL(location.href);
let id = url.searchParams.get('id');

fetch(`http://jsonplaceholder.typicode.com/posts/${id}`)
    .then(response => response.json())
    .then(post => {
        let container = document.createElement('div')
        container.classList.add('container')
        document.body.appendChild(container)
        function recurUser(obj) {
            for (const key in obj) {
                if (typeof obj[key] !== 'object') {
                    let p = document.createElement('p')
                    p.innerText = `${key}:`.toUpperCase() +  `   ${obj[key]}`
                    container.appendChild(p)
                } else recurUser(obj[key])
            }
        }
        recurUser(post)
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
            .then(response => response.json())
            .then(comment => {
                let items = document.createElement('div')
                items.classList.add('items')
                function recurUsers(obj) {
                    let box = document.createElement('div')
                    container.appendChild(items)
                    for (const key in obj) {
                        box.classList.add('item')
                        if (typeof obj[key] !== 'object') {
                            let p = document.createElement('p')
                            p.innerText = `${key}:`.toUpperCase() +  `   ${obj[key]}`
                            box.appendChild(p)
                            items.appendChild(box)
                        } else recurUsers(obj[key])
                    }
                }
                recurUsers(comment)
            })
    });
