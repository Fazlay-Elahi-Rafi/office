import {useEffect, useState} from 'react'
import {getCourseCategories, slugify} from '../../helpers/utilities'
import Courses from '../../data/courses.json'
import TopCoursesCategories from '../../data/topCoursesCategories.json'
import Link from "next/link";
import Image from "next/image";
import SectionTitle from "../global/SectionTitle";

const CategoryOne = () => {
    const [categories, setCategories] = useState([]);
    const [topCourseCategories, setTopCourseCategories] = useState([]);

    useEffect(() => {
        getCourseCategories(Courses)
    });

    return (
        <>
            <div className="rbt-categories-area bg-color-white rbt-section-gapBottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <SectionTitle
                                title="Explore Top Courses Categories <br/> That Change Yourself"
                                subtitle="CATEGORIES"
                                subtitleColor="bg-primary-opacity"
                                alignment="center"
                            />
                        </div>
                    </div>
                    <div className="row g-5 mt--20">
                        {TopCoursesCategories?.map((category, index) => (
                            <div className="col-lg-3 col-md-6 col-sm-6 col-12"
                                 key={`top-course-category-${index}`}>
                                <Link className="rbt-cat-box rbt-cat-box-1 text-center"
                                      href={`/${slugify(category.name)}`}>
                                    <div className="inner">
                                        <div className="icons">
                                            {category.name === 'Web Design' && (
                                                <Image
                                                    width={512}
                                                    height={512}
                                                    src="/images/category/web-design.png"
                                                    alt="Icons Images"
                                                />
                                            )}
                                            {category.name === 'Graphic Design' && (
                                                <Image
                                                    width={512}
                                                    height={512}
                                                    src="/images/category/design.png"
                                                    alt="Icons Images"
                                                />
                                            )}
                                            {category.name === 'Personal Development' && (
                                                <Image
                                                    width={512}
                                                    height={512}
                                                    src="/images/category/personal.png"
                                                    alt="Icons Images"
                                                />
                                            )}
                                            {category.name === 'IT and Software' && (
                                                <Image
                                                    width={512}
                                                    height={512}
                                                    src="/images/category/server.png"
                                                    alt="Icons Images"
                                                />
                                            )}
                                            {category.name === 'Sales Marketing' && (
                                                <Image
                                                    width={512}
                                                    height={512}
                                                    src="/images/category/pantone.png"
                                                    alt="Icons Images"
                                                />
                                            )}
                                            {category.name === 'Art & Humanities' && (
                                                <Image
                                                    width={512}
                                                    height={512}
                                                    src="/images/category/paint-palette.png"
                                                    alt="Icons Images"
                                                />
                                            )}
                                            {category.name === 'Mobile Application' && (
                                                <Image
                                                    width={512}
                                                    height={512}
                                                    src="/images/category/smartphone.png"
                                                    alt="Icons Images"
                                                />
                                            )}
                                            {category.name === 'Finance & Accounting' && (
                                                <Image
                                                    width={512}
                                                    height={512}
                                                    src="/images/category/infographic.png"
                                                    alt="Icons Images"
                                                />
                                            )}
                                        </div>
                                        <div className="content">
                                            <h5 className="title">{category.name}</h5>
                                            <div className="read-more-btn">
                                                <span className="rbt-btn-link">
                                                    25 Courses<i className="feather-arrow-right"/>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default CategoryOne;
