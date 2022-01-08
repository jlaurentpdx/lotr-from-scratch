export default function BookList({ books }) {
  return (
    <div className="book-list">
      {books.map((book) => (
        <h3 key={book.id}>{book.title}</h3>
      ))}
    </div>
  );
}
