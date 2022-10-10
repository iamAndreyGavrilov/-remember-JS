(function () {
  // globals
  const todoList = document.getElementById("todo-list");
  const userSelect = document.getElementById("user-todo");
  //form - внутри себя, всегда знает своих детей по name, поэтому можно выбрать сразу form.todo
  // и я получу весь <input id="new-todo" name="todo" type="text" placeholder="new todo" />
  // и через form.todo.value я получу его значение
  const form = document.querySelector("form");

  let todos = [];
  let users = [];

  // attach events
  document.addEventListener("DOMContentLoaded", initApp);
  form.addEventListener("submit", handleSubmit);

  //basic logic
  function getUserName(userId) {
    const user = users.find((u) => u.id === userId);
    return user.name;
  }

  function printTodo({ id, userId, title, completed }) {
    const li = document.createElement("li");
    li.className = "todo-item";
    li.dataset.id = id;
    li.innerHTML = `<span>${title} <i>by</i> <b>${getUserName(
      userId
    )}</b> </span>`;

    const status = document.createElement("input");
    status.type = "checkbox";
    status.checked = completed;

    status.addEventListener("change", handleTodoChange);

    const close = document.createElement("span");
    close.innerHTML = "&times;";
    close.className = "close";

    close.addEventListener("click", handleClose);

    li.prepend(status);
    li.append(close);

    todoList.prepend(li);
  }

  function createUserOption(user) {
    const option = document.createElement("option");
    option.value = user.id;
    option.innerText = user.name;

    userSelect.append(option);
  }

  function removeTodo(todoId) {
    todos = todos.filter((todo) => todo.id !== todoId);

    const todo = todoList.querySelector(`[data-id='${todoId}']`);
    todo.querySelector("input").removeEventListener("change", handleTodoChange);
    todo.querySelector(".close").removeEventListener("click", handleClose);
    todo.remove();
  }

  function alertError(error) {
    alert(error.message);
  }

  //event logic
  function initApp() {
    Promise.all([getAllTodos(), getAllUsers()])
      .then((values) => {
        [todos, users] = values;
        // данные получены, далее их нужно отправить в разметку
        todos.forEach((todo) => {
          printTodo(todo);
        });
        users.forEach((user) => {
          createUserOption(user);
        });
      })
      .catch(console.error);
  }

  function handleSubmit(event) {
    event.preventDefault();

    createTodo({
      userId: Number(form.user.value),
      title: form.todo.value,
      completed: false,
    });
  }

  function handleTodoChange() {
    //с родительского элемента получает id
    const todoId = this.parentElement.dataset.id;
    const completed = this.checked;

    toggleTodoComplete(todoId, completed);
  }

  function handleClose() {
    //с родительского элемента получает id
    const todoId = this.parentElement.dataset.id;

    deleteTodo(todoId);
  }

  // async logic
  async function getAllTodos() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const data = await response.json();
      return data;
    } catch (error) {
      alertError(error);
    }
  }

  async function getAllUsers() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      return data;
    } catch (error) {
      alertError(error);
    }
  }

  async function createTodo(todo) {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos",
        {
          method: "POST",
          body: JSON.stringify(todo),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const newTodo = await response.json();
      printTodo(newTodo);
    } catch (error) {
      alertError(error);
    }
  }

  async function toggleTodoComplete(todoId, completed) {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${todoId}`,
        {
          method: "PATCH",
          body: JSON.stringify({ completed: completed }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();
      console.log(data);

      if (!response.ok) {
        throw new Error("Failed to connect with the server!");
      }
    } catch (error) {
      alertError(error);
    }
  }

  async function deleteTodo(todoId) {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${todoId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        // remove todo from DOM
        removeTodo(todoId);
      } else {
        throw new Error("Failed to connect with the server!");
      }
    } catch (error) {
      alertError(error);
    }
  }
})();
