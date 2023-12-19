import Courses from "../../data/courses.json";
import CourseWidgets from "../widgets/CourseWidget";

const PersonalCourses = () => {
    return (
        <>
            <div className="rbt-dashboard-content bg-color-white rbt-shadow-box">
                <div className="content">
                    <div className="section-title">
                        <h4 className="rbt-title-style-3">My Courses</h4>
                    </div>
                    <div className="advance-tab-button mb--30">
                        <ul className="nav nav-tabs tab-button-style-2 justify-content-start"
                            id="myTab-4"
                            role="tablist">
                            <li role="presentation">
                                <a href="#" className="tab-button active"
                                   id="publish-tab-4"
                                   data-bs-toggle="tab"
                                   data-bs-target="#publish-4"
                                   role="tab"
                                   aria-controls="publish-4"
                                   aria-selected="true">
                                    <span className="title">Publish</span>
                                </a>
                            </li>
                            <li role="presentation">
                                <a href="#"
                                   className="tab-button"
                                   id="pending-tab-4"
                                   data-bs-toggle="tab"
                                   data-bs-target="#pending-4"
                                   role="tab"
                                   aria-controls="pending-4"
                                   aria-selected="false">
                                    <span className="title">Pending</span>
                                </a>
                            </li>
                            <li role="presentation">
                                <a href="#"
                                   className="tab-button"
                                   id="draft-tab-4"
                                   data-bs-toggle="tab"
                                   data-bs-target="#draft-4"
                                   role="tab"
                                   aria-controls="draft-4"
                                   aria-selected="false">
                                    <span className="title">Draft</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="tab-content">
                        <div className="tab-pane fade active show"
                             id="publish-4"
                             role="tabpanel"
                             aria-labelledby="publish-tab-4">
                            <div className="row g-5">
                                {Courses.slice(0, 3)?.map((slide, index) => (
                                    <div className="col-lg-4 col-md-6 col-12"
                                         key={`course-published-${index}`}>
                                        <CourseWidgets
                                            data={slide}
                                            courseStyle="two"
                                            showDescription={false}
                                            showAuthor={false}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="tab-pane fade"
                             id="pending-4"
                             role="tabpanel"
                             aria-labelledby="pending-tab-4">
                            <div className="row g-5">
                                {Courses.slice(0, 3)?.map((slide, index) => (
                                    <div className="col-lg-4 col-md-6 col-12"
                                         key={`course-pending-${index}`}>
                                        <CourseWidgets
                                            data={slide}
                                            courseStyle="two"
                                            showDescription={false}
                                            showAuthor={false}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="tab-pane fade"
                             id="draft-4"
                             role="tabpanel"
                             aria-labelledby="draft-tab-4">
                            <div className="row g-5">
                                {Courses.slice(0, 3)?.map((slide, index) => (
                                    <div className="col-lg-4 col-md-6 col-12"
                                         key={`course-draft-${index}`}>
                                        <CourseWidgets
                                            data={slide}
                                            courseStyle="two"
                                            showDescription={false}
                                            showAuthor={false}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default PersonalCourses

