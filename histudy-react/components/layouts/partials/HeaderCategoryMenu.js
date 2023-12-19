import Link from 'next/link'
import {useState} from 'react'
import {motion} from 'framer-motion'
import HeaderCategoryMenuData from '../../../data/mainMenu.json'

const HeaderCategoryMenu = () => {
    const [displayTab, setDisplayTab] = useState(1);

    const tabContentVariants = {
        open: {
            display: 'block',
            opacity: 1,
            visibility: 'visible',
            transition: {
                duration: 0.25
            }
        },
        closed: {
            display: 'none',
            opacity: 0,
            visibility: 'hidden',
            transition: {
                duration: 0.25
            }
        }
    };

    return (
        <>
            <div className="rbt-category-menu-wrapper">
                <div className="rbt-category-btn rbt-side-offcanvas-activation">
                    <div className="rbt-offcanvas-trigger md-size icon">
                        <span className="d-none d-xl-block">
                            <i className="feather-grid"/>
                        </span>
                        <i title="Category" className="feather-grid d-block d-xl-none"/>
                    </div>
                    <span className="category-text d-none d-xl-block">Category</span>
                </div>
                <div className="category-dropdown-menu d-none d-xl-block">
                    <div className="category-menu-item">
                        <div className="rbt-vertical-nav">
                            <ul className="rbt-vertical-nav-list-wrapper vertical-nav-menu">
                                {HeaderCategoryMenuData.headerCategoryMenu?.map((item, index) => (
                                    <li className={`vertical-nav-item ${displayTab === index + 1 ? 'active' : ''}`}
                                        key={`nav-item-${index}`}>
                                        <a href={`#tab${index}`}
                                           onMouseOver={() => setDisplayTab(index + 1)}>
                                            {item.tabTitle}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="rbt-vertical-nav-content">
                            {HeaderCategoryMenuData.headerCategoryMenu?.map((item, index) => (
                                <motion.div
                                    className="rbt-vertical-inner tab-content"
                                    id={`tab${index}`}
                                    variants={tabContentVariants}
                                    animate={displayTab === index + 1 ? 'open' : 'closed'}
                                    key={`tab-content-${index}`}>
                                    <div className="rbt-vertical-single">
                                        <div className="row">
                                            <div className="col-lg-6 col-sm-6 col-6">
                                                <div className="vartical-nav-content-menu">
                                                    <h3 className="rbt-short-title">
                                                        Course Title
                                                    </h3>
                                                    <ul className="rbt-vertical-nav-list-wrapper">
                                                        {item.tabCourses?.map((course, courseIndex) => (
                                                            courseIndex < 4 && (
                                                                <li key={`course-${courseIndex}`}>
                                                                    <Link href={course.url}>
                                                                        {course.title}
                                                                    </Link>
                                                                </li>
                                                            )
                                                        ))}
                                                    </ul>
                                                    {displayTab === 3 && (
                                                        <div className="read-more-btn">
                                                            <Link className="rbt-btn-link" href="#">
                                                                Learn More<i className="feather-arrow-right"/>
                                                            </Link>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                            {item.tabCourses?.length > 4 && (
                                                <div className="col-lg-6 col-sm-6 col-6">
                                                    <div className="vartical-nav-content-menu">
                                                        <h3 className="rbt-short-title">
                                                            Course Title
                                                        </h3>
                                                        <ul className="rbt-vertical-nav-list-wrapper">
                                                            {item.tabCourses?.map((course, courseIndex) => (
                                                                courseIndex > 3 && (
                                                                    <li key={`course-${courseIndex}`}>
                                                                        <Link href={course.url}>
                                                                            {course.title}
                                                                        </Link>
                                                                    </li>
                                                                )
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeaderCategoryMenu;