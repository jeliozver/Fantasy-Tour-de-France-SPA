import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const StageDetails = (props) => {
  const [state, setState] = useState({ stage: {} });

  const handleResponse = (res) => {
    if (res.success) {
      res.body.startDay = res.body.startDay.substring(8, 10);
      setState({ ...state, stage: res.body, stageOnFocus: res.body.stageNumber });
    } else {
      props.helper.notify('error', res.message);
    }
  };

  useEffect(() => {
    const { fetchFunc, helper, match } = props;

    fetchFunc(match.params.id)
      .then(res => handleResponse(res))
      .catch(err => helper.notify('error', err));
  }, []);

  const prevStage = () => {
    props.toggleFunc(state.stageOnFocus - 1)
      .then(res => handleResponse(res))
      .catch(err => props.helper.notify('error', err));
  };

  const nextStage = () => {
    props.toggleFunc(state.stageOnFocus + 1)
      .then(res => handleResponse(res))
      .catch(err => props.helper.notify('error', err));
  };

  return (
    <section id="stage-single">
      <div id="banner">
        <div className="stage-single-head">
          <h1>Stage &#x00023; {state.stage.stageNumber}</h1>
          <h2>{state.stage.startCity}  >  {state.stage.endCity}</h2>
          <h2>{state.stage.startDay} July  - {state.stage.distance} km  - {state.stage.stageType}</h2>
        </div>
      </div>
      <div>
        <button onClick={prevStage} className="stage-btn">Prev Stage</button>
        {props.isAdmin ?
          <Link className="stage-btn" to={`/stage/edit/${state.stage._id}`}>Edit Stage</Link>
          : ''}
        <button onClick={nextStage} className="stage-btn">Next Stage</button>
      </div>
      <div id="stage-images">
        <img src={state.stage.stageProfile} alt="stageProfile" />
        <img src={state.stage.stageMap} alt="stageMap" />
      </div>
    </section>
  );
};

export default StageDetails;