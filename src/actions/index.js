const bookReducers = () => {
  const createBook = book => ({
    type: 'CREATE_BOOK',
    book,
  });

  const removeBook = book => ({
    type: 'REMOVE_BOOK',
    book,
  });

  createBook();
  removeBook();
};

export default bookReducers;
