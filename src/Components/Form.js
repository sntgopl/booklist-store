import { v4 as uuid } from 'uuid';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import postBook from './API/post';

const AddBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const getTitle = ({ target }) => setTitle(target.value);
  const getAuthor = ({ target }) => setAuthor(target.value);
  const getCategory = ({ target }) => setCategory(target.value);

  const addToStore = (title, author) => {
    const book = {
      item_id: uuid(),
      title,
      author,
      category,
    };
    dispatch(postBook(book));
  };

  return (
    <div>
      <form>
        <h3 className="formTitle">ADD NEW BOOK</h3>
        <input type="text" onChange={getTitle} placeholder="write the name of the book you want to add" />
        <input type="text" onChange={getAuthor} placeholder="write the name of the author of the book" />
        <select name="Category" onChange={getCategory}>
          <option value="--">--Please choose an option--</option>
          <option value="terror">Terror</option>
          <option value="drama">Drama</option>
        </select>
        <button
          className="addBtn"
          type="button"
          onClick={(e) => {
            e.preventDefault();
            addToStore(title, author);
          }}
        >
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBook;
