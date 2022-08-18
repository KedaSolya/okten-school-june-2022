// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
// function User(id, name, surname, email, phone){
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
// let arr = []
// arr[0] = new User(1, "Ann", "Simpson", "ann.simpson@gmail.com", "+380976384821")
// arr[1] = new User(2, "John", "Brown", "john.brown@gmail.com", "+380841230948")
// arr[2] = new User(3, "Simon", "Johnson", "simon.johnson@gmail.com", "+380958124300")
// arr[3] = new User(4, "Carl", "Link", "carl.link@gmail.com", "+380731297634")
// arr[4] = new User(5, "Andrew", "Nickon", "andrew.nickon@gmail.com", "+380995564213")
// arr[5] = new User(6, "Jorge", "Brown", "jorge.brown@gmail.com", "+380988541180")
// arr[6] = new User(7, "Ken", "Link", "ken.link@gmail.com", "+380505678412")
// arr[7] = new User(8, "Mary", "Nickon", "mary.nickon@gmail.com", "+380799509631")
// arr[8] = new User(9, "Jessy", "Johnson", "jessy.johnson@gmail.com", "+380344768982")
// arr[9] = new User(10, "Tom", "Simpson", "tom.simpson@gmail.com", "+3809338475029")

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// console.log(arr.filter(item => {
//     return !(item.id % 2)
// }))

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// console.log(arr.sort((a,b)=>{
//     return a.id - b.id;
// }))

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// function Client (id, name, surname , email, phone, order){
//     this.id = id
//     this.name = name
//     this.surname = surname
//     this.email = email
//     this.phone = phone
//     this.order = order
// }
// let arr = []
// arr[0] = new Client(1, "Ann", "Simpson", "ann.simpson@gmail.com", "+380976384821", ['cap', 'T-Shirt'])
// arr[1] = new Client(2, "John", "Brown", "john.brown@gmail.com", "+380841230948", ['shirt'])
// arr[2] = new Client(3, "Simon", "Johnson", "simon.johnson@gmail.com", "+380958124300", ['belt', 'socks'])
// arr[3] = new Client(4, "Carl", "Link", "carl.link@gmail.com", "+380731297634", ['shoes', 'glasses', 'skirt'])
// arr[4] = new Client(5, "Andrew", "Nickon", "andrew.nickon@gmail.com", "+380995564213", ['T-Shirt'])
// arr[5] = new Client(6, "Jorge", "Brown", "jorge.brown@gmail.com", "+380988541180", ['trousers', 'cap'])
// arr[6] = new Client(7, "Ken", "Link", "ken.link@gmail.com", "+380505678412", ['sunglasses', 'accessories'])
// arr[7] = new Client(8, "Mary", "Nickon", "mary.nickon@gmail.com", "+380799509631", ['socks', 'trainers', 'jeans', 'belt'])
// arr[8] = new Client(9, "Jessy", "Johnson", "jessy.johnson@gmail.com", "+380344768982", ['skirts', 'shorts'])
// arr[9] = new Client(10, "Tom", "Simpson", "tom.simpson@gmail.com", "+3809338475029", ['scarf'])

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// console.log(arr.sort((a,b)=>{
//     return a.order.length - b.order.length;
// }))

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// function Car (model, manufacturer, releaseYear, maxSpeed, engineCapacity){
//     this.model = model
//     this.manufacturer = manufacturer
//     this.releaseYear = releaseYear
//     this.maxSpeed = maxSpeed
//     this.engineCapacity = engineCapacity
//     this.drive = function (){
//         console.log(`їдемо зі швидкістю ${maxSpeed} на годину`)
//     }
//     this.info = function (){
//         console.log("Model - " + model)
//         console.log("Manufacturer - " + manufacturer)
//         console.log("Release year - " + releaseYear + " year")
//         console.log("Max speed - " + maxSpeed + " km/h")
//         console.log("Engine capacity - " + engineCapacity + " l")
//     }
//     this.increaseMaxSpeed = function (newSpeed){
//         this.maxSpeed += newSpeed
//         return this.maxSpeed
//     }
//     this.changeYear = function (newValue){
//         this.releaseYear = newValue
//         return this.releaseYear
//     }
//     this.addDriver = function (driver){
//         this.driver = driver
//     }
// }
// let car = new Car("X3", "BMW", "2003", 200, 3)
// car.drive()
// car.info()
// car.increaseMaxSpeed(100)
// car.changeYear(2009)
// car.addDriver('John')
// console.log(car)

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// class Car {
//     constructor (model, manufacturer, releaseYear, maxSpeed, engineCapacity){
//         this.model = model
//         this.manufacturer = manufacturer
//         this.releaseYear = releaseYear
//         this.maxSpeed = maxSpeed
//         this.engineCapacity = engineCapacity
//     }
//     drive(){
//         return `їдемо зі швидкістю ${this.maxSpeed} на годину`
//     }
//     info(){
//         console.log("Model - " + this.model)
//         console.log("Manufacturer - " + this.manufacturer)
//         console.log("Release year - " + this.releaseYear + " year")
//         console.log("Max speed - " + this.maxSpeed + " km/h")
//         console.log("Engine capacity - " + this.engineCapacity + " l")
//     }
//     increaseMaxSpeed(newSpeed){
//         this.maxSpeed += newSpeed
//         return this.maxSpeed
//     }
//     changeYear(newValue){
//         this.releaseYear = newValue
//         return this.releaseYear
//     }
//     addDriver(driver){
//         this.driver = driver
//     }
// }
// let car = new Car("X3", "BMW", "2003", 200, 3)
// console.log(car.drive())
// car.info()
// car.increaseMaxSpeed(100)
// car.changeYear(2009)
// car.addDriver('John')
// console.log(car)

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
// class Cinderella{
//     constructor(name, age, footSize) {
//         this.name = name
//         this.age = age
//         this.footSize = footSize
//     }
// }
// let arr = []
// arr[0] = new Cinderella("Ann", 21, 37)
// arr[1] = new Cinderella("Mary", 32, 40)
// arr[2] = new Cinderella("Marge", 29, 36)
// arr[3] = new Cinderella("Jannie", 32, 37.5)
// arr[4] = new Cinderella("Alina", 19, 38)
// arr[5] = new Cinderella("Zlata", 24, 35)
// arr[6] = new Cinderella("Tania", 25, 40.5)
// arr[7] = new Cinderella("Sofia", 20, 34)
// arr[8] = new Cinderella("Nata", 21, 41)
// arr[9] = new Cinderella("Veronika", 32, 39)
// class Prince extends Cinderella{
//     constructor(name, age, foundShoe) {
//         super(name, age);
//         this.foundShoe = foundShoe
//     }
// }
// let prince = new Prince("Mathew", 31, 37.5)
// let find = (arr, prince)=>{
//     for (const elem of arr) {
//         if (prince.foundShoe === elem.footSize)
//             console.log("Finally I found my Cinderella - " + elem.name)
//     }
// }
// find(arr, prince)