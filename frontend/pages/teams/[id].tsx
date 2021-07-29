import { get } from 'lodash'
import { getDataFromTree } from '@apollo/client/react/ssr'
import withApollo from '../../lib/withApollo'
import { useGetSingleTeamQuery } from '../../generated'
//import TeamDataTable from '../../components/tables/TeamDataTable';
import TeamCard from '../../components/cards/TeamCard';

function SingleTeamPage({ query }) {
    console.log(query)
    let id  = get(query, "id");
    console.log(id)
    const { loading, error, data } = useGetSingleTeamQuery({
        
        variables: {
            id: id,
        },
    });
    if(loading){
        return "loading"
    }
    if(error){
        console.log(error.message)
    }
        console.log(data)
    
    return (
        <TeamCard team={data}/>
    )
}

export default withApollo(SingleTeamPage, { getDataFromTree});