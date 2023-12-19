import Head from 'next/head'
import Layout from '../../components/layouts/Layout'
import InstructorDashboardLayout from '../../components/instructor/partials/InstructorDashboardLayout'
import Setting from '../../components/instructor/Setting'

const InstructorSettings = () => {
    return (
        <>
            <Head>
                <title>Instructor Dashboard - Online Courses & Education React Template</title>
            </Head>

            <Layout>
                <InstructorDashboardLayout>
                    <Setting/>
                </InstructorDashboardLayout>
            </Layout>
        </>
    )
}

export default InstructorSettings