let userName = "Saket23";
let userPass = "123@abc";

let userChecker = function (usr, pass) {
  if (usr.includes(userName) && usr.length == userName.length)
    if (pass.includes(userPass) && usr.length == userPass.length) return true;
  return false;
};

console.log(userChecker("Saket23", "13@abc"));
