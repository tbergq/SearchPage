import React from 'react';
import MaterialUIAutoComplete from 'material-ui/AutoComplete';
import PropTypes from 'prop-types';

const dataSourceConfig = {
  text: 'value',
  value: 'id',
};

export default class RenderAutoComplete extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    const { input, searchSuggestionChange, changeKey } = this.props;
    input.onChange(value);
    searchSuggestionChange(value, changeKey);
  }

  render() {
    const { input, dataSource, label } = this.props;
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
};
