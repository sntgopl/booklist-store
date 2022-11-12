import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import deleteBook from '../Components/API/delete';
import Book from '../Components/Books';
import AddBook from '../Components/Form';

const Books = () => {
  const booklist = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const remove = (itemId) => {
    dispatch(deleteBook(itemId));
  };
  return (
    <div className="HomePage">
      <ul className="Booklist">
        {booklist.map((book) => (
          <li key={book.item_id}>
            <Book
              title={book.title}
              author={book.author}
              category={book.category}
              id={book.item_id}
            />
            <button
              className="removeBtn"
              type="button"
              onClick={() => {
                remove(book.item_id);
              }}
            >
              Remove

            </button>
          </li>
        ))}
      </ul>
      <AddBook />
    </div>
  );
};

export default Books;
