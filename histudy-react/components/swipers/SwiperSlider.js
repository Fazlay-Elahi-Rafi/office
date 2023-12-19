import { Swiper, SwiperSlide } from 'swiper/react';
import {EffectCards, Pagination} from 'swiper';
import CourseWidgets from '../widgets/CourseWidget';
const SwiperSlider = ({slides, swiperParentClasses}) => {
    return (
        <>
            <Swiper
                effect={"cards"}
                pagination={{
                    clickable: true
                }}
                grabCursor={true}
                modules={[EffectCards, Pagination]}
                className={swiperParentClasses}
            >
                {slides?.map((slide, index) => (
                    <SwiperSlide key={`slide-${index}`}>
                        <CourseWidgets data={slide}/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}

export default SwiperSlider;
