import React from 'react';
import MaterialUIAutoComplete from 'material-ui/AutoComplete';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const dataSourceConfig = {
  text: 'value',
  value: 'id',
};

const ErrorField = styled.div`
  color: #d9534f;
`;

export default class RenderAutoComplete extends React.Component {
  constructor(props) {
    super(props);

    this.closed = this.closed.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  closed() {
    const { dataSource, input } = this.props;
    if (!input.value) {
      return;
    }
    setTimeout(() => {
      const item = dataSource.find(i => i.value === input.value);
      if (!item && dataSource.length) {
        this.handleChange(dataSource[0].value);
      }
    });
  }

  handleChange(value) {
    const { input, searchSuggestionChange, changeKey } = this.props;
    input.onChange(value);
    this.debounce = setTimeout(() => {
      searchSuggestionChange(value, changeKey);
    }, 250);
  }

  render() {
    const { input, dataSource, label, meta } = this.props;
    return (
      <div>
        <MaterialUIAutoComplete
          onUpdateInput={this.handleChange}
          searchText={input.value}
          dataSource={dataSource}
          floatingLabelText={label}
          dataSourceConfig={dataSourceConfig}
          filter={MaterialUIAutoComplete.caseInsensitiveFilter}
          onClose={this.closed}
          maxSearchResults={20}
        />
        <ErrorField>
          {meta.submitFailed && meta.error && meta.error === 'Required'
            ? 'This field is required'
            : null}
          {meta.submitFailed && meta.error && meta.error === 'Invalid pick'
            ? 'Please select a field from the dropdown menu'
            : null}
        </ErrorField>
      </div>
    );
  }
}

RenderAutoComplete.propTypes = {
  input: PropTypes.shape({
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  }).isRequired,
  dataSource: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  label: PropTypes.string.isRequired,
  searchSuggestionChange: PropTypes.func.isRequired,
  changeKey: PropTypes.string.isRequired,
  meta: PropTypes.shape({
    submitFailed: PropTypes.bool,
    error: PropTypes.string,
  }).isRequired,
};
