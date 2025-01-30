// src/components/Home.jsx

import React, { useState } from "react";
import BookCard from "./components/BookCard";
import books from "./booksData";
import "./Home.css"; // Import the CSS for styling
import { Link } from "react-router-dom";


const Home = () => {
  const [booksarr, setBooks] = useState(books)
  return (
    <div className="home-container">
      <h1>Book Library</h1>
      <Link to='/add-book'>
        <button className="addBtn">Add Book</button>
      </Link>
      <div className="books-grid">
        {booksarr.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Home;