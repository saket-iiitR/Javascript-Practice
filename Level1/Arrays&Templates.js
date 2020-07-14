// datatype - Arrays

const superHeroes = ["Captain America", "Thor", "Iron Man", "Spiderman"];

console.log(superHeroes[0]);
console.log(superHeroes[1]);
console.log(superHeroes[2]);
console.log(superHeroes[superHeroes.length - 1]);

console.log(`We have ${superHeroes.length} super heroes`);

const numbers = ["One", "Two", "Three", "Four", "Five", "Six", 7];
console.log(numbers.length);
console.log(numbers);
numbers[1] = "SOMETHING";
console.log(numbers);

// 1. Shift  2. unshift  3. pop  4. push

numbers.shift(); // 1st elemennt is gone
console.log(numbers.shift());

numbers.unshift("SOMETHING@"); // insert element at top
console.log(numbers);

numbers.pop(); // removes the last element of array
console.log(numbers);
console.log("Number removed from last: " + numbers.pop());

numbers.push("Pushed"); // Pushes the element at last
console.log(numbers);

// Delete an element and insert another value there
// splice(starting index, number of elements to be deleted, vales to be inserted)
numbers.splice(2, 1, "Middle");
console.log(numbers);
