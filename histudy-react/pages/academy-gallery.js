import Head from 'next/head';
import Layout from '../components/layouts/Layout';
import BreadCrumb from '../components/global/BreadCrumb';
import AcademyGallery from '../components/academy-gallery/AcademyGallery';
import AcademyGalleryData from '../data/academyGallery.json';

const AcademyGalleryPage = () => {
    return (
        <>
            <Head>
                <title>Academy Gallery - Online Courses & Education Bootstrap5 Template</title>
            </Head>

            <Layout>
                <BreadCrumb
                    title="Academy Gallery"
                    root="Home"
                    rootUrl="/home-page-01"
                />

                {AcademyGalleryData?.map((gallery, galleryIndex) => (
                    <div
                        className={`rbt-about-area about-style-1 bg-color-white ${galleryIndex === 0 ? 'rbt-section-gap' : 'rbt-section-gapBottom'}`}
                        key={`gallery-${galleryIndex}`}>
                        <AcademyGallery
                            data={gallery}
                            index={galleryIndex}
                            imageColumnClass={galleryIndex % 2 === 0 ? 'col-lg-5' : 'col-lg-5 order-1 order-lg-2'}
                            contentColumnClass={galleryIndex % 2 === 0 ? 'col-lg-7' : 'col-lg-7 order-2 order-lg-1'}
                        />
                    </div>
                ))}
            </Layout>
        </>
    )
}

export default AcademyGalleryPage;
