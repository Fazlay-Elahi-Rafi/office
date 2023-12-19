import {useEffect, useRef, useState} from 'react';
import Events from '../../data/events.json';
import {Pagination, Navigation} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import SectionTitle from '../global/SectionTitle';
import EventWidget from '../widgets/EventWidget';

const EventOne = () => {
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
            <div className="rbt-event-area rbt-section-gap bg-gradient-3">
                <div className="container">
                    <div className="row mb--55">
                        <SectionTitle
                            title="Upcoming Events"
                            subtitle="STIMULATED TO TAKE PART IN?"
                            subtitleColor="bg-white-opacity"
                            alignment="center"
                        />
                    </div>

                    <div className="parent-swiper">
                        <div className="rbt-arrow-between icon-bg-primary">
                            <Swiper
                                slidesPerView={3}
                                spaceBetween={30}
                                loop={true}
                                pagination={{clickable: true}}
                                grabCursor={true}
                                navigation={{
                                    prevEl: prevRef?.current,
                                    nextEl: nextRef?.current
                                }}
                                modules={[Pagination, Navigation]}
                                className="swiper parent-swiper-inner event-activation-1 rbt-dot-bottom-center pb--60"
                                onSwiper={setSwiper}
                            >
                                {Events?.slice(0, 4).map((slide, index) => (
                                    <SwiperSlide key={`slide-${index}`}>
                                        <div className="single-slide">
                                            <EventWidget event={slide}/>
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

export default EventOne;
