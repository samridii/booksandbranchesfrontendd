import React, { useState } from 'react';
// CSS would be imported here: import './AdminDashboard.css';

const AdminDashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const [bookForm, setBookForm] = useState({
    title: '',
    author: '',
    description: ''
  });
  
  // Form errors state
  const [formErrors, setFormErrors] = useState({});

  // Sample data that would normally come from API
  // In a real implementation, these would be loaded via useEffect with API calls
  const sampleBooks = [
    { id: 1, title: 'The Giving Tree', author: 'Shel Silverstein' },
    { id: 2, title: 'The Lorax', author: 'Dr. Seuss' },
    { id: 3, title: 'The Hidden Life of Trees', author: 'Peter Wohlleben' }
  ];
  
  const sampleUsers = [
    { id: 1, username: 'johndoe', email: 'john@example.com' },
    { id: 2, username: 'janesmith', email: 'jane@example.com' },
    { id: 3, username: 'bobwilson', email: 'bob@example.com' }
  ];
  
  const sampleStats = {
    totalBooks: 125,
    totalUsers: 350,
    totalTrees: 275
  };

  // Handle input changes for form fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookForm({
      ...bookForm,
      [name]: value
    });
    
    // Clear error for this field
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: null
      });
    }
  };

  // Validate form inputs
  const validateForm = () => {
    const errors = {};
    
    if (bookForm.title.trim().length < 2) {
      errors.title = 'Title must be at least 2 characters long';
    }
    
    if (bookForm.author.trim().length < 2) {
      errors.author = 'Author name must be at least 2 characters long';
    }
    
    if (bookForm.description.trim().length < 10) {
      errors.description = 'Description must be at least 10 characters long';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Handle form submission - frontend only, would send to API in real app
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // In a real app, this would be an API call to create a book
      console.log('Would send to API:', bookForm);
      alert('Book would be added through API (form is valid)');
      
      // Reset form and close modal
      setBookForm({ title: '', author: '', description: '' });
      setIsModalOpen(false);
    }
  };

  // These would be API calls in a real app
  const handleDeleteBook = (id) => {
    console.log(`Would delete book with ID: ${id} via API`);
    alert(`Would delete book ID: ${id} via API`);
  };
  
  const handleDeleteUser = (id) => {
    console.log(`Would delete user with ID: ${id} via API`);
    alert(`Would delete user ID: ${id} via API`);
  };

  return (
    <div className="admin-dashboard-container">
      {/* Header */}
      <header className="admin-header">
        <h1>Admin Dashboard</h1>
        <p>Manage books, users, and view statistics.</p>
      </header>

      {/* Statistics Section */}
      <section className="statistics-section">
        <h2>Overview</h2>
        <div className="stats-grid">
          <div className="stat-card">
            <h3>Total Books</h3>
            <p>{sampleStats.totalBooks}</p>
          </div>
          <div className="stat-card">
            <h3>Total Users</h3>
            <p>{sampleStats.totalUsers}</p>
          </div>
          <div className="stat-card">
            <h3>Total Trees Planted</h3>
            <p>{sampleStats.totalTrees}</p>
          </div>
        </div>
      </section>

      {/* Manage Books Section */}
      <section className="manage-books-section">
        <h2>Manage Books</h2>
        <button className="btn add-book-btn" onClick={() => setIsModalOpen(true)}>
          Add New Book
        </button>
        <div className="books-table">
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {sampleBooks.map(book => (
                <tr key={book.id}>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>
                    <button className="action-btn edit-btn">Edit</button>
                    <button 
                      className="action-btn delete-btn"
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
      </section>

      {/* Manage Users Section */}
      <section className="manage-users-section">
        <h2>Manage Users</h2>
        <div className="users-table">
          <table>
            <thead>
              <tr>
                <th>Username</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {sampleUsers.map(user => (
                <tr key={user.id}>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>
                    <button className="action-btn edit-btn">Edit</button>
                    <button 
                      className="action-btn delete-btn"
                      onClick={() => handleDeleteUser(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Footer */}
      <footer className="admin-footer">
        <p>Made with ❤️ by Books and Branches</p>
      </footer>

      {/* Add Book Modal */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-btn" onClick={() => setIsModalOpen(false)}>
              &times;
            </span>
            <h2>Add New Book</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={bookForm.title}
                  onChange={handleInputChange}
                  className={formErrors.title ? 'shake' : ''}
                  required
                />
                {formErrors.title && (
                  <div className="error-message">{formErrors.title}</div>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="author">Author</label>
                <input
                  type="text"
                  id="author"
                  name="author"
                  value={bookForm.author}
                  onChange={handleInputChange}
                  className={formErrors.author ? 'shake' : ''}
                  required
                />
                {formErrors.author && (
                  <div className="error-message">{formErrors.author}</div>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                  id="description"
                  name="description"
                  rows="4"
                  value={bookForm.description}
                  onChange={handleInputChange}
                  className={formErrors.description ? 'shake' : ''}
                  required
                ></textarea>
                {formErrors.description && (
                  <div className="error-message">{formErrors.description}</div>
                )}
              </div>
              <button type="submit" className="btn">
                Add Book
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;