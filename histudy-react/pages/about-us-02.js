import Head from 'next/head';
import Layout from '../components/layouts/Layout';
import BannerSix from '../components/banners/BannerSix';
import VideoOne from '../components/videos/VideoOne';
import AboutThree from '../components/abouts/AboutThree';
import CallToActionThree from '../components/call-to-actions/CallToActionThree';
import ServiceOne from '../components/services/ServiceOne';
import TeamThree from '../components/teams/TeamThree';
import BrandOne from '../components/brands/BrandOne';

const AboutUs02Page = () => {
    return (
        <>
            <Head>
                <title>About Us 02 - Online Courses & Education React Template</title>
            </Head>

            <Layout>
                <BannerSix/>

                <VideoOne/>

                <AboutThree/>

                <CallToActionThree/>

                <ServiceOne/>

                <TeamThree/>

                <BrandOne/>
            </Layout>
        </>
    )
}

export default AboutUs02Page;