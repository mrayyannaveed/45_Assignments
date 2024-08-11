"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function make_car(manufacturer, model, ...args) {
    let car = {
        manufacturer: manufacturer,
        model: model,
        args: args
    };
    return car;
}
let car = make_car("Honda", "Civic", "Black", "Automatic");
console.log(car);
