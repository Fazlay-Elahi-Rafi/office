import Head from 'next/head'
import Layout from '../components/layouts/Layout'

const HomePageFive = () => {
    const layoutSetting = {
        headerSetting: {
            headerVariant: 5
        },
        footerSetting: {

        }
    }

    return (
        <>
            <Head>
                <title>Home Elegant - Online Courses & Education Bootstrap5 Template</title>
            </Head>

            <Layout layoutSetting={layoutSetting}>

            </Layout>
        </>
    )
}

export default HomePageFive;
