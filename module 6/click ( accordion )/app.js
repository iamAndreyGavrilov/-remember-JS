// Практика на работу с событием click
// Дана разметка и стили к ней. По умолчанию панели .panel не отображаются. Сделайте так,
// что при клике на кнопки .accordion открывались следующие за ними панели. При повторном клике
// панели должны скрываться.

// Примечание 0: при автотестах некорректно работает querySelector, используйте выборку через
// getElementsByClassName.

// Примечание 1: нельзя повесить обработчик клика на коллекцию элементов, но можно на
// конкретный элемент.

// Примечание 2: используйте селекторы соседей относительно доступных элементов.

// const buttons = document.getElementsByClassName('accordion');

// for (let i=0; i < buttons.length; i++) {
//     buttons[i].addEventListener('click', () => {
//         const panel = buttons[i].nextElementSibling;
//         panel.classList.toggle('show');
//     })
// }

// То же самое, чуть современнее
const buttons = document.querySelectorAll('.accordion')
buttons.forEach((btn) =>
  btn.addEventListener('click', () => {
    const panel = btn.nextElementSibling
    panel.classList.toggle('show')
  })
)
