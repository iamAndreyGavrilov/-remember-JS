// Проект "Спойлер": практика
// В разметке дана кнопка #myBtn и блок #spoiler, который по умолчанию скрыт.

// Задача:

// При клике на кнопку блок #spoiler должен отображаться.

// При повторном клике на кнопку блок #spoiler снова должен скрываться.

// Когда блок #spoiler отображается, должна быть возможность закрыть его нажатием
// клавиши Escape на клавиатуре

// Когда блок #spoiler скрыт, клавиша Escape обрабатываться не должна.

const btn = document.querySelector("#myBtn");
const spoiler = document.querySelector("#spoiler");

btn.addEventListener("click", toggleSpoiler);

function toggleSpoiler() {
  spoiler.classList.toggle("closed");

  if (spoiler.classList.contains("closed")) {
    detachModalEvents();
  } else {
    attachModalEvents();
  }
}

function handleEscape(event) {
  if (event.key === "Escape") {
    toggleSpoiler();
  }
}

function attachModalEvents() {
  document.addEventListener("keydown", handleEscape);
}

function detachModalEvents() {
  document.removeEventListener("keydown", handleEscape);
}
