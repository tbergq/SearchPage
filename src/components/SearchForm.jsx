import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import RaisedButton from 'material-ui/RaisedButton';
import styled from 'styled-components';

import AutoComplete from './RenderAutoComplete';
import DatePicker from './RenderDatePicker';

const Wrapper = styled.div`
  margin-left: 24px;
  margin-right: 24px;
  padding-bottom: 24px;
`;

const InlineForm = styled.div`
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
`;

const FormItemWrapper = styled.div`
  margin-left: 16px;
`;

const SearchForm = ({
  handleSubmit,
  fromSuggestions,
  toSuggestions,
  searchSuggestionChange,
}) => (
  <Wrapper>
    <form onSubmit={handleSubmit}>
      <InlineForm>
        <Field
          name="from"
          component={AutoComplete}
          label="From"
          dataSource={fromSuggestions}
          searchSuggestionChange={searchSuggestionChange}
          changeKey="fromSuggestions"
        />
        <FormItemWrapper>
          <Field
            name="to"
            component={AutoComplete}
            label="To"
            dataSource={toSuggestions}
            searchSuggestionChange={searchSuggestionChange}
            changeKey="toSuggestions"
          />
        </FormItemWrapper>
        <FormItemWrapper>
          <Field name="date" component={DatePicker} label="Date" />
        </FormItemWrapper>
        <FormItemWrapper>
          <RaisedButton label="Go" type="submit" primary />
        </FormItemWrapper>
      </InlineForm>
    </form>
  </Wrapper>
);

SearchForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  fromSuggestions: PropTypes.arrayOf(PropTypes.object).isRequired,
  toSuggestions: PropTypes.arrayOf(PropTypes.object).isRequired,
  searchSuggestionChange: PropTypes.func.isRequired,
};

export default SearchForm;
