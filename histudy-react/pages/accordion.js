import Head from 'next/head'
import Layout from '../components/layouts/Layout'
import BreadCrumb from '../components/global/BreadCrumb'
import Accordion from '../components/accordion/Accordion'
import AccordionsData from '../data/elements/accordion.json'

const accordionPage = () => {
    return (
        <>
            <Head>
                <title>
                    Accordion - Online Courses & Education Bootstrap5 Template
                </title>
            </Head>

            <Layout>
                <BreadCrumb
                    title="Accordion"
                    root="Home"
                    rootUrl="/home-page-01"
                />

                <Accordion
                    accordionStyle="one"
                    accordionId="accordionExample1"
                    title="Histudy Course student <br/> can join with us."
                    subtitle="ACCORDION"
                    subtitleClass="bg-secondary-opacity"
                    sectionTitleAlignment="center"
                    imageOne="/images/about/about-01.jpg"
                    imageTwo="/images/about/about-04.jpg"
                    data={AccordionsData.accordionOne}
                />

                <Accordion
                    accordionStyle="two"
                    accordionId="accordionExample2"
                    title="Have a Question with <br/> Histudy University?"
                    subtitle="FAQ"
                    description="<strong>Its an educational platform</strong> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since"
                    descriptionClass="description has-medium-font-size mt--20 mb--40"
                    subtitleClass="subtitle bg-pink-opacity"
                    sectionTitleAlignment="left"
                    imageOne="/images/about/about-01.jpg"
                    imageTwo="/images/about/about-10.jpg"
                    data={AccordionsData.accordionTwo}
                />

                <Accordion
                    accordionStyle="three"
                    accordionId="accordionExample3"
                    title="Have a Question with <br /> Histudy University?"
                    subtitle="FAQ"
                    description="<strong>Its an educational platform</strong> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since"
                    descriptionClass="description has-medium-font-size mt--20 mb--40"
                    subtitleClass="subtitle bg-pink-opacity"
                    sectionTitleAlignment="center"
                    data={AccordionsData.accordionThree}
                />

                <Accordion
                    accordionStyle="four"
                    accordionId="accordionExample4"
                    title="Have a Question with <br /> Histudy University?"
                    subtitle="FAQ"
                    description="<strong>Its an educational platform</strong> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since"
                    descriptionClass="description has-medium-font-size mt--20 mb--40"
                    subtitleClass="subtitle bg-pink-opacity"
                    sectionTitleAlignment="left"
                    imageOne="/images/about/about-03.jpg"
                    imageTwo="/images/about/about-11.jpg"
                    data={AccordionsData.accordionFour}
                />

                <Accordion
                    accordionStyle="five"
                    accordionId="accordionExample5"
                    title="Tuition & Fees"
                    subtitle="COURSE PRICING"
                    subtitleClass="subtitle bg-pink-opacity"
                    sectionTitleAlignment="center"
                    imageOne="/images/about/about-07.jpg"
                    data={AccordionsData.accordionFive}
                />
            </Layout>
        </>
    )
}

export default accordionPage;
