import React, { useState } from 'react';

const ManageBooks = () => {
  // Initial book data
  const [books, setBooks] = useState([
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", description: "A classic novel about the American Dream." },
    { id: 2, title: "1984", author: "George Orwell", description: "A dystopian novel about totalitarianism." },
    { id: 3, title: "Silent Spring", author: "Rachel Carson", description: "A groundbreaking work on environmental science." },
  ]);

  // Modal state
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  
  // Form input states
  const [newBook, setNewBook] = useState({ title: '', author: '', description: '' });
  const [editBook, setEditBook] = useState({ id: null, title: '', author: '', description: '' });

  // Open add book modal
  const openAddBookModal = () => {
    setShowAddModal(true);
  };

  // Close add book modal
  const closeAddBookModal = () => {
    setShowAddModal(false);
    setNewBook({ title: '', author: '', description: '' });
  };

  // Open edit book modal
  const openEditBookModal = (bookId) => {
    const book = books.find((b) => b.id === bookId);
    if (book) {
      setEditBook({ ...book });
      setShowEditModal(true);
    }
  };

  // Close edit book modal
  const closeEditBookModal = () => {
    setShowEditModal(false);
  };

  // Add book handler
  const handleAddBook = (e) => {
    e.preventDefault();
    const bookId = books.length > 0 ? Math.max(...books.map(book => book.id)) + 1 : 1;
    const bookToAdd = { id: bookId, ...newBook };
    setBooks([...books, bookToAdd]);
    closeAddBookModal();
  };

  // Edit book handler
  const handleEditBook = (e) => {
    e.preventDefault();
    const updatedBooks = books.map((book) => 
      book.id === editBook.id ? editBook : book
    );
    setBooks(updatedBooks);
    closeEditBookModal();
  };

  // Delete book handler
  const handleDeleteBook = (bookId) => {
    if (window.confirm("Are you sure you want to delete this book?")) {
      setBooks(books.filter((book) => book.id !== bookId));
    }
  };

  // Handle input change for add book form
  const handleNewBookChange = (e) => {
    const { name, value } = e.target;
    setNewBook({
      ...newBook,
      [name]: value
    });
  };

  // Handle input change for edit book form
  const handleEditBookChange = (e) => {
    const { name, value } = e.target;
    setEditBook({
      ...editBook,
      [name]: value
    });
  };

  return (
    <div className="manage-books-container">
      {/* Header */}
      <header className="manage-books-header">
        <h1>Manage Books</h1>
        <p>Add, edit, or remove books from the system.</p>
      </header>

      {/* Add Book Button */}
      <button className="btn add-book-btn" onClick={openAddBookModal}>
        Add New Book
      </button>

      {/* Books Table */}
      <div className="books-table">
        <table id="books-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book.id}>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.description}</td>
                <td className="actions-btn">
                  <button
                    className="btn edit-btn"
                    onClick={() => openEditBookModal(book.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn delete-btn"
                    onClick={() => handleDeleteBook(book.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Book Modal */}
      {showAddModal && (
        <div className="modal" style={{ display: 'flex' }}>
          <div className="modal-content">
            <span className="close-btn" onClick={closeAddBookModal}>&times;</span>
            <h2>Add New Book</h2>
            <form id="add-book-form" onSubmit={handleAddBook}>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  id="book-title"
                  name="title"
                  value={newBook.title}
                  onChange={handleNewBookChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="author">Author</label>
                <input
                  type="text"
                  id="book-author"
                  name="author"
                  value={newBook.author}
                  onChange={handleNewBookChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                  id="book-description"
                  name="description"
                  rows="4"
                  value={newBook.description}
                  onChange={handleNewBookChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn">Add Book</button>
            </form>
          </div>
        </div>
      )}

      {/* Edit Book Modal */}
      {showEditModal && (
        <div className="modal" style={{ display: 'flex' }}>
          <div className="modal-content">
            <span className="close-btn" onClick={closeEditBookModal}>&times;</span>
            <h2>Edit Book</h2>
            <form id="edit-book-form" onSubmit={handleEditBook}>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  id="edit-book-title"
                  name="title"
                  value={editBook.title}
                  onChange={handleEditBookChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="author">Author</label>
                <input
                  type="text"
                  id="edit-book-author"
                  name="author"
                  value={editBook.author}
                  onChange={handleEditBookChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                  id="edit-book-description"
                  name="description"
                  rows="4"
                  value={editBook.description}
                  onChange={handleEditBookChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn">Save Changes</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageBooks;