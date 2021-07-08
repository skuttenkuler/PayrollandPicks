import {useState} from 'react';
import {Table} from 'react-bootstrap';

const columns = [
    {
        Header: 'Name',
        accessor: 'name'
    },
    {
        Header: 'City',
        accessor: 'city'
    },
    {
        Header: 'Division',
        accessor: 'division'
    },
    {
        Header: "Total Cap",
        accessor:"totalCap"
    },
    {
        Header: "Active Roster Cap",
        accessor:"activeRosterCap"
    },
    {
        Header: "Dead Cap",
        accessor:"deadCap"
    },
    {
        Header: "Cap Hold",
        accessor:"capHold"
    },
    {
        Header: "Cap Max Space",
        accessor:"capMaxSpace"
    }
]


export default function TeamDataTable(teamData: any) {
    console.log()
    return(
    <Table striped bordered hover>
        <thead>
            <tr>
                
            {columns.map((col) => (
                    <th>{col.Header}</th>
                ))}
            </tr>
        </thead>
            <tbody>
                    <tr key={teamData.teamData.team.teamId}>
                        <td>{teamData.teamData.team.teamName}</td>
                        <td>{teamData.teamData.team.teamCity}</td>
                        <td>{teamData.teamData.team.teamDivision}</td>
                        <td>{teamData.teamData.team.totalCap.toLocaleString()}</td>
                        <td>{teamData.teamData.team.activeRosterCap.toLocaleString()}</td>
                        <td>{teamData.teamData.team.deadCap ? teamData.teamData.team.deadCap.toLocaleString(): ""}</td>
                        <td>{teamData.teamData.team.capHold ? teamData.teamData.team.capHold.toLocaleString(): ""}</td>
                        <td>{teamData.teamData.team.capMaxSpace.toLocaleString()}</td>
                        
                    </tr>
            </tbody>
        
    </Table>
    )
}