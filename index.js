function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
    .then(response => response.json())
    .then(data => renderBooks(data));
}

function renderBooks(books) {
  const main = document.querySelector('main');
  main.innerHTML = ''; // Clear the main element before rendering new books
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

//fetchBooks().then(renderBooks);