import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import styled from 'styled-components';

import RenderDatePicker from './RenderDatePicker';

const Label = styled.label`
  margin-right: 5px;
`;
const FieldWrapper = styled.div`
  display: flex;
  align-items: baseline;
`;

const Datepicker = ({ name, labelText }) => (
  <div className="form-group">
    <FieldWrapper>
      <Label htmlFor={name}>{labelText}</Label>
      <Field
        name={name}
        component={RenderDatePicker}
        type="text"
        className="form-control"
      />
    </FieldWrapper>
  </div>
);

Datepicker.propTypes = {
  name: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
};

export default Datepicker;
