// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write
// let arr = ['hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false]
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//     alert(arr[i]);
//     document.writeln("<p>" + arr[i] + "</p>");
// }

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
// let firstName = 'Solomiya', middleName = 'Volodymyrivna', lastName = 'Keda'
// let person = firstName + ' ' + middleName + ' ' + lastName;

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
// let a = 100; let b = '100'; let c = true;
// console.log(typeof a)
// console.log(typeof b)
// console.log(typeof c)

// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль
// let firstName = prompt('Your first name:')
// let middleName = prompt('Your middle name:')
// let age = +prompt('Your age:')
// console.log(firstName + ' ' + middleName + ', ' + age + ' years old')



// additional

// Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
// Значення площі зберігати в змінній s.
// function square(height, width){
//     return height * width;
// }
// let s = square(23, 10);

// Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
// результат помістіть у змінну v.
// function volume(heightC, dC){
//     return heightC * Math.PI * Math.pow(dC/2, 2);
// }
// let v = volume(10, 4)

// У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
// Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор зведення в ступінь **).
// function hypotenuse(n, m){
//     return Math.sqrt(n**2 + m**2);
// }
// let k = hypotenuse(3, 4)

// - Визначити відповідний оператор в виразах що б вийшов відповідний результат.
//     В однакових виразах не використовувати однакові оператори!!!
// 5 ? 6 -> true
// 5 ? 6 -> false
// 5 ? 6 -> false
// 5 ? 6 -> false
// 10 ? 10 -> true
// 10 ? 10 -> true
// 10 ? 10 -> false
// 10 ? 10 -> false
// 10 ? 10 -> false
// 123 ? '123' -> false
// 123 ? '123' -> true
// console.log(5 !== 6) // true
// console.log(5 > 6) // false
// console.log(5 >= 6) // false
// console.log(5 === 6) // false
// console.log(10 === 10) // true
// console.log(10 <= 10) // true
// console.log(10 > 10) // false
// console.log(10 !== 10) // false
// console.log(10 < 10) // false
// console.log(123 === '123') // false
// console.log(123 == '123') // true