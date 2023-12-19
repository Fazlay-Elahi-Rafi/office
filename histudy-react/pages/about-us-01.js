import Head from 'next/head';
import Layout from '../components/layouts/Layout';
import BannerFive from '../components/banners/BannerFive';
import AboutTwo from '../components/abouts/AboutTwo';
import CallToActionTwo from '../components/call-to-actions/CallToActionTwo';
import TestimonialTwo from '../components/testimonials/TestimonialTwo';
import TeamTwo from '../components/teams/TeamTwo';
import NewsletterOne from '../components/newsletters/NewsletterOne';

const AboutUs01Page = () => {
    return (
        <>
            <Head>
                <title>About Us 01 - Online Courses & Education React Template</title>
            </Head>

            <Layout>
                <BannerFive/>

                <AboutTwo/>

                <CallToActionTwo/>

                <TestimonialTwo/>

                <TeamTwo/>

                <NewsletterOne/>
            </Layout>
        </>
    )
}

export default AboutUs01Page