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

// Reducer
// 1. Reducers are pure functions
// 2.Never change state or action


const countReducer = (state = {count: 0}, action) => {
  switch (action.type) {
    case 'INCREMENT':
    return {
      count: state.count + action.incrementBy
    };
    case 'DECREMENT':
    return {
      count: state.count - action.decrementBy
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
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState())
});

// getState() Method that returns the current states object

// Actions- an object that gets sent to the store

//Increment the count

store.dispatch(incrementCount({ incrementBy: 5 }));

// Action generater 
store.dispatch(incrementCount());

// RESET count to 0
store.dispatch(resetCount());

//Decrement the count
store.dispatch(decrementCount());

store.dispatch(decrementCount({decrementBy: 10}));

// Set to any number (101)
store.dispatch(setCount({count: 101}));