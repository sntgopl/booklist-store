import { createAsyncThunk } from '@reduxjs/toolkit';
import { removeBook } from '../../redux/books/book';
import FETCH_URL from './endpoint';

const DELETE_BOOK = 'books/DELETE_BOOK';

const deleteBook = createAsyncThunk(DELETE_BOOK, async (itemId, thunkAPI) => {
  const response = fetch(`${FETCH_URL}/${itemId}`, {
    method: 'DELETE',
    body: JSON.stringify({
      item_id: itemId,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await (await response).text();
  thunkAPI.dispatch(removeBook(itemId));
  return data;
});

export default deleteBook;
