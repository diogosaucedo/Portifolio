import { initializeApollo } from '../../lib/apolloClient';
import { GET_INFO_PROFILE_BY_LOGIN } from '../../lib/queries/getInfoProfileByLogin';



function Index({ index }) {
    return <h1>Hello, my name is {index.data.user.name} :)</h1>;
}

export default Index;

export async function getServerSideProps() {
    const apolloClient = initializeApollo()
    const index = await apolloClient.query({ query: GET_INFO_PROFILE_BY_LOGIN })
    return {
        props: {
            index: index,
            initialApoloState: apolloClient.cache.extract(),
        },
    }
}