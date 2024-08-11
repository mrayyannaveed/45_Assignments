"use strict";
let magicians = ["David Blaine", "Derren Brown", "Dynamo"];
function make_great(magicians) {
    let great_magicians = [];
    magicians.forEach((magician) => {
        great_magicians.push(`${magician} the Great`);
    });
    return great_magicians;
}
function show_magicians(magicians) {
    magicians.forEach((magician) => {
        console.log(magician);
    });
}
let great_magicians = make_great(magicians.slice());
console.log("Original Magicians");
show_magicians(magicians);
console.log("Great Magicians");
show_magicians(great_magicians);
