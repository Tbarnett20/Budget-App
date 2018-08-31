import {createStore, combineReducers} from 'redux'
import expensesReducer from '../reducers/expenses'
import filtersReducer from '../reducers/filters'

export default () => {
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer
    })
  );
  return store;
}

// Now when we import function the defautl exprt from configure store we just call it we get the store back adn we can use it
