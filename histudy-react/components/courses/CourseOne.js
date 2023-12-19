import Link from 'next/link';
import {useEffect, useState} from 'react'
import Courses from '../../data/courses.json'
import SectionTitle from '../global/SectionTitle'
import CourseWidgets from '../widgets/CourseWidget'

const CourseOne = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const courseArray = Courses.slice(0, 3);
        setCourses(courseArray);
    }, []);

    return (
        <>
            <div className="rbt-course-area bg-color-extra2 rbt-section-gap">
                <div className="container">
                    <div className="row mb--60">
                        <div className="col-lg-12">
                            <SectionTitle
                                title="Histudy Course student <br /> can join with us."
                                subtitle="Top Popular Course"
                                subtitleColor="bg-secondary-opacity"
                                alignment="center"
                            />
                        </div>
                    </div>

                    <div className="row g-5">
                        {courses?.map((slide, index) => (
                            <div className="col-lg-4 col-md-6 col-12" key={`course-${index}`}>
                                <CourseWidgets data={slide} courseStyle="two"/>
                            </div>
                        ))}
                    </div>

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="load-more-btn mt--60 text-center">
                                <Link href="/course-filter-one-toggle"
                                      className="rbt-btn btn-gradient btn-lg hover-icon-reverse">
                                    <span className="icon-reverse-wrapper">
                                        <span className="btn-text">
                                            Load More Course ({Courses.length - courses.length})
                                        </span>
                                        <span className="btn-icon"><i className="feather-arrow-right"/></span>
                                        <span className="btn-icon"><i className="feather-arrow-right"/></span>
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CourseOne;
