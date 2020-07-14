let sayHekko = function (name) {
  console.log("Hello World!");
  console.log(`Hey! ${name}`);
};
sayHekko("Saket");

let fullNameMaker = function (firstName, lastName) {
  console.log("Welcome to the World!");
  console.log(`Welcome ${firstName} ${lastName}`);
};
fullNameMaker("Saket", "Tiwari");

let myAdder = function (num1, num2) {
  return num1 + num2;
};
console.log(myAdder(1, 3));

let multiplier = function (num1, num2) {
  return num1 * num2;
};
console.log(multiplier(5, 7));

let guestUser = function (name = "Guest", courseCount = 0) {
  return "Hello " + name + " and your course count is " + courseCount;
};
console.log(guestUser());
