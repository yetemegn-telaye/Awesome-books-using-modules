import Books from "./modules/Books.js";
import { displayBook } from "./modules/DisplayBooks.js";
import addBook from "./modules/AddBook.js";
import removeBook from "./modules/RemoveBook.js";


const bk = new Books();

if (localStorage.getItem('books') === null) {
  bk.assignBook = [];
} else {
  bk.assignBook = JSON.parse(localStorage.getItem('books'));
}

const books = bk.allBooks;

addBook(books,bk);

displayBook(books);



removeBook(bk);



const theDate = new Date().toUTCString();

const dateDiv = document.querySelector('.date');
dateDiv.innerHTML = theDate;

const listLink = document.getElementById('list-link');
const listNew = document.getElementById('list-new');
const listContact = document.getElementById('list-contact');
const bookList = document.querySelector('.book-list');
const addNew = document.querySelector('.add-new');
const contact = document.querySelector('.contact');

listLink.addEventListener('click', () => {
  bookList.className = 'show';
  addNew.className = 'hide';
  contact.className = 'hide';
});

listNew.addEventListener('click', () => {
  bookList.className = 'hide';
  addNew.className = 'show';
  contact.className = 'hide';
});

listContact.addEventListener('click', () => {
  bookList.className = 'hide';
  addNew.className = 'hide';
  contact.className = 'show';
});
