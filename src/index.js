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
      title: 'HistoryBook',
      category: 'History',
    },
    {
      id: 2,
      title: 'HorrorBook',
      category: 'Horror',
    },
    {
      id: 3,
      title: 'BiographyBook',
      category: 'Biography',
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
