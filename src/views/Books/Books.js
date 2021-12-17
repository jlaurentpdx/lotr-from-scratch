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

  // console.log(books);

  return <div>Books page</div>;
}
