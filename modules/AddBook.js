const addBtn = document.querySelector('.add-btn');
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');

let addBook = (books,bk)=>{
    addBtn.addEventListener('click', () => {
        bk.add(titleInput.value, authorInput.value);
        const booksStr = JSON.stringify(books);
        localStorage.setItem('books', booksStr);
        window.location.reload();
      });
}

export default addBook;