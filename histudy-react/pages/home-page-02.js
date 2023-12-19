import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import {sortingByDate} from '../helpers/utilities';
import Head from 'next/head';
import Layout from '../components/layouts/Layout';
import BannerTwo from '../components/banners/BannerTwo';
import CategoryTwo from '../components/categories/CategoryTwo';
import CourseTwo from '../components/courses/CourseTwo';
import CounterTwo from '../components/counters/CounterTwo';
import TestimonialThree from '../components/testimonials/TestimonialThree';
import BlogTwo from '../components/blogs/BlogTwo';
import NewsletterTwo from '../components/newsletters/NewsletterTwo';

const HomePageTwo = ({posts}) => {
    const layoutSetting = {
        headerSetting: {
            headerVariant: 2
        },
        footerSetting: {}
    }

    return (
        <>
            <Head>
                <title>Marketplace - Online Courses & Education Bootstrap5 Template</title>
            </Head>

            <Layout layoutSetting={layoutSetting}>
                <BannerTwo/>

                <CategoryTwo/>

                <CourseTwo/>

                <CounterTwo/>

                <TestimonialThree/>

                <BlogTwo blogs={posts}/>

                <NewsletterTwo/>
            </Layout>
        </>
    )
}

export default HomePageTwo;

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

