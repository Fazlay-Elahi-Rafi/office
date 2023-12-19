import Link from 'next/link';
import Image from 'next/image';
import Courses from '../../data/courses.json';
import TopCoursesCategories from '../../data/topCoursesCategories.json';
import {useEffect, useState} from 'react';
import {getCourseCategories, slugify} from '../../helpers/utilities'

const CategoryTwo = () => {
    const [categories, setCategories] = useState([]);
    const [topCourseCategories, setTopCourseCategories] = useState([]);

    const getCategoryThumbnail = (category) => {
        if (category === 'Web Design') return '/images/category/image/web-design.jpg'
        else if (category === 'Graphic Design') return '/images/category/image/graphic-design.jpg'
        else if (category === 'Personal Development') return '/images/category/image/personal-development.jpg'
        else if (category === 'IT and Software') return '/images/category/image/software.jpg'
        else if (category === 'Sales Marketing') return '/images/category/image/sales.jpg'
        else if (category === 'Art & Humanities') return '/images/category/image/arts.jpg'
        else if (category === 'Mobile Application') return '/images/category/image/mobile.jpg'
        else if (category === 'Finance & Accounting') return '/images/category/image/finance.jpg'
    }

    useEffect(() => {
        getCourseCategories(Courses)
    });

    return (
        <>
            <div className="rbt-category-area bg-color-white rbt-section-gapTop">
                <div className="container">
                    <div className="row g-5">
                        {TopCoursesCategories?.map((category, index) => (
                            <div className="col-lg-3 col-md-6 col-sm-6 col-12"
                                 key={`course-category-${index}`}>
                                <Link className="rbt-cat-box rbt-cat-box-1 image-overlaping-content on-hover-content-visible"
                                   href={`/${slugify(category.name)}`}>
                                    <div className="inner">
                                        <div className="thumbnail">
                                            <Image
                                                width={550}
                                                height={300}
                                                src={getCategoryThumbnail(category.name)}
                                                alt="Category Image"
                                            />
                                        </div>
                                        <div className="content">
                                            <h5 className="title">{category.name}</h5>
                                            <div className="read-more-btn">
                                                <span className="rbt-btn-link">15 Courses
                                                    <i className="feather-arrow-right"/>
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

export default CategoryTwo;