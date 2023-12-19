import Head from 'next/head'
import Layout from '../../components/layouts/Layout'
import StudentDashboardLayout from '../../components/student/partials/StudentDashboardLayout'
import QuizAttempts from '../../components/student/QuizAttempts'

const StudentQuizAttempts = () => {
    return (
        <>
            <Head>
                <title>Student Dashboard - Online Courses & Education React Template</title>
            </Head>

            <Layout>
                <StudentDashboardLayout>
                    <QuizAttempts/>
                </StudentDashboardLayout>
            </Layout>
        </>
    )
}

export default StudentQuizAttempts