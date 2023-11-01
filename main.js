

const library = [];


function Book(title, author, numOfPages, isRead){
    this.title = title;
    this.author = author;

    this.numOfPages = numOfPages;
    this.isRead = isRead;
}

function addBookToLibrary(title, author, numOfPages, isRead){
    let book = new Book(title, author, numOfPages, isRead);
    library.push(book);

    let bookCard = document.createElement('div');
    let bookTitle = document.createElement('h2');
    let bookAuthor = document.createElement('h3');
    let bookPages = document.createElement('h3');

    bookTitle.innerHTML = title;
    bookAuthor.innerHTML = author;
    bookPages.innerHTML = numOfPages;
    
    bookCard.appendChild(bookTitle);
    bookCard.appendChild(bookAuthor);
    bookCard.appendChild(bookPages);

    document.body.appendChild(bookCard);

}