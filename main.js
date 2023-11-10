

let libraryDiv = document.querySelector(".library");
const library = [];

let book1 = new Book("Harry Potter and the philosopher's stone", "J.K.Rowling", 356, true);
let book2 = new Book("The Hobbit", "J.R.R Tolkien", 600, false);

library.push(book1);
library.push(book2);

showBooks(library);







function Book(title, author, numOfPages, isRead){
    this.title = title;
    this.author = author;
    this.numOfPages = numOfPages;
    this.isRead = isRead;
}

function showForm(){
    const dialog = document.getElementById("form-dialog");
    dialog.open = true;
}


function addBook(title, author, numOfPages, isRead){
    let book = new Book(title, author, numOfPages, isRead);
    library.push(book);
    showBooks(library);

}



function showBooks(library){
    // libraryDiv.innerHTML = "";
    for(i = 0; i < library.length; i++){

        
        let bookCard = document.createElement('div');
        bookCard.classList.add("bookcard");
        let bookTitle = document.createElement('h2');
        let bookAuthor = document.createElement('h3');
        let bookPages = document.createElement('h3');

        bookTitle.innerHTML = library[i].title;
        bookAuthor.innerHTML = library[i].author;;
        bookPages.innerHTML = library[i].numOfPages;;
        
        bookCard.appendChild(bookTitle);
        bookCard.appendChild(bookAuthor);
        bookCard.appendChild(bookPages);

        libraryDiv.appendChild(bookCard);
    }
}