let displaySections = ()=>{
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
}

export default displaySections;