import { Book } from "../types/types";

function BookList(props: { books: Book[]; onEdit: (book: Book) => void; onDelete: (id: string) => void }) {
  const { books, onEdit, onDelete } = props;

  return (
    <ul>
      {books.map((book) => (
        <li key={book.id}>
          <div>
            <strong>Title:</strong> {book.title}
          </div>
          <div>
            <strong>Author:</strong> {book.author}
          </div>
          <div>
            <strong>Genre:</strong> {Array.isArray(book.genre) ? book.genre.join(", ") : book.genre}
          </div>
          <div>
            <strong>Price:</strong> ₹{book.price}
          </div>
          <div>
            <button onClick={() => onEdit(book)}>Edit</button>
            <button onClick={() => onDelete(book.id)}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default BookList;
