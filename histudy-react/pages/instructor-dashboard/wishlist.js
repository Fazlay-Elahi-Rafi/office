import Head from 'next/head'
import Layout from '../../components/layouts/Layout'
import InstructorDashboardLayout from '../../components/instructor/partials/InstructorDashboardLayout'
import Wishlist from '../../components/instructor/Wishlist'

const InstructorWishlist = () => {
    return (
        <>
            <Head>
                <title>Instructor Dashboard - Online Courses & Education React Template</title>
            </Head>

            <Layout>
                <InstructorDashboardLayout>
                    <Wishlist/>
                </InstructorDashboardLayout>
            </Layout>
        </>
    )
}

export default InstructorWishlist