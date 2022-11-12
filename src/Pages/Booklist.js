import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from '../Components/Books';
import AddBook from '../Components/Form';
import { removeBook } from '../redux/books/book';

const Books = () => {
  const booklist = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const remove = (id) => {
    dispatch(removeBook(id));
  };
  return (
    <div className="HomePage">
      <ul className="Booklist">
        {booklist.map((book) => (
          <li key={book.id}>
            <Book title={book.title} author={book.author} category={book.category} id={book.id} />
            <button type="button" onClick={remove(book.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <AddBook />
    </div>
  );
};

export default Books;
