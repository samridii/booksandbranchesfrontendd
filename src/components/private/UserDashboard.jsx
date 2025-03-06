import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AddBook from "../private/AddBook";
import ViewBook from "../private/ViewBook";
import "../../styles/UserDashboard.css";

function App() {
  const [books, setBooks] = useState([]);
  const [activePage, setActivePage] = useState("view");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

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
    fetchBooks();
  }, []);

  // Add a new book via API
  const handleAddBook = async (newBook) => {
    try {
      const response = await fetch("https://api.example.com/books", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newBook),
      });
      if (!response.ok) throw new Error("Failed to add book");
      const data = await response.json();
      setBooks([...books, data]); // Update local state with the new book
    } catch (error) {
      setError(error.message);
    }
  };

  // Delete a book via API
  const handleDeleteBook = async (id) => {
    try {
      const response = await fetch(`https://api.example.com/books/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Failed to delete book");
      setBooks(books.filter((book) => book.id !== id)); // Update local state
    } catch (error) {
      setError(error.message);
    }
  };

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="dashboard">
      <nav className="navbar">
        <ul>
          <li onClick={() => setActivePage("add")}>Add Book</li>
          <li onClick={() => setActivePage("view")}>View Books</li>
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