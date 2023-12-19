import Head from 'next/head'
import Layout from '../components/layouts/Layout'
import BreadCrumb from '../components/global/BreadCrumb'
import AdvanceTab from '../components/advance-tab/AdvanceTab'
import AdvanceTabData from '../data/elements/advanceTab.json'

const AdvanceTabPage = () => {
    return (
        <>
            <Head>
                <title>
                    Accordion - Online Courses & Education Bootstrap5 Template
                </title>
            </Head>

            <Layout>
                <BreadCrumb
                    title="Advance Tab"
                    root="Home"
                    rootUrl="/home-page-01"
                />

                <AdvanceTab
                    tabStyle="one"
                    tabId="tabStyleOne"
                    tabTitle="Advance Tab Style One."
                    tabSubtitle="You can Customize All"
                    subtitleClass="subtitle bg-secondary-opacity"
                    sectionTitleAlignment="center"
                    tabData={AdvanceTabData.advanceTabOne}
                />
            </Layout>
        </>
    )
}

export default AdvanceTabPage;