import Head from 'next/head'
import Layout from '../../components/layouts/Layout'
import InstructorDashboardLayout from '../../components/instructor/partials/InstructorDashboardLayout'
import Reviews from '../../components/instructor/Reviews'

const InstructorReviews = () => {
    return (
        <>
            <Head>
                <title>Instructor Dashboard - Online Courses & Education React Template</title>
            </Head>

            <Layout>
                <InstructorDashboardLayout>
                    <Reviews/>
                </InstructorDashboardLayout>
            </Layout>
        </>
    )
}

export default InstructorReviews