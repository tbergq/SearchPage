import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import DatePicker from 'material-ui/DatePicker';
import styled from 'styled-components';

import { DATE_FORMAT } from '../utils/constants';

const ErrorField = styled.div`
color: #d9534f;
`;

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
    const { input, label, meta } = this.props;

    return (
      <div>
        <DatePicker
          formatDate={date => moment(date).format(DATE_FORMAT)}
          name={input.name}
          onChange={this.handleChange}
          floatingLabelText={label}
          minDate={new Date()}
          container="inline"
        />
        <ErrorField>
          {meta.submitFailed && meta.error ? 'This field is required' : null}
        </ErrorField>
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
    submitFailed: PropTypes.bool,
    error: PropTypes.string,
  }).isRequired,
  label: PropTypes.string.isRequired,
};
