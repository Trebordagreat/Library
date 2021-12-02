let myLibrary = [];

function Book(title, author, pages, read) {
  // the constructor...
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}

function addBookToLibrary(title, author, pages, read) {
  // do stuff here
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}