import Head from 'next/head';
import Layout from '../components/layouts/Layout';
import BreadCrumb from '../components/global/BreadCrumb';
import Image from "next/image";
import Link from "next/link";

const AdmissionGuidePage = () => {
    return (
        <>
            <Head>
                <title>Admission Guide - Online Courses & Education Bootstrap5 Template</title>
            </Head>

            <Layout>
                <BreadCrumb
                    title="Admission Guide"
                    root="Home"
                    rootUrl="/home-page-01"
                />

                <div className="rbt-admission-area bg-color-white rbt-section-gapTop">
                    <div className="container">
                        <div className="row g-5">
                            <div className="col-lg-6">
                                <div className="video-popup-wrapper">
                                    <Image
                                        width={638}
                                        height={414}
                                        className="w-100 rbt-radius"
                                        src="/images/others/video-04.jpg"
                                        alt="Video Images"
                                    />
                                    <a className="rbt-btn btn-white rounded-player popup-video position-to-top"
                                       href="https://www.youtube.com/watch?v=nA1Aqp0sPQo">
                                        <span><i className="feather-play"/></span>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="addmission-guide-content pl--50 pl_sm--0 pl_md--0 pl_lg--0">
                                    <h3 className="title">Guides to undergraduate study</h3>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                        Ipsum has been.
                                    </p>
                                    <p>
                                        When an unknown printer took a galley of type and scrambled it to make a type
                                        specimen book. It has survived not only five centuries.
                                    </p>
                                    <h5>The goal should be more than money</h5>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    <div className="apply-btn">
                                        <Link className="rbt-btn btn-gradient radius-round icon-hover" href="#">
                                            <span className="btn-text">Applying to University</span>
                                            <span className="btn-icon"><i className="feather-arrow-right"/></span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="rbt-conatct-area bg-color-white pt--60 rbt-section-gapBottom">
                    <div className="container">
                        <div className="row g-5">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-12"
                                 data-sal="slide-up"
                                 data-sal-delay="150"
                                 data-sal-duration="800">
                                <div className="rbt-address text-center">
                                    <div className="icon">
                                        <i className="feather-headphones"/>
                                    </div>
                                    <div className="inner">
                                        <h4 className="title">Call us</h4>
                                        <p><a href="tel:+444555666777">+444 555 666 777</a></p>
                                        <p><a href="tel:+222222222333">+222 222 222 333</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-12"
                                 data-sal="slide-up"
                                 data-sal-delay="250"
                                 data-sal-duration="800">
                                <div className="rbt-address text-center">
                                    <div className="icon">
                                        <i className="feather-map-pin"/>
                                    </div>
                                    <div className="inner">
                                        <h4 className="title">Visit us</h4>
                                        <p>5678 Bangla Main Road, cities 580 <br/> GBnagla, example 54786</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default AdmissionGuidePage;
