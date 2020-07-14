const myTodos = [];

myTodos.push("Buy Bread");
myTodos.push("Record videos");
myTodos.push("Go gym");

myTodos.forEach(function (todo, idx) {
  console.log(`Your task no. ${idx + 1} is : ${todo}`);
});
