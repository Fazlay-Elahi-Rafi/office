import HeaderTop from './HeaderTop'
import Logo from "./Logo"
import HeaderCategoryMenu from './HeaderCategoryMenu'
import MainmenuNav from './MainmenuNav'
import SearchDropdown from './SearchDropdown'
import SearchTriggerButton from './SearchTriggerButton'
import CartTriggerButton from './CartTriggerButton'
import Sidenav from './Sidenav'
import MobileMenu from "./MobileMenu";
import MobileMenuTriggerButton from "./MobileMenuTriggerButton";
import UserMenuList from "./UserMenuList";
import Image from "next/image";
import {toggleShoppingCart} from '../../../helpers/cartUtilities';
import {useEffect} from "react";

const Header = ({headerSetting}) => {
    const setHeaderClass = () => {
        if (headerSetting.headerVariant === 1) return 'rbt-header rbt-header-10'
        else if (headerSetting.headerVariant === 2) return 'rbt-header rbt-header-9'
        else if (headerSetting.headerVariant === 3) return 'rbt-header rbt-header-8 rbt-transparent-header'
        else if (headerSetting.headerVariant === 4) return 'rbt-header rbt-header-4'
        else if (headerSetting.headerVariant === 5) return 'rbt-header rbt-header-default'
        else if (headerSetting.headerVariant === 6) return 'rbt-header rbt-header-7 rbt-transparent-header'
        else if (headerSetting.headerVariant === 7) return 'rbt-header rbt-header-10 rbt-transparent-header'
        else if (headerSetting.headerVariant === 8) return 'rbt-header rbt-header-10'
        else if (headerSetting.headerVariant === 9) return 'rbt-header rbt-header-10'
        else if (headerSetting.headerVariant === 10) return 'rbt-header rbt-header-10'
        else if (headerSetting.headerVariant === 11) return 'rbt-header rbt-header-10'
        else if (headerSetting.headerVariant === 12) return 'rbt-header rbt-header-10'
        else if (headerSetting.headerVariant === 13) return 'rbt-header rbt-header-10'
        else if (headerSetting.headerVariant === 14) return 'rbt-header rbt-header-10'
        else if (headerSetting.headerVariant === 15) return 'rbt-header rbt-header-10'
    }

    const setHeaderWrapperClass = () => {
        if (headerSetting.headerVariant === 1) return 'rbt-header-wrapper header-space-betwween header-sticky'
        else if (headerSetting.headerVariant === 2) return 'rbt-header-wrapper header-not-transparent header-sticky'
        else if (headerSetting.headerVariant === 3) return 'rbt-header-wrapper header-sticky'
        else if (headerSetting.headerVariant === 4) return 'rbt-header-wrapper header-space-betwween bg-color-white header-sticky'
        else if (headerSetting.headerVariant === 5) return 'rbt-header-wrapper bg-color-white header-sticky'
        else if (headerSetting.headerVariant === 6) return 'rbt-header-wrapper bg-color-white color-white-variation header-sticky rbt-border-bottom-light'
        else if (headerSetting.headerVariant === 7) return 'rbt-header-wrapper header-not-transparent header-sticky'
        else if (headerSetting.headerVariant === 8) return 'rbt-header-wrapper header-space-betwween header-sticky'
        else if (headerSetting.headerVariant === 9) return 'rbt-header-wrapper header-space-betwween header-sticky'
        else if (headerSetting.headerVariant === 10) return 'rbt-header-wrapper header-space-betwween header-sticky'
        else if (headerSetting.headerVariant === 11) return 'rbt-header-wrapper header-space-betwween header-sticky'
        else if (headerSetting.headerVariant === 12) return 'rbt-header-wrapper header-space-betwween header-sticky'
        else if (headerSetting.headerVariant === 13) return 'rbt-header-wrapper header-space-betwween header-sticky'
        else if (headerSetting.headerVariant === 14) return 'rbt-header-wrapper header-space-betwween header-sticky'
        else if (headerSetting.headerVariant === 15) return 'rbt-header-wrapper header-space-betwween header-sticky'
    }

    const setContainerClass = () => {
        if (headerSetting.headerVariant === 1) return 'container-fluid'
        else if (headerSetting.headerVariant === 2) return 'container'
        else if (headerSetting.headerVariant === 3) return 'container'
        else if (headerSetting.headerVariant === 4) return 'container-fluid'
        else if (headerSetting.headerVariant === 5) return 'container-fluid'
        else if (headerSetting.headerVariant === 6) return 'container-fluid'
        else if (headerSetting.headerVariant === 7) return 'container-fluid'
        else if (headerSetting.headerVariant === 8) return 'container-fluid'
        else if (headerSetting.headerVariant === 9) return 'container-fluid'
        else if (headerSetting.headerVariant === 10) return 'container-fluid'
        else if (headerSetting.headerVariant === 11) return 'container-fluid'
        else if (headerSetting.headerVariant === 12) return 'container-fluid'
        else if (headerSetting.headerVariant === 13) return 'container-fluid'
        else if (headerSetting.headerVariant === 14) return 'container-fluid'
        else if (headerSetting.headerVariant === 15) return 'container-fluid'
    }

    const setStickyHeader = () => {
        const body = document.querySelector('body');
        window.addEventListener('scroll', () => {
            if (body.classList.contains('rbt-header-sticky')) {
                let stickyPlaceHolder = document.querySelector('.rbt-sticky-placeholder'),
                    headerContainer = document.querySelector('.rbt-header-wrapper'),
                    headerContainerH = headerContainer.clientHeight,
                    topHeaderH = document.querySelector('.rbt-header-top')?.clientHeight || 0,
                    targetScroll = topHeaderH + 200;
                if (window.scrollY > targetScroll) {
                    headerContainer.classList.add('rbt-sticky');
                    stickyPlaceHolder.style.height = `${headerContainerH}px`;
                } else {
                    headerContainer.classList.remove('rbt-sticky');
                    stickyPlaceHolder.style.height = 0;
                }
            }
        });
    }

    useEffect(() => {
        setStickyHeader()
    }, []);

    return (
        <>
            <header className={setHeaderClass()}>
                <div className="rbt-sticky-placeholder"/>

                <HeaderTop headerTopVariant={headerSetting.headerVariant}/>

                {headerSetting.headerVariant === 2 && (
                    <div
                        className="rbt-header-middle position-relative rbt-header-mid-1 bg-color-white rbt-border-bottom">
                        <div className="container">
                            <div className="rbt-header-sec align-items-center">
                                <div className="rbt-header-sec-col rbt-header-left">
                                    <div className="rbt-header-content">
                                        <div className="header-info">
                                            <ul className="rbt-dropdown-menu switcher-language">
                                                <li className="has-child-menu">
                                                    <a href="#">
                                                        <Image
                                                            width={25}
                                                            height={16}
                                                            className="left-image me-2"
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
                                <div className="rbt-header-sec-col rbt-header-center d-none d-md-block">
                                    <div className="rbt-header-content">
                                        <div className="header-info">
                                            <div className="rbt-search-field">
                                                <div className="search-field">
                                                    <input type="text" placeholder="Search Course"/>
                                                    <button className="rbt-round-btn serach-btn" type="submit">
                                                        <i className="feather-search"/>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="rbt-header-sec-col rbt-header-right">
                                    <div className="rbt-header-content">
                                        <div className="header-info">
                                            <ul className="quick-access">
                                                <li>
                                                    <a className="d-none d-xl-block rbt-cart-sidenav-activation"
                                                       href="#" onClick={(e) => toggleShoppingCart(e)}>
                                                        <i className="feather-shopping-cart"/>Cart
                                                    </a>
                                                    <a className="d-block d-xl-none rbt-cart-sidenav-activation"
                                                       href="#" onClick={(e) => toggleShoppingCart(e)}>
                                                        <i className="feather-shopping-cart"/>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="header-info">
                                            <ul className="quick-access">
                                                <li className="account-access rbt-user-wrapper right-align-dropdown d-none d-xl-block">
                                                    <a href="#"><i className="feather-user"/>Admin</a>
                                                    <UserMenuList/>
                                                </li>
                                                <li className="access-icon rbt-user-wrapper right-align-dropdown d-block d-xl-none">
                                                    <a className="rbt-round-btn" href="#">
                                                        <i className="feather-user"/>
                                                    </a>
                                                    <UserMenuList/>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                <div className={setHeaderWrapperClass()}>
                    <div className={setContainerClass()}>
                        <div className="mainbar-row rbt-navigation-center align-items-center">
                            <div className="header-left rbt-header-content">
                                <div className="header-info">
                                    <Logo/>
                                </div>
                                {(headerSetting.headerVariant !== 3 && headerSetting.headerVariant !== 4 && headerSetting.headerVariant !== 5 && headerSetting.headerVariant !== 6 && headerSetting.headerVariant !== 7 && headerSetting.headerVariant !== 8) && (
                                    <div className="header-info">
                                        <HeaderCategoryMenu/>
                                    </div>
                                )}
                            </div>

                            <div className="rbt-main-navigation d-none d-xl-block">
                                <nav className="mainmenu-nav">
                                    <MainmenuNav/>
                                </nav>
                            </div>

                            <div className="header-right">
                                {(headerSetting.headerVariant === 1 || headerSetting.headerVariant === 7) && (
                                    <>
                                        <ul className="quick-access">
                                            <li className="access-icon">
                                                <SearchTriggerButton/>
                                            </li>
                                            <li className="access-icon rbt-mini-cart">
                                                <CartTriggerButton/>
                                            </li>
                                            <li className="account-access rbt-user-wrapper d-none d-xl-block">
                                                <a href="#">
                                                    <i className="feather-user"/>Admin
                                                </a>
                                                <UserMenuList/>
                                            </li>
                                            <li className="access-icon rbt-user-wrapper d-block d-xl-none">
                                                <a className="rbt-round-btn" href="#">
                                                    <i className="feather-user"/>
                                                </a>
                                                <UserMenuList/>
                                            </li>
                                        </ul>
                                        <div className="rbt-btn-wrapper d-none d-xl-block">
                                            <a className="rbt-btn rbt-marquee-btn marquee-auto btn-border-gradient radius-round btn-sm hover-transform-none"
                                               href="#">
                                                <span data-text="Enroll Now">Enroll Now</span>
                                            </a>
                                        </div>
                                    </>
                                )}

                                {(headerSetting.headerVariant === 4 || headerSetting.headerVariant === 8) && (
                                    <>
                                        <ul className="quick-access">
                                            <li className="access-icon rbt-user-wrapper right-align-dropdown">
                                                <a href="#">
                                                    <i className="feather-user"/>
                                                </a>
                                                <UserMenuList/>
                                            </li>
                                            <li className="access-icon rbt-user-wrapper d-block d-xl-none">
                                                <a className="rbt-round-btn" href="#">
                                                    <i className="feather-user"/>
                                                </a>
                                                <UserMenuList/>
                                            </li>
                                            <li className="access-icon rbt-mini-cart">
                                                <CartTriggerButton/>
                                            </li>
                                            <li className="access-icon">
                                                <SearchTriggerButton/>
                                            </li>
                                        </ul>
                                    </>
                                )}

                                {(headerSetting.headerVariant === 2 || headerSetting.headerVariant === 3 || headerSetting.headerVariant === 5 || headerSetting.headerVariant === 6) && (
                                    <>
                                        <div className="rbt-btn-wrapper d-none d-xl-block">
                                            <a className="rbt-btn rbt-switch-btn btn-gradient btn-sm hover-transform-none"
                                               href="#">
                                                <span data-text="Join Now">Join Now</span>
                                            </a>
                                        </div>
                                    </>
                                )}

                                <div className="mobile-menu-bar d-block d-xl-none">
                                    <MobileMenuTriggerButton/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <SearchDropdown/>
                </div>
                <div className="rbt-offcanvas-side-menu rbt-category-sidemenu">
                    <div className="inner-wrapper">
                        <div className="inner-top">
                            <div className="inner-title">
                                <h4 className="title">Course Category</h4>
                            </div>
                            <div className="rbt-btn-close">
                                <button className="rbt-close-offcanvas rbt-round-btn"><i className="feather-x"/>
                                </button>
                            </div>
                        </div>
                        <nav className="side-nav w-100">
                            <ul className="rbt-vertical-nav-list-wrapper vertical-nav-menu">
                                <li className="vertical-nav-item">
                                    <a href="#">Course School</a>
                                    <div className="vartical-nav-content-menu-wrapper">
                                        <div className="vartical-nav-content-menu">
                                            <h3 className="rbt-short-title">Course Title</h3>
                                            <ul className="rbt-vertical-nav-list-wrapper">
                                                <li><a href="#">Web Design</a></li>
                                                <li><a href="#">Art</a></li>
                                                <li><a href="#">Figma</a></li>
                                                <li><a href="#">Adobe</a></li>
                                            </ul>
                                        </div>
                                        <div className="vartical-nav-content-menu">
                                            <h3 className="rbt-short-title">Course Title</h3>
                                            <ul className="rbt-vertical-nav-list-wrapper">
                                                <li><a href="#">Photo</a></li>
                                                <li><a href="#">English</a></li>
                                                <li><a href="#">Math</a></li>
                                                <li><a href="#">Read</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li className="vertical-nav-item">
                                    <a href="#">Online School</a>
                                    <div className="vartical-nav-content-menu-wrapper">
                                        <div className="vartical-nav-content-menu">
                                            <h3 className="rbt-short-title">Course Title</h3>
                                            <ul className="rbt-vertical-nav-list-wrapper">
                                                <li><a href="#">Photo</a></li>
                                                <li><a href="#">English</a></li>
                                                <li><a href="#">Math</a></li>
                                                <li><a href="#">Read</a></li>
                                            </ul>
                                        </div>
                                        <div className="vartical-nav-content-menu">
                                            <h3 className="rbt-short-title">Course Title</h3>
                                            <ul className="rbt-vertical-nav-list-wrapper">
                                                <li><a href="#">Web Design</a></li>
                                                <li><a href="#">Art</a></li>
                                                <li><a href="#">Figma</a></li>
                                                <li><a href="#">Adobe</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li className="vertical-nav-item">
                                    <a href="#">kindergarten</a>
                                    <div className="vartical-nav-content-menu-wrapper">
                                        <div className="vartical-nav-content-menu">
                                            <h3 className="rbt-short-title">Course Title</h3>
                                            <ul className="rbt-vertical-nav-list-wrapper">
                                                <li><a href="#">Photo</a></li>
                                                <li><a href="#">English</a></li>
                                                <li><a href="#">Math</a></li>
                                                <li><a href="#">Read</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li className="vertical-nav-item">
                                    <a href="#">Classic LMS</a>
                                    <div className="vartical-nav-content-menu-wrapper">
                                        <div className="vartical-nav-content-menu">
                                            <h3 className="rbt-short-title">Course Title</h3>
                                            <ul className="rbt-vertical-nav-list-wrapper">
                                                <li><a href="#">Web Design</a></li>
                                                <li><a href="#">Art</a></li>
                                                <li><a href="#">Figma</a></li>
                                                <li><a href="#">Adobe</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <div className="read-more-btn">
                                <div className="rbt-btn-wrapper mt--20">
                                    <a className="rbt-btn btn-border-gradient radius-round btn-sm hover-transform-none w-100 justify-content-center text-center"
                                       href="#">
                                        <span>Learn More</span>
                                    </a>
                                </div>
                            </div>
                        </nav>
                        <div className="rbt-offcanvas-footer"/>
                    </div>
                </div>
                <a className="rbt-close_side_menu" href="#"/>
            </header>

            <MobileMenu/>

            <Sidenav/>
        </>
    )
}

export default Header;
