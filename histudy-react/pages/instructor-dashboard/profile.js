import Head from 'next/head'
import Layout from '../../components/layouts/Layout'
import InstructorDashboardLayout from '../../components/instructor/partials/InstructorDashboardLayout'
import Profile from '../../components/instructor/Profile'

const InstructorProfile = () => {
    return (
        <>
            <Head>
                <title>Instructor Dashboard - Online Courses & Education React Template</title>
            </Head>

            <Layout>
                <InstructorDashboardLayout>
                    <Profile/>
                </InstructorDashboardLayout>
            </Layout>
        </>
    )
}

export default InstructorProfile;