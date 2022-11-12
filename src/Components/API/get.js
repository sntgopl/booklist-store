import { createAsyncThunk } from '@reduxjs/toolkit';
import { loadBook } from '../../redux/books/book';
import FETCH_URL from './endpoint';

const GET_BOOK = 'books/GET_BOOK';

const getBooks = createAsyncThunk(GET_BOOK, async (_, thunkAPI) => {
  const response = fetch(FETCH_URL, {
    method: 'GET',
  });
  const data = await (await response).json();
  thunkAPI(loadBook(response.JSON));
  return data;
});

export default getBooks;
