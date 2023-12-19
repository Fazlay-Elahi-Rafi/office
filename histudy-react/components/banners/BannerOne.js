import {useEffect, useState} from 'react';
import SwiperSlider from '../swipers/SwiperSlider'
import Courses from '../../data/courses.json'
import Link from "next/link";
import Image from "next/image";

const BannerOne = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const courseArray = Courses.slice(0, 3);
        setCourses(courseArray);
    }, []);

    return (
        <>
            <div className="rbt-banner-area rbt-banner-1">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 pb--100 pt--70">
                            <div className="content">
                                <div className="inner">
                                    <div className="rbt-new-badge rbt-new-badge-one">
                                        <span className="rbt-new-badge-icon">🏆</span> The Leader in Online Learning
                                    </div>

                                    <h1 className="title">
                                        Build The Skills <br/> To Drive Your Career.
                                    </h1>
                                    <p className="description">
                                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                                        <strong>Velit officia consequat.</strong>
                                    </p>
                                    <div className="slider-btn">
                                        <Link href="#"
                                              className="rbt-btn btn-gradient hover-icon-reverse">
                                            <span className="icon-reverse-wrapper">
                                                <span className="btn-text">View Course</span>
                                                <span className="btn-icon"><i className="feather-arrow-right"/></span>
                                                <span className="btn-icon"><i className="feather-arrow-right"/></span>
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                                <div className="shape-wrapper" id="scene">
                                    <Image
                                        width={1200}
                                        height={1400}
                                        src="/images/banner/banner-01.png"
                                        alt="Hero Image"
                                    />
                                    <div className="hero-bg-shape-1 layer" data-depth="0.4">
                                        <Image
                                            width={428}
                                            height={337}
                                            src="/images/shape/shape-01.png"
                                            alt="Hero Image Background Shape"
                                        />
                                    </div>
                                    <div className="hero-bg-shape-2 layer" data-depth="0.4">
                                        <Image
                                            width={372}
                                            height={396}
                                            src="/images/shape/shape-02.png"
                                            alt="Hero Image Background Shape"
                                        />
                                    </div>
                                </div>
                                <SwiperSlider
                                    slides={courses}
                                    swiperParentClasses="banner-card pb--60 mb--50 swiper rbt-dot-bottom-center banner-swiper-active swiper-cards swiper-3d swiper-initialized swiper-horizontal swiper-pointer-events"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BannerOne;
