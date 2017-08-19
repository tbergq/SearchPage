import React from 'react';
import PropTypes from 'prop-types';
import AutoComplete from 'material-ui/AutoComplete';

const dataSource = ['java', 'javascript', 'C#', 'assembler'];

const SearchForm = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit} className="form-inline">
    <div>
      <AutoComplete
        hintText="Type anything"
        dataSource={dataSource}
        onUpdateInput={value => console.log(value)}
      />
    </div>
  </form>
);

SearchForm.PropTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
