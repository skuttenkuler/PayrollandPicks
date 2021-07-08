import { get } from 'lodash'
import { getDataFromTree } from '@apollo/client/react/ssr'
import withApollo from '../../lib/withApollo'
import { useGetSingleTeamQuery } from '../../generated'
//import TeamDataTable from '../../components/tables/TeamDataTable';
import TeamCard from '../../components/cards/TeamCard';

function SingleTeamPage({ query }) {
    const id  = get(query, "id");

    const { data } = useGetSingleTeamQuery({
        variables: {
            id,
        },
    });

    return (
        <TeamCard teamData={data}/>
        
    )
}

export default withApollo(SingleTeamPage, { getDataFromTree});