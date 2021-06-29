import Head from 'next/head';
import { useQuery } from '@apollo/client';
import { getDataFromTree } from '@apollo/client/react/ssr'
import styles from '../../styles/Teams.module.css';
import withApollo from 'next-with-apollo';
import QUERY_TEAMS from '../../queries/AllPlayersQuery.graphql';
function Teams() {
  const { data, loading, error } = useQuery(QUERY_TEAMS);
  // make sure all data is loaded
  if (loading) {
    return <p>loading...</p>;
  }

  // check for errors
  if (error) {
    return <p>:( an error happened</p>;
  }

  // if all good return data
  return (
    <div className={styles.container}>
      <Head>
        <title>Teams</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1>Teams</h1>
      <div>
      {data.teams.map((team:any) => (
          <div key={team.id}>
            <h4>{team.teamCity}{team.teamName}</h4>
            <img src={team.teamLogo} alt="logo"/>  
          </div>
        ))}
      </div>
    </div>
  );
}

export default withApollo(Teams, {getDataFromTree})