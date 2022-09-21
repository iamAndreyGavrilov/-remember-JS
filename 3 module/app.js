// Объекты

const dog = {
  name: 'Sanek',
  age: 1,
  color: 'white',
  weight: 5,
  goThis() {
    console.log(this)
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
