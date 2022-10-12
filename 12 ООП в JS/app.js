// class Player {
//   constructor(login, score = 100) {
//     this.login = login;
//     this.score = score;
//   }
//   increaseScore(num = 10) {
//     this.score += num;
//   }
//   decreaseScore(num = 10) {
//     this.score -= num;
//   }
// }

// const player1 = {
//   login: "monster",
//   score: 100,
//   increaseScore(num = 10) {
//     this.score += num;
//   },
//   decreaseScore(num = 10) {
//     this.score -= num;
//   },
// };

// const player2 = {
//   login: "user",
//   score: 150,
//   increaseScore(num = 10) {
//     this.score += num;
//   },
//   decreaseScore(num = 10) {
//     this.score -= num;
//   },
// };

// const player3 = new Player("Tor");
// const player4 = new Player("Loki", 200);

// прототипное наследование
// const player3 = new Player("Tor"); имеет скрытый _proto_, который ссылается на prototype класса Player
// и получает методы prototype класса Player

// Создание простого класса и его экземпляров
// Создайте класс Rectangle, который в конструкторе принимает ширину и высоту.
// Класс должен содержать метод area, который при вызове возвращает площадь заданного прямоугольника.

// class Rectangle {
//   constructor(w, h) {
//     this.w = w;
//     this.h = h;
//   }
//   area() {
// 	return this.w * this.h;
//   }
// }

// const rect1 = new Rectangle(5, 6);
// console.log(rect1.area())

// Вопрос 1:
// Какие действия автоматически подразумеваются при использовании оператора new
// для создания экземпляра класса?

// Ответ:
// создание нового объекта с указанием на него через this, добавление ссылки на прототип,
// возвращение созданного объекта из функции-конструктора.

// наследование классов ES6

// class Player {
//   constructor(login, score = 100) {
//     this.login = login;
//     this.score = score;
//   }
//   increaseScore(num = 10) {
//     this.score += num;
//   }
//   decreaseScore(num = 10) {
//     this.score -= num;
//   }
// }

// class PaidPlayer extends Player {
//   constructor(login, score = 100, accBalance = 1000) {
//     // в базовом варианте super вызывает родительский constructor у Player
//     super(login, score);
//     this.accBalance = accBalance;
//   }

//   increaseBalance(amount = 0) {
//     this.accBalance += amount;
//   }
// }

// const player3 = new Player("Tor");
// const player4 = new Player("Loki", 200);
// const pp1 = new PaidPlayer("stark", 200, 100000);

// console.log(pp1);

// статические свойства и методы классов

class Player {
  static totalPlayers = 0;
  constructor(login, score = 100) {
    this.login = login;
    this.score = score;

    Player.totalPlayers++;
  }
  increaseScore(num = 10) {
    this.score += num;
  }
  decreaseScore(num = 10) {
    this.score -= num;
  }

  static create(login) {
    return new Player(login, 250);
  }

  static sortedByScore(a, b) {
    return a.score - b.score;
  }
}

class PaidPlayer extends Player {
  static totalPlayers = 0;

  constructor(login, score = 100, accBalance = 1000) {
    // в базовом варианте super вызывает родительский constructor у Player
    super(login, score);
    this.accBalance = accBalance;
    PaidPlayer.totalPlayers++;
  }

  increaseBalance(amount = 0) {
    this.accBalance += amount;
  }

  static create(login) {
    return new PaidPlayer(login, 250, 1000);
  }
}

const player3 = new Player("Tor");
const player4 = new Player("Loki", 200);
const pp1 = new PaidPlayer("stark", 200, 100000);

console.log(pp1);
