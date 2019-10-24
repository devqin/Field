import React, { Fragment } from 'react';
import Form from './form/Form';
import Field from './form/Field';
import TextField from './form/TextField';
import { ErrorMessage, HelperMessage, ValidMessage } from './form/Message';

const App = () => {
  const formProps = {
    onSubmit: values => {
      console.log(values);
    }
  };
  return (
    <div className="App">
      <Form {...formProps}>
        {({ formProps, submitting }) => (
          <form {...formProps}>
            <Field
              name="username"
              label="User name"
              isRequired
              defaultValue="">
              {({ fieldProps, error }) => (
                <Fragment>
                  <TextField
                    autoComplete="off"
                    {...fieldProps}
                  />
                  {!error && (
                    <HelperMessage>
                      You can use letters, numbers & periods.
                    </HelperMessage>
                  )}
                  {error && (
                    <ErrorMessage>
                      This user name is already in use, try another one.
                    </ErrorMessage>
                  )}
                  <ValidMessage>校验错误</ValidMessage>
                </Fragment>
              )}
            </Field>
          </form>
        )}
      </Form>
    </div>
  );
};
export default App;