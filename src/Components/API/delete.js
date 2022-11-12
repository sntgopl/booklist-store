import { createAsyncThunk } from '@reduxjs/toolkit';
import { removeBook } from '../../redux/books/book';
import FETCH_URL from './endpoint';

const DELETE_BOOK = 'books/DELETE_BOOK';

const deleteBook = createAsyncThunk(DELETE_BOOK, async (id, thunkAPI) => {
  const response = fetch(FETCH_URL, {
    method: 'DELETE',
    body: JSON.stringify({
      item_id: id,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.text();
  thunkAPI.dispatch(removeBook(id));
  return data;
});

export default deleteBook;
