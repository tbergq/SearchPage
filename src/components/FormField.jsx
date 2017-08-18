import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import styled from 'styled-components';

const Label = styled.label`
  margin-right: 5px;
`;

const FormField = ({ name, labelText, type }) => (
  <div className="form-group">
    <Label htmlFor={name}> {labelText}</Label>
    <Field name={name} component="input" type={type} className="form-control" />
  </div>
);

FormField.PropTypes = {
  name: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default FormField;
