import Head from 'next/head'
import Layout from '../../components/layouts/Layout'
import InstructorDashboardLayout from '../../components/instructor/partials/InstructorDashboardLayout'
import Announcement from '../../components/instructor/Announcement'

const InstructorAnnouncements = () => {
    return (
        <>
            <Head>
                <title>Instructor Dashboard - Online Courses & Education React Template</title>
            </Head>

            <Layout>
                <InstructorDashboardLayout>
                    <Announcement/>
                </InstructorDashboardLayout>
            </Layout>
        </>
    )
}

export default InstructorAnnouncements