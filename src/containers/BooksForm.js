import React from 'react';
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
    if (this.state.title) {      
      this.props.createBook(this.state);
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

	  return (
  <form onSubmit={this.handleSubmit}>
    <label htmlFor="title" id="title-form-label">
      Title:
      <input type="text" id="title" onChange={this.handleChange} value={this.state.title} />
    </label>

    <label htmlFor="category" id="category-form-label">
      Category:
      <select id="category" onChange={this.handleChange} value={this.state.category}>
        { categories.map(category => <option value={category} key={`${category}_option`}>{category}</option>)}
      </select>
    </label>
    <button type="submit">Submit</button>
  </form>
	  );
  }
}

const mapDispatchToProps = dispatch => ({
  createBook: book => dispatch(createBook(book)),
});

export default connect(null, mapDispatchToProps)(BooksForm);
