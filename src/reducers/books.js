const booksReducer = (state = null, action) => {
  const CREATE_BOOK = 'CREATE_BOOK';
  const REMOVE_BOOK = 'REMOVE_BOOK';

  switch (action.type) {
    case CREATE_BOOK:
			return action.book
      break;
    case REMOVE_BOOK:
			console.log("x")
      break;
    default:
			console.log("y")
      break;
  }
	console.log("z")
  return state;
};

export default booksReducer;
