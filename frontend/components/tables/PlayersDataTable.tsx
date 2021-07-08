
import {Table} from 'react-bootstrap';

const columns = [
    {
        Header: 'Player',
        accessor: 'player'
    },
    {
        Header: 'Team',
        accessor: 'team'
    },
    {
        Header: "Position",
        accessor:"position"
    },
    {
        Header: "Height",
        accessor:"height"
    },
    {
        Header: "Weight",
        accessor:"weight"
    },
    {
        Header: "Age",
        accessor:"age"
    },
    {
        Header: "Draft Year",
        accessor:"draftYear"
    },
    {
        Header: "Draft Number",
        accessor:"draftNumber"
    },
    {
        Header: "Country",
        accessor:"country"
    },
    {
        Header: "Contract Year",
        accessor:"contractYear"
    },
    {
        Header: "Contract Amount",
        accessor:"contractAmount"
    },
    {
        Header: "Average Salary",
        accessor:"averageSalary"
    },
    {
        Header: "Signed Using",
        accessor:"signedUsing"
    },
    {
        Header: "Base Salary",
        accessor:"baseSalary"
    },
    {
        Header: "Dead Cap",
        accessor:"deadCap"
    },
    {
        Header: "Cap Figure",
        accessor:"capFigure"
    },
    {
        Header: "Cap Percentage",
        accessor:"capPercentage"
    },
    {
        Header: "Future Guranteed",
        accessor:"futureGuranteed"
    },
    {
        Header: "Injury",
        accessor:"injury"
    },
    {
        Header: "Season Ending",
        accessor:"seasonEndingInjury"
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