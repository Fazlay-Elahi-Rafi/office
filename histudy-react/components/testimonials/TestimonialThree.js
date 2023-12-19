import {useEffect, useRef, useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper';
import Testimonials from '../../data/elements/testimonial.json';
import SectionTitle from '../global/SectionTitle';
import TestimonialWidget from '../widgets/TestimonialWidget';

const TestimonialThree = () => {
    const [swiper, setSwiper] = useState();
    const prevRef = useRef();
    const nextRef = useRef();

    useEffect(() => {
        if (swiper) {
            swiper.navigation.prevEl = prevRef.current;
            swiper.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
        }
    }, [swiper]);

    return (
        <>
            <div className="rbt-testimonial-area bg-color-extra2 rbt-section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 mb--60">
                            <SectionTitle
                                title="Student's Feedback"
                                description="Learning communicate to global world and build a bright future and career </br> development, increase your skill with our histudy."
                                alignment="center"
                            />
                        </div>
                    </div>
                    <div className="">
                        <div className="rbt-arrow-between">
                            <Swiper
                                slidesPerView={3}
                                spaceBetween={30}
                                loop={true}
                                grabCursor={true}
                                navigation={{
                                    prevEl: prevRef?.current,
                                    nextEl: nextRef?.current
                                }}
                                modules={[Navigation]}
                                className="testimonial-item-3-activation swiper"
                                onSwiper={setSwiper}
                            >
                                {Testimonials?.slice(0, 4).map((testimonial, index) => (
                                    <SwiperSlide key={`slide-${index}`}>
                                        <div className="single-slide">
                                            <TestimonialWidget
                                                testimonialData={testimonial}
                                                testimonialStyle="two"
                                            />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            <div className="rbt-swiper-arrow rbt-arrow-left" ref={prevRef}>
                                <div className="custom-overfolow">
                                    <i className="rbt-icon feather-arrow-left"/>
                                    <i className="rbt-icon-top feather-arrow-left"/>
                                </div>
                            </div>
                            <div className="rbt-swiper-arrow rbt-arrow-right" ref={nextRef}>
                                <div className="custom-overfolow">
                                    <i className="rbt-icon feather-arrow-right"/>
                                    <i className="rbt-icon-top feather-arrow-right"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TestimonialThree