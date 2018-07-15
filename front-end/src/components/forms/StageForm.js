import React from 'react';

import withFormHandling from '../hoc/withFormHandling';

const StageFormBase = (props) => {
  return (
    <section id="stage-form">
      <form onSubmit={props.handleFormSubmit}>
        <div className="from-field">
          <input
            className="input-field"
            type="number"
            step="1"
            name="stageNumber"
            placeholder="Stage Number"
            onChange={props.handleChange}
            value={props.formData.stageNumber}
          />
          <i className="fas fa-sort-numeric-down" aria-hidden="true"></i>
        </div>
        <div className="from-field">
          <select
            className="input-field select-field"
            name="stageType"
            onChange={props.handleChange}
            value={props.formData.stageType}
          >
            <option value="" disabled>Select Stage Type</option>
            <option value="Flat">Flat</option>
            <option value="Hilly">Hilly</option>
            <option value="Mountain">Mountain</option>
            <option value="Team Time-Trial">Team Time-Trial</option>
            <option value="Individual Time-Trial">Individual Time-Trial</option>
          </select>
          <i className="fas fa-road"></i>
        </div>
        <div className="from-field">
          <input
            className="input-field"
            type={props.type}
            name="startDay"
            placeholder="Stage Start Day"
            onChange={props.handleChange}
            onFocus={props.handleFocus}
            value={props.formData.startDay.substring(0, 10)}
          />
          <i className="fas fa-calendar-alt" aria-hidden="true"></i>
        </div>
        <div className="from-field">
          <input
            className="input-field"
            type="text"
            name="startCity"
            placeholder="Stage Start City"
            onChange={props.handleChange}
            value={props.formData.startCity}
          />
          <i className="fas fa-play" aria-hidden="true"></i>
        </div>
        <div className="from-field">
          <input
            className="input-field"
            type="text"
            name="endCity"
            placeholder="Stage End City"
            onChange={props.handleChange}
            value={props.formData.endCity}
          />
          <i className="fas fa-stopwatch" aria-hidden="true"></i>
        </div>
        <div className="from-field">
          <input
            className="input-field"
            type="number"
            step="0.1"
            name="distance"
            placeholder="Stage Distance (in km)"
            onChange={props.handleChange}
            value={props.formData.distance}
          />
          <i className="fas fa-plane" aria-hidden="true"></i>
        </div>
        <div className="from-field">
          <input
            className="input-field"
            type="url"
            name="stageProfile"
            placeholder="Stage Profile Image URL"
            onChange={props.handleChange}
            value={props.formData.stageProfile}
          />
          <i className="fas fa-image" aria-hidden="true"></i>
        </div>
        <div className="from-field">
          <input
            className="input-field"
            type="url"
            name="stageMap"
            placeholder="Stage Map Image URL"
            onChange={props.handleChange}
            value={props.formData.stageMap}
          />
          <i className="fas fa-map" aria-hidden="true"></i>
        </div>
        <input type="submit" className="submit" value="Sumbit Stage" />
      </form>
    </section>
  );
};

const StageForm = withFormHandling(StageFormBase);

export default StageForm;