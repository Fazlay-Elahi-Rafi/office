import {useEffect, useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'

const CourseWidget = (
    {
        data,
        courseStyle = 'one',
        showDescription = true,
        showAuthor = true
    }) => {
    const [discountPercentage, setDiscountPercentage] = useState('');
    const [totalReviews, setTotalReviews] = useState('');
    const [rating, setRating] = useState('');

    const getDiscountPercentage = () => {
        let discount = data.coursePrice * ((100 - data.offerPrice) / 100);
        setDiscountPercentage(discount.toFixed(0));
    }

    const getTotalReviews = () => {
        let reviews = data.reviews.oneStar + data.reviews.twoStar + data.reviews.threeStar + data.reviews.fourStar + data.reviews.fiveStar;
        setTotalReviews(reviews)
    }

    const getTotalRating = () => {
        let ratingStar = data.rating.average;
        setRating(ratingStar.toFixed(0));
    }

    useEffect(() => {
        getDiscountPercentage();
        getTotalReviews();
        getTotalRating();
    });

    return (
        <>
            <div className="rbt-card variation-01 rbt-hover">
                <div className="rbt-card-img">
                    <Link href="#">
                        <Image
                            width={330}
                            height={227}
                            src={data.courseThumbnail}
                            alt={data.title}
                        />
                        <div className="rbt-badge-3 bg-white">
                            <span>{`-${discountPercentage}%`}</span>
                            <span>Off</span>
                        </div>
                    </Link>
                </div>
                <div className="rbt-card-body">
                    {courseStyle === 'two' && (
                        <>
                            <div className="rbt-card-top">
                                <div className="rbt-review">
                                    <div className="rating">
                                        {Array.from({length: rating}, (_, i) => <i className="fas fa-star" key={i}/>)}
                                    </div>
                                    <span className="rating-count">({totalReviews} Reviews)</span>
                                </div>
                                <div className="rbt-bookmark-btn">
                                    <a className="rbt-round-btn" title="Bookmark" href="#">
                                        <i className="feather-bookmark"/>
                                    </a>
                                </div>
                            </div>
                            <h4 className="rbt-card-title">
                                <Link href="#">{data.title}</Link>
                            </h4>
                        </>
                    )}
                    <ul className="rbt-meta">
                        <li>
                            <i className="feather-book"/>{data.lectures} Lessons
                        </li>
                        <li>
                            <i className="feather-users"/>{data.enrolledStudent} Students
                        </li>
                    </ul>

                    {courseStyle === 'one' && (
                        <h4 className="rbt-card-title">
                            <Link href="#">{data.title}</Link>
                        </h4>
                    )}

                    {showDescription && (
                        <p className="rbt-card-text">
                            {data.shortDescription}
                        </p>
                    )}

                    {(courseStyle === 'two' && showAuthor) && (
                        <div className="rbt-author-meta mb--20">
                            <div className="rbt-avater">
                                <a href="components/widgets#">
                                    <Image
                                        width={40}
                                        height={40}
                                        src="/images/client/avater-01.png"
                                        alt="Sophia Jaymes"
                                    />
                                </a>
                            </div>
                            <div className="rbt-author-info">
                                By <Link href="#">Patrick</Link> In <Link href="#">Languages</Link>
                            </div>
                        </div>
                    )}

                    {courseStyle === 'one' && (
                        <div className="rbt-review">
                            <div className="rating">
                                {Array.from({length: rating}, (_, i) => <i className="fas fa-star" key={i}/>)}
                            </div>
                            <span className="rating-count"> ({totalReviews} Reviews)</span>
                        </div>
                    )}

                    <div className="rbt-card-bottom">
                        <div className="rbt-price">
                            <span className="current-price">${data.offerPrice}</span>
                            <span className="off-price">${data.coursePrice}</span>
                        </div>
                        <Link className="rbt-btn-link" href="#">
                            Learn More<i className="feather-arrow-right"/>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CourseWidget;
