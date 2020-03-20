import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, removeBook }) => {
  const handleRemoveBook = () => {
    removeBook(book);
  };

  return (
    <section className="book-item" key={book.id}>
      <span className="book-category">{book.category}</span>
      <h3 className="book-title">{book.title}</h3>
      <button className="book-remove" onClick={handleRemoveBook} type="button">Remove</button>
    </section>
  );
};

Book.propTypes = {
  book: PropTypes.instanceOf(Object).isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default Book;
