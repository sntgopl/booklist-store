/* eslint-disable no-case-declarations */
import Types from '../widgets/widget';

const iState = [];

const addBook = (book) => ({
  type: Types.ADD_BOOK,
  book,
});

const removeBook = (id) => ({
  type: Types.REMOVE_BOOK,
  id,
});

const loadBook = (books) => ({
  type: Types.LOAD_BOOKS,
  books,
});

const bookReducer = (state = iState, action) => {
  switch (action.type) {
    case Types.ADD_BOOK:
      console.log(state);
      return [...state, action.book];
    case Types.REMOVE_BOOK:
      const filterBooks = state.filter((book) => book.id !== action.id);
      return filterBooks;
    case Types.LOAD_BOOKS:
      const booklist = [];
      Object.entries(action.books).forEach(([key, value]) => {
        booklist.push({
          item_id: key,
          title: value[0].title,
          author: value[0].author,
          category: value[0].category,
        });
      });
      return [...booklist];
    default:
      return state;
  }
};

export { addBook, removeBook, loadBook };
export default bookReducer;
