import Link from "next/link";

const CallToActionThree = () => {
    return (
        <>
            <div className="rbt-call-to-action-area rbt-section-gap bg-gradient-8">
                <div className="rbt-callto-action rbt-cta-default style-6">
                    <div className="container">
                        <div className="row g-5 align-items-center content-wrapper">
                            <div className="col-xxl-3 col-xl-3 col-lg-6">
                                <div className="inner">
                                    <div className="content text-start">
                                        <h2 className="title color-white mb--0">Scholarship Programs</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-6 col-xl-6 col-lg-6">
                                <div className="inner-content text-start">
                                    <p className="color-white">
                                        Apply for Admission in Post Graduate Diploma. Application Deadline: 26th
                                        September 2022 · Undergraduate & Graduate Admission: Fall 2022 Semester · 20%
                                        Waiver on ...
                                    </p>
                                </div>
                            </div>
                            <div className="col-xxl-3 col-xl-3 col-lg-6">
                                <div className="call-to-btn text-start text-xl-end">
                                    <Link className="rbt-btn btn-white hover-icon-reverse" href="#">
                                        <span className="icon-reverse-wrapper">
                                            <span className="btn-text">Histudy Financial Aid</span>
                                            <span className="btn-icon"><i className="feather-arrow-right"/></span>
                                            <span className="btn-icon"><i className="feather-arrow-right"/></span>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CallToActionThree;