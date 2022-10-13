// Актуальность классов для создания UI компонентов

// Создание класса для UI Spoiler
// HTML-разметка содержит две группы спойлеров: одну с css-классом collapsible, другую - с collapsible2.

// Необходимо в файле collapser.js создать класс Collapser, который будет принимать в конструктор
// css-класс для спойлера и автоматически добавлять всем экземплярам функциональность скрытия и отображения
// информации из соседнего блока с css-классом content.

// В HTML-разметке уже подключен js-файлы и реализована попытка создать соответствующие инстансы
// класса Collapser. Поэтому по задаче достаточно описать сам JavaScript класс.

// опишите класс Collapser
class Collapser {
  constructor(target) {
    this.collapsers = document.getElementsByClassName(target);
    this.init();
  }
  init() {
    for (let i = 0; i < this.collapsers.length; i++) {
      this.collapsers[i].addEventListener("click", function () {
        this.classList.toggle("active");
        const content = this.nextElementSibling;

        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
      });
    }
  }
}

new Collapser("collapsible");
new Collapser("collapsible2");
