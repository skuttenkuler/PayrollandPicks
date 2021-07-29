import styles from '../../styles/TeamCard.module.css'
// import React, {useState, useEffect} from 'react';


const TeamCard = (team:any) => {
    //console.log(team)
    let data = team.team.team
    //console.log(data)
    return(
        <div className={styles.cardBody}>
             <div className={styles.cardLeft}>
                <div className={styles.cardImage}>
                     <img src={data.teamLogo} alt="team logo"/> 
                </div>
                <h3>{team.team.team.teamCity}{team.team.team.teamName}</h3>
            </div> 
            <div className={styles.cardRight}>
                    <div className={styles.teamInfo} key={data.teamId}>
                        <table className={styles.cardData}>
                            <tr>
                                <td>Division:</td>
                                <td>{data.teamDivision}</td>
                            </tr>
                            <tr>
                                <td>Total Cap:</td>
                                <td>{data.totalCap.toLocaleString()}</td>
                            </tr>
                            <tr>
                                <td>Active Roster Cap:</td> 
                                <td>{data.activeRosterCap.toLocaleString()}</td>
                            </tr>
                            {data.deadCap ? <tr> 
                                <td>Dead Cap:</td> 
                                <td>{data.deadCap.toLocaleString()}</td>
                            </tr> : null }
                            {data.capHold ? <tr> 
                                <td>Cap Hold:</td>
                                <td>{data.capHold.toLocaleString()}</td>
                            </tr> : null }
                            <tr>
                                <td>Cap Max Space:</td> 
                                <td>{data.capMaxSpace.toLocaleString()}</td>
                            </tr>
                        </table> 
                       
                    </div>

            </div>
        </div>
    )

}

export default TeamCard;