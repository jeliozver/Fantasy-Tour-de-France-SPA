import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const TeamDetails = (props) => {
  const [state, setState] = useState({ team: { riders: [] } });

  const handleResponse = (res) => {
    const { helper } = props;

    if (res.success) {
      res.body.flag = helper.getFlag(res.body.country);
      setState({ ...state, team: res.body, teamOnFocus: res.body.teamNumber });
    } else {
      helper.notify('error', res.message);
    }
  };

  useEffect(() => {
    const { fetchFunc, helper, match } = props;

    fetchFunc(match.params.id)
      .then(res => handleResponse(res))
      .catch(err => helper.notify('error', err));
  }, []);

  const prevTeam = () => {
    const { helper } = props;

    props.toggleFunc(state.teamOnFocus - 1)
      .then(res => handleResponse(res))
      .catch(err => helper.notify('error', err));
  };

  const nextTeam = () => {
    const { helper } = props;

    props.toggleFunc(state.teamOnFocus + 1)
      .then(res => handleResponse(res))
      .catch(err => helper.notify('error', err));
  };

  const renderRiders = () => {
    return state.team.riders.map((rider) => {
      rider.flag = props.helper.getFlag(rider.country);
      return (<div key={rider._id} className="rider-card">
        <h1>{rider.name}</h1>
        <h2>{rider.country}</h2>
        <img src="" className={`flag flag-${rider.flag}`} alt="" />
        <Link to={`/rider/details/${rider._id}`}>
          <img src={rider.image} alt="rider-img" />
        </Link>
      </div>);
    });
  };

  return (
    <section id="team-single">
      <div onClick={prevTeam} className="arrows prev"></div>
      <div onClick={nextTeam} className="arrows next"></div>
      <div className="team-card">
        <h1>{state.team.name}</h1>
        <h2>{state.team.country}</h2>
        <img src="" className={`flag flag-${state.team.flag}`} alt="" />
        <img className="jersey" src={state.team.jersey} alt="team-jersey" />
      </div>
      <div>
        {props.isAdmin ? <Link className="team-btn" to={`/team/edit/${state.team._id}`}>Edit Team</Link> : ''}
      </div>
      <div className="team-riders">
        {renderRiders()}
      </div>
    </section>
  );
};

export default TeamDetails;