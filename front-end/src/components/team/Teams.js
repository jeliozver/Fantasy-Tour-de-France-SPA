import React from 'react';

import { useHttp } from '../../hooks/useHttp';
import Team from './Team';

const Teams = (props) => {
  const { fetchFunc, helper } = props;
  const [fetchedData] = useHttp('', fetchFunc, helper, []);
  let teams = [];

  if (fetchedData.success) {
    teams = fetchedData.body;
  }

  const renderTeams = () => {
    return teams.map((tm) => {
      tm.flag = helper.getFlag(tm.country);
      return <Team key={tm._id} team={tm} />;
    });
  };

  return (
    <section id="teams-all">
      {renderTeams()}
    </section>
  );
};

export default Teams;