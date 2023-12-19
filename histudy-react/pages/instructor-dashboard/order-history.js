import Head from 'next/head'
import Layout from '../../components/layouts/Layout'
import InstructorDashboardLayout from '../../components/instructor/partials/InstructorDashboardLayout'
import OrderHistory from '../../components/instructor/OrderHistory'

const InstructorOrderHistory = () => {
    return (
        <>
            <Head>
                <title>Instructor Dashboard - Online Courses & Education React Template</title>
            </Head>

            <Layout>
                <InstructorDashboardLayout>
                    <OrderHistory/>
                </InstructorDashboardLayout>
            </Layout>
        </>
    )
}

export default InstructorOrderHistory