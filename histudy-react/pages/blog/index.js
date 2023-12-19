import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Head from 'next/head';
import Layout from '../../components/layouts/Layout';
import BlogModule from '../../components/blogs/BlogModule';
import {sortingByDate} from '../../helpers/utilities';

const BlogPage = ({posts}) => {
    return (
        <>
            <Head>
                <title>Blog - Online Courses & Education Bootstrap5 Template</title>
            </Head>

            <Layout>
                <BlogModule blogPosts={posts} blogStyle="default"/>
            </Layout>
        </>
    )
}

export default BlogPage;

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