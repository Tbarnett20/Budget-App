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
    return {
      count: state.count + 1
    };
    case 'DECREMENT':
    return {
      count: state.count - 1
    };
    case 'RESET':
    return {
      count: state.count = 0
    };
    default: 
     return state;
  }
});

// getState() Method that returns the current states object
console.log(store.getState())

// Actions- an object that gets sent to the store

// I'd like to increment the count
store.dispatch( {
  type: 'INCREMENT'
});

console.log(store.getState())
// I'd like to decrement the count

store.dispatch( {
  type: 'DECREMENT'
});
console.log(store.getState())

// RESET count to 0

store.dispatch( {
  type: 'RESET'
});


// I'd like to reset the count to zero



console.log(store.getState())