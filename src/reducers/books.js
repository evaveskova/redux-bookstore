const bookReducer = (state = null, action) => {
  const CREATE_BOOK = 'CREATE_BOOK';
  const REMOVE_BOOK = 'REMOVE_BOOK';

  switch (action.type) {
    case CREATE_BOOK:
      break;
    case REMOVE_BOOK:
      break;
    default:
      break;
  }
  return state;
};

export default bookReducer;
