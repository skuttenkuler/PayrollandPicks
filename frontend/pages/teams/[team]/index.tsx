import React from 'react';
import {GetStaticPaths, GetStaticProps} from 'next'
import Head from 'next/head';
import { useQuery } from '@apollo/client';
import QUERY_SINGLE_TEAM from '../../../queries/SingleTeamQuery.graphql';
import styles from '../../../styles/SingleTeam.module.css';

//interface
interface Team {
    teamId:number;
    teamName:string;
    teamCity:string;
    teamLogo:string;
    totalCap:number;
    activeRosterCap:number;
    deadCap:number;
    capHold:number;
    capMaxSpace:number;
    teamDivision:string;
}
interface TeamData {
    teamData: Team[];
}
interface TeamID {
    teamId:number
}
//query
const Get_Team_Data = QUERY_SINGLE_TEAM

export default function SingleTeamData(context:any) {
const { loading, data } = useQuery<TeamData, TeamID>(
    Get_Team_Data,
    { variables: { teamId: context.params } }
    );
return (
<div className={styles.container}>
    <Head>
    <title>Single Team</title>
    <link rel='icon' href='/favicon.ico' />
    </Head>
    {loading ? (
        <p>Loading.....</p>
    ): (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>City</th>
                    <th>url</th>
                    <th>totalCap</th>
                    <th>active</th>
                    <th>deadCap</th>
                    <th>cap Hold</th>
                    <th>Max Space</th>
                    <th>active</th>
                    <th>division</th>
                </tr>
            </thead>
            <tbody>
                {data && data.teamData.map(team => (
                    <tr>
                        <td>team.teamName</td>
                        <td>team.teamCity</td>
                        <td>team.teamLogo</td>
                        <td>team.totalCap</td>
                        <td>team.activeRosterCap</td>
                        <td>team.deadCap</td>
                        <td>team.capMaxSpace</td>
                        <td>team.teamDivision</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )}
</div>


)}
// //props
// export const getStaticProps: GetStaticProps = async (context:any) => {
//     const res = useQuery(QUERY_TEAM($id:{context.params}));
//     const team = await res
    
// }
// //paths
// export const getStaticPaths: GetStaticPaths = async () => {
//    const paths:any = data.teams
// }