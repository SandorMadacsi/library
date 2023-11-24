

let libraryDiv = document.querySelector(".library");
const modal = document.getElementById("modal");
let library = [];

let book1 = new Book("Harry Potter and the philosopher's stone", "J.K.Rowling", 356, true);
let book2 = new Book("The Hobbit", "J.R.R Tolkien", 600, false);

library.push(book1);
library.push(book2);

showBooks(library);


const form = document.getElementById('form');

form.addEventListener('submit', addBook);
form.reset(); 

function addBook(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    let book = new Book(data.get("title"), data.get("author"), data.get("number-of-pages"), false);

    library.push(book);
    showBooks(library);
    modal.close();
    form.reset();

   
}


function Book(title, author, numOfPages, isRead){
    this.title = title;
    this.author = author;
    this.numOfPages = numOfPages;
    this.isRead = isRead;
}

const openModal = () => {
    modal.showModal();
  };
  
  const closeModal = () => {
    modal.close();
  };
  

function showBooks(library){
    libraryDiv.innerHTML = "";
    for(i = 0; i < library.length; i++){
        let index = i;
        let bookCard = document.createElement('div');
        let cardInfo = document.createElement('div');
        bookCard.classList.add("bookcard");
        cardInfo.classList.add("cardInfo");
        let bookTitle = document.createElement('h2');
        let bookAuthor = document.createElement('h3');
        let bookPages = document.createElement('h3');
        let buttons = document.createElement('div');
        buttons.classList.add("buttons");


        cardInfo.appendChild(bookTitle);
        cardInfo.appendChild(bookAuthor);
        cardInfo.appendChild(bookPages);

        let isRead = document.createElement('button');
        isRead.classList.add("not-read");
        isRead.classList.add("btn");
        isRead.innerHTML = `not read`;
     


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

        let rmvButton = document.createElement('button');
        rmvButton.classList.add("rmv-btn");
        rmvButton.classList.add("btn");
        rmvButton.innerHTML = "remove";
        rmvButton.addEventListener('click', function(){
            removeBook(index);
        });
        buttons.appendChild(isRead);
        buttons.appendChild(rmvButton);
  

        bookTitle.innerHTML =`Title: ${library[i].title}` ;
        bookAuthor.innerHTML = `Author: ${library[i].author}`;
        bookPages.innerHTML = `Pages: ${library[i].numOfPages}`;
       


        bookCard.appendChild(cardInfo);
        bookCard.appendChild(buttons);
        libraryDiv.appendChild(bookCard);
    }
}

    function removeBook(a){
        console.log(a);
        library.splice(a,1);
        showBooks(library);
}

