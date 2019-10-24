import React, { Fragment } from 'react';

const FormContext = React.createContext({ name: 1 });
export const FieldId = React.createContext();

const Field = props => {
  const { children, ...rest } = props;
  return (
    <FormContext.Consumer>
      {(formsProps) => {
        return (
          <Fragment>
            <div className="label">{rest.label}</div>
            <FieldId.Provider value={rest}>
              {children({ fieldProps: rest, error: true })}
            </FieldId.Provider>
          </Fragment>
        );
      }}
    </FormContext.Consumer>
  );
};
export default Field;