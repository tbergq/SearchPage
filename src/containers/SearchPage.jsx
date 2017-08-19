import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import SearchFormContainer from './SearchFormContainer';
import { getSearchPage } from '../reducers';
import { searchSuggestionChange } from '../actions/SearchPage.actions';

const Wrapper = styled.div`
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 24px;
`;

class SearchPage extends React.Component {
  constructor(props) {
    super(props);

    this.submitSearchForm = this.submitSearchForm.bind(this);
  }

  submitSearchForm(values) {
    console.log('submit form', values, this);
  }

  render() {
    return (
      <Wrapper>
        <div className="row">
          <div className="col-xs-12">
            <SearchFormContainer
              {...this.props}
              onSubmit={this.submitSearchForm}
            />
          </div>
        </div>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => ({
  ...getSearchPage(state),
});

const mapDispatchToProps = dispatch => ({
  searchSuggestionChange: (text, key) => {
    dispatch(searchSuggestionChange(text, key));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
