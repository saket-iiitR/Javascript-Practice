var john = {
  name: "I am john",
  age: 24,
  isActive: true,
};

var marry = {
  name: "I am Marry",
  age: 23,
  isActive: true,
};

var sam = {
  name: "I am Sam",
  age: 29,
  isActive: false,
};

let users = new Map();
// console.log(typeof users);
// Maps allow to loop or iterate over map

// users.set(key,value)
users.set("john", john);
users.set("marry", marry);
users.set("sam", sam);

console.log(users);
console.log(users.size);

console.log(users.get("john"));

console.log(users.keys());

for (const value of users.values()) {
  console.log(value.name);
}

for (const [key, value] of users.entries()) {
  //   console.log(key + "=" + value.name);
}

users.forEach((value, key) => console.log(`${key}+${value.name}`));

var arroFArr = [
  ["one", "1"],
  ["two", "2"],
  ["three", "3"],
];
var newMap = new Map(arroFArr);

console.log(newMap);

for (const [key, value] of newMap.entries()) {
  console.log(`Key: ${key} Name: ${value}`);
}
