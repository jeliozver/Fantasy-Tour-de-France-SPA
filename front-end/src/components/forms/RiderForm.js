import React from 'react';

import withFormHandling from '../hoc/withFormHandling';

const RiderFormBase = (props) => {
  return (
    <section id="rider-form">
      <form onSubmit={props.handleFormSubmit}>
        <div className="from-field">
          <input
            className="input-field"
            type="text"
            name="name"
            placeholder="Rider Name"
            onChange={props.handleChange}
            value={props.formData.name}
          />
          <i className="fa fa-user" aria-hidden="true"></i>
        </div>
        <div className="from-field">
          <input
            className="input-field"
            type="text"
            name="country"
            placeholder="Rider Nationality"
            onChange={props.handleChange}
            value={props.formData.country}
          />
          <i className="fas fa-globe" aria-hidden="true"></i>
        </div>
        <div className="from-field">
          <input
            className="input-field"
            type="number"
            step="1"
            name="age"
            placeholder="Rider Age"
            onChange={props.handleChange}
            value={props.formData.age}
          />
          <i className="fas fa-grin" aria-hidden="true"></i>
        </div>
        <div className="from-field">
          <input
            className="input-field"
            type="number"
            step="0.1"
            name="cost"
            placeholder="Rider Price"
            onChange={props.handleChange}
            value={props.formData.cost}
          />
          <i className="fas fa-dollar-sign" aria-hidden="true"></i>
        </div>
        <div className="from-field">
          <input
            className="input-field"
            type="url"
            name="image"
            placeholder="Rider Image URL"
            onChange={props.handleChange}
            value={props.formData.image}
          />
          <i className="fa fa-image" aria-hidden="true"></i>
        </div>
        <div className="from-field">
          <select
            className="input-field select-field"
            name="riderType"
            onChange={props.handleChange}
            value={props.formData.riderType}
          >
            <option value="" disabled>Select Rider Type</option>
            <option value="All-Rounder">All-Rounder</option>
            <option value="Classics specialist">Classics Specialist</option>
            <option value="Climber">Climber</option>
            <option value="Sprinter">Sprinter</option>
            <option value="Time-Trialist">Time-Trialist</option>
            <option value="Domestique">Domestique</option>
          </select>
          <i className="fas fa-bicycle"></i>
        </div>
        <div className="from-field">
          <select
            className="input-field select-field"
            name="team"
            onChange={props.handleChange}
            value={props.formData.team._id}
          >
            <option value="" disabled>Select Rider Team</option>
            {props.otherData.map(
              (team) => <option key={team._id} value={team._id}>{team.name}</option>
            )}
          </select>
          <i className="fas fa-users"></i>
        </div>
        <input type="submit" className="submit" value="Sumbit Rider" />
      </form>
    </section>
  );
};

const RiderForm = withFormHandling(RiderFormBase);

export default RiderForm;