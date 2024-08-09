"use strict";
let ordinalNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let a of ordinalNum) {
    if (a == 1) {
        console.log(`${a}st`);
    }
    else if (a == 2) {
        console.log(`${a}nd`);
    }
    else if (a == 3) {
        console.log(`${a}rd`);
    }
    else {
        console.log(`${a}th`);
    }
}
