// Типы данных в JS
// undefined
// null
// Boolean
// String
// Number
// Symbol
// Object

// Переменные в ЯП

// const names = 'vasia'
// let age = 25

// Математические операторы
// -, +, *, /, %, **,
// 4 % 3 = 1
// 10**2 = 100 (возведение в квадрат)

// Унарные операторы
// -, +,
// +'2' получаем number 2

// Конкатенация
// 'a' + 'b' получается 'ab'

// Инкремент и декремент
// --, ++,

// +=, -=, *=, /=

// Логические выражения
// >, <, >=, <=, !=, !==, ==, ===

// Составные логические выражения
// И - && (true - оба выражения истины),
// ИЛИ - || (true - хотя бы одно из выражений инстина),

//Сочетания && и ||
// 1 === 2 || (2 === 3 && 4 === 4) // false
// 2 === 2 || (2 === 3 && 4 === 4) // true, тк для оператора ||, 2 === 2 уже true

/*
Значения, которые всегда становятся ложными:

Числа 0 и -0

Пустая строка - ""

false

null

undefined

NaN
*/

// Условный оператор

// if (condition) {
// } else {
// }

// if (condition) {
// } else if (a) {
// } else {
// }

// задание 1

/*
Если число четное, присвойте переменной isOdd значение false.

Если число НЕчетное, присвойте переменной isOdd значение true.
*/
// const x = 10
// let isOdd

// if (x % 2 === 0) {
//   isOdd = false
// } else {
//   isOdd = true
// }

// console.log(isOdd);

// оператор switch

// let statusMove = 'loading'

// switch (statusMove) {
//   case 'inaction':
//     console.log('inaction')
//     break
//   case 'loading':
//     console.log('loading')
//     break
//   case 'response':
//     console.log('response')
//     break
//   case 'error':
//     console.log('error')
//     break
//   default:
//     console.log('default')
// }

// Тернарный оператор (выражение)

// let age = 18

// age >= 18 ? console.log('You are an adult') : console.log('You are small')

// // Тернарный оператор можно вставить в другие выражения, if или switch так уже не сделать
// // console.log('You are', age >= 18 ? 'an adult' : 'small')

// let statusOne = 'idle'
// let statusNumber = statusOne === 'idle' ? 0 : 1
// console.log({ statusNumber })

// Задание 2

/*

1) Перепишите конструкцию if..else на конструкцию с оператором switch.

2) Перепишите конструкцию if..else на тернарный оператор.

*/

// Задание 2.1
// const spainCapital = 'Valencia'
// let isCorrectAnswer

// Конструкция if..else
// if (spainCapital === 'Madrid') {
//     isCorrectAnswer = true;
// } else if (spainCapital === 'madrid') {
//     isCorrectAnswer = true;
// } else if (spainCapital === 'MADRID') {
//     isCorrectAnswer = true;
// } else {
//     isCorrectAnswer = false;
// }

// Добавьте код здесь, переписав конструкцию выше на switch
// switch (spainCapital) {
//   case 'Madrid':
//     isCorrectAnswer = true
//     break

//   case 'madrid':
//     isCorrectAnswer = true
//     break

//   case 'MADRID':
//     isCorrectAnswer = true
//     break

//   default:
//     isCorrectAnswer = false
// }

// Задание 2.2
// const a = 1
// const b = 2
// let result

// if (a + b < 4) {
//   result = 'Мало';
// } else {
//   result = 'Много';
// }

// Добавьте код здесь, переписав конструкцию выше на тернарный оператор
// a + b < 4 ? (result = 'Мало') : (result = 'Много')
