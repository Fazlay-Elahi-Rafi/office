import Courses from '../../data/courses.json'
import CourseWidgets from '../widgets/CourseWidget';
import Link from "next/link";

const CourseTwo = () => {
    return (
        <>
            <div className="rbt-featured-course bg-color-white rbt-section-gap">
                <div className="container">
                    <div className="row g-5 align-items-end mb--60">
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="section-title text-start">
                                <h2 className="title">Featured Courses</h2>
                                <p className="description mt--20">
                                    Learning communicate to global world and build a
                                    bright future and career development, increase your skill with our histudy.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="load-more-btn text-start text-lg-end">
                                <Link className="rbt-btn btn-border icon-hover radius-round"
                                      href="/course-filter-one-toggle">
                                    <span className="btn-text">Browse Histudy Courses</span>
                                    <span className="btn-icon"><i className="feather-arrow-right"/></span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="row g-5">
                        {Courses?.slice(0, 6).map((slide, index) => (
                            <div className="col-lg-4 col-md-6 col-sm-12 col-12"
                                 key={`course-${index}`}>
                                <CourseWidgets data={slide} courseStyle="two"/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default CourseTwo;