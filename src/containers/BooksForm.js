import React from 'react';

const BooksForm = () => {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  /* eslint-disable jsx-a11y/label-has-associated-control */
  return (
    <form action="">
      <label>Title:</label>
      <input type="text" id="title" />

      <label>Category:</label>
      <select id="category">
        { categories.map(category => <option value={category} key={`${category}_option`}>{category}</option>)}
      </select>
    </form>
  );
};

export default BooksForm;
