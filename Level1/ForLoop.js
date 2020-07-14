const days = ["Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"];

let sayHekko = function () {
  console.log("Hello World!");
};
days.forEach(sayHekko);

days.forEach(function (day) {
  //   console.log(day);
});

days.forEach(function (ele, index) {
  //   console.log(`Starts with ${index}  --${ele}`);
});

const month = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "July",
  "August",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

month.forEach(function (mon, index) {
  //   console.log(`Month no. ${index + 1} is ${mon}`);
});

for (let i = 0; i < days.length; i++) {
  console.log(days[i]);
}
for (let i = days.length - 1; i >= 0; i--) {
  console.log(days[i]);
}
