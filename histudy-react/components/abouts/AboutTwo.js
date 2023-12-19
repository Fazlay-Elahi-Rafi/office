import SectionTitle from '../global/SectionTitle';
import Image from "next/image";

const AboutTwo = () => {
    return (
        <>
            <div className="rbt-about-area about-style-1 bg-color-white rbt-section-gapTop">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6">
                            <div className="thumbnail-wrapper">
                                <div className="thumbnail image-1">
                                    <Image
                                        width={396}
                                        height={530}
                                        src="/images/about/about-07.jpg"
                                        alt="Education Images"
                                    />
                                </div>
                                <div className="thumbnail image-2 d-none d-xl-block">
                                    <Image
                                        width={308}
                                        height={250}
                                        src="/images/about/about-09.jpg"
                                        alt="Education Images"
                                    />
                                </div>
                                <div className="thumbnail image-3 d-none d-md-block">
                                    <Image
                                        width={405}
                                        height={490}
                                        src="/images/about/about-08.jpg"
                                        alt="Education Images"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="inner pl--50 pl_sm--0 pl_md--0">
                                <SectionTitle
                                    title="Know About Histudy <br/> Learning Platform"
                                    subtitle="Know About Us"
                                    subtitleColor="bg-coral-opacity"
                                />
                                <p className="description mt--30">
                                    Far far away, behind the word mountains, far from
                                    the countries Vokalia and Consonantia, there live the blind texts. Separated
                                    they live in Bookmarksgrove right at the coast of the Semantics, a large
                                    language ocean.
                                </p>
                                <div className="rbt-feature-wrapper mt--40">
                                    <div className="rbt-feature feature-style-1">
                                        <div className="icon bg-pink-opacity">
                                            <i className="feather-heart"/>
                                        </div>
                                        <div className="feature-content">
                                            <h6 className="feature-title">Flexible Classes</h6>
                                            <p className="feature-description">
                                                It is a long established fact that a
                                                reader will
                                                be distracted by this on readable content of when looking at its
                                                layout.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="rbt-feature feature-style-1">
                                        <div className="icon bg-primary-opacity">
                                            <i className="feather-book"/>
                                        </div>
                                        <div className="feature-content">
                                            <h6 className="feature-title">Learn From Anywhere</h6>
                                            <p className="feature-description">
                                                Sed distinctio repudiandae eos
                                                recusandae laborum eaque non eius iure suscipit laborum eaque non
                                                eius iure suscipit.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="rbt-feature feature-style-1">
                                        <div className="icon bg-coral-opacity">
                                            <i className="feather-monitor"/>
                                        </div>
                                        <div className="feature-content">
                                            <h6 className="feature-title">Experienced Teacher&apos;s service.</h6>
                                            <p className="feature-description">
                                                Lorem ipsum dolor sit amet
                                                consectetur adipisicing elit. Officia, aliquid mollitia Officia,
                                                aliquid mollitia.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="about-btn mt--40">
                                    <a className="rbt-btn btn-gradient hover-icon-reverse" href="#">
                                        <span className="icon-reverse-wrapper">
                                            <span className="btn-text">More About Us</span>
                                            <span className="btn-icon"><i className="feather-arrow-right"/></span>
                                            <span className="btn-icon"><i className="feather-arrow-right"/></span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutTwo