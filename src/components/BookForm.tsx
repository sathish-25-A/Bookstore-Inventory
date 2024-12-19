import React, { useState, useEffect } from "react";
import { Book } from "../types/types";

function BookForm(props: { onSubmit: (book: Book) => void; initialData?: Book }) {
  const [book, setBook] = useState<Book>(
    props.initialData || { id: "", title: "", author: "", genre: "", price: 0 }
  );

  useEffect(() => {
    setBook(props.initialData || { id: "", title: "", author: "", genre: "", price: 0 });
  }, [props.initialData]);

  function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = event.target;
    setBook({ ...book, [name]: name === "price" ? parseFloat(value) : value });
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    props.onSubmit({ ...book, id: props.initialData?.id || Date.now().toString() });
    setBook({ id: "", title: "", author: "", genre: "", price: 0 });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" placeholder="Title" value={book.title} onChange={handleChange} required />
      <input name="author" placeholder="Author" value={book.author} onChange={handleChange} required />
      <select name="genre" value={book.genre} onChange={handleChange} required>
        <option value="">Select Genre</option>
        <option value="Fiction">Fiction</option>
        <option value="Non-Fiction">Non-Fiction</option>
        <option value="Sci-Fi">Sci-Fi</option>
        <option value="Fantasy">Fantasy</option>
      </select>
      <input name="price" type="number" placeholder="Price" value={book.price || ""} onChange={handleChange} required />
      <button type="submit">{props.initialData ? "Update" : "Add"} Book</button>
    </form>
  );
}

export default BookForm;
