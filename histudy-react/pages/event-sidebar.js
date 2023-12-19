import Head from 'next/head';
import Layout from '../components/layouts/Layout';
import EventModule from '../components/events/EventModule';

const EventSidebarPage = () => {
    return (
        <>
            <Head>
                <title>Event Sidebar - Online Courses & Education Bootstrap5 Template</title>
            </Head>

            <Layout>
                <EventModule eventFilter={true}/>
            </Layout>
        </>
    )
}

export default EventSidebarPage