import Instructors from '../../data/instructors.json';
import SectionTitle from '../global/SectionTitle';
import Image from "next/image";

const TeamOne = () => {
    return (
        <>
            <div className="rbt-team-area bg-color-white rbt-section-gap">
                <div className="container">
                    <div className="row mb--60">
                        <div className="col-lg-12">
                            <SectionTitle
                                title="Whose Inspirations You"
                                subtitle="Our Teacher"
                                subtitleColor="bg-primary-opacity"
                                alignment="center"
                            />
                        </div>
                    </div>
                    <div className="row g-5">
                        <div className="col-lg-7">
                            <div className="rbt-team-tab-content tab-content" id="myTabContent">
                                {Instructors?.slice(0, 6).map((instructor, instructorIndex) => (
                                    <div className={`tab-pane fade ${instructorIndex === 0 ? "active show" : ""}`}
                                         id={`team-tab${instructorIndex}`}
                                         role="tabpanel"
                                         aria-labelledby={`team-tab${instructorIndex}-tab`}
                                         key={`instructor-tab-pane-${instructorIndex}`}>
                                        <div className="inner">
                                            <div className="rbt-team-thumbnail">
                                                <div className="thumb">
                                                    <Image
                                                        width={415}
                                                        height={555}
                                                        src={instructor.avatar}
                                                        alt="Instructor Image"
                                                    />
                                                </div>
                                            </div>
                                            <div className="rbt-team-details">
                                                <div className="author-info">
                                                    <h4 className="title">{instructor.name}</h4>
                                                    <span
                                                        className="designation theme-gradient">{instructor.instructorOf} Teacher</span>
                                                    <span className="team-form">
                                                        <i className="feather-map-pin"></i>
                                                        <span className="location">{instructor.address}</span>
                                                    </span>
                                                </div>
                                                <p>{instructor.biography}</p>
                                                <ul className="social-icon social-default mt--20 justify-content-start">
                                                    {instructor.socialLinks?.map((link, linkIndex) => (
                                                        <li key={`link-${linkIndex}`}>
                                                            <a href={link.url}>
                                                                {link.type === 'facebook' &&
                                                                    <i className="feather-facebook"/>}
                                                                {link.type === 'twitter' &&
                                                                    <i className="feather-twitter"/>}
                                                                {link.type === 'instagram' &&
                                                                    <i className="feather-instagram"/>}
                                                                {link.type === 'linkedin' &&
                                                                    <i className="feather-linkedin"/>}
                                                            </a>
                                                        </li>
                                                    ))}
                                                </ul>
                                                <ul className="rbt-information-list mt--25">
                                                    <li>
                                                        <a href={`tel:${instructor.phone}`}>
                                                            <i className="feather-phone"/>{instructor.phone}
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href={`mailto:${instructor.email}`}>
                                                            <i className="feather-mail"/>{instructor.email}
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                <div className="top-circle-shape"></div>
                            </div>
                        </div>

                        <div className="col-lg-5">
                            <ul className="rbt-team-tab-thumb nav nav-tabs" id="myTab" role="tablist">
                                {Instructors?.slice(0, 6).map((instructor, instructorIndex) => (
                                    <li key={`instructor-tab-button-${instructorIndex}`}>
                                        <button className={`p-0 border-0 ${instructorIndex === 0 ? "active" : ""}`}
                                                id={`team-tab${instructorIndex}-tab`}
                                                data-bs-toggle="tab"
                                                data-bs-target={`#team-tab${instructorIndex}`}
                                                role="tab"
                                                aria-controls={`team-tab${instructorIndex}`}
                                                aria-selected="true">
                                            <div className="rbt-team-thumbnail">
                                                <div className="thumb">
                                                    <Image
                                                        width={415}
                                                        height={555}
                                                        src={instructor.avatar}
                                                        alt="Instructor Image"
                                                    />
                                                </div>
                                            </div>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TeamOne;
