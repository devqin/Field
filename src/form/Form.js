import React from 'react';

export const FormContext = React.createContext({});

const Form = props => {
  const formProps = {};
  return (
    <FormContext.Provider value={{ name: 1 }}>{props.children(formProps)}</FormContext.Provider>
  );
};
export default Form;