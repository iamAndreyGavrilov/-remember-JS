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

// class Player {
//   static totalPlayers = 0;
//   constructor(login, score = 100) {
//     this.login = login;
//     this.score = score;

//     Player.totalPlayers++;
//   }
//   increaseScore(num = 10) {
//     this.score += num;
//   }
//   decreaseScore(num = 10) {
//     this.score -= num;
//   }

//   static create(login) {
//     return new Player(login, 250);
//   }

//   static sortedByScore(a, b) {
//     return a.score - b.score;
//   }
// }

// class PaidPlayer extends Player {
//   static totalPlayers = 0;

//   constructor(login, score = 100, accBalance = 1000) {
//     // в базовом варианте super вызывает родительский constructor у Player
//     super(login, score);
//     this.accBalance = accBalance;
//     PaidPlayer.totalPlayers++;
//   }

//   increaseBalance(amount = 0) {
//     this.accBalance += amount;
//   }

//   static create(login) {
//     return new PaidPlayer(login, 250, 1000);
//   }
// }

// const player3 = new Player("Tor");
// const player4 = new Player("Loki", 200);
// const pp1 = new PaidPlayer("stark", 200, 100000);

// console.log(pp1);

// геттеры и сеттеры
// class Player {
//   static totalPlayers = 0;
//   #score;

//   constructor(login, firstName, lastName, score = 100) {
//     this.login = login;
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.#score = score;

//     Player.totalPlayers++;
//   }

// вычисляемое выражение fullName
//   get fullName() {
//     return this.firstName + " " + this.lastName;
//   }
//   set fullName(name) {
//     const [f, l] = name.split(" ");
//     this.firstName = f;
//     this.lastName = l;
//   }

//   get score() {
//     return this.#score;
//   }

//   increaseScore(num = 10) {
//     this.#score += num;
//   }
//   decreaseScore(num = 10) {
//     this.#score -= num;
//   }

//   static create(login) {
//     return new Player(login, 250);
//   }

//   static sortedByScore(a, b) {
//     return a.#score - b.#score;
//   }
// }

// class PaidPlayer extends Player {
//   static totalPlayers = 0;

//   constructor(login, score = 100, accBalance = 1000) {
//     // в базовом варианте super вызывает родительский constructor у Player
//     super(login, score);
//     this.accBalance = accBalance;
//     PaidPlayer.totalPlayers++;
//   }

//   increaseBalance(amount = 0) {
//     this.accBalance += amount;
//   }

//   static create(login) {
//     return new PaidPlayer(login, 250, 1000);
//   }
// }

// const player3 = new Player("Tor");
// const player4 = new Player("Loki", 200);
// const pp1 = new PaidPlayer("stark", 200, 100000);

// const p1 = new Player("m1", "vasily", "popkov", 200);

// // console.log(p1.fullName);

// // p1.lastName = "googlov";

// // console.log(p1.fullName);

// // console.log(player3.#score);

// Использование статических методов, геттеров и сеттеров

// Создайте класс Temperature, который:

// в конструкторе принимает число в градусах Цельсия

// может предоставлять информацию о градусах как в Цельсиях (ключ celsius), так и в Фаренгейтах
// (ключ fahrenheit)

// для экземпляра класса позволяет изменить информацию класса, как по ключу celsius, так и fahrenheit

// содержит статический метод fromFahrenheit для создания экземпляра с автоматически пересчитанным
// значением в Цельсиях (прим.: для округления значений используйте Math.round).

// class Temperature {
//   constructor(celsius) {
//     this.celsius = celsius;
//   }

//   get fahrenheit() {
//     return this.celsius * 1.8 + 32;
//   }

//   set fahrenheit(value) {
//     this.celsius = (value - 32) / 1.8;
//   }

//   static fromFahrenheit(value) {
//     return new Temperature(Math.round((value - 32) / 1.8));
//   }
// }

// const day1 = new Temperature(25);
// console.log(day1.celsius);
// console.log(day1.fahrenheit);

// day1.celsius = 26;
// day1.fahrenheit = 67;

// const day2 = new Temperature(24);

// const day3 = Temperature.fromFahrenheit(88);





// Актуальность классов для создания UI компонентов


// Создание класса для UI Spoiler
// HTML-разметка содержит две группы спойлеров: одну с css-классом collapsible, другую - с collapsible2.

// Необходимо в файле collapser.js создать класс Collapser, который будет принимать в конструктор 
// css-класс для спойлера и автоматически добавлять всем экземплярам функциональность скрытия и отображения 
// информации из соседнего блока с css-классом content.

// В HTML-разметке уже подключен js-файлы и реализована попытка создать соответствующие инстансы 
// класса Collapser. Поэтому по задаче достаточно описать сам JavaScript класс.