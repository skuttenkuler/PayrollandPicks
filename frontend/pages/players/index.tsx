import Head from 'next/head';
import { useQuery } from '@apollo/client';

//import QUERY_TEAMS from '../queries/AllTeamsQuery.graphql';
import QUERY_PLAYERS from '../../queries/AllPlayersQuery.graphql';
import styles from '../../styles/Teams.module.css';

export default function Home() {
  const { data, loading, error } = useQuery(QUERY_PLAYERS);
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
        <title>Players</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1>Teams</h1>
      <div>
        {data.players.map((player:any) => (
          <div key={player.playerId}>
            <h4>{player.firstName}{player.lastName}</h4>
            <img src={player.playerImage} alt="logo"/>  
          </div>
        ))}
      </div>
    </div>
  );
}
