import { useState, useEffect } from 'react';
import BookList from '../../components/BookList';
import { fetchBooks } from '../../services/books';
import './Books.css';

export default function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchBooks();
      setBooks(data);
    };
    fetchData();
  }, []);

  return (
    <div className="books-page">
      <h2>Books</h2>
      <BookList books={books} />
    </div>
  );
}
