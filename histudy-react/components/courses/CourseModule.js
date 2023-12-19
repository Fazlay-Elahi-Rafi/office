import Link from 'next/link'
import ReactPaginate from 'react-paginate'
import {DateTime} from 'luxon'
import InputRange from 'react-input-range'
import Select, {components} from 'react-select'
import Courses from '../../data/courses.json'
import Authors from '../../data/authors.json'
import CourseWidget from '../widgets/CourseWidget'
import {useEffect, useRef, useState} from 'react'
import 'react-input-range/lib/css/index.css'

const CourseModule = () => {
    const components = {ValueContainer, MultiValue};
    const courseArea = useRef(null)
    const [loading, setLoading] = useState(false);
    const [sortBy, setSortBy] = useState({value: 'Default', label: 'Default'});
    const [sortByAuthor, setSortByAuthor] = useState(null);
    const [sortByOffer, setSortByOffer] = useState({value: 'Free', label: 'Free'});
    const [sortByCategory, setSortByCategory] = useState({value: 'Web Design', label: 'Web Design'});
    const [priceRange, setPriceRange] = useState({min: 20, max: 70,});
    const [filteredData, setFilteredData] = useState(Courses);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    const sortByOptions = [
        {value: 'Default', label: 'Default'},
        {value: 'Latest', label: 'Latest'},
        {value: 'Popularity', label: 'Popularity'},
        {value: 'Trending', label: 'Trending'},
        {value: 'Price: low to high', label: 'Price: low to high'},
        {value: 'Price: high to low', label: 'Price: high to low'}
    ]

    let sortByAuthors = []

    const sortByOffers = [
        {value: 'Free', label: 'Free'},
        {value: 'Paid', label: 'Paid'},
        {value: 'Premium', label: 'Premium'}
    ]

    const sortByCategories = [
        {value: 'Web Design', label: 'Web Design'},
        {value: 'Graphic', label: 'Graphic'},
        {value: 'App Development', label: 'App Development'},
        {value: 'Figma Design', label: 'Figma Design'}
    ]

    const priceHandler = (value) => {
        setPriceRange(value)
    }

    const getFilteredData = (type) => {
        if (type === 'sort-by') {
            if (sortBy.value === 'Latest') {
                let courses = filteredData.sort((a, b) => {
                    const beforeDate = DateTime.fromFormat(a.lastUpdated, "LLL dd yyyy");
                    const afterDate = DateTime.fromFormat(b.lastUpdated, "LLL dd yyyy");
                    return afterDate - beforeDate;
                });

                setLoading(true);
                setTimeout(() => {
                    setFilteredData(prevState => {
                        return [...courses]
                    })
                    setLoading(false);
                }, 700);
                setPageItems(courses)
            } else if (sortBy.value === 'Popularity') {
                let courses = filteredData.sort((a, b) => {
                    const beforeDate = a.rating.average;
                    const afterDate = b.rating.average;
                    return afterDate - beforeDate;
                });

                setLoading(true);
                setTimeout(() => {
                    setFilteredData(prevState => {
                        return [...courses]
                    });
                    setLoading(false);
                }, 700);
                setPageItems(courses)
            } else if (sortBy.value === 'Trending') {
                let courses = filteredData.sort((a, b) => {
                    const beforeDate = a.students;
                    const afterDate = b.students;
                    return afterDate - beforeDate;
                });

                setLoading(true);
                setTimeout(() => {
                    setFilteredData(prevState => {
                        return [...courses]
                    });
                    setLoading(false);
                }, 700);
                setPageItems(courses)
            } else if (sortBy.value === 'Price: low to high') {
                let courses = filteredData.sort((a, b) => {
                    const beforeDate = a.offerPrice;
                    const afterDate = b.offerPrice;
                    return beforeDate - afterDate;
                });

                setLoading(true);
                setTimeout(() => {
                    setFilteredData(prevState => {
                        return [...courses]
                    });
                    setLoading(false);
                }, 700);
                setPageItems(courses)
            } else {
                setLoading(true);
                setTimeout(() => {
                    setFilteredData(prevState => {
                        return [...Courses]
                    });
                    setLoading(false);
                }, 700);
                setPageItems(Courses)
            }
        } else if (type === 'sort-by-author') {
            if (sortByAuthor) {
                let authorIds = [];
                sortByAuthor.forEach(author => {
                    authorIds.push(author.value)
                })

                const courses = filteredData.filter(course => {
                    return authorIds.includes(course.authorId)
                });

                setLoading(true);
                setTimeout(() => {
                    setFilteredData(prevState => {
                        return [...courses]
                    });
                    setLoading(false);
                }, 700);
                setPageItems(courses)
            }
        }
    }

    const setPageItems = (items) => {
        const endOffset = itemOffset + 6;
        setFilteredData(items.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(filteredData.length / 6));
    }

    const handlePageClick = (event) => {
        const newOffset = event.selected * 6 % filteredData.length;
        setItemOffset(newOffset);
        scrollToCourse();
    };

    const scrollToCourse = () => courseArea.current.scrollIntoView();

    useEffect(() => {
        // getFilteredData('sort-by')
    })

    useEffect(() => {
        // getFilteredData('sort-by-author')
    })

    useEffect(() => {
        console.log('change sortByOffer')
    }, [sortByOffer])

    useEffect(() => {
        console.log('change sortByCategory')
    }, [sortByCategory])

    useEffect(() => {
        console.log('change priceRange')
    }, [priceRange])

    useEffect(() => {
        // setPageItems(Courses)
    });

    useEffect(() => {
        Authors.forEach(author => {
            sortByAuthors.push({
                value: author.id,
                label: author.name
            })
        })
    })

    return (
        <>
            <div className="rbt-page-banner-wrapper">
                <div className="rbt-banner-image"/>
                <div className="rbt-banner-content">
                    <div className="rbt-banner-content-top">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <ul className="page-list">
                                        <li className="rbt-breadcrumb-item">
                                            <Link href="/">Home</Link>
                                        </li>
                                        <li>
                                            <div className="icon-right">
                                                <i className="feather-chevron-right"/>
                                            </div>
                                        </li>
                                        <li className="rbt-breadcrumb-item active">
                                            All Courses
                                        </li>
                                    </ul>
                                    <div className=" title-wrapper">
                                        <h1 className="title mb--0">All Courses</h1>
                                        <a href="#" className="rbt-badge-2">
                                            <div className="image">🎉</div>
                                            {Courses.length} Courses
                                        </a>
                                    </div>
                                    <p className="description">
                                        Courses that help beginner designers become true unicorns.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rbt-course-top-wrapper mt--40 mt_sm--20">
                        <div className="container">
                            <div className="row g-5 align-items-center">
                                <div className="col-lg-5 col-md-12">
                                    <div className="rbt-sorting-list d-flex flex-wrap align-items-center">
                                        <div className="rbt-short-item switch-layout-container">
                                            <ul className="course-switch-layout">
                                                <li className="course-switch-item">
                                                    <button className="rbt-grid-view active" title="Grid Layout">
                                                        <i className="feather-grid"/>
                                                        <span className="text">Grid</span>
                                                    </button>
                                                </li>
                                                <li className="course-switch-item">
                                                    <button className="rbt-list-view" title="List Layout">
                                                        <i className="feather-list"/>
                                                        <span className="text">List</span>
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="rbt-short-item">
                                            <span className="course-index">
                                                Showing 1-9 of {Courses.length} results
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-7 col-md-12">
                                    <div
                                        className="rbt-sorting-list d-flex flex-wrap align-items-center justify-content-start justify-content-lg-end">
                                        <div className="rbt-short-item">
                                            <form action="#" className="rbt-search-style me-0">
                                                <input type="text" placeholder="Search Your Course.."/>
                                                <button type="submit" className="rbt-search-btn rbt-round-btn">
                                                    <i className="feather-search"/>
                                                </button>
                                            </form>
                                        </div>
                                        <div className="rbt-short-item">
                                            <div className="view-more-btn text-start text-sm-end">
                                                <button
                                                    type="button"
                                                    className="discover-filter-button discover-filter-activation rbt-btn btn-white btn-md radius-round"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#collapseCourseFilter"
                                                    aria-expanded="false"
                                                    aria-controls="collapseCourseFilter">
                                                    Filter<i className="feather-filter"/>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="collapse default-exp-wrapper"
                                 id="collapseCourseFilter">
                                <div className="filter-inner">
                                    <div className="filter-select-option">
                                        <div className="dropdown filter-select rbt-modern-select">
                                            <span className="select-label d-block">Short By</span>
                                            <Select
                                                instanceId="sortBySelect"
                                                // defaultMenuIsOpen
                                                className="react-select"
                                                classNamePrefix="react-select"
                                                defaultValue={sortBy}
                                                onChange={setSortBy}
                                                options={sortByOptions}
                                            />
                                        </div>
                                    </div>

                                    <div className="filter-select-option">
                                        <div className="filter-select rbt-modern-select">
                                            <span className="select-label d-block">Short By Author</span>
                                            <Select
                                                instanceId="sortByAuthor"
                                                className="react-select"
                                                classNamePrefix="react-select"
                                                defaultValue={sortByAuthor}
                                                onChange={setSortByAuthor}
                                                options={sortByAuthors}
                                                closeMenuOnSelect={true}
                                                isMulti
                                                components={components}
                                            />
                                        </div>
                                    </div>
                                    <div className="filter-select-option">
                                        <div className="filter-select rbt-modern-select">
                                            <span className="select-label d-block">Short By Offer</span>
                                            <Select
                                                instanceId="sortByOffer"
                                                className="react-select"
                                                classNamePrefix="react-select"
                                                defaultValue={sortByOffer}
                                                onChange={setSortByOffer}
                                                options={sortByOffers}
                                            />
                                        </div>
                                    </div>
                                    <div className="filter-select-option">
                                        <div className="filter-select rbt-modern-select">
                                            <span className="select-label d-block">Short By Category</span>
                                            <Select
                                                instanceId="sortByCategory"
                                                className="react-select"
                                                classNamePrefix="react-select"
                                                defaultValue={sortByCategory}
                                                onChange={setSortByCategory}
                                                options={sortByCategories}
                                            />
                                        </div>
                                    </div>
                                    <div className="filter-select-option">
                                        <div className="filter-select">
                                            <span className="select-label d-block">Price Range</span>
                                            <div className="price_filter s-filter input-range-filter clear">
                                                <InputRange
                                                    draggableTrack
                                                    maxValue={100}
                                                    minValue={0}
                                                    onChange={value => setPriceRange(value)}
                                                    onChangeComplete={value => console.log(value)}
                                                    value={priceRange}
                                                />
                                                <div className="slider__range--output mt-3">
                                                    <div className="price__output--wrap">
                                                        <div className="price--output">
                                                            <span className="me-2">Price :</span>
                                                            {`${priceRange.min}$ - ${priceRange.max}$`}
                                                        </div>
                                                        <div className="price--filter">
                                                            <a className="rbt-btn btn-gradient btn-sm"
                                                               href="#">Filter</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div ref={courseArea} className="rbt-section-overlayping-top rbt-section-gapBottom">
                <div className="inner">
                    <div className="container">
                        <div className={`rbt-course-grid-column ${loading ? 'loading' : ''}`}>
                            {loading && (
                                <>
                                    <div className="loading-wrapper">
                                        <div className="spinner-border" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </div>
                                    </div>
                                </>
                            )}

                            {filteredData?.map((course, courseIndex) => (
                                <div className="course-grid-3" key={`course-${courseIndex}`}>
                                    <CourseWidget data={course} courseStyle="two"/>
                                </div>
                            ))}
                        </div>
                        <div className="row">
                            <div className="col-lg-12 mt--60">
                                <ReactPaginate
                                    nextLabel=""
                                    onPageChange={handlePageClick}
                                    pageRangeDisplayed={3}
                                    marginPagesDisplayed={2}
                                    pageCount={pageCount}
                                    previousLabel=""
                                    previousLinkClassName="previous"
                                    nextLinkClassName="next"
                                    breakLabel="..."
                                    containerClassName="list-unstyled rbt-pagination"
                                    activeClassName="active"
                                    renderOnZeroPageCount={null}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CourseModule;

const ValueContainer = ({children, ...props}) => {
    const {getValue, hasValue} = props;
    const nbValues = getValue().length;
    if (!hasValue) {
        return (
            <components.ValueContainer {...props}>
                {children}
            </components.ValueContainer>
        );
    }
    return (
        <components.ValueContainer {...props}>
            {`${nbValues} items selected`}
        </components.ValueContainer>
    );
};

const MultiValue = props => {
    return "3 Selected";
};