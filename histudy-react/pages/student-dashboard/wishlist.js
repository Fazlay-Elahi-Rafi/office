import Head from 'next/head'
import Layout from '../../components/layouts/Layout'
import StudentDashboardLayout from '../../components/student/partials/StudentDashboardLayout'
import Wishlist from '../../components/student/Wishlist'

const StudentWishlist = () => {
    return (
        <>
            <Head>
                <title>Instructor Dashboard - Online Courses & Education React Template</title>
            </Head>

            <Layout>
                <StudentDashboardLayout>
                    <Wishlist/>
                </StudentDashboardLayout>
            </Layout>
        </>
    )
}

export default StudentWishlist