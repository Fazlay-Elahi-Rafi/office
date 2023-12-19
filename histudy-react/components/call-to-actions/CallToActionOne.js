import {useState} from 'react'
import ModalVideo from 'react-modal-video'
import Link from "next/link";
import Image from "next/image";

const CallToActionOne = () => {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <div className="rbt-callto-action-area mt_dec--half">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-6">
                            <div className="rbt-callto-action callto-action-default bg-color-white rbt-radius shadow-1">
                                <div className="row align-items-center">
                                    <div className="col-lg-12 col-xl-5">
                                        <div className="inner">
                                            <div className="rbt-category mb--20">
                                                <a href="components/call-to-actions#">New Collection</a>
                                            </div>
                                            <h4 className="title mb--15">Online Courses from Histudy</h4>
                                            <p className="mb--15">Top instructors from around the world</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-xl-7">
                                        <div className="video-popup-wrapper mt_lg--10 mt_md--20 mt_sm--20">
                                            <Image
                                                width={590}
                                                height={424}
                                                className="w-100 rbt-radius"
                                                src="/images/others/video-01.jpg"
                                                alt="Video Images"
                                            />
                                            <button type="button"
                                                    className="rbt-btn rounded-player-2 sm-size popup-video position-to-top with-animation"
                                                    onClick={() => setOpen(true)}>
                                                <span className="play-icon"/>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="rbt-callto-action callto-action-default bg-color-white rbt-radius shadow-1">
                                <div className="row align-items-center">
                                    <div className="col-lg-12">
                                        <div className="inner">
                                            <div className="rbt-category mb--20">
                                                <Link href="#">Top Teacher</Link>
                                            </div>
                                            <h4 className="title mb--10">
                                                Free Online Courses from Histudy School To Education
                                            </h4>
                                            <p className="mb--15">Top instructors from around the world</p>
                                            <div className="read-more-btn">
                                                <Link href="#" className="rbt-btn rbt-switch-btn btn-gradient btn-sm">
                                                    <span data-text="Join Now">Join Now</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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

export default CallToActionOne;
