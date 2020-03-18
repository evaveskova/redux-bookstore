const CREATE_BOOK = 'CREATE_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const booksReducer = (state = [], action) => {

	console.log("booksReducer called", action)

  switch (action.type) {
    case CREATE_BOOK:
			console.log("hello world");
			return { ...state, books: [...state.books, action.book] };
    case REMOVE_BOOK:
      break;
    default:
      break;
  }
  return state;
};

export default booksReducer;
