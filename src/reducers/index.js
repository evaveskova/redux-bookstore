import { combineReducers } from 'redux';
import booksReducer from './books';
import booksList from './booksList';

export default combineReducers({
  books: booksReducer,
	booksList: booksList
});
