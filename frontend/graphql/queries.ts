import gql from 'graphql-tag';

export const ALL_TEAMS_QUERY = gql`
    query getTeams {
    teams{
        teamId
        teamName
        teamCity
        teamLogo
        totalCap
        activeRosterCap
        deadCap
        capHold
        capMaxSpace
        teamDivision
        }
    }
`;

export const ALL_PLAYERS_QUERY = gql`
    query getPlayers{
    players{
        playerId
        firstName
        lastName
        playerTeam {
            teamName
            teamCity
        }
        playerImage
        position
        height
        weight
        age
        draftYear
        draftNumber
        country
        contractYear
        contractAmount
        averageSalary
        signedUsing
        baseSalary
        deadCap
        capFigure
        capPercentage
        futureGuranteed
        injury
        seasonEndingInjury
        }
    }
`;
export const PLAYERS_BY_TEAM_QUERY = gql`
    query getPlayersByTeam($id: Int){
        team(id: $id) {
        teamId
        teamName
        teamCity
        teamLogo
        playerSet{
            playerId
            firstName
            lastName
            playerImage
            position
            height
            weight
            age
            draftYear
            draftNumber
            country
            contractYear
            contractAmount
            averageSalary
            signedUsing
            baseSalary
            deadCap
            capFigure
            capPercentage
            futureGuranteed
            injury
            seasonEndingInjury
            }
        }
    }
`;

export const SINGLE_PLAYER_QUERY = gql`
    query getSinglePlayer($id: Int){
    player(id: $id) {
        playerId
        firstName
        lastName
        playerTeam {
        teamName
        teamCity
        }
        playerImage
        position
        height
        weight
        age
        draftYear
        draftNumber
        country
        contractYear
        contractAmount
        averageSalary
        signedUsing
        baseSalary
        deadCap
        capFigure
        capPercentage
        futureGuranteed
        injury
        seasonEndingInjury
        }
    }
`;

export const SINGLE_TEAM_QUERY = gql`
    query getSingleTeam($id: Int){
    team(id: $id) {
        teamId
        teamName
        teamCity
        teamLogo
        totalCap
        activeRosterCap
        deadCap
        capHold
        capMaxSpace
        teamDivision
        }
    }
`;