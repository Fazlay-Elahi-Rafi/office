import Head from "next/head";
import Layout from "../components/layouts/Layout";
import EventModule from "../components/events/EventModule";

const EventGridPage = () => {
    return (
        <>
            <Head>
                <title>Event Grid - Online Courses & Education Bootstrap5 Template</title>
            </Head>

            <Layout>
                <EventModule/>
            </Layout>
        </>
    )
}

export default EventGridPage