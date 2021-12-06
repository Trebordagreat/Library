let myLibrary = [];
const content = document.querySelector('.main');
let libraryTemplate = createTable();
content.appendChild(libraryTemplate);
displayLibrary(myLibrary);

const inputBook = document.createElement('button');
inputBook.textContent = "NEW BOOK";
inputBook.addEventListener('click', updateLibrary)
inputBook.classList.add('inputBook');
content.appendChild(inputBook); 

function Book(title, author, pages, read, index) {
  // the constructor...
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.index = index
}

function addBookToLibrary(title, author, pages, read) {
  // do stuff here
  const newBook = new Book(title, author, pages, read, myLibrary.length);
  myLibrary.push(newBook);
  
}

function updateLibrary () {
    title = prompt("What is the title of the book?");
    author = prompt("Who wrote authored the book?");
    pages = prompt("How many pages are in the book?");
    read = confirm("Have you read the book?");
    addBookToLibrary(title, author, pages, read);
    const addedBook = addRow(title, author, pages, read);
    libraryTemplate.appendChild(addedBook);
    displayLibrary(myLibrary);  
};

function displayLibrary (library) {
    const books = document.querySelectorAll('.book');
    books.forEach(book => libraryTemplate.removeChild(book));
    for (let i = 0; i < library.length; i++) {
        const book = library[i];
        const newBook = addRow(book.title, book.author, book.pages, book.read);
        newBook.classList.add(`${ i }`)
        newBook.appendChild(addReadToggle(i));
        newBook.appendChild(addRemoveButton(i));
        libraryTemplate.appendChild(newBook);
    }
}

function createTable() {
    const library = document.createElement('table');
    library.classList.add("library");
    const tableHead = addRow("Title", "Author", "Pages", "Status")
    tableHead.classList.add('header');
    tableHead.classList.remove('book');
    const options = document.createElement('td');
    options.setAttribute('colspan', '2');
    options.textContent = "Options";
    tableHead.appendChild(options);
    library.appendChild(tableHead);
    return library;   
}

function addRow(bookTitle, bookAuthor, bookPages, bookRead, index) {
    const row = document.createElement('tr');
    row.classList.add('book');

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
    if (bookRead === true) {
        read.textContent = "Read";
    }
    else if (bookRead === "Status") {
        read.textContent = "Read Status";
    }
    else {
        read.textContent = "Not Read";
    }
    row.appendChild(read);

    return row;
}

function addRemoveButton (index) {
    const removeContainer = document.createElement('td');
    const removeButton = document.createElement('button');
    removeButton.textContent = "REMOVE";
    removeContainer.appendChild(removeButton);
    removeButton.addEventListener('click', () => {
        myLibrary.splice(index, 1);   
        displayLibrary(myLibrary);
    });
    return removeContainer;
};

function addReadToggle (index) {
    const readToggleDiv = document.createElement('td');
    const readToggleButton = document.createElement('input');
    readToggleButton.setAttribute('type', 'checkbox');
    if (myLibrary[index].read === true) {
        readToggleButton.checked = true;
    }
    readToggleDiv.appendChild(readToggleButton);
    readToggleButton.addEventListener('change', () => {
        if (!readToggleButton.checked) {
            myLibrary[index].read = false;
            readToggleButton.checked = false;
        }
        else {
            myLibrary[index].read = true;
            readToggleButton.checked = true;
        }

        displayLibrary(myLibrary);
    })

    return readToggleDiv;
}
