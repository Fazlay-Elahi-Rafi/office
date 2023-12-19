import TestimonialsData from '../../data/elements/testimonial.json'
import SectionTitle from '../global/SectionTitle';
import TestimonialWidget from '../widgets/TestimonialWidget';

const TestimonialOne = () => {
    return (
        <>
            <div className="rbt-testimonial-area bg-color-white rbt-section-gap overflow-hidden">
                <div className="wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 mb--10">
                                <SectionTitle
                                    title="People like histudy education. <br/> No joking - here’s the proof!"
                                    subtitle="EDUCATION FOR EVERYONE"
                                    subtitleColor="bg-primary-opacity"
                                    alignment="center"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="scroll-animation-wrapper no-overlay mt--50">
                    <div className="scroll-animation scroll-right-left">
                        {TestimonialsData?.map((testimonial, testimonialIndex) => (
                            <div className="single-column-20 bg-theme-gradient-odd"
                                 key={`testimonial-odd-${testimonialIndex}`}>
                                <TestimonialWidget
                                    testimonialData={testimonial}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="scroll-animation-wrapper no-overlay mt--30">
                    <div className="scroll-animation scroll-left-right">
                        {TestimonialsData?.map((testimonial, testimonialIndex) => (
                            <div className="single-column-20 bg-theme-gradient-even"
                                 key={`testimonial-even-${testimonialIndex}`}>
                                <TestimonialWidget
                                    testimonialData={testimonial}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default TestimonialOne;
