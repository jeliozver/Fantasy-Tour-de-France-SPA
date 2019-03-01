import React from 'react';

import { useHttp } from '../../hooks/useHttp';
import Stage from './Stage';

const Stages = (props) => {
  const { fetchFunc, helper } = props;
  const [fetchedData] = useHttp('', fetchFunc, helper, []);
  let stages = [];

  if (fetchedData.success) {
    stages = fetchedData.body;
  }

  return (
    <section id="stages-all">
      <table>
        <thead>
          <tr>
            <th>Stage</th>
            <th>Stage Type</th>
            <th>Start Date</th>
            <th>Start City</th>
            <th>End City</th>
            <th>Distance</th>
            <th>Stage Details</th>
          </tr>
        </thead>
        <tbody>
          {stages.map(
            (stage) => <Stage key={stage._id} stage={stage} />
          )}
        </tbody>
      </table>
    </section>
  );
};

export default Stages;