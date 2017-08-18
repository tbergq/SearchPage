import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

const DATE_FORMAT = 'DD.MM.YYYY';

export default class RenderDatePicker extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    const { input } = this.props;
    input.onChange(moment(date).format(DATE_FORMAT));
  }

  render() {
    const { input, placeholder, meta: { touched, error } } = this.props;

    return (
      <div>
        <DatePicker
          {...input}
          placeholder={placeholder}
          dateFormat={DATE_FORMAT}
          selected={input.value ? moment(input.value, DATE_FORMAT) : null}
          onChange={this.handleChange}
          className="form-control"
        />
        {touched && error && <span>{error}</span>}
      </div>
    );
  }
}

RenderDatePicker.PropTypes = {
  input: PropTypes.shape({
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.bool,
  }).isRequired,
  placeholder: PropTypes.string,
};

RenderDatePicker.defaultProps = {
  placeholder: '',
};
