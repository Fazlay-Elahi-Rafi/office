import {useState} from "react";
import ModalVideo from "react-modal-video";
import Image from "next/image";

const VideoOne = () => {
    const [isOpen, setOpen] = useState(false);
    return (
        <>
            <div className="rbt-video-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="video-popup-wrapper">
                                <Image
                                    width={2000}
                                    height={1125}
                                    className="w-100 rbt-radius"
                                    src="/images/bg/bg-image-12.jpg" alt="Video Images"
                                />
                                <button
                                    className="rbt-btn rounded-player-2 popup-video position-to-top with-animation btn-theme-color"
                                    onClick={() => setOpen(true)}>
                                    <span className="play-icon"></span>
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

export default VideoOne