// Все робити за допомоги js.
// - створити блок,
// let div = document.createElement('div')

// - додати йому класи wrap, collapse, alpha, beta
// div.classList.add('wrap')
// div.classList.add('collapse')
// div.classList.add('alpha')
// div.classList.add('beta')

// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// div.style.background = "silver"
// div.style.height = "200px"
// div.style.width = "200px"

// - додати цей блок в body.
// document.body.appendChild(div)

// - клонувати його повністю, та додати клон в body.
// document.body.appendChild(div.cloneNode(true))

// - Є масив:
// ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
// let arr = ['Main','Products','About us','Contacts']
// let ul = document.querySelector('.menu')
// for (const elem of arr) {
//     let li = document.createElement('li')
//     li.innerText = elem
//     ul.appendChild(li)
// }

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
// for (const elem of coursesAndDurationArray) {
//     let info = document.createElement('div')
//     info.innerText = `${elem.title} - ${elem.monthDuration}`
//     document.body.appendChild(info)
// }

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
// Завдання робити через цикли.
// for (const elem of coursesAndDurationArray) {
//     let div = document.createElement('div')
//     let h1 = document.createElement('h1')
//     h1.innerText = elem.title
//     let p = document.createElement('p')
//     h1.classList.add = 'description'
//     h1.innerText = elem.monthDuration
//     div.appendChild(h1)
//     div.appendChild(p)
//     document.body.appendChild(div)
// }
// for (const course of coursesAndDurationArray) {
//     let div = document.createElement('div');
//     div.classList.add('item')
//     let h1 = document.createElement('h1');
//     h1.innerText = course.title;
//     h1.classList.add('heading')
//     let p = document.createElement('p');
//     p.innerText = course.monthDuration;
//     p.classList.add('description')
//     div.appendChild(h1);
//     div.appendChild(p);
//     document.body.appendChild(div);
// }