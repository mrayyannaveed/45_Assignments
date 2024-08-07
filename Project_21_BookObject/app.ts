type Book ={
    title: string
    author: string
    yearpublished: number
}

let book: Book ={
    title: "Harry Potter and the philosopher's stone",
    author: "J.K Rowling",
    yearpublished: 2001
}

console.log(`Book Info: ${book.title} by ${book.author}, published in ${book.yearpublished}`);
