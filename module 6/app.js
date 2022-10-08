// Практика на получение ссылок на HTML-элементы
// Дана html страница с разметкой. В app.js создайте переменные со следующими элементами:

// в переменную title сохраните элемент заголовка h1

// в переменную btn сохраните элемент кнопки button#btn

// в переменную subtitle сохраните элемент h2 из второй секции (с текстом Second section)

// в переменную sections сохраните все элементы section

// const title = document.querySelector('h1')

// const btn = document.getElementsByTagName('button')[0]

// const subtitle = document.querySelector('h2.gray')

// const sections = document.getElementsByTagName('section')

//=======================================

// const btn = document.querySelector("button");
// const inputs = document.querySelectorAll("input");
// const form = document.querySelector("form");

// inputs.forEach((input) => input.addEventListener("keypress", handleEvent));
// form.addEventListener("submit", handleSubmit);

// // btn.addEventListener("click", handleEvent);

// function handleEvent(event) {
//   console.log(event);
//   console.dir(event.target);
//   if (event.key === "Enter") {
//     event.preventDefault();
//     event.target.nextElementSibling.focus();
//   }
// }

// function handleSubmit(event) {
//   event.preventDefault();
//   if (validate()) {
//     //submit AJAX
//     form.reset();
//   } else {
//     alert("исправьте форму");
//   }
// }

// function validate() {
//   const isValid = true;
//   inputs.forEach((input) => {
//     if (!input.value.trim()) {
//       input.style.borderColor = "red";
//       isValid = false;
//     } else {
//       input.style.borderColor = "currentColor";
//     }
//   });
//   return isValid;
// }

//отменить стандартное поведение и отправку формы
// event.preventDefault();

// отменить всплытие
// event.stopPropagation()

// Динамическое создание и удаление элементов

const list = document.getElementById("todos");
document.querySelector("button").addEventListener("click", handleClick);
document.addEventListener("DOMContentLoaded", loadTodos);

function handleClick() {
  const newTodo = this.previousElementSibling.value.trim();
  if (newTodo) {
    createTodo(newTodo);
    savetoStorage(newTodo);

    this.previousElementSibling.value = "";
  } else {
    alert("нету текста");
  }
}

function createTodo(text) {
  const li = document.createElement("li");
  li.innerText = text;
  li.className = "todo-item";
  li.addEventListener("click", removeTodo);
  list.append(li);
}

function removeTodo() {
  this.removeEventListener("click", removeTodo);
  this.remove();
  removetoStorage();
}

// localStorage

function savetoStorage(todo) {
  const todos = JSON.parse(localStorage.getItem("tasks")) || [];
  localStorage.setItem("tasks", JSON.stringify([...todos, todo]));
}

function loadTodos() {
  const todos = JSON.parse(localStorage.getItem("tasks"));

  if (todos) {
    todos.forEach((todo) => {
      createTodo(todo);
    });
  }
}

function removetoStorage() {
  localStorage.clear();
  // это плохой вариант
}
