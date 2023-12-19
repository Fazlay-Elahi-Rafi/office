import Head from 'next/head'
import Layout from '../components/layouts/Layout'
import BannerThree from '../components/banners/BannerThree'

const HomePageThree = () => {
    const layoutSetting = {
        headerSetting: {
            headerVariant: 3
        },
        footerSetting: {

        }
    }

    return (
        <>
            <Head>
                <title>Kindergarten - Online Courses & Education Bootstrap5 Template</title>
            </Head>

            <Layout layoutSetting={layoutSetting}>
                <BannerThree/>
            </Layout>
        </>
    )
}

export default HomePageThree;
