// Coercion is something when JS tries to predict something

console.log("10" - 5);
console.log("10" + 5);

const adder = true + 5;
console.log(adder);

// const giveType = typeof adder;
// console.log(giveType);

const loginDetails = "";
// logic for getting details from DB

const loginID = loginDetails[0];

if (loginDetails) {
  console.log("Allow user to login");
} else {
  console.log("Authentication failed");
}

// Values interpreted as false:
// 1. False
// 2. 0
// 3. ''
// 4. null
// 5. undefined
