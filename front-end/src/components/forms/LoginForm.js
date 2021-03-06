import React from 'react';

import withFormHandling from '../hoc/withFormHandling';

const LoginFormBase = (props) => {
  return (
    <section id="login-form">
      <form onSubmit={props.handleFormSubmit}>
        <div className="from-field">
          <input
            className="input-field"
            type="text"
            name="username"
            placeholder="Username"
            onChange={props.handleChange}
            value={props.formData.username}
          />
          <i className="fa fa-user" aria-hidden="true"></i>
        </div>
        <div className="from-field">
          <input
            className="input-field"
            type="password"
            name="password"
            placeholder="***"
            onChange={props.handleChange}
          />
          <i className="fa fa-unlock-alt" aria-hidden="true"></i>
        </div>
        <input type="submit" className="submit" value="Login" />
      </form>
    </section>
  );
};

const LoginForm = withFormHandling(LoginFormBase);

export default LoginForm;