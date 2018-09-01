import {createStore, combineReducers} from 'redux'
import expensesReducer from '../reducers/expenses'
import filtersReducer from '../reducers/filters'

export default () => {
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
}

// Now when we import function the defautl exprt from configure store we just call it we get the store back adn we can use it
