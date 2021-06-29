import { get } from 'lodash'
import { getDataFromTree } from '@apollo/client/react/ssr'
import withApollo from '../../lib/withApollo'
import { useGetSinglePlayerQuery } from '../../generated'

function SinglePlayerPage({ query }) {
    const id  = get(query, "id");

    const { data } = useGetSinglePlayerQuery({
        variables: {
            id,
        },
    });

    return <div>{JSON.stringify(data)}</div>
}

export default withApollo(SinglePlayerPage, { getDataFromTree});