import Head from 'next/head'
import Layout from '../components/layouts/Layout'
import CourseModule from "../components/courses/CourseModule";

const CourseFilterOneToggle = () => {
    return (
        <>
            <Head>
                <title>
                    Course Filter Toggle - Online Courses & Education React Template
                </title>
            </Head>

            <Layout>
                <CourseModule/>
            </Layout>
        </>
    )
}

export default CourseFilterOneToggle