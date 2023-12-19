import Head from 'next/head'
import Layout from '../../components/layouts/Layout'
import StudentDashboardLayout from '../../components/student/partials/StudentDashboardLayout'
import Profile from '../../components/student/Profile'

const StudentProfile = () => {
    return (
        <>
            <Head>
                <title>Student Dashboard - Online Courses & Education React Template</title>
            </Head>

            <Layout>
                <StudentDashboardLayout>
                    <Profile/>
                </StudentDashboardLayout>
            </Layout>
        </>
    )
}

export default StudentProfile;