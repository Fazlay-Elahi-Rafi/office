import Head from 'next/head'
import Layout from '../components/layouts/Layout'
import BannerFour from '../components/banners/BannerFour'

const HomePageFour = () => {
    const layoutSetting = {
        headerSetting: {
            headerVariant: 4
        },
        footerSetting: {

        }
    }

    return (
        <>
            <Head>
                <title>University Classic - Online Courses & Education Bootstrap5 Template</title>
            </Head>

            <Layout layoutSetting={layoutSetting}>
                <BannerFour/>
            </Layout>
        </>
    )
}

export default HomePageFour;
