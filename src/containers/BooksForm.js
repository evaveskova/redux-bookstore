import React from 'react';

const BooksForm = () => {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  /* eslint-disable jsx-a11y/label-has-associated-control */
  return (
    <form action="">
      <label htmlFor="title" id="title-form-label">Title:</label>
      <input type="text" id="title" />

      <label htmlFor="category" id="category-form-label">Category:</label>
      <select id="category">
        { categories.map(category => <option value={category} key={`${category}_option`}>{category}</option>)}
      </select>
      <button type="submit">Submit</button>
    </form>
  );
};

export default BooksForm;
