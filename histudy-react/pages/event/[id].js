import Head from 'next/head';
import Link from 'next/link';
import Image from "next/image";
import {useEffect, useState} from 'react';
import {toggleShowMore} from '../../helpers/utilities';
import ModalVideo from 'react-modal-video'
import EventsData from '../../data/events.json';
import Layout from '../../components/layouts/Layout';
import AccordionBody from '../../components/accordion/AccordionBody';
import TeamWidget from '../../components/widgets/TeamWidget';
import EventWidget from '../../components/widgets/EventWidget';

export async function getStaticPaths() {
    return {
        paths: EventsData?.map(({id}) => ({
            params: {
                id: id.toString(),
            },
        })),
        fallback: false,
    };
}

export async function getStaticProps(context) {
    const {params} = context;
    const eventData = EventsData.find(
        ({id}) => id.toString() === params.id.toString()
    );

    return {
        props: {
            eventData,
        },
    };
}

const EventDetailsPage = ({eventData}) => {
    const [similarEvents, setSimilarEvents] = useState(null);
    const [showMore, setShowMore] = useState(false);
    const [isOpen, setOpen] = useState(false);

    useEffect(() => {
        if (eventData.similarEvents.length) {
            const result = EventsData.filter(({id}) => eventData.similarEvents.includes(id));
            setSimilarEvents(result)
        }
    }, [eventData.similarEvents]);

    return (
        <>
            <Head>
                <title>Event Details - Online Courses & Education Bootstrap5 Template</title>
            </Head>

            <Layout>
                <div className="rbt-breadcrumb-default rbt-breadcrumb-style-3">
                    <div className="breadcrumb-inner">
                        <Image
                            width={1920}
                            height={1408}
                            src="/images/bg/bg-image-10.jpg"
                            alt="Banner Images"
                            priority={true}
                        />
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="content">
                                    <div className="content text-start">
                                        <ul className="page-list">
                                            <li className="rbt-breadcrumb-item">
                                                <Link href="/">Home</Link>
                                            </li>
                                            <li>
                                                <div className="icon-right">
                                                    <i className="feather-chevron-right"/>
                                                </div>
                                            </li>
                                            <li className="rbt-breadcrumb-item active">{eventData.category}</li>
                                        </ul>
                                        <h2 className="title mb--0">{eventData.title}</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="rbt-course-details-area rbt-section-gap">
                    <div className="container">
                        <div className="row g-5">
                            <div className="col-lg-8">
                                <div className="course-details-content">
                                    <div className="rbt-feature-box rbt-shadow-box thuumbnail">
                                        <Image
                                            width={710}
                                            height={488}
                                            className="w-100"
                                            src="/images/course/course-01.jpg"
                                            alt="Event Image"
                                        />
                                    </div>
                                    <div className="rbt-feature-box rbt-shadow-box mt--60">
                                        <div className="row g-5">
                                            <div className="col-lg-12">
                                                <div className="section-title">
                                                    <h4 className="title mb--0">Event Content</h4>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <ul className="rbt-list-style-1">
                                                    {eventData.eventContentList.slice(0, 4)?.map((content, contentIndex) => (
                                                        <li key={`event-content-${contentIndex}`}>
                                                            <i className="feather-check"/>
                                                            {content}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="col-lg-6">
                                                <ul className="rbt-list-style-1">
                                                    {eventData.eventContentList.slice(4, 8)?.map((content, contentIndex) => (
                                                        <li key={`event-content-${contentIndex}`}>
                                                            <i className="feather-check"/>
                                                            {content}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="rbt-feature-box rbt-shadow-box mt--60">
                                        <div className="row g-5">
                                            <div className="col-lg-12">
                                                <div className="section-title">
                                                    <h4 className="title mb--20">Event Description</h4>
                                                </div>
                                                <div dangerouslySetInnerHTML={{__html: eventData.eventDescription}}/>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="section-title">
                                                    <h4 className="title mb--20">Description</h4>
                                                </div>
                                                <ul className="rbt-list-style-1">
                                                    {eventData.description?.map((description, descriptionIndex) => (
                                                        <li key={`description-${descriptionIndex}`}>
                                                            <i className="feather-check"/>
                                                            {description}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="course-content rbt-shadow-box mt--60">
                                        <div className="section-title">
                                            <h4 className="title mb--0">Event FAQ</h4>
                                        </div>
                                        <div className="rbt-accordion-style rbt-accordion-02 accordion mt--45">
                                            <AccordionBody id="eventFaq" accordionItems={eventData.eventFaqs}/>
                                        </div>
                                    </div>
                                    <div className="rbt-participants-area mt--60">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="section-title text-start mb--20">
                                                    <span className="subtitle bg-secondary-opacity">
                                                        Event Participants
                                                    </span>
                                                    <h2 className="title">Event Participants</h2>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row g-5">
                                            {eventData.eventParticipants?.map((participant, participantIndex) => (
                                                <div className="col-lg-6 col-md-6 col-12"
                                                     key={`participant-${participantIndex}`}>
                                                    <TeamWidget
                                                        widgetStyle="card-box"
                                                        teamMember={participant}
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="related-course mt--60">
                                    <div className="row">
                                        <div className="col-lg-12 mb--40">
                                            <div className="section-title text-start">
                                                <span className="subtitle bg-secondary-opacity">Similar Event</span>
                                                <h2 className="title">Similar Event</h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row g-5">
                                        {similarEvents?.slice(0, 2).map((similarEvent, similarEventIndex) => (
                                            <div className="col-lg-6 col-md-6 col-sm-6 col-12 mt--30"
                                                 data-sal-delay="150"
                                                 data-sal="slide-up"
                                                 data-sal-duration="800"
                                                 key={`similar-event-${similarEventIndex}`}>
                                                <EventWidget event={similarEvent}/>
                                            </div>
                                        ))}

                                        {(similarEvents?.length > 2 && showMore) && (
                                            (similarEvents?.slice(2).map((similarEvent, similarEventIndex) => (
                                                <div className="col-lg-6 col-md-6 col-sm-6 col-12 mt--30"
                                                     data-sal-delay="150"
                                                     data-sal="slide-up"
                                                     data-sal-duration="800"
                                                     key={`similar-event-${similarEventIndex}`}>
                                                    <EventWidget event={similarEvent}/>
                                                </div>
                                            )))
                                        )}
                                    </div>

                                    {(similarEvents?.length > 2 && !showMore) && (
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="load-more mt--60 text-center">
                                                    <button type="button" className="rbt-btn rbt-switch-btn btn-border"
                                                            onClick={() => setShowMore(true)}>
                                                        <span data-text="View More Events">View More Events</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="col-lg-4 mt_md--60 mt_sm--60">
                                <div
                                    className="course-sidebar rbt-gradient-border sticky-top rbt-shadow-box course-sidebar-top">
                                    <div className="inner">
                                        <button
                                            className="video-popup-with-text video-popup-wrapper text-center popup-video sidebar-video-hidden p-0 border-0 bg-transparent mb--15"
                                            onClick={() => setOpen(true)}>
                                            <div className="video-content">
                                                <Image
                                                    width={590}
                                                    height={424}
                                                    className="w-100 rbt-radius"
                                                    src="/images/others/video-01.jpg"
                                                    alt="Video Images"
                                                />
                                                <div className="position-to-top">
                                                    <span className="rbt-btn rounded-player-2 with-animation">
                                                        <span className="play-icon"/>
                                                    </span>
                                                </div>
                                                <span className="play-view-text d-block color-white">
                                                    <i className="feather-eye"/> Preview this course
                                                </span>
                                            </div>
                                        </button>
                                        <div className="content pt--30">
                                            <div className="add-to-card-button mb--15">
                                                <a className="rbt-btn btn-gradient icon-hover w-100 d-block text-center"
                                                   href="#">
                                                    <span className="btn-text">Add to Cart $49</span>
                                                    <span className="btn-icon">
                                                        <i className="feather-arrow-right"/>
                                                    </span>
                                                </a>
                                            </div>
                                            <div className="buy-now-btn">
                                                <a className="rbt-btn btn-border icon-hover w-100 d-block text-center"
                                                   href="#">
                                                    <span className="btn-text">Book Now</span>
                                                    <span className="btn-icon">
                                                        <i className="feather-arrow-right"/>
                                                    </span>
                                                </a>
                                            </div>
                                            <div className="rbt-widget-details has-show-more">
                                                <ul className="has-show-more-inner-content rbt-course-details-list-wrapper">
                                                    <li>
                                                        <span>Start Date</span>
                                                        <span className="rbt-feature-value rbt-badge-5">
                                                            {eventData.startDate}
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span>Start Time</span>
                                                        <span className="rbt-feature-value rbt-badge-5">
                                                            {eventData.startTime}
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span>End Date</span>
                                                        <span className="rbt-feature-value rbt-badge-5">
                                                            {eventData.endTime}
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span>Skill Level</span>
                                                        <span className="rbt-feature-value rbt-badge-5">
                                                            {eventData.skillLevel}
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span>Ongoing</span>
                                                        <span className="rbt-feature-value rbt-badge-5">
                                                            {eventData.ongoing}
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span>Location</span>
                                                        <span className="rbt-feature-value rbt-badge-5">
                                                            {eventData.location}
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span>Certificate</span>
                                                        <span className="rbt-feature-value rbt-badge-5">
                                                            {eventData.certificate}
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span>Language</span>
                                                        <span className="rbt-feature-value rbt-badge-5">
                                                            {eventData.language}
                                                        </span>
                                                    </li>
                                                </ul>
                                                <div className="rbt-show-more-btn"
                                                     onClick={(e) => toggleShowMore(e)}>
                                                    Show More
                                                </div>
                                            </div>
                                            <div className="social-share-wrapper mt--30 text-center">
                                                <div
                                                    className="rbt-post-share d-flex align-items-center justify-content-center">
                                                    <ul className="social-icon social-default transparent-with-border justify-content-center">
                                                        {eventData.socialLinks?.map((social, index) => (
                                                            <li key={`social-${index}`}>
                                                                <a href={social.url}>
                                                                    {social.type === 'Facebook' && <i className="feather-facebook"/>}
                                                                    {social.type === 'Twitter' && <i className="feather-twitter"/>}
                                                                    {social.type === 'Instagram' && <i className="feather-instagram"/>}
                                                                    {social.type === 'Linkedin' && <i className="feather-linkedin"/>}
                                                                </a>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                <hr className="mt--20"/>
                                                <div className="contact-with-us text-center">
                                                    <p>For details about the course</p>
                                                    <p className="rbt-badge-2 mt--10 justify-content-center w-100">
                                                        <i className="feather-phone mr--5"/> Call Us:
                                                        <a href="#"><strong>+444 555 666 777</strong></a>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="rbt-callto-action-area">
                    <div className="rbt-callto-action rbt-cta-default style-4 bg-gradient-6 mt--75">
                        <div className="container">
                            <div
                                className="row align-items-center content-wrapper row--30 mt_dec--30 position-relative">
                                <div className="col-lg-8 mt--30 offset-lg-3">
                                    <div className="inner">
                                        <div className="content text-left">
                                            <h2 className="title" data-sal="slide-up">
                                                Ready to start creating a Educational Website?
                                            </h2>
                                            <div className="call-to-btn text-start mt--30">
                                                <Link className="rbt-btn btn-gradient hover-icon-reverse" href="#">
                                                    <span className="icon-reverse-wrapper">
                                                        <span className="btn-text">Purchase Histudy</span>
                                                        <span className="btn-icon">
                                                            <i className="feather-arrow-right"/>
                                                        </span>
                                                        <span className="btn-icon">
                                                            <i className="feather-arrow-right"/>
                                                        </span>
                                                    </span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="thumbnail">
                                    <Image
                                        width={586}
                                        height={832}
                                        className="w-100"
                                        src="/images/shape/cta.png"
                                        alt="Shape Images"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <ModalVideo
                    channel="youtube"
                    autoplay
                    isOpen={isOpen}
                    videoId="nA1Aqp0sPQo"
                    onClose={() => setOpen(false)}
                />
            </Layout>
        </>
    )
}

export default EventDetailsPage;