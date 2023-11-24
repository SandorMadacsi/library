

// Setting up library////////////////////////////////////////////

let libraryDiv = document.querySelector(".library");
let library = [];

let book1 = new Book("Harry Potter and the philosopher's stone", "J.K.Rowling", 356, true);
let book2 = new Book("The Hobbit", "J.R.R Tolkien", 600, false);

library.push(book1);
library.push(book2);
showBooks(library);

//Modal and Form/////////////////////////////////////////////////
const modal = document.getElementById("modal");
const form = document.getElementById('form');
form.addEventListener('submit', addBook);

const openModal = () => {
    modal.showModal();
  };
  
  const closeModal = () => {
    modal.close();
  };


//Book Object ////////////////////////////////////////////////////
function Book(title, author, numOfPages, isRead){
    this.title = title;
    this.author = author;
    this.numOfPages = numOfPages;
    this.isRead = isRead;
}

//Adding Book to library
function addBook(event) {
    //prevent default submit action
    event.preventDefault();
    
    //get form data and create book
    const data = new FormData(event.target);
    let book = new Book(data.get("title"), data.get("author"), data.get("number-of-pages"), false);

    //add book to array and show all books
    //ckose modal and reset form
    library.push(book);
    showBooks(library);
    modal.close();
    form.reset();
}

//removing specific book based on remove button
function removeBook(a){
    library.splice(a,1);
    showBooks(library);
}

//looping through array and creating book card with content
function showBooks(library){
    libraryDiv.innerHTML = "";
    for(i = 0; i < library.length; i++){
        let index = i;

        //card
        let bookCard = document.createElement('div');
        bookCard.classList.add("bookcard");

        //book info
        let cardInfo = document.createElement('div');
        cardInfo.classList.add("cardInfo");


        let bookTitle = document.createElement('h2');
        let bookAuthor = document.createElement('h3');
        let bookPages = document.createElement('h3');

        bookTitle.innerHTML =`Title: ${library[i].title}` ;
        bookAuthor.innerHTML = `Author: ${library[i].author}`;
        bookPages.innerHTML = `Pages: ${library[i].numOfPages}`;

        cardInfo.appendChild(bookTitle);
        cardInfo.appendChild(bookAuthor);
        cardInfo.appendChild(bookPages);


        //buttons
        let buttons = document.createElement('div');
        buttons.classList.add("buttons");


        //isRead button is false initially
        let isRead = document.createElement('button');
        isRead.classList.add("not-read");
        isRead.classList.add("btn");
        isRead.innerHTML = `not read`;
     

        //logic to switch isRead state
        isRead.addEventListener("click", function(){
            if(isRead.classList.contains('read')){
                isRead.classList.remove('read');
                isRead.classList.add('not-read');
                isRead.innerHTML = `not read`;
            }else{
                isRead.classList.remove('not-read');
                isRead.classList.add('read');
                isRead.innerHTML = `read`;
            }
        });

        //remove button
        let rmvButton = document.createElement('button');
        rmvButton.classList.add("rmv-btn");
        rmvButton.classList.add("btn");
        rmvButton.innerHTML = "remove";
        rmvButton.addEventListener('click', function(){
            removeBook(index);
        });

        //adding buttons to div
        buttons.appendChild(isRead);
        buttons.appendChild(rmvButton);
  
        //adding info and buttons to card
        //adding cards to library div
        bookCard.appendChild(cardInfo);
        bookCard.appendChild(buttons);
        libraryDiv.appendChild(bookCard);
    }
}


