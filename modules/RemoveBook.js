const removeBook = (bk) => {
  const removeButton = document.querySelectorAll('.remove-btn');
  removeButton.forEach((btn) => {
    btn.addEventListener('click', () => {
      const bookTitle = btn.previousElementSibling.firstElementChild;
      const author = bookTitle.nextElementSibling;
      const obj = {
        title: bookTitle.textContent,
        author: author.textContent,
      };
      bk.assignBook = bk.remove(obj);
      const parent = btn.parentElement;
      parent.remove();
      window.location.reload();
    });
  });
};
export default removeBook;