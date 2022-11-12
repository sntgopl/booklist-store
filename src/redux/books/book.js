/* eslint-disable no-case-declarations */
import Types from '../widgets/widget';

const iState = [
  {
    id: 1,
    title: 'The Lord of the Rings',
    author: 'Tolkien',
    category: 'fantasy',
  },
  {
    id: 2,
    title: 'Harry Potter',
    author: 'I don`t remember',
    category: 'fantasy',
  },
  {
    id: 3,
    title: 'I am Legend',
    author: 'Willsmith',
    category: 'fantasy',
  },
];

const addBook = (book) => ({
  type: Types.ADD_BOOK,
  book,
});

const removeBook = (id) => ({
  type: Types.REMOVE_BOOK,
  id,
});

const bookReducer = (state = iState, action) => {
  switch (action.type) {
    case Types.ADD_BOOK:
      console.log(state);
      return [...state, { ...action.book, id: state.length + 1 }];
    // case Types.REMOVE_BOOK:
    //   const filterBooks = state.filter((book) => book.id !== action.id);
    //   const newArray = filterBooks.map((book, index) => ({ ...book, id: index + 1 }));
    //   return [...newArray];
    default:
      return state;
  }
};

export { addBook, removeBook };
export default bookReducer;
