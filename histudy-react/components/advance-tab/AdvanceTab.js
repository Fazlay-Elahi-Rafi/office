import SectionTitle from "../global/SectionTitle";
import Image from "next/image";

const AdvanceTab = (
    {
        tabStyle = 'one',
        tabId,
        tabTitle,
        tabSubtitle,
        subtitleClass,
        sectionTitleAlignment,
        tabData
    }) => {
    return (
        <>
            {tabStyle === 'one' && (
                <div className="rbt-advance-tab-area rbt-section-gap bg-color-white">
                    <div className="container">
                        <div className="row mb--60">
                            <div className="col-lg-12">
                                <SectionTitle
                                    title={tabTitle}
                                    subtitle={tabSubtitle}
                                    subtitleColor={subtitleClass}
                                    alignment={sectionTitleAlignment}
                                />
                            </div>
                        </div>
                        <div className="row g-5">
                            <div className="col-lg-4 col-md-12 col-sm-12 col-12 mt_md--30 mt_sm--30 order-2 order-lg-1">
                                <div className="advance-tab-button advance-tab-button-1">
                                    <ul className="nav nav-tabs tab-button-list"
                                        id={tabId}
                                        role="tablist">
                                        {tabData?.map((tab, index) => (
                                            <li className="nav-item"
                                                role="presentation"
                                                key={`tab${tabId}-button-${index}`}>
                                                <a href="#"
                                                   className={`nav-link tab-button ${index === 1 ? 'active' : ''}`}
                                                   id={`${tabId}-tab-${index}`}
                                                   data-bs-toggle="tab"
                                                   data-bs-target={`#${tabId}Tab${index}`}
                                                   role="tab"
                                                   aria-controls={`${tabId}Tab`}
                                                   aria-selected={index === 1 ? true : false}>
                                                    <div className="tab">
                                                        <h4 className="title">
                                                            {tab.tabButton.title}
                                                        </h4>
                                                        <p className="description">
                                                            {tab.tabButton.description}
                                                        </p>
                                                    </div>
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-12 col-sm-12 col-12 order-1 order-lg-2">
                                <div className="tab-content">
                                    {tabData?.map((tabContent, index) => (
                                        <div
                                            className={`tab-pane fade advance-tab-content-1 ${index === 1 ? 'active show' : ''}`}
                                            id={`${tabId}Tab${index}`}
                                            role="tabpanel"
                                            aria-labelledby={`${tabId}-tab-${index}`}
                                            key={`tab${tabId}-content-${index}`}>
                                            <div className="thumbnail">
                                                <Image
                                                    width={860}
                                                    height={620}
                                                    src={tabContent.image}
                                                    alt="advance-tab-image"
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default AdvanceTab;