import Head from 'next/head'
import Layout from '../../components/layouts/Layout'
import Dashboard from '../../components/student/Dashboard'
import StudentDashboardLayout from '../../components/student/partials/StudentDashboardLayout'

const StudentDashboardPage = () => {
    return (
        <>
            <Head>
                <title>Student Dashboard - Online Courses & Education React Template</title>
            </Head>

            <Layout>
                <StudentDashboardLayout>
                    <Dashboard/>
                </StudentDashboardLayout>
            </Layout>
        </>
    )
}

export default StudentDashboardPage