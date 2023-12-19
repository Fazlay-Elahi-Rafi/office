import Image from "next/image";

const BannerThree = () => {
    return (
        <>
            <div className="rbt-banner-area rbt-banner-4 bg_image bg_image--13 header-transperent-spacer">
                <div className="wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="content text-start">
                                    <div className="inner">
                                        <div className="mb--20">
                                            <a href="#" className="rbt-badge-2">
                                                <div className="image">
                                                    <Image
                                                        width={494}
                                                        height={494}
                                                        src="/images/testimonial/client-02.png"
                                                        alt="Education Images"
                                                    />
                                                </div>
                                                Learn with <strong>Fatima Asrafy</strong>
                                            </a>
                                        </div>
                                        <h1 className="title">
                                            Putting Your Child&apos;s Future <br/> in Great Motion.
                                        </h1>
                                        <p className="description">
                                            We just don&apos;t give our student only <br/> lecture but real life
                                            experience.
                                        </p>
                                        <ul className="rbt-list-style-2">
                                            <li><i className="feather-check"></i>No Cridit Card</li>
                                            <li><i className="feather-check"></i>14 Days Trial</li>
                                            <li><i className="feather-check"></i>Free For Teachers</li>
                                        </ul>
                                        <div className="slider-btn">
                                            <a className="rbt-btn radius rbt-marquee-btn marquee-text-y" href="#">
                                                <span data-text="Get Started Today">
                                                    Get Started Today
                                                </span>
                                            </a>
                                        </div>
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

export default BannerThree;