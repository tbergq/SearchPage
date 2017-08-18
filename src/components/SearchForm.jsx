import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import FormField from './FormField';
import DatePicker from './DatePicker';

const MarginSpan = styled.span`
  margin-left: 5px;
`;

const SearchForm = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit} className="form-inline">
    <FormField name="from" component="input" type="text" labelText="From" />
    <MarginSpan>
      <FormField name="to" component="input" type="text" labelText="To" />
    </MarginSpan>
    <MarginSpan>
      <DatePicker name="date" labelText="Date" />
    </MarginSpan>
    <MarginSpan>
      <input type="submit" className="btn btn-primary" value="Search" />
    </MarginSpan>
  </form>
);

SearchForm.PropTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
