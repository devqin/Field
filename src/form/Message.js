import React from 'react';
import styled from 'styled-components';
import { FieldId } from './Field';

const Message = styled.div`
  font-weight: normal;
  color: ${props => {
    if (props.error) {
      return 'red';
    }
    if (props.valid) {
      return 'green';
    }
    return 'blue';
  }};
  margin-top: 10px;
  display: flex;
  justify-content: baseline;
`;
const ErrorMessage = props => {
  return (<FieldId.Consumer>
    {fieldId => (
      <Message
        error
        id={fieldId ? `${fieldId}-error` : null}>
        {props.children}
      </Message>
    )}
  </FieldId.Consumer>);
};
const HelperMessage = props => {
  return (
    <FieldId.Consumer>
      {fieldId => (
        <Message id={fieldId ? `${fieldId}-helper` : null}>{props.children}</Message>
      )}
    </FieldId.Consumer>);
};
const ValidMessage = props => {
  return (<FieldId.Consumer>
    {fieldId => (
      <Message
        valid
        id={fieldId ? `${fieldId}-helper` : null}>{props.children}</Message>
    )
    }
  </FieldId.Consumer>);
};
export {
  ErrorMessage, HelperMessage, ValidMessage
};