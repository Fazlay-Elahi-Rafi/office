import Head from 'next/head'
import Layout from '../components/layouts/Layout'

const HomePageSeven = () => {
    const layoutSetting = {
        headerSetting: {
            headerVariant: 7
        },
        footerSetting: {

        }
    }

    return (
        <>
            <Head>
                <title>Online School - Online Courses & Education Bootstrap5 Template</title>
            </Head>

            <Layout layoutSetting={layoutSetting}>

            </Layout>
        </>
    )
}

export default HomePageSeven;
