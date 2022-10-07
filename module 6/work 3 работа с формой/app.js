// Практика на работу с формой
// Дана простая форма авторизации.

// Необходимо отменить отправку формы по умолчанию и проверить поля с логином и
// паролем по следующим признакам:

// поля непустые (если одно из полей пустое, вывести в консоль сообщение
// 	"All fields are required")

// логин и пароль должны соответствовать одной из записей в массива registeredUsers
// файла app.js (в случае несовпадения, вывести в консоль сообщение
// 	"Incorrect login or password")

// если учетные данные подходят, вывести в консоль сообщение "Access granted"
// и очистить поля формы.

const registeredUsers = [
  ["admin", "KoI18"],
  ["manager", "SuperMe108"],
  ["editor", "12345"],
];

const inputs = document.getElementsByTagName("input");
const form = document.getElementsByTagName("form")[0];
const btn = document.getElementsByTagName("button")[0];

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  if (validate()) {
    console.log("Access granted");
    form.reset();
  }
}

function validate() {
  let isValid = true;

  for (let input of inputs) {
    if (!input.value.trim()) {
      console.log("All fields are required");
      isValid = false;
    }
  }

  if (isValid) {
    const login = inputs[0].value;

    const user = registeredUsers.find((user) => user[0] === login);

    if (!user || user[1] !== inputs[1].value) {
      console.log("Incorrect login or password");
      isValid = false;
    }
  }

  return isValid;
}
