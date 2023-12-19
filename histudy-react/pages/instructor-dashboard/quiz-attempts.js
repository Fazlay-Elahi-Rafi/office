import Head from 'next/head'
import Layout from '../../components/layouts/Layout'
import InstructorDashboardLayout from '../../components/instructor/partials/InstructorDashboardLayout'
import QuizAttempts from '../../components/instructor/QuizAttempts'

const InstructorQuizAttempts = () => {
    return (
        <>
            <Head>
                <title>Instructor Dashboard - Online Courses & Education React Template</title>
            </Head>

            <Layout>
                <InstructorDashboardLayout>
                    <QuizAttempts/>
                </InstructorDashboardLayout>
            </Layout>
        </>
    )
}

export default InstructorQuizAttempts