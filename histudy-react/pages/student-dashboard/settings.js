import Head from 'next/head'
import Layout from '../../components/layouts/Layout'
import StudentDashboardLayout from '../../components/student/partials/StudentDashboardLayout'
import Setting from '../../components/student/Setting'

const StudentSettings = () => {
    return (
        <>
            <Head>
                <title>Student Dashboard - Online Courses & Education React Template</title>
            </Head>

            <Layout>
                <StudentDashboardLayout>
                    <Setting/>
                </StudentDashboardLayout>
            </Layout>
        </>
    )
}

export default StudentSettings