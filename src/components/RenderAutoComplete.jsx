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

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value, dataSource, params) {
    const { input, searchSuggestionChange, changeKey } = this.props;
    console.log(dataSource, params);
    input.onChange(value);
    searchSuggestionChange(value, changeKey);
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
        />
        <ErrorField>
          {meta.submitFailed && meta.error ? 'This field is required' : null}
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
