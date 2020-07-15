console.log(document);
console.log(document.head);
console.log(document.body);
console.log(document.documentURL);
console.log(document.title);
console.log(document.body);

document.title = "Changed";

console.log(document.getElementById("idone"));
// document.getElementById("idone") = "Changing"; // Not correct

console.log(document.getElementsByClassName("class1"));
