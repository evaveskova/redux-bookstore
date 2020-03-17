import React from 'react';
import { connect } from 'react-redux';

class BooksList extends React.Component {
render() {
		return (
			<div>
				<table>
					<thead>
						<tr>
							<th>ID</th>
							<th>Title</th>
							<th>Category</th>
						</tr>
					</thead>
					{
						this.props.books.map(book => {
							return (
								<tr key={book.id}>
									<td>{book.id}</td>
									<td>{book.title}</td>
									<td>{book.category}</td>
								</tr>
							)
						})
					}
				</table>
			</div>
		)
	}
};

function mapStateToProps(state) {
	return {
		books: state.books
	}
}

export default connect(mapStateToProps)(BooksList);
