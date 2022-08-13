// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// function length(str) {
//     return str.length
// }
//
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
// function upperCase(str) {
//     return str.toUpperCase()
// }
//
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// function lowerCase(str) {
//     return str.toLowerCase()
// }
//
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   '
// str = str.trim()
//
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
// function stringToarray(str){
//     return str.split(' ')
// }
//
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// let array = [10, 8, -7, 55, 987, -1011, 0, 1050, 0]
// let str = array.map(elem => elem.toString())
//
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
// function sortNums(nums, direction){
//     if (direction === "ascending"){
//         console.log(nums.sort(function (a,b){
//             return a - b
//         }))
//     }
//     if (direction === "descending"){
//         console.log(nums.sort(function (a,b){
//             return b - a
//         }))
//     }
// }
//
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// coursesAndDurationArray.sort((a,b)=>{
//     return b.monthDuration - a.monthDuration;
// })
//
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// const result = coursesAndDurationArray.filter(value => value.monthDuration > 5);
//
// описати колоду карт
// let cards = [
//     {
//         value: '6',
//         suit: 'heart',
//         color: 'red'
//     },
//     {
//         value: '6',
//         suit: 'diamond',
//         color: 'red'
//     },
//     {
//         value: '6',
//         suit: 'spade',
//         color: 'black'
//     },
//     {
//         value: '6',
//         suit: 'clubs',
//         color: 'black'
//     },
//     {
//         value: '7',
//         suit: 'heart',
//         color: 'red'
//     },
//     {
//         value: '7',
//         suit: 'diamond',
//         color: 'red'
//     },
//     {
//         value: '7',
//         suit: 'spade',
//         color: 'black'
//     },
//     {
//         value: '7',
//         suit: 'clubs',
//         color: 'black'
//     },
//     {
//         value: '8',
//         suit: 'heart',
//         color: 'red'
//     },
//     {
//         value: '8',
//         suit: 'diamond',
//         color: 'red'
//     },
//     {
//         value: '8',
//         suit: 'spade',
//         color: 'black'
//     },
//     {
//         value: '8',
//         suit: 'clubs',
//         color: 'black'
//     },
//     {
//         value: '9',
//         suit: 'heart',
//         color: 'red'
//     },
//     {
//         value: '9',
//         suit: 'diamond',
//         color: 'red'
//     },
//     {
//         value: '9',
//         suit: 'spade',
//         color: 'black'
//     },
//     {
//         value: '9',
//         suit: 'clubs',
//         color: 'black'
//     },
//     {
//         value: '10',
//         suit: 'heart',
//         color: 'red'
//     },
//     {
//         value: '10',
//         suit: 'diamond',
//         color: 'red'
//     },
//     {
//         value: '10',
//         suit: 'spade',
//         color: 'black'
//     },
//     {
//         value: '10',
//         suit: 'clubs',
//         color: 'black'
//     },
//     {
//         value: 'jack',
//         suit: 'heart',
//         color: 'red'
//     },
//     {
//         value: 'jack',
//         suit: 'diamond',
//         color: 'red'
//     },
//     {
//         value: 'jack',
//         suit: 'spade',
//         color: 'black'
//     },
//     {
//         value: 'jack',
//         suit: 'clubs',
//         color: 'black'
//     },
//     {
//         value: 'queen',
//         suit: 'heart',
//         color: 'red'
//     },
//     {
//         value: 'queen',
//         suit: 'diamond',
//         color: 'red'
//     },
//     {
//         value: 'queen',
//         suit: 'spade',
//         color: 'black'
//     },
//     {
//         value: 'queen',
//         suit: 'clubs',
//         color: 'black'
//     },
//     {
//         value: 'king',
//         suit: 'heart',
//         color: 'red'
//     },
//     {
//         value: 'king',
//         suit: 'diamond',
//         color: 'red'
//     },
//     {
//         value: 'king',
//         suit: 'spade',
//         color: 'black'
//     },
//     {
//         value: 'king',
//         suit: 'clubs',
//         color: 'black'
//     },
//     {
//         value: 'ace',
//         suit: 'heart',
//         color: 'red'
//     },
//     {
//         value: 'ace',
//         suit: 'diamond',
//         color: 'red'
//     },
//     {
//         value: 'ace',
//         suit: 'spade',
//         color: 'black'
//     },
//     {
//         value: 'ace',
//         suit: 'clubs',
//         color: 'black'
//     },
//     {
//         value: 'joker',
//         suit: null,
//         color: 'red'
//     },
//     {
//         value: 'joker',
//         suit: null,
//         color: 'black'
//     }
// ]
// - знайти піковий туз
// console.log(cards.find(item => item.value === "ace" && item.suit === "spade"))
//
// - всі шістки
// console.log(cards.filter(item => item.value === "six"))
//
// - всі червоні карти
// console.log(cards.filter(item => item.color === "red"))
//
// - всі буби
// console.log(cards.filter(item => item.suit === "diamond"))
//
// - всі трефи від 9 та більше
// console.log(cards.filter(item => item.suit === "clubs" && item.value === "9" || item.suit === "clubs" && item.value === "10" || item.suit === "clubs" && item.value.length > 2))
//
// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }
// console.log(cards.reduce(function (accumulator, card){
//     if (card.suit === "spade")
//         accumulator.spades.push(card)
//     if (card.suit === "diamond")
//         accumulator.diamonds.push(card)
//     if (card.suit === "heart")
//         accumulator.hearts.push(card)
//     if (card.suit === "clubs")
//         accumulator.clubs.push(card)
//     return accumulator
// },{spades:[],diamonds:[],hearts:[],clubs:[]}))