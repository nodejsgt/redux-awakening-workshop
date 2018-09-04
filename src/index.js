import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/app';
import reducers from './reducers';

import {addTodo, toggleTodo, setVisibilityFilter, VisibilityFilters} from './actions';

const store = createStore(reducers);

console.log(store.getState());

// Every time the state changes, log it
// subscribe() returns a function for unregistering the listener
const unsubscribe = store.subscribe( () => {
  console.log(store.getState());
})


// Dispatch some actions
store.dispatch(addTodo('Learn something about actions'));
store.dispatch(addTodo('Learn something about reducers'));
store.dispatch(addTodo('Learn something about Store'));

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>
//   , document.querySelector('.container'));
