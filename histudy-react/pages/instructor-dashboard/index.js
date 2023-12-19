import Head from 'next/head'
import Layout from '../../components/layouts/Layout'
import Dashboard from '../../components/instructor/Dashboard'
import InstructorDashboardLayout from '../../components/instructor/partials/InstructorDashboardLayout'

const InstructorDashboardPage = () => {
    return (
        <>
            <Head>
                <title>Instructor Dashboard - Online Courses & Education React Template</title>
            </Head>

            <Layout>
                <InstructorDashboardLayout>
                    <Dashboard/>
                </InstructorDashboardLayout>
            </Layout>
        </>
    )
}

export default InstructorDashboardPage