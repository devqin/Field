import React,{Fragment} from "react";
import ReactDOM from "react-dom";

import "./styles.css";
const FieldCtx = React.createContext({});
const HelperMessage = (props) => {
  return <div />;
}
const ErrorMessage = (props) => {
  return <div />
}
const Field = (props) => {

}
const TextField = (props) => {

}
function App() {
  return (
    <div className="App">
    {({ formProps }) => (
      <form {...formProps}>
          <Field name="username" label="User name" isRequired defaultValue="">
            {({ fieldProps, error }) => (
              <Fragment>
                <TextField autoComplete="off" {...fieldProps} />
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
              </Fragment>
            )}
          </Field>
      </form>
    )}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
