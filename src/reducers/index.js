import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import searchPageReducer from './SearchPage.reducer';

const reducers = combineReducers({
  form: formReducer,
  searchPage: searchPageReducer,
});

export default reducers;

export const getSearchPage = ({ searchPage }) => searchPage;
