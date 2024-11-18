
class Book{
    constructor(title, author, numOfPages, isRead){
        this.title = title;
        this.author = author;
        this.numOfPages = numOfPages;
        this.isRead = isRead;
    }
}

class Library{

      static  modal = document.getElementById("modal");
    static form = document.getElementById('form');
        
        
    static openModal = () => {
            modal.showModal();
        };
        
    static closeModal = () => {
            modal.close();
        };
        
   
    static libraryDiv = document.querySelector(".library");
    static library = [];

    static addBook(event){
        //prevent default submit action
        console.log("adding book");
        event.preventDefault();
        
        //get form data and create book
        const data = new FormData(event.target);
        let book = new Book(data.get("title"), data.get("author"), data.get("number-of-pages"), false);
    
        //add book to array and show all books
        //ckose modal and reset form
        
        this.library.push(book);
        this.showBooks();
        this.modal.close();
        this.form.reset();
    }


// //removing specific book based on remove button
    static removeBook(a){
       this.library.splice(a,1);
       this.showBooks();
    }




////looping through array and creating book card with content

   static showBooks(){
        this.libraryDiv.innerHTML = "";
        for(let i = 0; i < this.library.length; i++){
    
            //card
            let bookCard = document.createElement('div');
            bookCard.classList.add("bookcard");
    
            //book info
            let cardInfo = document.createElement('div');
            cardInfo.classList.add("cardInfo");
    
            let bookTitle = document.createElement('h2');
            let bookAuthor = document.createElement('h3');
            let bookPages = document.createElement('h3');
    
            bookTitle.innerHTML =`Title: ${this.library[i].title}` ;
            bookAuthor.innerHTML = `Author: ${this.library[i].author}`;
            bookPages.innerHTML = `Pages: ${this.library[i].numOfPages}`;
    
            cardInfo.appendChild(bookTitle);
            cardInfo.appendChild(bookAuthor);
            cardInfo.appendChild(bookPages);
            console.log("hello")
    
    
            // //buttons
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
            rmvButton.addEventListener('click', function () {
                Library.removeBook(i)});
    
            // //adding buttons to div
            buttons.appendChild(isRead);
            buttons.appendChild(rmvButton);
      
            // //adding info and buttons to card
            // //adding cards to library div
            bookCard.appendChild(cardInfo);
            bookCard.appendChild(buttons);
            this.libraryDiv.appendChild(bookCard);
        }
    }

}


// Setting up library////////////////////////////////////////////

let book1 = new Book("Harry Potter and the philosopher's stone", "J.K.Rowling", 356, true);
let book2 = new Book("The Hobbit", "J.R.R Tolkien", 600, false);

Library.library.push(book1);
Library.library.push(book2);
Library.showBooks();
Library.form.addEventListener('submit', function(event){
    Library.addBook(event);
});







