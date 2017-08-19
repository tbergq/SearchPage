import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import DatePicker from 'material-ui/DatePicker';

const DATE_FORMAT = 'DD.MM.YYYY';

export default class RenderDatePicker extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, date) {
    const { input } = this.props;
    console.log('date', date);
    input.onChange(moment(date).format(DATE_FORMAT));
  }

  render() {
    const { input, label, meta: { touched, error } } = this.props;

    return (
      <div>
        <DatePicker
          name={input.name}
          onChange={this.handleChange}
          floatingLabelText={label}
        />
        {touched && error && <span>{error}</span>}
      </div>
    );
  }
}

RenderDatePicker.propTypes = {
  input: PropTypes.shape({
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.bool,
  }).isRequired,
  label: PropTypes.string.isRequired,
};
