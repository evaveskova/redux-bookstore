import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';

const initialState = () => ({
	books: [{
		id: 1,
		title: "test title",
		category: "test category"
	},
	{
		id: 2,
		title: "test title 2",
		category: "test category 2"
	},
	]
});

const store = createStore(initialState);
console.log()
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
