"use strict";
// Instructions
// Create a simple library system with TypeScript:
class Library {
    constructor(books = []) {
        this.books = books;
    }
    addBook(book) {
        this.books.push(book);
    }
    getBookDetails(isbn) {
        return this.books.find((book) => book.isbn === isbn);
    }
    getAllBook() {
        return this.books.map(item => item.title);
    }
}
class DigitalLibrary extends Library {
    constructor(books, website) {
        super();
        this.website = website;
        this.website = website;
    }
    listBooks() {
        return this.getAllBook();
    }
}
