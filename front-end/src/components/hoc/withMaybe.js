import React from 'react';

const withMaybe = (conditionalRenderingFn) => (Component) => (props) =>
  conditionalRenderingFn(props)
    ? <Component {...props} />
    : null;

export default withMaybe;