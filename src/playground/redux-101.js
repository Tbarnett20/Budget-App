import { createStore } from 'redux'
/* To use redux we have to access createStore and its the thing that tracks our changing data over time. To use it we need a function and it gets called once right away. No state the first time its called so we use the default */

//  Same as this below
/*
this.setState((prevState) => {
   return prevState;
 }) 
 */

//  No constructor function to set default state so we set it up here------------------->>>>>>>>
const store = createStore((state = {count: 0}) => {
  return state;
});

// getState() Method that returns the current states object
console.log(store.getState())