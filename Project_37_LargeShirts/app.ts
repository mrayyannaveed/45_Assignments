function make_shirt(size: string = "large", message: string = "I Love Typescript"){
    console.log(`Making a ${size} t-shirt with the message "${message}" printed on it`);
}

make_shirt()
make_shirt("medium")
make_shirt("small", "Programming Is Love")