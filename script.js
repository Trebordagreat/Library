let myLibrary = [];
const content = document.querySelector('.main');
let libraryTemplate = createTable();
content.appendChild(libraryTemplate);
addBookToLibrary('The Hobbit', 'Tolkine', '256', 'read');
addBookToLibrary('Whatever', 'Me', '1', 'not read');
displayLibrary(myLibrary);

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

function displayLibrary (library) {
    for (let i = 0; i < library.length; i++) {
        const book = library[i];
        const newBook = addRow(book.title, book.author, book.pages, book.read);
        libraryTemplate.appendChild(newBook);
    }
}

function createTable() {
    const library = document.createElement('table');
    library.classList.add("library");
    const tableHead = addRow("Title", "Author", "Pages", "Status")
    tableHead.classList.add('header');
    library.appendChild(tableHead);
    return library;   
}

function addRow(bookTitle, bookAuthor, bookPages, bookRead) {
    const row = document.createElement('tr');

    const title = document.createElement('td');
    title.textContent = bookTitle;
    row.appendChild(title);

    const author = document.createElement('td');
    author.textContent = bookAuthor;
    row.appendChild(author);

    const pages = document.createElement('td');
    pages.textContent = bookPages;
    row.appendChild(pages);

    const read = document.createElement('td');
    read.textContent = bookRead;
    row.appendChild(read);

    return row;
}