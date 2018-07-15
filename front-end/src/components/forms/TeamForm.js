import React from 'react';

import withFormHandling from '../hoc/withFormHandling';

const TeamFormBase = (props) => {
  return (
    <section id="team-form">
      <form onSubmit={props.handleFormSubmit}>
        <div className="from-field">
          <input
            className="input-field"
            type="text"
            name="name"
            placeholder="Team Name"
            onChange={props.handleChange}
            value={props.formData.name}
          />
          <i className="fas fa-users" aria-hidden="true"></i>
        </div>
        <div className="from-field">
          <input
            className="input-field"
            type="text"
            name="country"
            placeholder="Team Country"
            onChange={props.handleChange}
            value={props.formData.country}
          />
          <i className="fas fa-globe" aria-hidden="true"></i>
        </div>
        <div className="from-field">
          <input
            className="input-field"
            type="url"
            name="jersey"
            placeholder="Team Jersey Image URL"
            onChange={props.handleChange}
            value={props.formData.jersey}
          />
          <i className="fas fa-tshirt" aria-hidden="true"></i>
        </div>
        <input type="submit" className="submit" value="Submit Team" />
      </form>
    </section>
  );
};

const TeamForm = withFormHandling(TeamFormBase);

export default TeamForm;