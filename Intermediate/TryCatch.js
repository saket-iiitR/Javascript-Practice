const convertToRs = (dollar) => {
  if (typeof dollar === "number") return 75 * dollar;
  else throw Error("Amount needs to be in number");
};

// const myValue = convertToRs("5");

// console.log(myValue);

try {
  const myValue = convertToRs("5");
  console.log(myValue);
} catch (error) {
  console.log(error.message);
}
