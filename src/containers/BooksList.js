import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';
import { removeBook } from '../actions';
import CategoryFilter from '../components/CategoryFilter';

const BooksList = ({ books, filter, removeBook }) => {
  const handleRemoveBook = book => {
    removeBook(book);
  };

  const filterBy = () => {
    const filteredBooks = (filter === 'All') ? books : books.filter(book => (book.category === filter));
    if (filteredBooks.length === 0) {
      return <h1>No Books Found</h1>;
    }
    return filteredBooks.map(book => (
      <Book book={book} key={book.id} removeBook={handleRemoveBook} />));
  };

  return (
    <div className="container">
      <div id="nav">
        <h1>BOOKSTORE CMS</h1>
        <CategoryFilter filter={filter} />
      </div>

      <div id="books-list">
        { filterBy() }
      </div>
    </div>

  );
};

BooksList.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
  removeBook: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  books: state.books,
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  removeBook: book => dispatch(removeBook(book)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
