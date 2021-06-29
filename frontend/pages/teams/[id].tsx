import { get } from 'lodash'
import { getDataFromTree } from '@apollo/client/react/ssr'
import withApollo from '../../lib/withApollo'
import { useGetSingleTeamQuery } from '../../generated'

function SingleTeamPage({ query }) {
    const id  = get(query, "id");

    const { data } = useGetSingleTeamQuery({
        variables: {
            id,
        },
    });

    return <div>{JSON.stringify(data)}</div>
}

export default withApollo(SingleTeamPage, { getDataFromTree});