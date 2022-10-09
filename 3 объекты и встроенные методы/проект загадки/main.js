var riddle = {
  question: 'Висит груша нельзя скушать',
  correctAnswer: 'лампочка',
  hints: ['это не съедобное', 'это не фрукт'],
  tries: 3,
  checkAnswer(answer) {
    if (this.tries < 1) {
      console.log('Игра окончена')
      alert('Игра окончена')
      return
    }
    if (answer.toLocaleLowerCase().includes(this.correctAnswer)) {
      alert('Правильный ответ')
      console.log('Правильный ответ')
      this.tries = 0
    } else {
      alert('Неправильный ответ')
      console.log('Неправильный ответ')
      this.tries--

      const hint = this.hints[this.tries === 2 ? 0 : 1]
      if (this.tries) {
        alert('Подсказка: ' + hint)
      }
    }
  },
}

window.onload = function () {
  document.getElementById('riddle').innerText = riddle.question
}

function check() {
  var input = document.getElementsByTagName('input')[0]

  var guessedAnswer = input.value

  if (guessedAnswer) {
    riddle.checkAnswer(guessedAnswer)
  }
}
