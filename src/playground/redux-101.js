import { createStore } from 'redux'

/* To use redux we have to access createStore and its the thing that tracks our changing data over time. To use it we need a function and it gets called once right away. No state the first time its called so we use the default */

// Action Generators  - functions that return action objects

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy: incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy: decrementBy
});

const resetCount = () => ({
    type: 'RESET'
});

const setCount = ({count} = {}) => ({
    type: 'SET',
    count
});

//  No constructor function to set default state so we set it up here------------------->>>>>>>>
const store = createStore((state = {count: 0}, action) => {
  switch (action.type) {
    case 'INCREMENT':
    // If the action.incrementBy is a number then put that if not default to 1
    //   const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
    return {
      // So now incrementBy can be 5 if its there but 1 by default ifs not. Makin it more dynamic
      count: state.count + action.incrementBy
    };
    case 'DECREMENT':
    return {
      count: state.count - action.decrementBy
    };
    case 'SET':
    return {
      count: action.setBy
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

store.dispatch(incrementCount({ incrementBy: 5 }));

// Action generater 
store.dispatch(incrementCount());

// RESET count to 0
store.dispatch(resetCount());

// I'd like to decrement the count
store.dispatch(decrementCount());

store.dispatch(decrementCount({decrementBy: 10}));

// Set to any number (101)
store.dispatch(setCount({count: 101}));