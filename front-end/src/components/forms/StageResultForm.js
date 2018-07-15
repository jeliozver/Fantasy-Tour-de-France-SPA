import React from 'react';

import withFormHandling from '../hoc/withFormHandling';

const StageResultFormBase = (props) => {
  return (
    <form id="stage-result-form" onSubmit={props.handleFormSubmit}>
      <div className="from-field">
        <select
          className="input-field select-field"
          name="stageId"
          onChange={props.handleChange}
          value={props.formData.stageId}
        >
          <option value="" disabled>Select Stage</option>
          {props.otherData.map((stage) =>
            <option key={stage._id} value={stage._id}>Stage {stage.stageNumber} - {stage.stageType}</option>
          )}
        </select>
        <i className="fas fa-sort-numeric-down"></i>
      </div>
      <div className="from-field">
        <input
          className="input-field"
          type="text"
          name="first"
          placeholder="First Place"
          onChange={props.handleChange}
          value={props.formData.first}
        />
        <i className="fas fa-flag-checkered" aria-hidden="true"></i>
      </div>
      <div className="from-field">
        <input
          className="input-field"
          type="text"
          name="second"
          placeholder="Second Place"
          onChange={props.handleChange}
          value={props.formData.second}
        />
        <i className="fas fa-flag-checkered" aria-hidden="true"></i>
      </div>
      <div className="from-field">
        <input
          className="input-field"
          type="text"
          name="third"
          placeholder="Third Place"
          onChange={props.handleChange}
          value={props.formData.third}
        />
        <i className="fas fa-flag-checkered" aria-hidden="true"></i>
      </div>
      <div className="from-field">
        <input
          className="input-field"
          type="text"
          name="fourth"
          placeholder="Fourth Place"
          onChange={props.handleChange}
          value={props.formData.fourth}
        />
        <i className="fas fa-flag-checkered" aria-hidden="true"></i>
      </div>
      <div className="from-field">
        <input
          className="input-field"
          type="text"
          name="fifth"
          placeholder="Fifth Place"
          onChange={props.handleChange}
          value={props.formData.fifth}
        />
        <i className="fas fa-flag-checkered" aria-hidden="true"></i>
      </div>
      <div className="from-field">
        <input
          className="input-field"
          type="text"
          name="sixth"
          placeholder="Sixth Place"
          onChange={props.handleChange}
          value={props.formData.sixth}
        />
        <i className="fas fa-flag-checkered" aria-hidden="true"></i>
      </div>
      <div className="from-field">
        <input
          className="input-field"
          type="text"
          name="seventh"
          placeholder="Seventh Place"
          onChange={props.handleChange}
          value={props.formData.seventh}
        />
        <i className="fas fa-flag-checkered" aria-hidden="true"></i>
      </div>
      <div className="from-field">
        <input
          className="input-field"
          type="text"
          name="eighth"
          placeholder="Eighth Place"
          onChange={props.handleChange}
          value={props.formData.eighth}
        />
        <i className="fas fa-flag-checkered" aria-hidden="true"></i>
      </div>
      <div className="from-field">
        <input
          className="input-field"
          type="text"
          name="nineth"
          placeholder="Nineth Place"
          onChange={props.handleChange}
          value={props.formData.nineth}
        />
        <i className="fas fa-flag-checkered" aria-hidden="true"></i>
      </div>
      <div className="from-field">
        <input
          className="input-field"
          type="text"
          name="tenth"
          placeholder="Tenth Place"
          onChange={props.handleChange}
          value={props.formData.tenth}
        />
        <i className="fas fa-flag-checkered" aria-hidden="true"></i>
      </div>
      <input type="submit" className="submit" value="Sumbit Result" />
    </form>
  );
};

const StageResultForm = withFormHandling(StageResultFormBase);

export default StageResultForm;