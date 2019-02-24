import React from 'react';
import { Link } from 'react-router-dom';

import { useHttp } from '../../hooks/useHttp';

const RiderDetails = (props) => {
  const { fetchFunc, helper, match } = props;
  const url = match.params.id;
  const [fetchedData] = useHttp(url, fetchFunc, helper, []);
  const { success, body } = fetchedData;
  let rider = { team: {} };

  if (success) {
    rider = body;
    rider['flag'] = helper.getFlag(rider.country);
  }

  return (
    <section id="rider-single">
      <div>
        <h1>
          {rider.name}
          <img src="" className={`flag flag-${rider.flag}`} alt="" />
        </h1>
        <img className="rider-img" src={rider.image} alt="rider" />
        <div>
          {props.isAdmin ? <Link className="rider-btn" to={`/rider/edit/${rider._id}`}>Edit Rider</Link> : ''}
        </div>
        <table>
          <thead>
            <tr>
              <th>Team</th>
              <th>Rider Type</th>
              <th>Nationality</th>
              <th>Age</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Link to={`/team/details/${rider.team._id}`}>{rider.team.name}</Link>
              </td>
              <td>{rider.riderType}</td>
              <td>{rider.country}</td>
              <td>{rider.age}</td>
              <td>{rider.cost}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default RiderDetails;