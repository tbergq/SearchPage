import React from 'react';
import SearchFormContainer from './SearchFormContainer';

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
      <div className="container">
        <SearchFormContainer onSubmit={this.submitSearchForm} />
      </div>
    );
  }
}
