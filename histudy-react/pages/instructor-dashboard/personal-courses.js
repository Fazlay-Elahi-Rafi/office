import Head from 'next/head'
import Layout from '../../components/layouts/Layout'
import InstructorDashboardLayout from '../../components/instructor/partials/InstructorDashboardLayout'
import PersonalCourses from '../../components/instructor/PersonalCourses'

const InstructorPersonalCourses = () => {
    return (
        <>
            <Head>
                <title>Instructor Dashboard - Online Courses & Education React Template</title>
            </Head>

            <Layout>
                <InstructorDashboardLayout>
                    <PersonalCourses/>
                </InstructorDashboardLayout>
            </Layout>
        </>
    )
}

export default InstructorPersonalCourses