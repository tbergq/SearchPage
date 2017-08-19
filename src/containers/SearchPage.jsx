import React from 'react';
import styled from 'styled-components';

import SearchFormContainer from './SearchFormContainer';

const Wrapper = styled.div`
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 24px;
`;

export default class SearchPage extends React.Component {
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
            <SearchFormContainer onSubmit={this.submitSearchForm} />
          </div>
        </div>
      </Wrapper>
    );
  }
}
