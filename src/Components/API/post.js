import { createAsyncThunk } from '@reduxjs/toolkit';
import { addBook } from '../../redux/books/book';
import FETCH_URL from './endpoint';

const POST_BOOK = 'books/POST_BOOK';

const postBook = createAsyncThunk(POST_BOOK, async (book, thunkAPI) => {
  const response = fetch(FETCH_URL, {
    method: 'POST',
    body: JSON.stringify(book),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await (await response).text();
  thunkAPI.dispatch(addBook(book));
  return data;
});

export default postBook;
