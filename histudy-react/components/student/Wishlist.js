import Courses from "../../data/courses.json";
import CourseWidgets from "../widgets/CourseWidget";

const Wishlist = () => {
    return (
        <>
            <div className="rbt-dashboard-content bg-color-white rbt-shadow-box">
                <div className="content">
                    <div className="section-title">
                        <h4 className="rbt-title-style-3">Wishlist</h4>
                    </div>
                    <div className="row g-5">
                        {Courses.slice(0, 6)?.map((slide, index) => (
                            <div className="col-lg-4 col-md-6 col-12"
                                 key={`course-wishlist-${index}`}>
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
        </>
    )
}

export default Wishlist