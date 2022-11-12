import Types from '../widgets/widget';

const addBook = (book) => ({
  type: Types.ADD_BOOK,
  book,
});

const removeBook = (id) => ({
  type: Types.REMOVE_BOOK,
  id,
});

const bookReducer = (state = [], action) => {
  switch (action.type) {
    case Types.ADD_BOOK:
      return [...state, { ...action.book, id: state.length + 1 }];
    case Types.REMOVE_BOOK:
      const filterBooks = state.filter((book) => book.id !== action.id);
      const newArray = filterBooks.map((book, index) => ({ ...book, id: index + 1 }));
      return newArray;
    default:
      return state;
  }
};

export { addBook, removeBook };
export default bookReducer;
