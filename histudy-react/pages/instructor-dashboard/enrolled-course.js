import Head from 'next/head'
import Layout from '../../components/layouts/Layout'
import InstructorDashboardLayout from '../../components/instructor/partials/InstructorDashboardLayout'
import EnrolledCourses from '../../components/instructor/EnrolledCourses'

const InstructorEnrolledCourse = () => {
    return (
        <>
            <Head>
                <title>Instructor Dashboard - Online Courses & Education React Template</title>
            </Head>

            <Layout>
                <InstructorDashboardLayout>
                    <EnrolledCourses/>
                </InstructorDashboardLayout>
            </Layout>
        </>
    )
}

export default InstructorEnrolledCourse