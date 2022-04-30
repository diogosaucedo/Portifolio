import { initializeApollo } from '../../lib/apolloClient';
import { GET_INFO_PROFILE_BY_LOGIN } from '../../lib/queries/getInfoProfileByLogin';
import Layout from '../components/Layout';
import NavigationBar from '../components/NavigationBar';
import PersonalPresentation from '../components/PersonalPresentation';
import About from '../components/About';
import Contacts from '../components/Contacts';
import Projects from '../components/Projects';
import Services from '../components/Services';
import Skills from '../components/Skills';
import Footer from '../components/Footer';


function Index({ index }) {
    return (
        <>
            <Layout>
                <NavigationBar></NavigationBar>
                <PersonalPresentation userData={index.data.user}></PersonalPresentation>
                <About></About>
                <Contacts></Contacts>
                <Projects projectsData={index.data.user.pinnedItems}></Projects>
                <Services></Services>
                <Skills></Skills>
            </Layout>
            <Footer></Footer>
        </>)
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