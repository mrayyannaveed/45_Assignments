"use strict";
console.log("Equality Testing");
console.log("apple" == "apple"); // True
// console.log("Apple" == "apple"); // False
console.log("Lowercase and Uppercase Testing");
console.log("apple".toUpperCase() == "APPLE"); // True
console.log("Apple".toLowerCase() == "apple"); // True
console.log("Numerical Testing");
console.log(20 > 5); // True
console.log(10 < 6); // False
console.log("'AND' and 'OR' Operator Testing");
console.log(true && true); // True
console.log(true && false); // False
console.log(true || false); // True
console.log(false || false); // False
console.log("Testing Whether item is an array");
let fruits = ["Apple", "Mango", "Banana"];
console.log("Is 'Apple' in fruits?");
console.log(fruits.includes("Apple")); // True
console.log("Is 'Strawberry' in fruits?");
console.log(fruits.includes("Strawberry"));
