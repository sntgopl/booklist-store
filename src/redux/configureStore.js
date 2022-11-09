import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/book';

const store = configureStore({
  reducer: {
    books: bookReducer,
  },
});

export default store;
