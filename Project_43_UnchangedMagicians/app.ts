let magicians: string[] = ["David Blaine", "Derren Brown", "Dynamo"]


function make_great(magicians: string[]): string[]{
    let great_magicians: string[] = []

    magicians.forEach((magician) => {
        great_magicians.push(`${magician} the Great`)
    })
    return great_magicians;
}

function show_magicians(magicians: string[]){
    magicians.forEach((magician) => {
        console.log(magician)
    })
}

let great_magicians = make_great(magicians.slice())
console.log("Original Magicians"); //Original
show_magicians(magicians)
console.log("Great Magicians") // Modified
show_magicians(great_magicians)