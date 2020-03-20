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
      return <tbody><tr><td>No Books Found</td></tr></tbody>;
    }
    return filteredBooks.map(book => (
      <Book book={book} key={book.id} removeBook={handleRemoveBook} />));
  };

  return (
    <div>
      <CategoryFilter filter={filter} />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Category</th>
            <th>Remove Book</th>
          </tr>
        </thead>
        { filterBy() }
      </table>
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
