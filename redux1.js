const action = {
  type: 'INCREMENT'
};

function increment() {
  return {
    type: 'INCREMENT'
  };
}

const action = increment(); // { type: 'INCREMENT' }

function counterReducer(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

import { createStore } from 'redux';

// Reducer function
function counterReducer(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

// Create store
const store = createStore(counterReducer);

// Subscribe to store updates
store.subscribe(() => {
  console.log('State:', store.getState());
});

// Dispatch actions
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'DECREMENT' });
