// Promise

// function withPromise() {
//   return new Promise((resolve, reject) => {
//     resolve("Hello from Promise");
//   });
// }

// console.log("1");

// setTimeout(() => {
//   console.log("setTimeout");
// }, 0);

// withPromise()
//   .then(console.log)
//   .catch((value) => console.log(value) + "!!!");

// console.log("2");

// Асинхронное получение данных с сервера

// fetch("https://jsonplaceholder.typicode.com/todsos/1")
//   .then((response) => {
//     if (response.ok) {
//       return response.json();
//     } else {
//       throw new Error("error response");
//     }
//   })
//   .then((json) => console.log(json))
//   .catch(console.error);

// CRUD - операции (create, read, update, delete)
// HTTP - POST, GET, PUT | PATCH, DELETE

// fetch("https://jsonplaceholder.typicode.com/posts", {
//   method: "POST",
//   body: JSON.stringify({
//     id: 201,
//     title: "new title",
//     body: "test",
//     userid: 111,
//   }),
//   headers: {
//     "Content-Type": "application/json",
//   },
// })
//   .then((response) => {
//     if (response.ok) {
//       return response.json();
//     } else {
//       throw new Error("error response");
//     }
//   })
//   .then((json) => console.log(json))
//   .catch(console.error);

// AJAX

// Асинхронные функции

// async function getUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();

//     console.log(data);

//     //   return data;
//     // возвращается Promise, значит нужен .then()
//   } catch (error) {
//     console.error(error.message);
//   }
// }

// getUsers().then(console.log);

getUsers();

// const getUsers = async () => {};

// Методы промисов resolve, reject на стадии разработки

// async function getPictures() {
//   // const response = await fetch("https://jsonplaceholder.typicode.com/pictures");
//   // const data = await response.json();
//   // return data;

//   // сделаем заглушку, имитация вызова API https://jsonplaceholder.typicode.com/pictures,
//   //  пока бэкэнд делает апи.

//   // return Promise.resolve([{ id: 1, src: "" }]);

//   // сделаем заглушку, имитация вызова ошибки

//   // return Promise.reject("invalid user");
// }

// getPictures().then().catch();

// Методы промисов all, race

async function getPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return data;
}

async function getUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return data;
}

async function getComments() {
  const response = await fetch("https://jsonplaceholder.typicode.com/comments");
  const data = await response.json();
  return data;
}

// Promise.all([getPosts(), getUsers(), getComments()])
//   .then((values) => {
//     const [posts, users, comments] = values;
//     console.log(posts, users, comments);
//   })
//   .catch(console.error);

// Promise.race - работает как и all, только возвращает ОДИН самый быстрый результат.
Promise.race([getPosts(), getUsers(), getComments()])
  .then(console.log)
  .catch(console.error);
