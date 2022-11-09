import Types from '../widgets/widget';

const addBook = (payload) => ({
  type: Types.ADD_BOOK,
  payload,
});

const removeBook = (payload) => ({
  type: Types.REMOVE_BOOK,
  payload,
});

const bookReducer = (state = [], action) => {
  switch (action.type) {
    case Types.ADD_BOOK:
      return [...state, action.payload];
    case Types.REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
};

export { addBook, removeBook };
export default bookReducer;
