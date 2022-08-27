fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then(users => {
        let wrap = document.createElement('div')
        wrap.classList.add('wrap')
        for (const user of users) {
            let div = document.createElement('div');
            div.classList.add('user')
            let p = document.createElement('p')
            p.innerText = `${user.id}. ${user.name}`
            let a = document.createElement('a')
            a.href = `user-details.html?id=${user.id}`
            a.innerText = 'Details'
            div.appendChild(p)
            div.appendChild(a)
            wrap.appendChild(div)
            wrap.appendChild(div)
            document.body.appendChild(wrap)
        }
    });