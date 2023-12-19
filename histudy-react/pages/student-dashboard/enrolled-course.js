import Head from 'next/head'
import Layout from '../../components/layouts/Layout'
import StudentDashboardLayout from '../../components/student/partials/StudentDashboardLayout'
import EnrolledCourses from '../../components/student/EnrolledCourses'

const InstructorEnrolledCourse = () => {
    return (
        <>
            <Head>
                <title>Instructor Dashboard - Online Courses & Education React Template</title>
            </Head>

            <Layout>
                <StudentDashboardLayout>
                    <EnrolledCourses/>
                </StudentDashboardLayout>
            </Layout>
        </>
    )
}

export default InstructorEnrolledCourse