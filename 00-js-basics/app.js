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

// Массивы

// const arr = [12, 13, 15, 14, 55]
// console.log(arr[0])
// console.log(arr[arr.length - 1])

// const strs = ['abc', 'cde']

// strs.push('new item')
// strs.push('new item 2')

// console.log(strs)
// strs.pop()
// console.log(strs)

// // Задание 3
// // 3.1) Создайте массив numbers и сохраните в нем 3 числа - 1, 2 и 3
// const numbers = [1, 2, 3]

// // 3.2) Создайте переменную luckyNumber и сохраните в него последнее число из массива (используя индекс массива).
// const luckyNumber = numbers[2]

// // 3.3) Удалите последний элемент массива и добавьте в конец массива два новых числа.
// numbers.pop()
// numbers.push(4, 5)
// // numbers.push(5)

// console.log(numbers)
// console.log(luckyNumber)

// Циклы
// const numbers = [1, 2, 3, 55, 52, 66, 74, 35, 89]

// let index = 0

// while (index < numbers.length) {
//   numbers[index] *= 2
//   console.log(numbers[index])
//   index++
// }

// work -

// Дан массив чисел. В цикле while обойдите массив и значения всех элементов с нечетным индексом
// умножьте на 2.
// Значения элементов с четным индексом должны остаться без изменения.

// const numbers = [2, 7, 19, 22, 38, 9, 11, 10, 10]
// let index = 0
// while (index < numbers.length) {
//   if (index % 2 !== 0) {
//     numbers[index] *= 2
//     console.log(numbers[index])
//   }
//   index++
// }

// FOR

// const numbers = [2, 7, 19, 22, 38, 9, 11, 10, 100]

// for (let i = 0; i < numbers.length; i++) {
//   numbers[i] *= 2
//   console.log(numbers[i])
// }

// const numbers = [1, 2, 3, 4, 5, 6]
// for (let i = 0; i < numbers.length; i++) {
//   if (i % 2 === 0) {
//     numbers[i] += 3
//   }
// }

// ЦИКЛ break

// let tries = 0

// while (tries < 3) {
//   let age = +prompt('Сколько вам лет?')

//   if (age) {
//     alert('Welcome')
//     break
//   }
//   tries++
//   alert('Введите число')
// }
// alert('end')

// Оператор continue

// work

//Обойдите циклом массив чисел numbers и сохраните в новый массив evenNumbers первые три четных
// числа из оригинального массива.

// Предусмотрите выход из цикла, когда в массиве evenNumbers уже есть три значения.

// const numbers = [1, 2, 2, 13, 11, 7, 18, 20, 22, 14, 15]

// const evenNumbers = []

// for (let i = 0; i < numbers.length; i++) {
//   if (evenNumbers.length >= 3) {
//     break
//   }

//   if (numbers[i] % 2 === 0) {
//     evenNumbers.push(numbers[i])
//   }
// }

// console.log(evenNumbers)
