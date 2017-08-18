import React from 'react';
import { reduxForm } from 'redux-form';

import SearchForm from '../components/SearchForm';

const SearchFormContainer = props => <SearchForm {...props} />;

export default reduxForm({
  form: 'SearchForm',
})(SearchFormContainer);
