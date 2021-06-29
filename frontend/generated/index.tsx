/* tslint:disable */
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * The `DateTime` scalar type represents a DateTime
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  DateTime: any;
};


export type PlayerType = {
  __typename?: 'PlayerType';
  playerId: Scalars['ID'];
  jerseyNumber: Scalars['Int'];
  playerImage?: Maybe<Scalars['String']>;
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  position: Scalars['String'];
  height: Scalars['String'];
  weight: Scalars['Int'];
  age?: Maybe<Scalars['Int']>;
  playerTeam: TeamType;
  draftYear: Scalars['String'];
  draftNumber: Scalars['String'];
  country: Scalars['String'];
  contractYear?: Maybe<Scalars['Int']>;
  contractAmount?: Maybe<Scalars['Int']>;
  averageSalary?: Maybe<Scalars['Int']>;
  signedUsing: Scalars['String'];
  baseSalary?: Maybe<Scalars['Int']>;
  deadCap?: Maybe<Scalars['Int']>;
  capFigure?: Maybe<Scalars['Int']>;
  capPercentage?: Maybe<Scalars['Float']>;
  futureGuranteed?: Maybe<Scalars['Int']>;
  injury: Scalars['String'];
  seasonEndingInjury: Scalars['Boolean'];
};

export type Query = {
  __typename?: 'Query';
  users?: Maybe<Array<Maybe<UserType>>>;
  teams?: Maybe<Array<Maybe<TeamType>>>;
  players?: Maybe<Array<Maybe<PlayerType>>>;
  team?: Maybe<TeamType>;
  player?: Maybe<PlayerType>;
};


export type QueryTeamArgs = {
  id?: Maybe<Scalars['Int']>;
};


export type QueryPlayerArgs = {
  id?: Maybe<Scalars['Int']>;
};

export type TeamType = {
  __typename?: 'TeamType';
  teamId: Scalars['ID'];
  teamName: Scalars['String'];
  teamLogo: Scalars['String'];
  teamDivision: Scalars['String'];
  teamCity: Scalars['String'];
  activeRosterCap?: Maybe<Scalars['Int']>;
  deadCap?: Maybe<Scalars['Int']>;
  capHold?: Maybe<Scalars['Int']>;
  totalCap?: Maybe<Scalars['Int']>;
  capMaxSpace?: Maybe<Scalars['Int']>;
  playerSet: Array<PlayerType>;
};

export type UserType = {
  __typename?: 'UserType';
  id: Scalars['ID'];
  password: Scalars['String'];
  lastLogin?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  isActive: Scalars['Boolean'];
  isAdmin: Scalars['Boolean'];
};

export type GetTeamsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTeamsQuery = (
  { __typename?: 'Query' }
  & { teams?: Maybe<Array<Maybe<(
    { __typename?: 'TeamType' }
    & Pick<TeamType, 'teamId' | 'teamName' | 'teamCity' | 'teamLogo' | 'totalCap' | 'activeRosterCap' | 'deadCap' | 'capHold' | 'capMaxSpace' | 'teamDivision'>
  )>>> }
);

export type GetPlayersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPlayersQuery = (
  { __typename?: 'Query' }
  & { players?: Maybe<Array<Maybe<(
    { __typename?: 'PlayerType' }
    & Pick<PlayerType, 'playerId' | 'firstName' | 'lastName' | 'playerImage' | 'position' | 'height' | 'weight' | 'age' | 'draftYear' | 'draftNumber' | 'country' | 'contractYear' | 'contractAmount' | 'averageSalary' | 'signedUsing' | 'baseSalary' | 'deadCap' | 'capFigure' | 'capPercentage' | 'futureGuranteed' | 'injury' | 'seasonEndingInjury'>
    & { playerTeam: (
      { __typename?: 'TeamType' }
      & Pick<TeamType, 'teamName' | 'teamCity'>
    ) }
  )>>> }
);

export type GetPlayersByTeamQueryVariables = Exact<{
  id?: Maybe<Scalars['Int']>;
}>;


export type GetPlayersByTeamQuery = (
  { __typename?: 'Query' }
  & { team?: Maybe<(
    { __typename?: 'TeamType' }
    & Pick<TeamType, 'teamId' | 'teamName' | 'teamCity' | 'teamLogo'>
    & { playerSet: Array<(
      { __typename?: 'PlayerType' }
      & Pick<PlayerType, 'playerId' | 'firstName' | 'lastName' | 'playerImage' | 'position' | 'height' | 'weight' | 'age' | 'draftYear' | 'draftNumber' | 'country' | 'contractYear' | 'contractAmount' | 'averageSalary' | 'signedUsing' | 'baseSalary' | 'deadCap' | 'capFigure' | 'capPercentage' | 'futureGuranteed' | 'injury' | 'seasonEndingInjury'>
    )> }
  )> }
);

export type GetSinglePlayerQueryVariables = Exact<{
  id?: Maybe<Scalars['Int']>;
}>;


export type GetSinglePlayerQuery = (
  { __typename?: 'Query' }
  & { player?: Maybe<(
    { __typename?: 'PlayerType' }
    & Pick<PlayerType, 'playerId' | 'firstName' | 'lastName' | 'playerImage' | 'position' | 'height' | 'weight' | 'age' | 'draftYear' | 'draftNumber' | 'country' | 'contractYear' | 'contractAmount' | 'averageSalary' | 'signedUsing' | 'baseSalary' | 'deadCap' | 'capFigure' | 'capPercentage' | 'futureGuranteed' | 'injury' | 'seasonEndingInjury'>
    & { playerTeam: (
      { __typename?: 'TeamType' }
      & Pick<TeamType, 'teamName' | 'teamCity'>
    ) }
  )> }
);

export type GetSingleTeamQueryVariables = Exact<{
  id?: Maybe<Scalars['Int']>;
}>;


export type GetSingleTeamQuery = (
  { __typename?: 'Query' }
  & { team?: Maybe<(
    { __typename?: 'TeamType' }
    & Pick<TeamType, 'teamId' | 'teamName' | 'teamCity' | 'teamLogo' | 'totalCap' | 'activeRosterCap' | 'deadCap' | 'capHold' | 'capMaxSpace' | 'teamDivision'>
  )> }
);


export const GetTeamsDocument = gql`
    query getTeams {
  teams {
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

/**
 * __useGetTeamsQuery__
 *
 * To run a query within a React component, call `useGetTeamsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTeamsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTeamsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTeamsQuery(baseOptions?: Apollo.QueryHookOptions<GetTeamsQuery, GetTeamsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTeamsQuery, GetTeamsQueryVariables>(GetTeamsDocument, options);
      }
export function useGetTeamsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTeamsQuery, GetTeamsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTeamsQuery, GetTeamsQueryVariables>(GetTeamsDocument, options);
        }
export type GetTeamsQueryHookResult = ReturnType<typeof useGetTeamsQuery>;
export type GetTeamsLazyQueryHookResult = ReturnType<typeof useGetTeamsLazyQuery>;
export type GetTeamsQueryResult = Apollo.QueryResult<GetTeamsQuery, GetTeamsQueryVariables>;
export const GetPlayersDocument = gql`
    query getPlayers {
  players {
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

/**
 * __useGetPlayersQuery__
 *
 * To run a query within a React component, call `useGetPlayersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPlayersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPlayersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPlayersQuery(baseOptions?: Apollo.QueryHookOptions<GetPlayersQuery, GetPlayersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPlayersQuery, GetPlayersQueryVariables>(GetPlayersDocument, options);
      }
export function useGetPlayersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPlayersQuery, GetPlayersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPlayersQuery, GetPlayersQueryVariables>(GetPlayersDocument, options);
        }
export type GetPlayersQueryHookResult = ReturnType<typeof useGetPlayersQuery>;
export type GetPlayersLazyQueryHookResult = ReturnType<typeof useGetPlayersLazyQuery>;
export type GetPlayersQueryResult = Apollo.QueryResult<GetPlayersQuery, GetPlayersQueryVariables>;
export const GetPlayersByTeamDocument = gql`
    query getPlayersByTeam($id: Int) {
  team(id: $id) {
    teamId
    teamName
    teamCity
    teamLogo
    playerSet {
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

/**
 * __useGetPlayersByTeamQuery__
 *
 * To run a query within a React component, call `useGetPlayersByTeamQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPlayersByTeamQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPlayersByTeamQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPlayersByTeamQuery(baseOptions?: Apollo.QueryHookOptions<GetPlayersByTeamQuery, GetPlayersByTeamQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPlayersByTeamQuery, GetPlayersByTeamQueryVariables>(GetPlayersByTeamDocument, options);
      }
export function useGetPlayersByTeamLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPlayersByTeamQuery, GetPlayersByTeamQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPlayersByTeamQuery, GetPlayersByTeamQueryVariables>(GetPlayersByTeamDocument, options);
        }
export type GetPlayersByTeamQueryHookResult = ReturnType<typeof useGetPlayersByTeamQuery>;
export type GetPlayersByTeamLazyQueryHookResult = ReturnType<typeof useGetPlayersByTeamLazyQuery>;
export type GetPlayersByTeamQueryResult = Apollo.QueryResult<GetPlayersByTeamQuery, GetPlayersByTeamQueryVariables>;
export const GetSinglePlayerDocument = gql`
    query getSinglePlayer($id: Int) {
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

/**
 * __useGetSinglePlayerQuery__
 *
 * To run a query within a React component, call `useGetSinglePlayerQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSinglePlayerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSinglePlayerQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetSinglePlayerQuery(baseOptions?: Apollo.QueryHookOptions<GetSinglePlayerQuery, GetSinglePlayerQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSinglePlayerQuery, GetSinglePlayerQueryVariables>(GetSinglePlayerDocument, options);
      }
export function useGetSinglePlayerLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSinglePlayerQuery, GetSinglePlayerQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSinglePlayerQuery, GetSinglePlayerQueryVariables>(GetSinglePlayerDocument, options);
        }
export type GetSinglePlayerQueryHookResult = ReturnType<typeof useGetSinglePlayerQuery>;
export type GetSinglePlayerLazyQueryHookResult = ReturnType<typeof useGetSinglePlayerLazyQuery>;
export type GetSinglePlayerQueryResult = Apollo.QueryResult<GetSinglePlayerQuery, GetSinglePlayerQueryVariables>;
export const GetSingleTeamDocument = gql`
    query getSingleTeam($id: Int) {
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

/**
 * __useGetSingleTeamQuery__
 *
 * To run a query within a React component, call `useGetSingleTeamQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSingleTeamQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSingleTeamQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetSingleTeamQuery(baseOptions?: Apollo.QueryHookOptions<GetSingleTeamQuery, GetSingleTeamQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSingleTeamQuery, GetSingleTeamQueryVariables>(GetSingleTeamDocument, options);
      }
export function useGetSingleTeamLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSingleTeamQuery, GetSingleTeamQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSingleTeamQuery, GetSingleTeamQueryVariables>(GetSingleTeamDocument, options);
        }
export type GetSingleTeamQueryHookResult = ReturnType<typeof useGetSingleTeamQuery>;
export type GetSingleTeamLazyQueryHookResult = ReturnType<typeof useGetSingleTeamLazyQuery>;
export type GetSingleTeamQueryResult = Apollo.QueryResult<GetSingleTeamQuery, GetSingleTeamQueryVariables>;