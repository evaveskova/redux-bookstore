import React from 'react';
import { connect } from 'react-redux';
import { createBook } from '../actions'

class BooksForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			category: ''
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		if (event.target.id === "title") {
			this.setState({
				title: event.target.value
			})
		} else if (event.target.id === "category"){
			this.setState({
				category: event.target.value
			})
		}
	}

	handleSubmit(event) {
		event.preventDefault();
		// The component should implement handleSubmit which will save the new book
		// in the Redux store and resets the component’s state.
		createBook(this.state);
		this.setState({
			book: '',
			category: ''
		})
	}

	render() {
		const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
		console.log("title = ", this.state.title)
		console.log("category = ", this.state.category)
	  return (
	    <form onSubmit={this.handleSubmit}>
	      <label htmlFor="title" id="title-form-label">
	        Title:
	        <input type="text" id="title" onChange={this.handleChange} value={this.state.title} />
	      </label>

	      <label htmlFor="category" id="category-form-label">
	        Category:
	        <select id="category" onChange={this.handleChange}>
	          { categories.map(category => <option value={category} key={`${category}_option`}>{category}</option>)}
	        </select>
	      </label>
	      <button type="submit">Submit</button>
	    </form>
	  );
	}
};

const mapDispatchToProps = dispatch => ({
	createBook: book => dispatch(createBook(book))
})

export default connect(mapDispatchToProps)(BooksForm);
