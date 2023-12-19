import Link from "next/link";
import Image from "next/image";

const AboutThree = () => {
    return (
        <>
            <div className="rbt-about-area about-style-1 bg-color-white rbt-section-gap">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6">
                            <div className="content">
                                <Image
                                    width={663}
                                    height={426}
                                    src="/images/about/about-06.png"
                                    alt="About Images"
                                />
                            </div>
                        </div>
                        <div className="col-lg-6" data-sal="slide-up" data-sal-duration="700">
                            <div className="inner pl--50 pl_sm--5">
                                <div className="content text-start">
                                    <span className="rbt-badge-6 bg-primary-opacity">About Histudy</span>
                                    <h3 className="title">
                                        Welcome to Histudy for your skills with best Online courses.
                                    </h3>
                                    <p className="description mt--30">
                                        <strong>Histudy educational platform</strong> ipsum dolor sit amet consectetur
                                        adipisicing elit.
                                    </p>
                                    <p className="description">
                                        Nam inventore praesentium alias incidunt! Veritatis, necessitatibus fuga dolore
                                        tenetur, beatae suscipit fugit est ea perspiciatis quo provident nisi dolor
                                        similique architecto nihil.
                                    </p>
                                    <div className="read-more-btn mt--40">
                                        <Link className="rbt-btn rbt-marquee-btn radius-round btn-gradient" href="#">
                                            <span data-text="Start Learning For Free">
                                                Start Learning For Free
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

export default AboutThree;