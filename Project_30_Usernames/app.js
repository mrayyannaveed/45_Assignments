"use strict";
let usernames = ["Asad", "Haziq", "Admin", "Bilal", "Sajid"];
usernames.forEach(users => {
    if (users == "Admin") {
        console.log(`Hello ${users}, would you like to see a status report.`);
    }
    else {
        console.log(`Hello ${users}, thank you for logging in again`);
    }
});
