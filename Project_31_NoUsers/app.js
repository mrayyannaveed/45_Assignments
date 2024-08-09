"use strict";
let usernames = ["Asad", "Haziq", "Admin", "Bilal", "Sajid"];
usernames.splice(0);
if (usernames.length == 0) {
    console.log("We need to find some users");
}
else {
    console.log(`Hello ${usernames}`);
}
