import React from 'react';

const withEither = (conditionalRenderingFn, EitherComponent) => (Component) => (props) =>
  conditionalRenderingFn(props)
    ? <Component {...props} />
    : <EitherComponent />;

export default withEither;