import React from "react";

const ViewBook = ({ books, onDeleteBook }) => {
  return (
    <div className="view-books">
      <h2>View Books</h2>
      {books.length === 0 ? (
        <p>No books added yet.</p>
      ) : (
        <div className="book-list">
          <ul>
            {books.map((book) => (
              <li key={book.id}>
                <strong>{book.bookName}</strong> by {book.author} - 
                Rating: {parseFloat(book.rating).toFixed(1)}/5
                <button 
                  onClick={() => {
                    if (window.confirm(`Are you sure you want to delete "${book.bookName}"?`)) {
                      onDeleteBook(book.id);
                    }
                  }}
                  aria-label={`Delete ${book.bookName}`}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ViewBook;
