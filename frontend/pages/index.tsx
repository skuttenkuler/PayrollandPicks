import Head from 'next/head';
import { useQuery } from '@apollo/client';

import QUERY_TEAMS from '../queries/TeamQuery.graphql';

import styles from '../styles/Home.module.css';

export default function Home() {
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
        <title>TEAMS</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1>Teams</h1>
      <div>
        {data.teams.map((team:any) => (
          <div key={team.id}>{team.teamName}</div>
        ))}
      </div>
    </div>
  );
}