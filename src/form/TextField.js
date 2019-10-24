import React, { Fragment } from 'react';

const TextField = props => {
  console.log('TextField props', props);
  const { name, type, isRequired } = props;
  return (
    <Fragment>
      <input
        name={name}
        type={type}
        required={isRequired}
      />
    </Fragment>
  );
};
export default TextField;