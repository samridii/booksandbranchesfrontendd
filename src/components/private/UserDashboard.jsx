import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import AddBook from "../private/AddBook";
import ViewBook from "../private/ViewBook";
import "../../styles/UserDashboard.css";

function App() {
  const [books, setBooks] = useState([]);
  const [activePage, setActivePage] = useState("view");
  const navigate = useNavigate(); // Initialize useNavigate

  const handleAddBook = (newBook) => {
    setBooks([...books, newBook]);
  };

  const handleDeleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  // Handle logout
  const handleLogout = () => {
    // Clear any user-related data from localStorage (if applicable)
    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <div className="dashboard">
      <nav className="navbar">
        <ul>
          <li onClick={() => setActivePage("add")}>Add Book</li>
          <li onClick={() => setActivePage("view")}>View Books</li>
          {/* Logout Button */}
          <li onClick={handleLogout}>Logout</li>
        </ul>
      </nav>
      <div className="content">
        {activePage === "add" ? (
          <AddBook onAddBook={handleAddBook} />
        ) : (
          <ViewBook books={books} onDeleteBook={handleDeleteBook} />
        )}
      </div>
    </div>
  );
}

export default App;