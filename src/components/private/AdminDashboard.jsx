import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../../styles/AdminDashboard.css";

// Mock ViewUsers Component
const ViewUsers = ({ users, onDeleteUser }) => {
  return (
    <div className="view-users">
      <h2>Users List</h2>
      {users.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <span>
                {user.name} - {user.email}
              </span>
              <button onClick={() => onDeleteUser(user.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

// Mock ViewBooks Component
const ViewBooks = ({ books, onDeleteBook }) => {
  return (
    <div className="view-books">
      <h2>Books List</h2>
      {books.length === 0 ? (
        <p>No books found.</p>
      ) : (
        <ul>
          {books.map((book) => (
            <li key={book.id}>
              <span>
                {book.title} by {book.author}
              </span>
              <button onClick={() => onDeleteBook(book.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

// Main AdminDashboard Component
function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [books, setBooks] = useState([]);
  const [activePage, setActivePage] = useState("users");
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const mockUsers = [
      { id: 1, name: "Yunisha Kc", email: "yunisha123@example.com" },
      { id: 2, name: "Grishma Thapa", email: "thapa22@example.com" },
    ];
    setUsers(mockUsers);

    // Simulate fetching books
    const mockBooks = [
      { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
      { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee" },
    ];
    setBooks(mockBooks);
  }, []);

  const handleDeleteUser = async (id) => {
    // Simulate deleting a user
    setUsers(users.filter((user) => user.id !== id));
  };

  const handleDeleteBook = async (id) => {
    // Simulate deleting a book
    setBooks(books.filter((book) => book.id !== id));
  };

  // Handle logout
  const handleLogout = () => {
    // Clear any admin-related data from localStorage (if applicable)
    localStorage.removeItem("admin");

    // Redirect to the Login page
    navigate("/login");
  };

  return (
    <div className="dashboard">
      <nav className="navbar">
        <ul>
          <li onClick={() => setActivePage("users")}>View Users</li>
          <li onClick={() => setActivePage("books")}>View Books</li>
          {/* Logout Button */}
          <li onClick={handleLogout}>Logout</li>
        </ul>
      </nav>
      <div className="content">
        {activePage === "users" ? (
          <ViewUsers users={users} onDeleteUser={handleDeleteUser} />
        ) : (
          <ViewBooks books={books} onDeleteBook={handleDeleteBook} />
        )}
      </div>
    </div>
  );
}

export default AdminDashboard;