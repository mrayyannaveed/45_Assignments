"use strict";
let currentUsers = ["Asad", "Haziq", "Admin", "Bilal", "Sajid"];
let newUsers = ["Mahad", "Haziq", "Babar", "Ibrahim", "Sajid"];
newUsers.forEach((new_users) => {
    if (currentUsers.some((current_users) => current_users.toLowerCase() === new_users.toLowerCase())) {
        console.log(`${new_users} will need to enter a new username`);
    }
    else {
        console.log(`${new_users} is available`);
    }
});
