import React, { useReducer, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { myFantasyTeamReducer } from '../../reducers';
import blankJersey from '../../resources/img/blank-jersey.png';
import FantasyTeamForm from '../forms/FantasyTeamForm';

const initialState = { team: { riders: [] }, blanks: 8 };

const MyFantasyTeam = (props) => {
  const [state, dispatch] = useReducer(myFantasyTeamReducer, initialState);
  const blanks = [];

  for (let i = 1; i <= state.blanks; i++) {
    blanks.push({
      id: i,
      image: blankJersey,
      name: 'No Rider'
    });
  }

  useEffect(() => {
    const { helper } = props;

    props.fetchFunc().then((res) => {
      if (res.success) {
        if (res.body) {

          for (let rider of res.body.riders) {
            rider['flag'] = helper.getFlag(rider.country);
          }

          dispatch({ type: 'team', team: res.body });
          dispatch({ type: 'blanks', blanks: res.body.riders.length });
        }
      } else {
        helper.notify('error', res.message);
      }
    }).catch((err) => {
      helper.notify('error', err);
    });
  }, []);

  if (state.team.name) {
    return (
      <section id="my-fantasy-team">
        <h1>{state.team.name}</h1>
        <h2>Total Points: {state.team.points}</h2>
        {state.team.riders.map(
          (rider) => <div key={rider._id} className="rider-card">
            <h1>{rider.name}</h1>
            <h2>{rider.country}</h2>
            <img src="" className={`flag flag-${rider.flag}`} alt="" />
            <h2>{rider.team.name}</h2>
            <Link to={`/rider/details/${rider._id}`}>
              <img src={rider.image} alt="rider-img" />
            </Link>
          </div>
        )}
        {blanks.map(
          (blank) => <div className="rider-card" key={blank.id}>
            <h1>{blank.name}</h1>
            <img className="blank" src={blank.image} alt="" />
          </div>
        )}
      </section>
    );
  } else {
    return (
      <FantasyTeamForm {...props} />
    );
  }
};

export default MyFantasyTeam;