// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function square(a, b) {
//     return a * b;
// }

// - створити функцію яка обчислює та повертає площу кола з радіусом r
// function circleSquare(r) {
//     return Math.PI * Math.pow(r,2)
// }

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function cylinderSquare(h, r) {
//     return 2 * Math.PI * Math.pow(r,2) + 2 * Math.PI * r * h
// }

// - створити функцію яка приймає масив та виводить кожен його елемент
// function printArr(array) {
//     for (const arrayElement of array) {
//         console.log(arrayElement)
//     }
// }

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function paragraph(text) {
//     document.write(`<p>${text}</p>`)
// }

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function ul(text) {
//     document.write("<ul>")
//     for (let i = 0; i < 3; i++) {
//         document.write(`<li>${text}</li>`)
//     }
//     document.write("</ul>")
// }

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function ul(text, count) {
//     document.write("<ul>")
//     for (let i = 0; i < count; i++) {
//         document.write(`<li>${text}</li>`)
//     }
//     document.write("</ul>")
// }

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// function listArray(array) {
//     document.write("<ul>")
//     for (let i = 0; i < array.length; i++) {
//         document.write(`<li>${array[i]}</li>`)
//     }
//     document.write("</ul>")
// }

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// function printObj(arr) {
//     document.write("<div>")
//     for (let i = 0; i < arr.length; i++) {
//         document.write(`<p>${arr[i].id}. ${arr[i].name} (${arr[i].age} y.o.)</p>`)
//     }
//     document.write("</div>")
// }

// - створити функцію яка повертає найменьше число з масиву
// function min(array) {
//     let min = array[0];
//     for (let i = 1; i < array.length; i++) {
//         if (array[i] < min){
//             min = array[i]
//         }
//     }
//     return min
// }

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// function sum(array) {
//     let sum = array[0]
//     for (let i = 1; i < array.length; i++) {
//         sum += array[i]
//     }
//     return sum
// }
