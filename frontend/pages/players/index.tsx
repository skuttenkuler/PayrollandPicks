import { get } from 'lodash';
import { getDataFromTree } from '@apollo/client/react/ssr'
import withApollo from '../../lib/withApollo';
import { GetPlayersQuery, useGetPlayersQuery  } from '../../generated';
import Link from 'next/link'
import styles from '../../styles/Players.module.css'
function Players() {
  const { data } = useGetPlayersQuery();
  
  const players = get(
    data,"players",[]
  ) as GetPlayersQuery["players"];

  return (
    <div className={styles.container}>
      <h1>Players</h1>
      <table>
        {players.map((player:any) => (
          <div key={player.playerId}>
            <Link href="/players/[id]" as={`/players/${player.playerId}`}><h4>{player.firstName}{player.lastName}</h4></Link>
            <img src={player.playerImage} alt="logo"/>  
          </div>
        ))}
      </table>
    </div>
  );
}
export default withApollo(Players, {getDataFromTree})