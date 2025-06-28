function fetchBooks() {
  // Fetch the books from the API
  return fetch("https://anapioficeandfire.com/api/books")
    .then((resp) => resp.json())
    .then((json) => renderBooks(json));
}

// This function renders the book titles to the page
function renderBooks(books) {
  const booksList = document.getElementById("books-list");
  booksList.innerHTML = ""; // Clear any existing content
  books.forEach((book) => {
    const li = document.createElement("li");
    li.textContent = book.name;
    booksList.appendChild(li);
  });
}

// Call fetchBooks when the page loads
window.addEventListener("DOMContentLoaded", fetchBooks);