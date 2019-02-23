import React from 'react';
import { Link } from 'react-router-dom';

const Team = (props) => {
  const { team } = props;

  return (
    <div>
      <h1>{team.name}</h1>
      <img src="" className={`flag flag-${team.flag}`} alt="" />
      <Link className="effect" to={{ pathname: `/team/details/${team._id}` }}>
        <img className="jersey" src={team.jersey} alt="team-jersey" />
        <p>Team Details</p>
      </Link>
    </div>
  );
};

export default Team;