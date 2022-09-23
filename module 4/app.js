// Функции и процедуры

// Это Функция, если есть return значит что-то возвращается и это можно положить куда-то
// function sum(a, b) {
//   return a + b
// }
// const res = sum(2, 2)
// console.log(res)

// Это процедура
// function sum2(a, b) {
//   console.log(a + b)
// }
// sum2(4, 4)

// Функции и память

// function sum(a, b) {
//   //a + b локальные параметры при вызове
//   return a + b
// }

// const res = sum(4, 4) //результат работы функции - глобальная память
// const res2 = sum(6, 6)

// Варианты записи функций

// 1. Function Declaration

// function name(a, b) {
// return a + b
// }

// 2. expression

// const sum = function (a, b) {
//   return a + b
// }

// 3. IIFE
// (function (a, b) {
//   return a + b
// })(2, 2)

// 4. arrow

// const sum = (a, b) => {
//   return a + b
// }

// const sum = (a, b) => a + b

// const addOne = (x) => x + 1

// WORK

// Практика создания функциональных выражений
// Создайте функцию (как функциональное выражение - function expression), которая принимает 4 числа
// и возвращает их среднее арифметическое.

// Сохраните функцию в переменную average.

// const average = function (a, b, c, d) {
//   return (a + b + c + d) / 4
// }
// console.log(average(1, 1, 1, 1))

// // Практика создания стрелочных функций
// // 1) Создайте стрелочную функцию, которая принимает число и возвращает квадрат этого числа
// // (использую короткую запись стрелочной функции). Сохраните функцию в переменную square.

// const square = (n) => n * n

// // 2) Создайте стрелочную функцию, которая принимает 2 числа и возвращает их произведение.
// // Сохраните функцию в переменную multiply.

// const multiply = (n1, n2) => n1 * n2

// // 3) Создайте стрелочную функцию, которая принимает возраст, проверяет его на критерий 18+,
// // и в зависимости от проверки: печатает в консоль "welcome" или "access denied".
// // Сохраните функцию в переменную checkAge.

// const checkAge = (age) => {
//   if (age >= 18) {
//     console.log('welcome')
//   } else {
//     console.log('access denied')
//   }
// }

// Области видимости (Scope)
// {} - локальная область видимости
// - глобальная область видимости

// Коллбеки и функции высшего порядка

// function callback(arr, instructions) {
//   const res = []
//   for (let i = 0; i < arr.length; i++) {
//     const element = arr[i]
//     res.push(instructions(element))
//   }
//   return res
// }

// function square(num) {
//   return num ** 2
// }

// const sum = callback([1, 2, 11, 4], square)
// console.log(sum);

// Практика по созданию функций высшего порядка
// Создайте функции-колбэки isOdd и isEven.  Обе принимают число, и возвращают true, соответственно,
// isOdd если переданное число нечетное, а isEven - когда число четное. В противном случае функции
// возвращают false.

// function filterArray(array, callback) {
//   const newArray = []
//   for (let i = 0; i < array.length; i += 1) {
//     if (callback(array[i])) newArray.push(array[i])
//   }
//   return newArray
// }
// const numbers = [1, 2, 3, 4, 5]

// function isOdd(num) {
//   return num % 2 !== 0
// }
// function isEven(num) {
//   return num % 2 === 0
// }

// // Для проверки используйте логи (раскомментируйте их после написания функций)
// console.log(filterArray(numbers, isEven)) // Должен вывести: [2, 4]
// console.log(filterArray(numbers, isOdd)) // Должен вывести: [1, 3, 5]

// Рекурсия
