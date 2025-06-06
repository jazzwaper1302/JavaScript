const books = {};

function getBooks() {
  return books;
}

function getBookById(id) {
  const book = books[id]; // Menggunakan const, indentasi 2 spasi, semicolon

  if (!book) { // Indentasi 2 spasi
    return null; // Indentasi 2 spasi dari if, semicolon
  }

  return book.id; // Indentasi 2 spasi, semicolon
}

function saveBook(book) {
  books[book.id] = book; // Indentasi 2 spasi, semicolon
}

saveBook({ id: 'book-1', name: 'Book 1' }); // Spasi di antara { } dan properti, semicolon
const myBooks = getBooks(); // Menggunakan const, semicolon
const myBook = getBookById('book-1'); // Semicolon

console.log(myBooks); // Semicolon
console.log(myBook); // Semicolon