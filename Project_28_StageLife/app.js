"use strict";
let personAge = 19;
if (personAge < 2) {
    console.log("The Person is a Baby");
}
else if (personAge >= 2 && personAge < 4) {
    console.log("The Person is a Toddler");
}
else if (personAge >= 4 && personAge < 13) {
    console.log("The Person is a Kid");
}
else if (personAge >= 13 && personAge < 20) {
    console.log("The Person is a Teenager");
}
else if (personAge >= 20 && personAge < 65) {
    console.log("The Person is an Adult");
}
else {
    console.log("The Person is an elder");
}
