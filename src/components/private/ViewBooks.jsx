import React from "react";

const ViewBooks = ({ books, onDeleteBook }) => {
  return (
    <div className="view-books">
      <h2>View Books</h2>
      {books.length === 0 ? (
        <p>No books added yet.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Book Name</th>
              <th>Rating</th>
              <th>Author</th>
              <th>Added By</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book.id}>
                <td>{book.id}</td>
                <td>{book.bookName}</td>
                <td>{book.rating}</td>
                <td>{book.author}</td>
                <td>{book.addedBy}</td>
                <td>
                  <button onClick={() => onDeleteBook(book.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ViewBooks;