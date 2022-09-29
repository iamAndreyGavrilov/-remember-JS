// // Понятие стека и очереди

// // Очередь

// const arr = []
// arr.push('a')
// arr.push('b')
// arr.push('c')

// console.log(arr)

// arr.shift()

// console.log(arr)

// // Stack

// const arr2 = []
// arr2.push('a')
// arr2.push('b')
// arr2.push('c')

// console.log(arr2)

// arr2.pop()

// console.log(arr2)

// Иммутабельность

// const arr = [1, 2, 3, 4, 5, 6]
// // не использовать pop, push, shift, unshift, sort, reverse

// const newArr = arr.slice(0, 4) // возвращает новый массив, содержащий копию части исходного массива [1, 2, 3, 4]
// const newArr2 = [0, ...arr] // возвращает новый массив [0, 1, 2, 3,	4, 5, 6]

// const obj = {
//   a: 10,
//   b: 5,
//   c: 2,
// }

// obj.a = 100 //mutation

// const obj2 = {
//   ...obj,
//   a: 1,
//   d: 99,
// }

// Mapping
//map / forEach

// const numbers = [1, 2, 3, 4, 5]

// // можно образаться к текущему элементу, а можно через array[index + 1] к соседним
// function print(el, index, array) {
//   console.log(el, array[index + 1])
// }

// numbers.forEach(print) // перебор, расчет без создания нового массива [], нельзя присвоить

// // можно образаться к текущему элементу, а можно через array[index + 1] к соседним
// function doubleNum(num, index, array) {
//   return num * 2
// }

// const numbers2 = numbers.map(doubleNum)

// Практика на маппинг массивов и коллекций
// 1) Дан массив чисел numbers. Создайте на его основе новый массив doubledNumbers,
// в котором каждый элемент из оригинального массива умножен на два.

// 2) Дана коллекция developers. Создайте на ее основе новую коллекцию middleDevelopers,
// увеличив значения ключа salary на 500, а также добавив к ключу skills значение 'TypeScript'.

// const numbers = [1, 22, 12, 66, 90, 51, 11]

// const doubledNumbers = numbers.map((num) => num * 2)

// const developers = [
//   {
//     id: 1,
//     fullName: 'Anton Petrov',
//     skills: ['HTML', 'CSS', 'JavaScript', 'Git', 'React'],
//     salary: 1000,
//   },
//   {
//     id: 2,
//     fullName: 'Ivan Ivanov',
//     skills: ['HTML', 'CSS', 'JavaScript', 'Git', 'Vue'],
//     salary: 950,
//   },
//   {
//     id: 3,
//     fullName: 'Albert Sidorov',
//     skills: ['HTML', 'CSS', 'JavaScript', 'Git', 'jQuery'],
//     salary: 850,
//   },
// ]

// //es5
// const middleDevelopers = developers.map((el) => ({
//   id: el.id,
//   fullName: el.fullName,
//   skills: [...el.skills, 'TypeScript'],
//   salary: el.salary + 500,
// }))

// // es6
// const middleDevelopers = developers.map((el) => ({
//   ...el,
//   skills: [...el.skills, 'TypeScript'],
//   salary: el.salary + 500,
// }))

// console.log(middleDevelopers)

// Filter

// Практика на фильтрацию
// 1) Дан массив строк names. Создайте новый массив shortNames, сохранив в него только значения
// из оригинального массива, длина которых не превышает 5 символов.

// 2) Дана коллекция products. Создайте на базе нее новую коллекцию cheapProducts, поместив в нее
// только элементы оригинальной коллекции, ключ price в которых ниже 300.

// 3) Дана коллекция developers, где у каждого элемента имеется свойство skills. Создайте
// новую коллекцию tsDevelopers, добавив туда только те элементы оригинальной коллекции, у которой в
// массиве skills есть значение 'TypeScript'.

// const names = [
//   'Mikhail',
//   'Ivan',
//   'Albert',
//   'John',
//   'Ian',
//   'Petr',
//   'Alexandr',
//   'Oleg',
//   'Jaroslav',
//   'Vsevolod',
// ]

// const shortNames = names.filter((n) => n.length <= 5)

// const products = [
//   {
//     id: 1,
//     name: 'Intro to JavaScript',
//     category: 'books',
//     price: 150,
//   },
//   {
//     id: 2,
//     name: 'Intro to CSS',
//     category: 'books',
//     price: 120,
//   },
//   {
//     id: 3,
//     name: 'Deep dive into JavaScript',
//     category: 'books',
//     price: 350,
//   },
//   {
//     id: 4,
//     name: 'Intro to PHP',
//     category: 'books',
//     price: 250,
//   },
//   {
//     id: 5,
//     name: 'Deep dive into PHP',
//     category: 'books',
//     price: 350,
//   },
// ]

// const cheapProducts = products.filter((prod) => prod.price <= 300)
// console.log(cheapProducts)

// const developers = [
//   {
//     id: 1,
//     fullName: 'Ivan Ivanov',
//     skills: ['HTML', 'CSS', 'Git', 'Gulp', 'Pug'],
//   },
//   {
//     id: 2,
//     fullName: 'Petr Petrov',
//     skills: ['HTML', 'CSS', 'Git', 'JavaScript', 'npm'],
//   },
//   {
//     id: 3,
//     fullName: 'Ian Melnikov',
//     skills: ['HTML', 'CSS', 'Git', 'JavaScript', 'TypeScript'],
//   },
//   {
//     id: 4,
//     fullName: 'Antonio Banderas',
//     skills: ['HTML', 'CSS', 'Git', 'JavaScript', 'TypeScript', 'React'],
//   },
// ]

// const tsDevelopers = developers.filter((dev) =>
//   dev.skills.includes('TypeScript')
// )

// console.log(tsDevelopers);