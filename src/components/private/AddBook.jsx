import React, { useState } from "react";

const AddBook = ({ onAddBook }) => {
  const [bookName, setBookName] = useState("");
  const [rating, setRating] = useState("");
  const [author, setAuthor] = useState("");
  const [message, setMessage] = useState(""); // Success message

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate input
    if (!bookName.trim() || !author.trim() || rating === "") {
      setMessage("Please fill out all fields.");
      return;
    }

    if (rating < 0 || rating > 5) {
      setMessage("Rating must be between 0 and 5.");
      return;
    }

    // Create book object
    const newBook = {
      id: Date.now(),
      bookName,
      rating: parseFloat(rating), // Ensure it's a number
      author,
    };

    // Add book and reset form
    onAddBook(newBook);
    setBookName("");
    setRating("");
    setAuthor("");
    setMessage("Book added successfully! ✅"); // Show success message

    // Hide message after 3 seconds
    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <div className="add-book-form">
      <h2>Add a New Book</h2>
      {message && <p className="message">{message}</p>} {/* Show message */}
      <form onSubmit={handleSubmit}>
        <label>
          Book Name:
          <input
            type="text"
            value={bookName}
            onChange={(e) => setBookName(e.target.value)}
            required
          />
        </label>
        <label>
          Rating (out of 5):
          <input
            type="number"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            min="0"
            max="5"
            step="0.1"
            required
          />
        </label>
        <label>
          Author:
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </label>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default AddBook;
