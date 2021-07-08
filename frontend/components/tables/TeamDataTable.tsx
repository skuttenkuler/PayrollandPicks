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
    return(
    <Table striped bordered hover>
        <thead>
            <tr>
            {columns.map((col) => (
                    <th>{col.Header}</th>
                ))}
            </tr>
            <tbody>
                {/* { teamData.teams.map((team) => (
                    <tr key={team.teamId}>
                        <td>{team.totalCap.toLocaleString()}</td>
                        <td>{team.activeRosterCap.toLocaleString()}</td>
                        <td>{team.deadCap ? team.deadCap.toLocaleString(): ""}</td>
                        <td>{team.capHold ? team.capHold.toLocaleString(): ""}</td>
                        <td>{team.capMaxSpace.toLocaleString()}</td>
                        <td>{team.teamDivision.toLocaleString()}</td>
                    </tr>
                ))} */}
            </tbody>
        </thead>
    </Table>
    )
}