import styles from '../../styles/TeamCard.module.css'


const TeamCard = (teamData:any) => {
    return(
        <div className={styles.cardBody}>
            <div className={styles.cardLeft}>
                <div className={styles.cardImage}>
                    <img src={teamData.teamData.team.teamLogo} alt="team logo"/>
                </div>
                <h3>{teamData.teamData.team.teamCity}{teamData.teamData.team.teamName}</h3>
            </div>
            <div className={styles.cardRight}>
                    <div className={styles.teamInfo} key={teamData.teamData.team.teamId}>
                        <ul className={styles.cardHeaders}>
                            <li>Division:</li>
                            <li>Total Cap:</li>
                            <li>Active Roster Cap:</li>
                            {teamData.teamData.team.deadCap ? <li> Dead Cap:</li> : null }
                            {teamData.teamData.team.capHold ? <li> Cap Hold:</li> : null }
                            <li>Cap Max Space:</li>
                        </ul> 
                        <ul className={styles.cardData}>
                            <li>{teamData.teamData.team.teamDivision}</li>
                            <li>{teamData.teamData.team.totalCap.toLocaleString()}</li>
                            <li>{teamData.teamData.team.activeRosterCap.toLocaleString()}</li>
                            {teamData.teamData.team.deadCap ? <li>{teamData.teamData.team.deadCap.toLocaleString()}</li> : null }
                            {teamData.teamData.team.capHold ? <li>{teamData.teamData.team.capHold.toLocaleString()}</li> : null }
                            <li>{teamData.teamData.team.capMaxSpace.toLocaleString()}</li>
                        </ul>
                    </div>

            </div>
        </div>
    )

}

export default TeamCard;