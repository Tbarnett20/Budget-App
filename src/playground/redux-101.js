import { createStore } from 'redux'
/* To use redux we have to access createStore and its the thing that tracks our changing data over time. To use it we need a function and it gets called once right away. No state the first time its called so we use the default */

//  Same as this below
/*
this.setState((prevState) => {
   return prevState;
 }) 
 */

//  No constructor function to set default state so we set it up here------------------->>>>>>>>
const store = createStore((state = {count: 0}, action) => {
  switch (action.type) {
    case 'INCREMENT':
    // If the action.incrementBy is a number then put that if not default to 1
      const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
    return {
      // So now incrementBy can be 5 if its there but 1 by default ifs not. Makin it more dynamic
      count: state.count + incrementBy
    };
    case 'DECREMENT':
    const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
    return {
      count: state.count - decrementBy
    };
    case 'SET':
    return {
      count: action.count
    };
    case 'RESET':
    return {
      count: 0
    };
    default: 
     return state;
  }
});

const unsubscribe = store.subscribe(() => {
  console.log(store.getState())
});

// getState() Method that returns the current states object

// Actions- an object that gets sent to the store

// I'd like to increment the count
store.dispatch( {
  type: 'INCREMENT',
  incrementBy: 5
});

store.dispatch( {
  type: 'INCREMENT'
});

// I'd like to decrement the count

store.dispatch( {
  type: 'DECREMENT',
  decrementBy: 10
});

store.dispatch( {
  type: 'DECREMENT',
});

// RESET count to 0

store.dispatch( {
  type: 'RESET'
});

store.dispatch( {
  type: 'SET',
  count: 101
});