import React from 'react';

const BooksForm = () => {
	const categories = ["Action", "Biography", "History", "Horror", "Kids", "Learning", "Sci-Fi"];

	return (
		<form action="">
			<label htmlFor="title">Title:</label>
			<input type="text" id="title" />

			<label htmlFor="category">Category:</label>
			<select id="category">
				{ categories.map(category => {
					return <option value={category} key={category + "_option"}>{category}</option>
				})}
			</select>
		</form>
	)
};

export default BooksForm;
