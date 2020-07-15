// const sayHello = function (name) {
//   return "Hey there, " + name + "!";
// };
// console.log(sayHello("Sammy"));

const sayHello = (name) => `Hey there ${name}!`;
console.log(sayHello("Sammy"));

const todos = [
  {
    title: "Buy Bread",
    isDone: true,
  },
  {
    title: "Go to Gym",
    isDone: true,
  },
  {
    title: "Record youtube videos",
    isDone: false,
  },
];

const thingsDone = todos.filter((todo) => todo.isDone === true);

// console.log(thingsDone);

const myTodos = [
  {
    title: "Buy Bread",
    isDone: true,
  },
  {
    title: "Go to Gym",
    isDone: true,
  },
  {
    title: "Record youtube videos",
    isDone: false,
  },
  {
    title: "Buy grocery",
    isDone: true,
  },
  {
    title: "Talk Manager",
    isDone: false,
  },
  {
    title: "Jogg",
    isDone: false,
  },
];

const myListRemaining = myTodos.filter(
  (todo) => todo.title && todo.isDone === false
);
myListRemaining.forEach((todo) => console.log(todo.title));
