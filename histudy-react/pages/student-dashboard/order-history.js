import Head from 'next/head'
import Layout from '../../components/layouts/Layout'
import StudentDashboardLayout from '../../components/student/partials/StudentDashboardLayout'
import OrderHistory from '../../components/student/OrderHistory'

const StudentOrderHistory = () => {
    return (
        <>
            <Head>
                <title>Student Dashboard - Online Courses & Education React Template</title>
            </Head>

            <Layout>
                <StudentDashboardLayout>
                    <OrderHistory/>
                </StudentDashboardLayout>
            </Layout>
        </>
    )
}

export default StudentOrderHistory