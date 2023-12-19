import {useState} from 'react';
import ModalVideo from 'react-modal-video';
import Image from "next/image";

const CallToActionTwo = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <div className="rbt-video-area rbt-section-gapBottom pt--50 bg-color-white">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6 order-2 order-lg-1">
                            <div className="inner pr--50">
                                <div className="section-title text-start">
                                    <span className="subtitle bg-primary-opacity">How We Work</span>
                                    <h2 className="title">Build your Career And Upgrade Your Life</h2>
                                    <p className="description mt--30">
                                        Far far away, behind the word mountains, far from the countries Vokalia and
                                        Consonantia, there live the blind texts. Separated they live in Bookmarksgrove
                                        right at the coast of the Semantics, a large language ocean.
                                    </p>
                                    <div className="read-more-btn">
                                        <a className="rbt-moderbt-btn" href="#">
                                            <span className="moderbt-btn-text">Learn More About Us</span>
                                            <i className="feather-arrow-right"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2">
                            <div className="video-popup-wrapper">
                                <Image
                                    width={590}
                                    height={424}
                                    className="w-100 rbt-radius"
                                    src="/images/others/video-01.jpg"
                                    alt="Video Images"
                                />
                                <button className="btn popup-video position-to-top"
                                        onClick={() => setOpen(true)}>
                                    <span>
                                        <Image
                                            width={100}
                                            height={70}
                                            src="/images/icons/youtube.png"
                                            alt="Youtube icon"/>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ModalVideo
                channel="youtube"
                autoplay
                isOpen={isOpen}
                videoId="nA1Aqp0sPQo"
                onClose={() => setOpen(false)}
            />
        </>
    )
}

export default CallToActionTwo