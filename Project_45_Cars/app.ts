function make_car(manufacturer: string, model: string, ...args: string[] ){
    let car: any ={
        manufacturer: manufacturer,
        model: model,
        args: args
    }
    return car
}

let car = make_car("Honda", "Civic", "Black", "Automatic")
console.log(car);


