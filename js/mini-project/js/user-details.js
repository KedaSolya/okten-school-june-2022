let url = new URL(location.href);
let id = url.searchParams.get('id');

fetch(`http://jsonplaceholder.typicode.com/users/${id}`)
    .then(response => response.json())
    .then(user => {
        let wrapper = document.createElement('div')
        wrapper.classList.add('user-info')
        document.body.appendChild(wrapper)
        function recurUser(obj) {
            for (const key in obj) {
                if (typeof obj[key] !== 'object') {
                    let p = document.createElement('p')
                    p.innerText = `${key}:`.toUpperCase() +  `   ${obj[key]}`
                    wrapper.appendChild(p)
                } else recurUser(obj[key])
            }
        }
        recurUser(user)
        let button = document.createElement('button')
        button.classList.add('post-details')
        button.innerText = "Posts of Current User"
        wrapper.appendChild(button)
        button.onclick = () => {
            fetch(`http://jsonplaceholder.typicode.com/users/${id}/posts`)
                .then(response => response.json())
                .then(comments => {
                    let wrapping = document.createElement('div')
                    wrapping.classList.add('wrapping-posts')
                    document.body.appendChild(wrapping)
                    for (const comment of comments) {
                        let divPosts = document.createElement('div')
                        divPosts.classList.add('div-post')
                        let p = document.createElement('p')
                        p.innerText = `ID - ${comment.id}, ${comment.title}`
                        let btn = document.createElement('button')
                        btn.innerText = 'more'
                        btn.onclick = () =>{
                            location.href = `post-details.html?id=${comment.id}`
                        }
                        divPosts.appendChild(p)
                        divPosts.appendChild(btn)
                        wrapping.appendChild(divPosts)
                        button.disabled = "true"
                    }
                })

        }
    });
