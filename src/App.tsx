import { useState } from "react";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";
import FilterForm from "./components/FilterForm";
import { Book, Filters } from "./types/types";
import "./App.css"; // Import the CSS file

// Default book details
const defaultBooks: Book[] = [
  {
    id: "1",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
    price: 499,
  },
  {
    id: "2",
    title: "1984",
    author: "George Orwell",
    genre: "Sci-Fi",
    price: 349,
  },
  {
    id: "3",
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "Fiction",
    price: 299,
  },
  {
    id: "4",
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    genre: "Non-Fiction",
    price: 599,
  },
  {
    id: "5",
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    price: 399,
  },
];

function App() {
  // Initialize state with default books
  const [books, setBooks] = useState<Book[]>(defaultBooks);
  const [filters, setFilters] = useState<Filters>({});
  const [editingBook, setEditingBook] = useState<Book | null>(null);

  function addOrUpdateBook(book: Book) {
    setBooks((prevBooks) =>
      prevBooks.some((b) => b.id === book.id)
        ? prevBooks.map((b) => (b.id === book.id ? book : b))
        : [...prevBooks, book]
    );
    setEditingBook(null);
  }

  function deleteBook(id: string) {
    setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
  }

  const filteredBooks = books.filter(
    (book) =>
      (!filters.genre || book.genre === filters.genre) &&
      (!filters.author || book.author.toLowerCase().includes(filters.author.toLowerCase()))
  );

  return (
    <div className="app">
      <h1>Bookstore Inventory</h1>
      <div className="form-container">
        <FilterForm filters={filters} onChange={setFilters} />
        <BookForm onSubmit={addOrUpdateBook} initialData={editingBook || undefined} />
      </div>
      <BookList books={filteredBooks} onEdit={setEditingBook} onDelete={deleteBook} />
    </div>
  );
}

export default App;
