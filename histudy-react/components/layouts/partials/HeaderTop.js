import Image from "next/image";

const HeaderTop = ({headerTopVariant = 1}) => {
    const deactivateTopNav = (target) => {
        const topNav = document.querySelector(target)
        topNav.classList.add('deactive')
    }

    return (
        <>
            {headerTopVariant === 1 && (
                <div
                    className="rbt-header-top rbt-header-top-1 header-space-betwween bg-not-transparent bg-color-darker top-expended-activation">
                    <div className="container-fluid">
                        <div className="top-expended-wrapper">
                            <div className="top-expended-inner rbt-header-sec align-items-center">
                                <div className="rbt-header-sec-col rbt-header-left d-none d-xl-block">
                                    <div className="rbt-header-content">
                                        <div className="header-info">
                                            <ul className="rbt-information-list">
                                                <li>
                                                    <a href="#">
                                                        <i className="fab fa-instagram"/>
                                                        100k<span className="d-none d-xxl-block">Followers</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fab fa-facebook-square"/>
                                                        500k <span className="d-none d-xxl-block">Followers</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="feather-phone"/>+1-202-555-0174
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>
                                <div className="rbt-header-sec-col rbt-header-center">
                                    <div className="rbt-header-content justify-content-start justify-content-xl-center">
                                        <div className="header-info">
                                            <div className="rbt-header-top-news">
                                                <div className="inner">
                                                    <div className="content">
                                                        <span
                                                            className="rbt-badge variation-02 bg-color-primary color-white radius-round">
                                                            Hot
                                                        </span>
                                                        <span className="news-text">
                                                            <Image
                                                                width={36}
                                                                height={36}
                                                                src="/images/icons/hand-emojji.svg"
                                                                alt="Hand Emojji Images"
                                                            />
                                                            Intro price. Get Histudy for Big Sale -95% off.
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="rbt-header-sec-col rbt-header-right mt_md--10 mt_sm--10">
                                    <div className="rbt-header-content justify-content-start justify-content-lg-end">
                                        <div className="header-info d-none d-xl-block">
                                            <ul className="social-share-transparent">
                                                <li>
                                                    <a href="#"><i className="fab fa-facebook-f"/></a>
                                                </li>
                                                <li>
                                                    <a href="#"><i className="fab fa-twitter"/></a>
                                                </li>
                                                <li>
                                                    <a href="#"><i className="fab fa-linkedin-in"/></a>
                                                </li>
                                                <li>
                                                    <a href="#"><i className="fab fa-instagram"/></a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="rbt-separator d-none d-xl-block"/>
                                        <div className="header-info">
                                            <ul className="rbt-dropdown-menu switcher-language">
                                                <li className="has-child-menu">
                                                    <a href="#">
                                                        <Image
                                                            width={25}
                                                            height={16}
                                                            className="left-image"
                                                            src="/images/icons/en-us.png"
                                                            alt="Language Images"
                                                        />
                                                        <span className="menu-item">English</span>
                                                        <i className="right-icon feather-chevron-down"/>
                                                    </a>
                                                    <ul className="sub-menu">
                                                        <li>
                                                            <a href="#">
                                                                <Image
                                                                    width={35}
                                                                    height={23}
                                                                    className="left-image"
                                                                    src="/images/icons/fr.png"
                                                                    alt="Language Images"
                                                                />
                                                                <span className="menu-item">Français</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <Image
                                                                    width={35}
                                                                    height={23}
                                                                    className="left-image"
                                                                    src="/images/icons/de.png"
                                                                    alt="Language Images"
                                                                />
                                                                <span className="menu-item">Deutsch</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="header-info">
                                            <ul className="rbt-dropdown-menu currency-menu">
                                                <li className="has-child-menu">
                                                    <a href="#">
                                                        <span className="menu-item">USD</span>
                                                        <i className="right-icon feather-chevron-down"/>
                                                    </a>
                                                    <ul className="sub-menu hover-reverse">
                                                        <li>
                                                            <a href="#">
                                                                <span className="menu-item">EUR</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <span className="menu-item">GBP</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="header-info">
                                <div className="top-bar-expended d-block d-lg-none">
                                    <button className="topbar-expend-button rbt-round-btn">
                                        <i className="feather-plus"/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {headerTopVariant === 2 && (
                <div className="rbt-header-campaign rbt-header-campaign-1 rbt-header-top-news bg-image1">
                    <div className="wrapper">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="inner justify-content-center">
                                        <div className="content">
                                            <span
                                                className="rbt-badge variation-02 bg-color-primary color-white radius-round me-2">
                                                Limited Time Offer
                                            </span>
                                            <span className="news-text color-white-off">
                                                <Image
                                                    width={36}
                                                    height={36}
                                                    src="/images/icons/hand-emojji.svg"
                                                    alt="Hand Emojji Images"/> Intro price. Get Histudy for Big Sale -95% off.
                                            </span>
                                        </div>
                                        <div className="right-button">
                                            <a className="rbt-btn-link color-white"
                                               href="https://themeforest.net/checkout/from_item/42846507?license=regular">
                                                <span>Purchase Now <i className="feather-arrow-right"/></span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="icon-close position-right">
                        <button className="rbt-round-btn btn-white-off bgsection-activation"
                                onClick={() => deactivateTopNav('.rbt-header-top-news')}>
                            <i className="feather-x"/>
                        </button>
                    </div>
                </div>
            )}

            {headerTopVariant === 3 && (
                <div
                    className="rbt-header-top rbt-header-top-1 variation-height-60 header-space-betwween bg-color-transparent top-expended-activation">
                    <div className="container">
                        <div className="top-expended-wrapper">
                            <div className="top-expended-inner rbt-header-sec align-items-center">
                                <div className="rbt-header-sec-col rbt-header-left">
                                    <div className="rbt-header-content">
                                        <div className="header-info d-none d-lg-block">
                                            <ul className="rbt-information-list">
                                                <li>
                                                    <a href="#">
                                                        <i className="feather-help-circle"/>
                                                        Have any Question?
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="mailto:hello@example.com">
                                                        <i className="feather-mail"/>example@gmail.com
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="feather-phone"/>+1-202-555-0174
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="rbt-header-sec-col rbt-header-right mt_md--10 mt_sm--10">
                                    <div className="rbt-header-content justify-content-start justify-content-lg-end">
                                        <div className="header-info">
                                            <ul className="rbt-dropdown-menu switcher-language">
                                                <li className="has-child-menu">
                                                    <a href="#">
                                                        <Image
                                                            width={25}
                                                            height={16}
                                                            className="left-image"
                                                            src="/images/icons/en-us.png"
                                                            alt="Language Images"
                                                        />
                                                        &nbsp;
                                                        <span className="menu-item">English</span>&nbsp;
                                                        <i className="right-icon feather-chevron-down"/>
                                                    </a>
                                                    <ul className="sub-menu">
                                                        <li>
                                                            <a href="#">
                                                                <Image
                                                                    width={35}
                                                                    height={23}
                                                                    className="left-image"
                                                                    src="/images/icons/fr.png"
                                                                    alt="Language Images"
                                                                />
                                                                <span className="menu-item">Français</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <Image
                                                                    width={35}
                                                                    height={23}
                                                                    className="left-image"
                                                                    src="/images/icons/de.png"
                                                                    alt="Language Images"
                                                                />
                                                                <span className="menu-item">Deutsch</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="header-info">
                                            <ul className="rbt-dropdown-menu currency-menu">
                                                <li className="has-child-menu">
                                                    <a href="#">
                                                        <span className="menu-item">USD</span>&nbsp;
                                                        <i className="right-icon feather-chevron-down"/>
                                                    </a>
                                                    <ul className="sub-menu hover-reverse">
                                                        <li>
                                                            <a href="#">
                                                                <span className="menu-item">EUR</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <span className="menu-item">GBP</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="header-info">
                                <div className="top-bar-expended d-block d-lg-none">
                                    <button className="topbar-expend-button rbt-round-btn">
                                        <i className="color-body feather-plus"/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {(headerTopVariant === 4 || headerTopVariant === 8) && (
                <div
                    className="rbt-header-top rbt-header-top-1 variation-height-50 header-space-betwween bg-color-white border-top-bar-primary-color rbt-border-bottom d-none d-xl-block">
                    <div className="container-fluid">
                        <div className="rbt-header-sec align-items-center ">
                            <div className="rbt-header-sec-col rbt-header-left">
                                <div className="rbt-header-content">
                                    <div className="header-info">
                                        <ul className="rbt-information-list">
                                            <li>
                                                <a href="#"><i className="feather-phone"/>+1-202-555-0174</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="rbt-separator"></div>
                                    <div className="header-info">
                                        <ul className="social-share-transparent">
                                            <li>
                                                <a href="#"><i className="fab fa-facebook-f"/></a>
                                            </li>
                                            <li>
                                                <a href="#"><i className="fab fa-twitter"/></a>
                                            </li>
                                            <li>
                                                <a href="#"><i className="fab fa-linkedin-in"/></a>
                                            </li>
                                            <li>
                                                <a href="#"><i className="fab fa-instagram"/></a>
                                            </li>
                                            <li>
                                                <a href="#"><i className="fab fa-skype"/></a>
                                            </li>
                                            <li>
                                                <a href="#"><i className="fab fa-youtube"/></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="rbt-header-sec-col rbt-header-right">
                                <div className="rbt-header-content">
                                    <div className="header-info">
                                        <ul className="rbt-secondary-menu">
                                            <li><a href="my-account.html">My Account</a></li>
                                            <li><a href="#">FAQ</a></li>
                                            <li><a href="contact.html">Contact Us</a></li>
                                            <li><a href="privacy-policy.html">Privacy Policy</a></li>
                                            <li><a href="#">Terms & Condition</a></li>
                                        </ul>
                                    </div>
                                    <div className="rbt-separator"></div>
                                    <div className="header-info">
                                        <div className="header-right-btn d-flex">
                                            <a className="rbt-btn rbt-switch-btn btn-gradient btn-xs" href="#">
                                                <span data-text="Join Now">Join Now</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {headerTopVariant === 6 && (
                <div
                    className="rbt-header-top rbt-header-top-2 bg-not-transparent bg-gradient-7 color-white pt--15 pb--15 d-none d-xl-block">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-4 col-md-5 col-12 d-none d-md-block">
                                <div className="fancy-menu-text fancu-menu-start">
                                    <p><a href="#">Get the most advanced template
                                        <i className="feather-chevron-right"/>
                                    </a></p>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-7 col-12">
                                <div className="fancy-menu-address fancu-menu-end">
                                    <div className="address-content">
                                        <p>
                                            <i className="feather-map-pin"/>
                                            <span>Alabama, USA</span>
                                        </p>
                                        <p>
                                            <i className="feather-phone"/>
                                            <span><a href="#">+1-202-555-0174</a></span>
                                        </p>
                                    </div>
                                    <div className="social-icon-wrapper">
                                        <ul className="social-icon social-default icon-naked">
                                            <li><a href="https://www.facebook.com/">
                                                <i className="feather-facebook"/>
                                            </a>
                                            </li>
                                            <li><a href="https://www.twitter.com">
                                                <i className="feather-twitter"/>
                                            </a>
                                            </li>
                                            <li><a href="https://www.instagram.com/">
                                                <i className="feather-instagram"/>
                                            </a>
                                            </li>
                                            <li><a href="https://www.linkdin.com/">
                                                <i className="feather-linkedin"/>
                                            </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default HeaderTop