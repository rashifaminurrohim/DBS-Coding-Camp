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
  
    const bookTitle = document.getElementById('bookFormTitle').value;
    const bookAuthor = document.getElementById('bookFormAuthor').value;
    const bookYear = document.getElementById('bookFormYear').value;
    const bookIsComplete = document.getElementById('bookFormIsComplete').checked;
  
    if (editId) {
      const bookIndex = findBookIndex(Number(editId));
      if (bookIndex !== -1) {
        books[bookIndex] = {
          bookId: Number(editId),
          bookTitle,
          bookAuthor,
          bookYear,
          bookIsComplete
        };
      }
      bookForm.removeAttribute('data-edit-id');
    } else {
      const bookId = new Date().getTime();
      const bookObject = generateBookObject(bookId, bookTitle, bookAuthor, bookYear, bookIsComplete);
      books.push(bookObject);
    }
  
    document.dispatchEvent(new Event(RENDER_EVENT));
    saveData();
    bookForm.reset(); // kosongkan form setelah submit/edit
  }
  

  function generateBookObject(bookId, bookTitle, bookAuthor, bookYear, bookIsComplete) {
    return {
      bookId,
      bookTitle,
      bookAuthor,
      bookYear,
      bookIsComplete
    }
  }

  function makeBookList(bookObject) {
    const bookTitle = document.createElement('h2');
    bookTitle.innerText = bookObject.bookTitle;

    const bookAuthor = document.createElement('p');
    bookAuthor.innerText = `Penulis: ${bookObject.bookAuthor}`;

    const bookYear = document.createElement('p');
    bookYear.innerText = `Tahun: ${bookObject.bookYear}`;

    const textContainer = document.createElement('div');
    textContainer.classList.add('book-desc');
    textContainer.append(bookTitle, bookAuthor, bookYear);

    const container = document.createElement('div');
    container.append(textContainer);
    container.setAttribute('id', `todo-${bookObject.bookId}`);

    if (bookObject.bookIsComplete) {
      const notFinishYetButton = document.createElement('button');
      notFinishYetButton.classList.add('undo-button');
      notFinishYetButton.innerText = "blm beres";
      notFinishYetButton.addEventListener('click', function () {
        undoBookFromFinished(bookObject.bookId);
      });

      const editButton = document.createElement('button');
      editButton.classList.add('edit-button');
      editButton.innerText = "Edit";
      editButton.addEventListener('click', function () {
        editBook(bookObject);
      });

      const deleteButton = document.createElement('button');
      deleteButton.classList.add('delete-button');
      deleteButton.innerText = "Delete";
      deleteButton.addEventListener('click', function () {
        deleteBook(bookObject.bookId);
      });

      container.append(notFinishYetButton, editButton, deleteButton);
    } else {
      const finishedButton = document.createElement('button');
      finishedButton.classList.add('undo-button');
      finishedButton.innerText = "beres";
      finishedButton.addEventListener('click', function () {
        addBookToFinished(bookObject.bookId);
      });

      const editButton = document.createElement('button');
      editButton.classList.add('edit-button');
      editButton.innerText = "Edit";
      editButton.addEventListener('click', function () {
        editBook(bookObject);
      });

      const deleteButton = document.createElement('button');
      deleteButton.classList.add('delete-button');
      deleteButton.innerText = "Delete";
      deleteButton.addEventListener('click', function () {
        deleteBook(bookObject.bookId);
      });
      container.append(finishedButton,editButton, deleteButton);
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
      if (!book.bookIsComplete) {
        unfinishBookList.append(bookListElement);
      } else {
        finishedBookList.append(bookListElement);
      }
    }
  });

  function addBookToFinished(bookId) {
    const bookTarget = findBook(bookId);

    if (bookTarget === null) return;

    bookTarget.bookIsComplete = true;
    document.dispatchEvent(new Event(RENDER_EVENT));
    saveData();
  }

  function findBook(bookId) {
    for (const book of books) {
      if (book.bookId === bookId) {
        return book;
      }
    }
    return null;
  }

  function undoBookFromFinished(bookId) {
    const bookTarget = findBook(bookId);

    if (bookTarget === null) return;

    bookTarget.bookIsComplete = false;
    document.dispatchEvent(new Event(RENDER_EVENT));
    saveData();
  }

  function editBook(book) {
    // Isi form tambah buku dengan data buku yang mau diedit
    document.getElementById('formTitle').innerText = "Edit Buku";
    document.getElementById('bookFormTitle').value = book.bookTitle;
    document.getElementById('bookFormAuthor').value = book.bookAuthor;
    document.getElementById('bookFormYear').value = book.bookYear;
    document.getElementById('bookFormIsComplete').checked = book.bookIsComplete;
  
    // Simpan ID buku yang mau diedit di atribut form misalnya
    const bookForm = document.getElementById('bookForm');
    bookForm.setAttribute('data-edit-id', book.bookId);
  }
  

  function deleteBook(bookId) {
    const bookTarget = findBookIndex(bookId);

    if (bookTarget === -1) return;

    books.splice(bookTarget, 1);
    document.dispatchEvent(new Event(RENDER_EVENT));
    saveData();
  }

  function findBookIndex(bookId) {
    for (const index in books) {
      if (books[index].bookId === bookId) {
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
      if (book.bookTitle.toLowerCase().includes(query)) {
        const bookListElement = makeBookList(book);
        if (!book.bookIsComplete) {
          unfinishBookList.append(bookListElement);
        } else {
          finishedBookList.append(bookListElement);
        }
      }
    }
  }

});