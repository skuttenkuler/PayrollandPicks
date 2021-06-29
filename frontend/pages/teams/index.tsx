import { get } from 'lodash';
import { getDataFromTree } from '@apollo/client/react/ssr'
import withApollo from '../../lib/withApollo';
import { GetTeamsQuery, useGetTeamsQuery  } from '../../generated';

import styles from '../../styles/Teams.module.css';

function Teams() {
  const { data } = useGetTeamsQuery();
  
  const teams = get(
    data,"teams",[]
  ) as GetTeamsQuery["teams"]
  return (
    <div className={styles.container}>
      <h1>Teams</h1>
      <div>
      {teams.map((team:any) => (
          <div key={team.teamId}>
            <h4>{team.teamCity}{team.teamName}</h4>
            <img src={team.teamLogo} alt="logo"/>  
          </div>
        ))}
      </div>
    </div>
  );
}
export default withApollo(Teams, {getDataFromTree})