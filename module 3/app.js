// Объекты

const dog = {
  name: 'Sanek',
  age: 1,
  color: 'white',
  weight: 5,
  goThis() {
    // console.log(this)
  },
}

dog.goThis()

dog.breed = 'shepherd'
// console.log(dog)

// for (let key in dog) {
//   console.log(dog[key])
// }

const htmlDiv = {
  className: 'column',
  rel: 'main',
  id: 'block',
}

// for (const key in htmlDiv) {
//   console.log(htmlDiv[key])
// }

// for (const iterator of htmlDiv) {
// 	console.log(iterator)
// }

// WORK

// Дан объект person. Добавьте ему два метода:

// greeting - вызов метода должен выводить в консоль "Hello"

// changeSurname - метод должен принимать новое имя и изменять значение свойства surname исходного объекта.

// const person = {
//   name: 'Anna',
//   surname: 'Dance',
//   age: 18,
//   greeting() {
//     console.log('Hello')
//   },
//   changeSurname(newName) {
//     this.surname = newName
//   },
// }

// Методы строк

// WORK

// Использование встроенных методов чисел и строк
// 1) Даны две строки correctAnswer и userAnswer. Необходимо привести обе строки к нижнему регистру и проверить
// содержит ли userAnswer в себе строку correctAnswer. Булевый ответ сохранить в переменную isCorrect.

// 2) Дана переменная salary с числовым значением. Необходимо создать переменную salaryFixed, в которой исходное
// числовое значение округлено до двух знаков после запятой.

// 1.
const correctAnswer = 'JavaScript'
const userAnswer = ' javaScript! '
// TODO: сохранить true или false в зависимости от выполнения условия по заданию 1.
const correctAnswerLower = correctAnswer.toLowerCase()
const userAnswerLower = userAnswer.toLowerCase()
const isCorrect = userAnswerLower.includes(correctAnswerLower)

// 2.
const salary = 15000.2085
const salaryFixed = salary.toFixed(2)

// Методы массивов

// Использование методов массива
// 1) Дан массив fruits. Используя встроенный метод массива, определите есть ли в массиве значение
// 'orange' и ответ сохраните в константу hasOrange.

// 2) Дан массив cars. Используя встроенный метод массива, выберите из него первые три значения
// и сохраните их в константу favoriteCars.

// 3) Создайте константу otherCars, сохранив в нее оставшиеся три значения из исходного массива cars.

// // 1
// const fruits = ['apple', 'banana', 'melon', 'orange']
// const hasOrange = fruits.includes('orange')

// // 2
// const cars = ['BMW', 'Nissan', 'VW', 'Skoda', 'Audi', 'Kia']
// const favoriteCars = cars.slice(0, 3)

// // 3
// const otherCars = cars.slice(3, 6)

// console.log(favoriteCars)
// console.log(otherCars)

// Errors debugging

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('ввели не цифры')
  }
  return a + b
}

try {
  sum()
} catch (error) {
  console.error(error.message)
}

//RegExp - регулярные выражения
