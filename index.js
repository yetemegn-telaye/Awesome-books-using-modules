import Books from './modules/Books.js';
import displayBook from './modules/DisplayBooks.js';
import addBook from './modules/AddBook.js';
import removeBook from './modules/RemoveBook.js';
import displaySections from './modules/DisplaySections.js';
import { DateTime } from './node_modules/luxon/src/luxon.js';

const bk = new Books();

const main = () => {
  if (localStorage.getItem('books') === null) {
    bk.assignBook = [];
  } else {
    bk.assignBook = JSON.parse(localStorage.getItem('books'));
  }

  const books = bk.allBooks;
  addBook(books, bk);
  displayBook(books);
  removeBook(bk);

  const dateDiv = document.querySelector('.date');
  dateDiv.innerHTML = DateTime.local().toLocaleString(DateTime.DATETIME_FULL);
  displaySections();
};

main();