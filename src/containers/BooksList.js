import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const BooksList = ({ books }) => (
  <div>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
      </thead>
      {books.map(book => (
        <tbody key={book.id}>
          <tr>
            <td>{book.id}</td>
            <td>{book.title}</td>
            <td>{book.category}</td>
          </tr>
        </tbody>
      ))}
    </table>
  </div>
);

BooksList.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
};

function mapStateToProps(state) {
  return {
    books: state.books,
  };
}

export default connect(mapStateToProps)(BooksList);
