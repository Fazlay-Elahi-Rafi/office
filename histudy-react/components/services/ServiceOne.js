import Link from 'next/link';
import Image from 'next/image';

const ServiceOne = () => {
    return (
        <>
            <div className="rbt-service-area bg-color-white rbt-section-gap">
                <div className="container">
                    <div className="row mb--60">
                        <div className="col-lg-12">
                            <div className="section-title text-center">
                                <h2 className="title">Why learn with our courses?</h2>
                                <p className="description mt--30">
                                    <strong>Histudy educational platform</strong> ipsum
                                    dolor sit amet consectetur adipisicing elit.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row row--15 mt_dec--30">
                        <div className="col-lg-4 col-xl-3 col-xxl-3 col-md-6 col-sm-6 col-12 mt--30">
                            <div className="service-card service-card-6">
                                <div className="inner">
                                    <div className="icon">
                                        <Image
                                            width={60}
                                            height={60}
                                            src="/images/icons/001-bulb.png"
                                            alt="icons Images"
                                        />
                                    </div>
                                    <div className="content">
                                        <h6 className="title">
                                            <Link href="#">Your Apply</Link>
                                        </h6>
                                        <p className="description">
                                            English Learning looking for random paragraphs,
                                            you&apos;ve come to the right place.
                                        </p>
                                    </div>
                                    <span className="number-text">1</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-xl-3 col-xxl-3 col-md-6 col-sm-6 col-12 mt--30">
                            <div className="service-card service-card-6">
                                <div className="inner">
                                    <div className="icon">
                                        <Image
                                            width={60}
                                            height={60}
                                            src="/images/icons/002-hat.png"
                                            alt="Shape Images"
                                        />
                                    </div>
                                    <div className="content">
                                        <h6 className="title">
                                            <Link href="#">We Connect</Link>
                                        </h6>
                                        <p className="description">
                                            Javascript Learning looking for random paragraphs,
                                            you&apos;ve come to the right place.
                                        </p>
                                    </div>
                                    <span className="number-text">2</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-xl-3 col-xxl-3 col-md-6 col-sm-6 col-12 mt--30">
                            <div className="service-card service-card-6">
                                <div className="inner">
                                    <div className="icon">
                                        <Image
                                            width={60}
                                            height={60}
                                            src="/images/icons/003-id-card.png"
                                            alt="Shape Images"
                                        />
                                    </div>
                                    <div className="content">
                                        <h6 className="title">
                                            <Link href="#">You Get Ready</Link>
                                        </h6>
                                        <p className="description">
                                            Angular Learning looking for random paragraphs,
                                            you&apos;ve come to the right place.
                                        </p>
                                    </div>
                                    <span className="number-text">3</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-xl-3 col-xxl-3 col-md-6 col-sm-6 col-12 mt--30">
                            <div className="service-card service-card-6">
                                <div className="inner">
                                    <div className="icon">
                                        <Image
                                            width={60}
                                            height={60}
                                            src="/images/icons/004-pass.png"
                                            alt="Shape Images"
                                        />
                                    </div>
                                    <div className="content">
                                        <h6 className="title">
                                            <Link href="#">Completed</Link>
                                        </h6>
                                        <p className="description">
                                            Php Learning looking for random paragraphs,
                                            you&apos;ve come to the right place.
                                        </p>
                                    </div>
                                    <span className="number-text">4</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServiceOne