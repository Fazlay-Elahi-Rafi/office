import Head from "next/head";
import Layout from "../components/layouts/Layout";
import EventModule from "../components/events/EventModule";

const EventListPage = () => {
    return (
        <>
            <Head>
                <title>Event List - Online Courses & Education Bootstrap5 Template</title>
            </Head>

            <Layout>
                <EventModule eventStyle="list"/>
            </Layout>
        </>
    )
}

export default EventListPage