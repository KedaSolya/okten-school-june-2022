//additional

// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
// function isCorrect(a){
//     console.log(a !== 0 ? "Вірно" : "Невірно");
// }
// isCorrect(1);
// isCorrect(0);
// isCorrect(-3);

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
// function setTime(time){
//     console.log("Число показує " + ((time >= 0 && time <= 15) ? "першу" : (time > 15 && time <= 30) ? "другу" : (time > 30 && time <= 45) ? "третю" : (time > 45 && time <= 59) ? "четверту" : "ніяку") + " чверть");
// }
// setTime(Math.floor(Math.random()* (59 - 0 + 1)))

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
// function setDay(day){
//     console.log("Число показує " + ((day >= 0 && day <= 10) ? "першу" : (day > 10 && day <= 20) ? "другу" : (day > 20 && day <= 31) ? "третю": "ніяку") + " декаду місяця");
// }
// setDay(Math.floor(Math.random()* (31 - 1 + 1) + 1))

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
// let number = +prompt("Enter the number of the day:")
// switch (number){
//     case 1: alert("14:00-16:00 - English class\n17:00-18:30 - Dance class"); break;
//     case 2: alert("10:00-11:00 - Visit a doctor\n13:00-15:00 - German class"); break;
//     case 3: alert("17:00-18:30 - Dance class"); break;
//     case 4: alert("14:00-16:00 - English class"); break;
//     case 5: alert("13:00-15:00 - German class\n16:00-18:30 - Do the shopping"); break;
//     case 6: alert("11:00-16:00 - Cleaning th house\n18:00-21:00 - Hang out with friends"); break;
//     case 7: alert("Just have a break :)"); break;
// }

// - Користувач вводить або має два числа.
//   Потрібно знайти та вивести максимальне число з тих двох .
//   Також потрібно врахувати коли введені рівні числа.
// function maxOrMin(first, second){
//     console.log((first > second) ? ("max - " + first + "\nmin - " + second) : (first < second) ? ("max - " + second + "\nmin - " + first) : (first + " = " + second))
// }
// maxOrMin(5, 3)