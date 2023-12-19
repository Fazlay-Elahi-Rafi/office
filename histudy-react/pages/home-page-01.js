import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import {sortingByDate} from '../helpers/utilities';
import Head from 'next/head';
import Layout from '../components/layouts/Layout';
import BannerOne from '../components/banners/BannerOne';
import CategoryOne from '../components/categories/CategoryOne';
import CourseOne from '../components/courses/CourseOne';
import CallToActionOne from '../components/call-to-actions/CallToActionOne';
import AboutOne from '../components/abouts/AboutOne';
import CounterOne from '../components/counters/CounterOne';
import TestimonialOne from '../components/testimonials/TestimonialOne';
import EventOne from '../components/events/EventOne';
import TeamOne from '../components/teams/TeamOne';
import BlogOne from "../components/blogs/BlogOne";
import NewsletterOne from "../components/newsletters/NewsletterOne";

const HomePageOne = ({posts}) => {
    return (
        <>
            <Head>
                <title>Home - Online Courses & Education React Template</title>
            </Head>

            <Layout>
                <BannerOne/>

                <CategoryOne/>

                <CourseOne/>

                <AboutOne/>

                <CallToActionOne/>

                <CounterOne/>

                <TestimonialOne/>

                <EventOne/>

                <TeamOne/>

                <BlogOne blogs={posts}/>

                <NewsletterOne/>
            </Layout>
        </>
    )
}

export default HomePageOne;

export async function getStaticProps() {
    // Get files from the post directory
    const files = fs.readdirSync(path.join('data/posts'));

    // Get slug and post data from posts
    const posts = files.map((filename) => {
        const slug = filename.replace('.md', '');

        // Get post data
        const markdownWithMeta = fs.readFileSync(
            path.join('data/posts', filename),
            'utf-8'
        );

        const {data: postData} = matter(markdownWithMeta);

        return {
            slug,
            postData,
        };
    });

    return {
        props: {
            posts: sortingByDate(posts),
        },
    };
}
