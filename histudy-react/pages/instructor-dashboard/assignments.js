import Head from 'next/head'
import Layout from '../../components/layouts/Layout'
import InstructorDashboardLayout from '../../components/instructor/partials/InstructorDashboardLayout'
import Assignments from '../../components/instructor/Assignments'

const InstructorAssignments = () => {
    return (
        <>
            <Head>
                <title>Instructor Dashboard - Online Courses & Education React Template</title>
            </Head>

            <Layout>
                <InstructorDashboardLayout>
                    <Assignments/>
                </InstructorDashboardLayout>
            </Layout>
        </>
    )
}

export default InstructorAssignments