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

const btn = document.querySelector("button");
const inputs = document.querySelectorAll("input");
const form = document.querySelector("form");

inputs.forEach((input) => input.addEventListener("keypress", handleEvent));
form.addEventListener("submit", handleSubmit);

// btn.addEventListener("click", handleEvent);

function handleEvent(event) {
  console.log(event);
  console.dir(event.target);
  if (event.key === "Enter") {
    event.preventDefault();
    event.target.nextElementSibling.focus();
  }
}

function handleSubmit(event) {
  event.preventDefault();
  if (validate()) {
    //submit AJAX
    form.reset();
  } else {
    alert("исправь форму");
  }
}

function validate() {
  const isValid = true;
  inputs.forEach((input) => {
    if (!input.value.trim()) {
      input.style.borderColor = "red";
      isValid = false;
    } else {
      input.style.borderColor = "currentColor";
    }
  });
  return isValid;
}
