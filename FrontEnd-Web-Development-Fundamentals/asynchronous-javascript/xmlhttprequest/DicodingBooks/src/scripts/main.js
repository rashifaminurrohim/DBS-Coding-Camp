function main() {
  const baseUrl = 'https://books-api.dicoding.dev';

  const getBook = () => {
    // tuliskan kode di sini!

    fetch(`${baseUrl}/list`)
    .then((response) => {
      return response.json();
    })
    .then((responseJson) => {
      if (responseJson.error) {
        showResponseMessage(responseJson.message);
      } else {
        renderAllBooks(responseJson.books);
      }
    })
    .catch((error) => {
      showResponseMessage(error);
    });

    /** 
     * *gaya penulisan asynchronous pada promise
     * const getBook = async () => {
        try {
          const response = await fetch(`${baseUrl}/list`);
          const responseJson = await response.json();
          
          if (responseJson.error) {
            showResponseMessage(responseJson.message);
          } else {
            renderAllBooks(responseJson.books);
          }
        } catch (error) {
          showResponseMessage(error);
        }
      };
     */
    

    // // membuat instance dari XMLHttpRequest
    // const xhr = new XMLHttpRequest();

    // // menetapkan callback jika response sukses dan error
    // xhr.onload = function () {
    //   const responseJson = JSON.parse(this.responseText);

    //   if (responseJson.error) {
    //     showResponseMessage(responseJson.message);
    //   } else {
    //     renderAllBooks(responseJson.books);
    //   }
    // };

    // xhr.onerror = function () {
    //   showResponseMessage();
    // }

    // // membuat GET request dan menetapkan target URL
    // xhr.open('GET', `${baseUrl}/list`);

    // // mengirimkan request
    // xhr.send();
  };


  const insertBook = (book) => {
    // tuliskan kode di sini!

    fetch(`${baseUrl}/add`, {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json',
        'X-Auth-Token' : '12345'
      },
      body: JSON.stringify(book),
    })
    .then ((response) => {
      return response.json();
    })
    .then ((responseJson) => {
      showResponseMessage(responseJson.message);
      getBook();
    })
    .catch((error) => {
      showResponseMessage(error);
    });

    /**
     * *Gaya penulisan Asynchronous pada promise
        const insertBook = async (book) => {
          try {
            const options = {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'X-Auth-Token': '12345',
              },
              body: JSON.stringify(book),
            };
        
            const response = await fetch(`${baseUrl}/add`, options);
            const responseJson = await response.json();
            showResponseMessage(responseJson.message);
            getBook();
          } catch (error) {
            showResponseMessage(error);
          }
        };
     */

    // // membuat instance dari XMLHttpRequest
    // const xhr = new XMLHttpRequest();

    // // menetapkan callback jika response sukses dan error
    // xhr.onload = function () {
    //   const responseJson = JSON.parse(this.responseText);
    //   showResponseMessage(responseJson.message);
    //   getBook();
    // };

    // xhr.onerror = function () {
    //   showResponseMessage();
    // }

    // // membuat POST request dan menetapkan target URL
    // xhr.open('POST', `${baseUrl}/add`);

    // // menetapkan properti Content-Type dan X-Auth-Token pada Header request
    // xhr.setRequestHeader('Content-Type', 'application/json');
    // xhr.setRequestHeader('X-Auth-Token', '12345');

    // // mengirimkan request dan menyisipkan JSON.stringify(book) pada body request
    // xhr.send(JSON.stringify(book));
  };

  const updateBook = (book) => {
    // tuliskan kode di sini!

    fetch(`${baseUrl}/edit/${book.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type' : 'application/json',
        'X-Auth-Token' : '12345'
      },
      body: JSON.stringify(book)
    })
    .then((response) => {
      return response.json();
    })
    .then((responseJson) => {
      showResponseMessage(responseJson.message);
      getBook();
    })
    .catch((error) => {
      showResponseMessage(error);
    })
    
    /**
     * * Gaya penulisan Asynchronous pada promise
        const updateBook = async (book) => {
          try {
            const options = {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
                'X-Auth-Token': '12345'
              },
              body: JSON.stringify(book),
            };
            const response = await fetch(`${baseUrl}/edit/${book.id}`, options);
            const responseJson = await response.json();
            showResponseMessage(responseJson.message);
            getBook();
          } catch (error) {
            showResponseMessage(error);
          }
        };
     */

    // // Membuat instance dari XMLHttpRequest
    // const xhr = new XMLHttpRequest();

    // // Menetapkan callback jika response sukses dan error
    // xhr.onload = function () {
    //   const responseJson = JSON.parse(this.responseText);
    //   showResponseMessage(responseJson.message);
    //   getBook();
    // };

    // xhr.onerror = function () {
    //   showResponseMessage();
    // };

    // // Membuat PUT request dan menetapkan target URL
    // xhr.open('PUT', `${baseUrl}/edit/${book.id}`);

    // // Menetapkan properti Content-Type dan X-Auth-Token pada Header request
    // xhr.setRequestHeader('Content-Type', 'application/json');
    // xhr.setRequestHeader('X-Auth-Token', '12345');

    // // Mengirimkan request dan menyisipkan JSON.stringify(book) pada body
    // xhr.send(JSON.stringify(book));
  };

  const removeBook = async (bookId) => {
    // tuliskan kode di sini!
    try {
      const options = {
        method: 'DELETE',
        headers: {
          'X-Auth-Token' : '12345'
        }
      }
      const response = await fetch(`${baseUrl}/delete/${bookId}`, options);
      const responseJson = await response.json();
      showResponseMessage(responseJson.message);
      getBook();
    } catch (error) {
      showResponseMessage(error);
    }

    /**
     * *Gaya penulisan tidak menggunakan async await
     * const removeBook = (bookId) => {
        fetch(`${baseUrl}/delete/${bookId}`, {
          method: 'DELETE',
          headers: {
            'X-Auth-Token': '12345',
          },
        })
          .then((response) => {
            return response.json();
          })
          .then((responseJson) => {
            showResponseMessage(responseJson.message);
            getBook();
          })
          .catch((error) => {
            showResponseMessage(error);
          });
      };
     *  
     */

    // // Membuat instance dari XMLHttpRequest
    // const xhr = new XMLHttpRequest();

    // //menetapkan callback jika response sukses dan error
    // xhr.onload = function () {
    //   const responseJson = JSON.parse(this.responseText);
    //   showResponseMessage(responseJson.message);
    //   getBook();
    // };

    // xhr.onerror = function () {
    //   showResponseMessage();
    // };

    // // Membuat DELETE request dan menetapkan target URL
    // xhr.open('DELETE', `${baseUrl}/delete/${bookId}`);

    // // Menetapkan properti Content-Type dan X-Auth-Token pada Header request
    // xhr.setRequestHeader('X-Auth-Token', '12345');

    // // Mengirimkan request
    // xhr.send();
  };






  /*
      jangan ubah kode di bawah ini ya!
  */

  const renderAllBooks = (books) => {
    const listBookElement = document.querySelector('#listBook');
    listBookElement.innerHTML = '';

    books.forEach(book => {
      listBookElement.innerHTML += `
        <div class="col-lg-4 col-md-6 col-sm-12" style="margin-top: 12px;">
          <div class="card">
            <div class="card-body">
              <h5>(${book.id}) ${book.title}</h5>
              <p>${book.author}</p>
              <button type="button" class="btn btn-danger button-delete" id="${book.id}">Hapus</button>
            </div>
          </div>
        </div>
      `;
    });

    const buttons = document.querySelectorAll('.button-delete');
    buttons.forEach(button => {
      button.addEventListener('click', event => {
        const bookId = event.target.id;

        removeBook(bookId);
      });
    });
  };

  const showResponseMessage = (message = 'Check your internet connection') => {
    alert(message);
  };

  document.addEventListener('DOMContentLoaded', () => {

    const inputBookId = document.querySelector('#inputBookId');
    const inputBookTitle = document.querySelector('#inputBookTitle');
    const inputBookAuthor = document.querySelector('#inputBookAuthor');
    const buttonSave = document.querySelector('#buttonSave');
    const buttonUpdate = document.querySelector('#buttonUpdate');

    buttonSave.addEventListener('click', function () {
      const book = {
        id: Number.parseInt(inputBookId.value),
        title: inputBookTitle.value,
        author: inputBookAuthor.value
      };

      insertBook(book);
    });

    buttonUpdate.addEventListener('click', function () {
      const book = {
        id: Number.parseInt(inputBookId.value),
        title: inputBookTitle.value,
        author: inputBookAuthor.value
      };

      updateBook(book);
    });
    getBook();
  });
}

export default main;