import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import styled from 'styled-components';
import TextField from 'material-ui/TextField';

const Label = styled.label`
  margin-right: 5px;
`;

const renderTextField = props => (
  <TextField
    hintText={props.label}
    floatingLabelText={props.label}
    errorText={props.touched && props.error}
    {...props}
    name={props.name}
  />
);

const FormField = ({ name, labelText, type }) => (
  <div className="form-group">
    <Label htmlFor={name}> {labelText}</Label>
    <Field name={name} component={renderTextField} type={type} />
  </div>
);

FormField.PropTypes = {
  name: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default FormField;
