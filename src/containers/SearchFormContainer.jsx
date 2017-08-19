import React from 'react';
import { reduxForm } from 'redux-form';

import SearchForm from '../components/SearchForm';

const validate = (values) => {
  const errors = {};
  if (!values.from) {
    errors.from = 'Required';
  }
  if (!values.to) {
    errors.to = 'Required';
  }
  if (!values.date) {
    errors.date = 'Required';
  }
  return errors;
};

const SearchFormContainer = props => <SearchForm {...props} />;

export default reduxForm({
  form: 'SearchForm',
  validate,
})(SearchFormContainer);
