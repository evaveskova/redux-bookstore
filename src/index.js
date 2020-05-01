import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import combineReducers from './reducers';
import App from './components/App';

const initialState = {
  books: [
    {
      id: 1,
      title: 'The 1916 Rising',
      category: 'History',
    },
    {
      id: 2,
      title: 'The Shining',
      category: 'Horror',
    },
    {
      id: 3,
      title: 'Interstellar',
      category: 'Sci-Fi',
    },
  ],
};

const store = createStore(combineReducers, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
