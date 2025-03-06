import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Fetch users from API
  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://api.example.com/users"); // Replace with your API endpoint
      if (!response.ok) throw new Error("Failed to fetch users");
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Fetch books from API
  const fetchBooks = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://api.example.com/books"); // Replace with your API endpoint
      if (!response.ok) throw new Error("Failed to fetch books");
      const data = await response.json();
      setBooks(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (activePage === "users") {
      fetchUsers();
    } else {
      fetchBooks();
    }
  }, [activePage]);

  const handleDeleteUser = async (id) => {
    try {
      const response = await fetch(`https://api.example.com/users/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Failed to delete user");
      setUsers(users.filter((user) => user.id !== id));
    } catch (error) {
      setError(error.message);
    }
  };

  const handleDeleteBook = async (id) => {
    try {
      const response = await fetch(`https://api.example.com/books/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Failed to delete book");
      setBooks(books.filter((book) => book.id !== id));
    } catch (error) {
      setError(error.message);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("admin");
    navigate("/login");
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="dashboard">
      <nav className="navbar">
        <ul>
          <li onClick={() => setActivePage("users")}>View Users</li>
          <li onClick={() => setActivePage("books")}>View Books</li>
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