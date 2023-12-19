import Head from 'next/head'
import Layout from '../components/layouts/Layout'

const HomePageSix = () => {
    const layoutSetting = {
        headerSetting: {
            headerVariant: 6
        },
        footerSetting: {

        }
    }

    return (
        <>
            <Head>
                <title>Gym Coaching - Online Courses & Education Bootstrap5 Template</title>
            </Head>

            <Layout layoutSetting={layoutSetting}>

            </Layout>
        </>
    )
}

export default HomePageSix;
