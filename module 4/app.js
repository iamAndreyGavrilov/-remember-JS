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

// Функция вызвает саму себя

// 1. Базовое условие(терминальное)
// 2. Правило движения по рекурсии

// function factorial(n) {
//   if (n === 0) {
//     return 1
//   }

//   return n * factorial(n - 1)
// }

// console.log(factorial(3))

// let counter = 0
// function repeater(char) {
//   counter++

//   if (counter === 5) {
//     counter = 0
//     return char
//   }
//   return char + repeater(char)
// }

// console.log(repeater('x'))
// console.log(repeater('f2'))

// Практика на рекурсию
// Напишите функцию getLength, которая в качестве параметра будет принимать массив
// и рекурсивно высчитывать его длину (количество элементов).

// По условию задачи нельзя использовать встроенное свойство length массива.

// Используйте метод pop для удаления элементов массива, чтобы подсчитать итоговое количество.

// function getLength(arr) {
//   // базовый случай (терминальный)
//   if (arr.pop() === undefined) {
//     return 0
//   }
//   // рекурсивный вызов
//   return 1 + getLength(arr)
// }

// console.log(getLength([1, 2, 3, 4]))

// Замыкания в JS
// 1. функции, которые возвращаются из других функций
// 2. возвращаемая функция запоминает scope

// function hello(name) {
//   const helloName = () => {
//     console.log('hello', name)
//   }
//   return helloName
// }
// const hi = hello('vasia')
// hi()

// function ounter() {
//   let counter = 0

//   function increment() {
//     console.log(++counter)
//   }
//   return increment
// }

// const count1 = ounter()
// count1()
// count1()
// count1()

// const count2 = ounter()
// count2()
// count2()
// count2()

// Практика на замыкание
// Создайте функцию addByX. Которая принимает 1 параметр (число) и возвращает новую функцию,
// которая также принимает число и возвращает его сумму с исходным параметром.

// Примеры использования:

// function addByX(num1) {
//   function sum(num2) {
//    return num1 + num2
//   }
//   return sum
// }

// const addByTwo = addByX(2)
// addByTwo(3) // 5
// addByTwo(5) // 7

// const addByFour = addByX(4)
// addByFour(3) // 7
// addByFour(5) // 9

// Контекст вызова функции (THIS)

// const cat = {
//   name: 'Mysia',
//   say() {
//     const greeting = () => console.log(this.name)
//     // function greeting() {
//     //   console.log(this.name)
//     // }
//     setTimeout(greeting, 1000)
//   },
// }
// cat.say()

// Уточнение контекста вызова функции (THIS)

// const developer = {
//   name: 'Vasia',
//   salary: 2500,

//   getBonus(sum1, sum2) {
//     console.log(this.name, 'зп и бонус', this.salary + sum1 + sum2)
//   },
// }

// developer.getBonus(150, 250)

// const manager = {
//   name: 'anna',
//   salary: 1500,
// }

// developer.getBonus.call(manager, 150, 250)
// developer.getBonus.apply(manager, [150, 250])

// //создаем привязку и у manager появляется свой метод getBonus
// manager.getBonus = developer.getBonus.bind(manager)
// manager.getBonus(150, 250)

// Практика на использование контекста
// Дан объект supporter1. Опишите его метод chant, при вызове которого с задержкой в 1 секунду
// в консоль выводится сообщение "Forza Milan".

// Затем привяжите к объекту supporter2 метод chant таким образом, чтобы при вызове спустя 1 секунду
// в консоль выводилось сообщение "Forza Inter".

// const supporter1 = {
//   club: 'Milan',

//   chant() {
//     const foo = () => console.log('Forza ' + this.club)
//     setTimeout(foo, 1000)
//   },
// }
// supporter1.chant()

// const supporter2 = {
//   club: 'Inter',
// }

// supporter2.chant = supporter1.chant.bind(supporter2)
// supporter2.chant()

// Проект. Практика
// Создайте функцию censor, которая не принимает аргументов. Функция должна возвращать новую функцию,
// принимающую опционально 1 или 2 параметра (оба - строки).

// Когда возвращаемая функция принимает 2 параметра, то она ничего не возвращает, а сохраняет
// полученные значения как пару (пара - это массив с двумя значениями).

// Когда возвращаемая функция принимает 1 параметр, то она возвращает полученную строку, заменив
// в ней все слова, согласно ранее сохранённым парам.

// Пример использования:

const changeScene = censor()

changeScene('PHP', 'JS')

changeScene('backend', 'frontend')

console.log(
  changeScene(
    'PHP is the most popular programming language for backend web-development'
  )
) // должно распечатать 'JS is the most popular programming language for frontend web-development'

// Примечание: в переданной строке, в качестве единственного параметра, замена происходит согласно
// парам, где первое значение пары - что мы хотим заменить, второе значение пары - на что хотим заменить.

function censor() {
  const censoredArr = []
  return function (str1, str2 = '') {
    if (str2) {
      censoredArr.push([str1, str2])
    } else {
      for (let pair of censoredArr) {
        str1 = str1.replace(new RegExp(pair[0], 'gi'), pair[1])
      }
      return str1
    }
  }
}
