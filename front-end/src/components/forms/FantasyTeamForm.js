import React from 'react';

import withFormHandling from '../hoc/withFormHandling';

const FantasyTeamFormBase = (props) => {
  return (
    <section id="fantasy-team-form">
      <form onSubmit={props.handleFormSubmit}>
        <div className="from-field">
          <input
            className="input-field"
            type="text"
            name="name"
            placeholder="Your team name"
            onChange={props.handleChange}
            value={props.formData.name}
          />
          <i className="fa fa-user" aria-hidden="true"></i>
        </div>
        <input type="submit" className="submit" value="Create Team" />
      </form>
    </section>
  );
};

const FantasyTeamForm = withFormHandling(FantasyTeamFormBase);

export default FantasyTeamForm;