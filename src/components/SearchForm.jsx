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

const ButtonContainer = styled.div`
  display: flex;
  align-items: flex-end;
  padding-bottom: 7px;
`;

const SearchForm = ({
  handleSubmit,
  fromSuggestions,
  toSuggestions,
  searchSuggestionChange,
}) => (
  <Wrapper>
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-md-3 col-sm-6 col-xs-12">
          <Field
            name="from"
            component={AutoComplete}
            label="From"
            dataSource={fromSuggestions}
            searchSuggestionChange={searchSuggestionChange}
            changeKey="fromSuggestions"
          />
        </div>
        <div className="col-md-3 col-sm-6 col-xs-12">
          <Field
            name="to"
            component={AutoComplete}
            label="To"
            dataSource={toSuggestions}
            searchSuggestionChange={searchSuggestionChange}
            changeKey="toSuggestions"
          />
        </div>
        <div className="col-md-3 col-sm-6 col-xs-12">
          <Field name="date" component={DatePicker} label="Date" />
        </div>
        <ButtonContainer className="col-md-2 col-sm-6 col-xs-12">
          <RaisedButton label="Go" type="submit" primary />
        </ButtonContainer>
      </div>
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
