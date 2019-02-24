import React from 'react';
import { Link } from 'react-router-dom';

const Team = (props) => {
  const { stage } = props;

  return (
    <tr>
      <td>Stage {stage.stageNumber}</td>
      <td>{stage.stageType}</td>
      <td>{stage.startDay.substring(0, 10)}</td>
      <td>{stage.startCity}</td>
      <td>{stage.endCity}</td>
      <td>{stage.distance} km</td>
      <td>
        <Link to={`/stage/details/${stage._id}`}>[ Details ]</Link>
      </td>
    </tr>
  );
};

export default Team;