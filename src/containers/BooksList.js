import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';
import { removeBook } from '../actions';

const BooksList = ({ books, removeBook }) => {
  const handleRemoveBook = book => {
    removeBook(book);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Category</th>
            <th>Remove Book</th>
          </tr>
        </thead>
        {books.map(book => (
          <Book book={book} key={book.id} removeBook={handleRemoveBook} />))}
      </table>
    </div>
  );
};

BooksList.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
  removeBook: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    books: state.books,
  };
}

const mapDispatchToProps = dispatch => ({
  removeBook: book => dispatch(removeBook(book)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
