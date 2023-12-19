import Link from 'next/link';
import {useEffect, useState} from 'react';
import {toggleShowMore} from '../../helpers/utilities';
import Events from '../../data/events.json';
import EventWidget from '../widgets/EventWidget';
import Pagination from '../pagination/Pagination';
import Image from "next/image";

const EventModule = ({eventStyle = 'grid', eventFilter = false}) => {
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    const startIndex = (page - 1) * 6;
    const selectedEvents = Events.slice(startIndex, startIndex + 6);

    const handleClick = (num) => {
        event.preventDefault();
        setPage(num);
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        setTotalPages(Math.ceil(Events.length / 6));
    }, [setTotalPages]);

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
                                        <li className="rbt-breadcrumb-item active">All Event</li>
                                    </ul>

                                    <div className=" title-wrapper">
                                        <h1 className="title mb--0">All Event</h1>
                                        <a href="#" className="rbt-badge-2">
                                            <div className="image">🎉</div>
                                            {Events.length} Events
                                        </a>
                                    </div>
                                    <p className="description">
                                        Event that help beginner designers become true unicorns.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="rbt-counterup-area rbt-section-overlayping-top rbt-section-gapBottom">
                <div className="container">
                    {eventFilter && (
                        <div className="row row--30 gy-5">
                            <div className="col-lg-4 col-xl-3 order-2 order-lg-1">
                                <aside className="rbt-sidebar-widget-wrapper rbt-gradient-border">
                                    <div className="rbt-single-widget rbt-widget-categories has-show-more">
                                        <div className="inner">
                                            <h4 className="rbt-widget-title">Categories</h4>
                                            <ul className="rbt-sidebar-list-wrapper categories-list-check has-show-more-inner-content">
                                                <li className="rbt-check-group">
                                                    <input id="cat-list-1" type="checkbox" name="cat-list-1"/>
                                                    <label htmlFor="cat-list-1">
                                                        Art &amp; Humanities <span className="rbt-lable count">15</span>
                                                    </label>
                                                </li>
                                                <li className="rbt-check-group">
                                                    <input id="cat-list-2" type="checkbox" name="cat-list-2"/>
                                                    <label htmlFor="cat-list-2">
                                                        Web Design <span className="rbt-lable count">20</span>
                                                    </label>
                                                </li>
                                                <li className="rbt-check-group">
                                                    <input id="cat-list-3" type="checkbox" name="cat-list-3"/>
                                                    <label htmlFor="cat-list-3">
                                                        Graphic Design <span className="rbt-lable count">10</span>
                                                    </label>
                                                </li>
                                                <li className="rbt-check-group">
                                                    <input id="cat-list-4" type="checkbox" name="cat-list-4"/>
                                                    <label htmlFor="cat-list-4">
                                                        Art &amp; Humanities <span className="rbt-lable count">15</span>
                                                    </label>
                                                </li>
                                                <li className="rbt-check-group">
                                                    <input id="cat-list-5" type="checkbox" name="cat-list-5"/>
                                                    <label htmlFor="cat-list-5">
                                                        Technology <span className="rbt-lable count">20</span>
                                                    </label>
                                                </li>
                                                <li className="rbt-check-group">
                                                    <input id="cat-list-6" type="checkbox" name="cat-list-6"/>
                                                    <label htmlFor="cat-list-6">
                                                        Humanities Art <span className="rbt-lable count">25</span>
                                                    </label>
                                                </li>
                                                <li className="rbt-check-group">
                                                    <input id="cat-list-7" type="checkbox" name="cat-list-7"/>
                                                    <label htmlFor="cat-list-7">
                                                        Management <span className="rbt-lable count">50</span>
                                                    </label>
                                                </li>
                                                <li className="rbt-check-group">
                                                    <input id="cat-list-8" type="checkbox" name="cat-list-8"/>
                                                    <label htmlFor="cat-list-8">
                                                        Photoshop <span className="rbt-lable count">45</span>
                                                    </label>
                                                </li>
                                                <li className="rbt-check-group">
                                                    <input id="cat-list-9" type="checkbox" name="cat-list-9"/>
                                                    <label htmlFor="cat-list-9">
                                                        Online Course <span className="rbt-lable count">45</span>
                                                    </label>
                                                </li>
                                                <li className="rbt-check-group">
                                                    <input id="cat-list-10" type="checkbox" name="cat-list-10"/>
                                                    <label htmlFor="cat-list-10">
                                                        English Clud <span className="rbt-lable count">45</span>
                                                    </label>
                                                </li>
                                                <li className="rbt-check-group">
                                                    <input id="cat-list-11" type="checkbox" name="cat-list-11"/>
                                                    <label htmlFor="cat-list-11">
                                                        Graphic Design <span className="rbt-lable count">45</span>
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="rbt-show-more-btn"
                                             onClick={(e) => toggleShowMore(e)}>
                                            Show More
                                        </div>
                                    </div>
                                    <div className="rbt-single-widget rbt-widget-recent">
                                        <div className="inner">
                                            <h4 className="rbt-widget-title">Recent Events</h4>
                                            <ul className="rbt-sidebar-list-wrapper recent-post-list">
                                                {Events?.slice(-4).reverse().map((recentEvent, recentEventIndex) => (
                                                    <li key={`recent-event-${recentEventIndex}`}>
                                                        <div className="thumbnail">
                                                            <Link href={`/event/${recentEvent.id}`}>
                                                                <Image
                                                                    width={355}
                                                                    height={240}
                                                                    src={recentEvent.thumbnailImage}
                                                                    alt={recentEvent.title}
                                                                />
                                                            </Link>
                                                        </div>
                                                        <div className="content">
                                                            <h6 className="title">
                                                                <Link href={`/event/${recentEvent.id}`}>
                                                                    {recentEvent.title}
                                                                </Link>
                                                            </h6>
                                                            <ul className="rbt-meta">
                                                                <li>
                                                                    <i className="feather-clock"/>
                                                                    {recentEvent.startDate}
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="rbt-single-widget rbt-widget-tag">
                                        <div className="inner">
                                            <h4 className="rbt-widget-title">Event Tags</h4>
                                            <div className="rbt-sidebar-list-wrapper rbt-tag-list">
                                                <a href="#">Histudy</a>
                                                <a href="#">Training</a>
                                                <a href="#">Courses</a>
                                                <a href="#">Learn</a>
                                                <a href="#">English</a>
                                                <a href="#">Online</a>
                                                <a href="#">Kids</a>
                                                <a href="#">Economic</a>
                                                <a href="#">Math</a>
                                                <a href="#">Marketing</a>
                                            </div>
                                        </div>
                                    </div>
                                </aside>
                            </div>
                            <div className="col-lg-8 col-xl-9 order-1 order-lg-2">
                                <div className="row g-5">
                                    {selectedEvents?.map((item, itemIndex) => (
                                        <div className="col-lg-4 col-md-6 col-12"
                                             key={`event-${itemIndex}`}>
                                            <EventWidget
                                                event={item}
                                                widgetStyle={eventStyle === 'list' ? eventStyle : 'card'}
                                            />
                                        </div>
                                    ))}
                                </div>
                                <div className="row">
                                    <div className="col-lg-12 mt--60">
                                        <Pagination
                                            totalPages={totalPages}
                                            pageNumber={page}
                                            handleClick={handleClick}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {!eventFilter && (
                        <>
                            <div className="row g-5">
                                {selectedEvents?.map((item, itemIndex) => (
                                    <div
                                        className={eventStyle === 'list' ? 'col-lg-6 col-md-6 col-12' : 'col-lg-4 col-md-6 col-12'}
                                        key={`event-${itemIndex}`}>
                                        <EventWidget
                                            event={item}
                                            widgetStyle={eventStyle === 'list' ? eventStyle : 'card'}
                                        />
                                    </div>
                                ))}
                            </div>
                            <div className="row">
                                <div className="col-lg-12 mt--60">
                                    <Pagination
                                        totalPages={totalPages}
                                        pageNumber={page}
                                        handleClick={handleClick}
                                    />
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    )
}

export default EventModule