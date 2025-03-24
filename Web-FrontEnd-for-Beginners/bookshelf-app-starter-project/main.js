const books = [];
const RENDER_EVENT = 'render_book';

document.addEventListener('DOMContentLoaded', function () {

  document.addEventListener(RENDER_EVENT, function () {
    console.log(books);
  });

  const bookForm = document.getElementById('bookForm');
  bookForm.addEventListener('submit', function (event) {
    event.preventDefault();
    addBook();
  });

  function addBook() {
    const bookForm = document.getElementById('bookForm');
    const editId = bookForm.getAttribute('data-edit-id');
  
    const title = document.getElementById('bookFormTitle').value;
    const author = document.getElementById('bookFormAuthor').value;
    const year = Number(document.getElementById('bookFormYear').value);
    const isComplete = document.getElementById('bookFormIsComplete').checked;
  
    if (editId) {
      const bookIndex = findBookIndex(Number(editId));
      if (bookIndex !== -1) {
        books[bookIndex] = {
          id: Number(editId),
          title,
          author,
          year,
          isComplete
        };
      }
      bookForm.removeAttribute('data-edit-id');
    } else {
      const id = new Date().getTime();
      const bookObject = generateBookObject(id, title, author, year, isComplete);
      books.push(bookObject);
    }
  
    document.dispatchEvent(new Event(RENDER_EVENT));
    saveData();
    bookForm.reset();
    document.getElementById('formTitle').innerText = "Tambah Buku Baru";
  }
  

  function generateBookObject(id, title, author, year, isComplete) {
    return {
      id,
      title,
      author,
      year,
      isComplete
    }
  }

  function makeBookList(bookObject) {
    const bookTitle = document.createElement('h3');
    bookTitle.setAttribute('data-testid', 'bookItemTitle');
    bookTitle.innerText = bookObject.title;
    
    const bookAuthor = document.createElement('p');
    bookAuthor.setAttribute('data-testid', 'bookItemAuthor');
    bookAuthor.innerText = `Penulis: ${bookObject.author}`;
    
    const bookYear = document.createElement('p');
    bookYear.setAttribute('data-testid', 'bookItemYear');
    bookYear.innerText = `Tahun: ${bookObject.year}`;

    const textContainer = document.createElement('div');
    textContainer.classList.add('book-desc');
    textContainer.append(bookTitle, bookAuthor, bookYear);

    const container = document.createElement('div');
    container.classList.add('item', 'shadow');
    container.append(textContainer);
    container.setAttribute('data-testid', 'bookItem');
    container.setAttribute('data-bookid', bookObject.id);

    if (bookObject.isComplete) {
      const notFinishYetButton = document.createElement('button');
      notFinishYetButton.classList.add('undo-button');
      notFinishYetButton.innerText = "Belum selesai dibaca";
      notFinishYetButton.setAttribute('data-testid', 'bookItemIsCompleteButton');
      notFinishYetButton.addEventListener('click', function () {
        undoBookFromFinished(bookObject.id);
      });

      const editButton = document.createElement('button');
      editButton.classList.add('edit-button');
      editButton.innerText = "Edit Buku";
      editButton.setAttribute('data-testid', 'bookItemEditButton');
      editButton.addEventListener('click', function () {
        editBook(bookObject);
        window.scrollTo(0, 0);
      });

      const deleteButton = document.createElement('button');
      deleteButton.classList.add('delete-button');
      deleteButton.innerText = "Hapus Buku";
      deleteButton.setAttribute('data-testid', 'bookItemDeleteButton');
      deleteButton.addEventListener('click', function () {
        deleteBook(bookObject.id);
      });

      const buttonContainer = document.createElement('div');
      buttonContainer.classList.add('button-container');
      buttonContainer.append(notFinishYetButton, editButton, deleteButton);

      container.append(buttonContainer);
    } else {
      const finishedButton = document.createElement('button');
      finishedButton.classList.add('undo-button');
      finishedButton.innerText = "Selesai dibaca";
      finishedButton.setAttribute('data-testid', 'bookItemIsCompleteButton');
      finishedButton.addEventListener('click', function () {
        addBookToFinished(bookObject.id);
      });

      const editButton = document.createElement('button');
      editButton.classList.add('edit-button');
      editButton.innerText = "Edit Buku";
      editButton.setAttribute('data-testid', 'bookItemEditButton');
      editButton.addEventListener('click', function () {
        editBook(bookObject);
        window.scrollTo(0, 0);
      });

      const deleteButton = document.createElement('button');
      deleteButton.classList.add('delete-button');
      deleteButton.innerText = "Hapus Buku";
      deleteButton.setAttribute('data-testid', 'bookItemDeleteButton');
      deleteButton.addEventListener('click', function () {
        deleteBook(bookObject.id);
      });

      const buttonContainer = document.createElement('div');
      buttonContainer.classList.add('button-container');
      buttonContainer.append(finishedButton, editButton, deleteButton);
      container.append(buttonContainer);
    }
    return container;
  }

  document.addEventListener(RENDER_EVENT, function () {
    const unfinishBookList = document.getElementById('incompleteBookList');
    unfinishBookList.innerHTML = '';

    const finishedBookList = document.getElementById('completeBookList');
    finishedBookList.innerHTML = '';

    for (const book of books) {
      const bookListElement = makeBookList(book);
      if (!book.isComplete) {
        unfinishBookList.append(bookListElement);
      } else {
        finishedBookList.append(bookListElement);
      }
    }
  });

  function addBookToFinished(id) {
    const bookTarget = findBook(id);

    if (bookTarget === null) return;

    bookTarget.isComplete = true;
    document.dispatchEvent(new Event(RENDER_EVENT));
    saveData();
  }

  function findBook(id) {
    for (const book of books) {
      if (book.id === id) {
        return book;
      }
    }
    return null;
  }

  function undoBookFromFinished(id) {
    const bookTarget = findBook(id);

    if (bookTarget === null) return;

    bookTarget.isComplete = false;
    document.dispatchEvent(new Event(RENDER_EVENT));
    saveData();
  }

  function editBook(book) {
    // Isi form tambah buku dengan data buku yang mau diedit
    document.getElementById('formTitle').innerText = "Edit Buku";
    document.getElementById('bookFormTitle').value = book.title;
    document.getElementById('bookFormAuthor').value = book.author;
    document.getElementById('bookFormYear').value = book.year;
    document.getElementById('bookFormIsComplete').checked = book.isComplete;
  
    // Simpan ID buku yang mau diedit di atribut form misalnya
    const bookForm = document.getElementById('bookForm');
    bookForm.setAttribute('data-edit-id', book.id);
  }
  

  function deleteBook(id) {
    const bookTarget = findBookIndex(id);

    if (bookTarget === -1) return;

    books.splice(bookTarget, 1);
    document.dispatchEvent(new Event(RENDER_EVENT));
    saveData();
  }

  function findBookIndex(id) {
    for (const index in books) {
      if (books[index].id === id) {
        return index;
      }
    }
    return -1;
  }

  const SAVED_EVENT = 'saved-book';
  const STORAGE_KEY = 'BOOK_SHELF_APPS';

  function isStorageExist() {
    if (typeof (Storage) === undefined) {
      alert('Browser kamu tidak mendukung web storage!');
      return false;
    }
    return true;
  }

  function saveData() {
    if (isStorageExist()) {
      const parsed = JSON.stringify(books);
      localStorage.setItem(STORAGE_KEY, parsed);
      document.dispatchEvent(new Event(SAVED_EVENT));
    }
  }

  document.addEventListener(SAVED_EVENT, function () {
    console.log(localStorage.getItem(STORAGE_KEY));
  });

  function loadDataFromStorage() {
    const serializedData = localStorage.getItem(STORAGE_KEY);
    let data = JSON.parse(serializedData);

    if (data != null) {
      for (const book of data) {
        books.push(book);
      }
    }
    document.dispatchEvent(new Event(RENDER_EVENT));
  }

  if (isStorageExist()) {
    loadDataFromStorage();
  }

  const searchForm = document.getElementById('searchBook');
  searchForm.addEventListener('submit', function (event) {
    event.preventDefault(); // stop reload
    const query = document.getElementById('searchBookTitle').value.toLowerCase();
    searchBook(query);
  });


  function searchBook(query) {
    const unfinishBookList = document.getElementById('incompleteBookList');
    unfinishBookList.innerHTML = '';

    const finishedBookList = document.getElementById('completeBookList');
    finishedBookList.innerHTML = '';

    for (const book of books) {
      // cek apakah query ada di dalam bookTitle
      if (book.title.toLowerCase().includes(query)) {
        const bookListElement = makeBookList(book);
        if (!book.isComplete) {
          unfinishBookList.append(bookListElement);
        } else {
          finishedBookList.append(bookListElement);
        }
      }
    }
  }

});