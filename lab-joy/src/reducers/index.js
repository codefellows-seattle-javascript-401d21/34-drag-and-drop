import expenseReducer from './expense';
import categoryReducer from './category';
import {combineReducers} from 'redux';

export default combineReducers({
  expense: expenseReducer,
  categories: categoryReducer,
});
