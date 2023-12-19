import Link from "next/link";

const BannerSix = () => {
    return (
        <>
            <div className="rbt-banner-area rbt-banner-8 variation-02">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="content">
                                <div className="inner text-center">
                                    <div className="rbt-new-badge rbt-new-badge-one">
                                        <span className="rbt-new-badge-icon">🏆</span> The Leader in Online Learning
                                    </div>
                                    <h1 className="title">Read About Our
                                        <span className="header-caption">
                                            <span className="cd-headline clip is-full-width">
                                                <span className="cd-words-wrapper">
                                                    <b className="is-visible theme-gradient">Mission.</b>
                                                    <b className="is-hidden theme-gradient">Vision.</b>
                                                    <b className="is-hidden theme-gradient">Planning.</b>
                                                </span>
                                            </span>
                                        </span>
                                    </h1>
                                    <p className="description has-medium-font-size mt--20">
                                        Dive in and learn React.js from scratch! Learn Reactjs, Hooks, Redux, React
                                        Routing, Animations, Next.js and way more!
                                    </p>
                                    <div className="slider-btn rbt-button-group justify-content-center">
                                        <Link className="rbt-btn btn-gradient hover-icon-reverse" href="#">
                                            <span className="icon-reverse-wrapper">
                                                <span className="btn-text">Log in to Start</span>
                                                <span className="btn-icon"><i className="feather-arrow-right"/></span>
                                                <span className="btn-icon"><i className="feather-arrow-right"/></span>
                                            </span>
                                        </Link>
                                        <Link className="rbt-btn hover-icon-reverse btn-white" href="#">
                                            <span className="icon-reverse-wrapper">
                                                <span className="btn-text">Contact US</span>
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
            </div>
        </>
    )
}

export default BannerSix