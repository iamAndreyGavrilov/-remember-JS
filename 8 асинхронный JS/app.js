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

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: JSON.stringify({
    id: 201,
    title: "new title",
    body: "test",
    userid: 111,
  }),
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("error response");
    }
  })
  .then((json) => console.log(json))
  .catch(console.error);
