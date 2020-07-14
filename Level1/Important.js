console.log(2 === 2.0);

// == operator checks EQUALITY of VALUES
// === operator checks IDENTITY of OBJECTS also

let v1 = "";
let v2 = "";
console.log(v1 == v2);

let v11 = {}; // <- Object
let v22 = {}; // <- Object
console.log(v11 === v22);

let v111 = {}; // <- Object
let v222 = v111; // <- Object
console.log(v111 === v222);
