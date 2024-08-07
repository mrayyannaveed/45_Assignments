"use strict";
let guests = ["Mahad", "Haris", "Ali"];
for (let a of guests) {
    console.log(`${a}, I would Invite you to dinner tonight`);
}
let guestNotComing = "Ali";
console.log(`${guestNotComing}, cannot make it to dinner`);
let newGuest = "Saad";
guests[guests.indexOf(guestNotComing)] = newGuest;
guests.forEach(guests => {
    console.log(`Dear ${guests}, I would invite you to dinner at Haveli Restaurant`);
});
console.log("\nGood news! I found a bigger dinner table");
guests.unshift("Sheryyar");
guests.splice(Math.floor(guests.length / 2), 0, "Ali");
guests.push("Huzaifa");
guests.forEach(guests => {
    console.log(`Dear ${guests}, I would Invite you to dinner at Haveli Restaurant`);
});
console.log(guests);
console.log(`\nSorry, I can invite only two guests for dinner`);
while (guests.length > 2) {
    let removedGuests = guests.pop();
    console.log(`Sorry ${removedGuests}, I can't invite you to dinner`);
}
console.log(guests);
guests.splice(0, guests.length);
console.log(guests);
