import React from 'react';
import Head from 'next/head';
import Link from 'next/link'
import Navbar from '../components/nav/NavBar';
import withApollo from '../lib/withApollo';
import { get } from 'lodash'
import { getDataFromTree } from '@apollo/client/react/ssr'
import styles from '../styles/Home.module.css';
import { GetTeamsQuery, useGetTeamsQuery  } from '../generated';
import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }),
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }),
)(TableRow);
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function Home() {
  const { data } = useGetTeamsQuery();
  
  const teams = get(
    data,"teams",[]
  ) as GetTeamsQuery["teams"]
  
  const classes = useStyles();

  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar/>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell>NBA TEAMS</StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
            <StyledTableCell align="right">Total Cap</StyledTableCell>
            <StyledTableCell align="right">Active Roster Cap</StyledTableCell>
            <StyledTableCell align="right">Dead Cap</StyledTableCell>
            <StyledTableCell align="right">Cap Hold</StyledTableCell>
            <StyledTableCell align="right">Cap Max Space</StyledTableCell>
            <StyledTableCell align="right">Division</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {teams.map((team) => (
            <Link className={styles.tableLink} href="/teams/[id]" as={`/teams/${team.teamId}`}>
              <StyledTableRow key={team.teamId}>
                <StyledTableCell component="th" scope="row">
                  <img className={styles.tableImage} src={team.teamLogo} alt="logo"/>
                    
                </StyledTableCell>
                <StyledTableCell align="right">{team.teamCity} {team.teamName}</StyledTableCell>
                <StyledTableCell align="right">{team.totalCap}</StyledTableCell>
                <StyledTableCell align="right">{team.activeRosterCap}</StyledTableCell>
                <StyledTableCell align="right">{team.deadCap}</StyledTableCell>
                <StyledTableCell align="right">{team.capHold}</StyledTableCell>
                <StyledTableCell align="right">{team.capMaxSpace}</StyledTableCell>
                <StyledTableCell align="right">{team.teamDivision}</StyledTableCell>
              </StyledTableRow>
            </Link>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}

export default withApollo(Home, {getDataFromTree})

