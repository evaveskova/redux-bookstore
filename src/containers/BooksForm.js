import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createBook } from '../actions/index';

class BooksForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: Math.floor(Math.random() * 100),
      title: '',
      category: 'Action',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    if (event.target.id === 'title') {
      this.setState({
        title: event.target.value,
      });
    } else if (event.target.id === 'category') {
      this.setState({
        category: event.target.value,
      });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const { title } = this.state;
    const { createBook } = this.props;
    if (title) {
      createBook(this.state);
      this.clearState();
    }
  }

  clearState() {
    this.setState({
      id: Math.floor(Math.random() * 1000),
      title: '',
      category: 'Action',
    });
  }

  render() {
    const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
    const { title, category } = this.state;

    return (
      <div id="form-container">
        <h2 id="form-header">ADD NEW BOOK</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="title" id="title-form-label">
            <input placeholder="Title" type="text" id="title" onChange={this.handleChange} value={title} />
          </label>

          <label htmlFor="category" id="category-form-label">
            <select id="category" onChange={this.handleChange} value={category}>
              { categories.map(category => <option value={category} key={`${category}_option`}>{category}</option>)}
            </select>
          </label>
          <button id="add-book-btn" type="submit">ADD BOOK</button>
        </form>
      </div>
    );
  }
}

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  createBook: book => dispatch(createBook(book)),
});

export default connect(null, mapDispatchToProps)(BooksForm);
