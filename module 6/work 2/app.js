// Практика на работу с объектом события
// В html даны кнопки с id clicker1 и clicker2. У кнопок есть атрибут data-clicked,
// в котором хранится информация о количестве кликов по данной кнопке.

// Создайте одну общую функцию для обработки клика на эти кнопки, которая будет
// увеличивать информацию о количестве кликов на той кнопке, на которую был сделан клик.

// Предусмотрите, что количество кнопок в дальнейшем может меняться - три, пять
// кнопок и так далее.

// const btns = document.querySelectorAll("button");

// btns.forEach((btn) => btn.addEventListener("click", handleClick));

// function handleClick(event) {
//   const btn = event.target;

//   btn.dataset.clicked = +btn.dataset.clicked + 1;
//   console.log(event.target);
// }
