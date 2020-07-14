let arr = [1, 2, 3, 4, 5, 6];
arr.push("Hello");
arr.pop();
arr.splice(2, 1, "Middle");
arr.shift();
arr.unshift("World");

var arr2 = function (arr) {
  arr.push("Working");
  return arr;
};

arr.forEach((ele) => {
  console.log(ele);
});

arr.forEach(function (ele, index) {
  console.log(`Starts with ${index}  --${ele}`);
});
console.log(arr2(arr));
