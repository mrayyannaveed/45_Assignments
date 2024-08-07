let guests: string[] = ["Mahad", "Haris", "Ali"]

for(let a of guests){
    console.log(`${a}, I would Invite you to dinner tonight`);
}

let guestNotComing = "Ali"
console.log(`${guestNotComing}, cannot make it to dinner`);

let newGuest: string = "Saad"

guests[guests.indexOf(guestNotComing)] = newGuest

guests.forEach(guests => {
    console.log(`Dear ${guests}, I would invite you to dinner at Haveli Restaurant`);
})

console.log("\nGood news! I found a bigger dinner table");

guests.unshift("Sheryyar")
guests.splice(Math.floor(guests.length / 2), 0, "Ali")  
guests.push("Huzaifa")

guests.forEach(guests => {
    console.log(`Dear ${guests}, I would Invite you to dinner at Haveli Restaurant`);
    
})
console.log(guests);
