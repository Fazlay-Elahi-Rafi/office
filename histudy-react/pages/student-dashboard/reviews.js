import Head from 'next/head'
import Layout from '../../components/layouts/Layout'
import StudentDashboardLayout from '../../components/student/partials/StudentDashboardLayout'
import Reviews from '../../components/student/Reviews'

const StudentReviews = () => {
    return (
        <>
            <Head>
                <title>Instructor Dashboard - Online Courses & Education React Template</title>
            </Head>

            <Layout>
                <StudentDashboardLayout>
                    <Reviews/>
                </StudentDashboardLayout>
            </Layout>
        </>
    )
}

export default StudentReviews