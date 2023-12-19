import Link from 'next/link'
import {useEffect, useRef} from 'react'
import MainmenuNav from './MainmenuNav'
import Image from "next/image";

const MobileMenu = () => {
    const mobileMenu = useRef(null);

    const initializeMobileMenu = () => {
        const {Collapse} = require('bootstrap');
        const megaMenuLinks = document.querySelectorAll('.popup-mobile-menu .has-menu-child-item > a');
        const multiLevelMenuLinks = document.querySelectorAll('.popup-mobile-menu .has-menu-child-item > .submenu > li > a');
        const submenuLinks = [...megaMenuLinks, ...multiLevelMenuLinks];

        submenuLinks.forEach(menuLink => {
            const megaMenu = new Collapse(menuLink.nextElementSibling, {
                toggle: false
            });

            menuLink.addEventListener('click', () => {
                menuLink.classList.toggle('open');
                megaMenu.toggle();
            })
        });
    }

    const closeMobileMenu = () => {
        mobileMenu.current.classList.remove('active');
    }

    useEffect(() => {
        // initializeMobileMenu();
    })

    return (
        <>
            <div ref={mobileMenu} className="popup-mobile-menu" onClick={closeMobileMenu}>
                <div className="inner-wrapper" onClick={(e) => e.stopPropagation()}>
                    <div className="inner-top">
                        <div className="content">
                            <div className="logo">
                                <Link href="/">
                                    <Image
                                        width={250}
                                        height={82}
                                        src="/images/logo/logo.png"
                                        alt="Education Logo Images"
                                    />
                                </Link>
                            </div>
                            <div className="rbt-btn-close">
                                <button className="close-button rbt-round-btn"
                                        onClick={closeMobileMenu}>
                                    <i className="feather-x"/>
                                </button>
                            </div>
                        </div>
                        <p className="description">Histudy is a education website template. You can customize all.</p>
                        <ul className="navbar-top-left rbt-information-list justify-content-start">
                            <li>
                                <a href="mailto:hello@example.com">
                                    <i className="feather-mail"/>example@gmail.com
                                </a>
                            </li>
                            <li>
                                <a href="#"><i className="feather-phone"/>(302) 555-0107</a>
                            </li>
                        </ul>
                    </div>

                    <nav className="mainmenu-nav">
                        <MainmenuNav isMobileMenu={true}/>
                    </nav>

                    <div className="mobile-menu-bottom">
                        <div className="rbt-btn-wrapper mb--20">
                            <a className="rbt-btn btn-border-gradient radius-round btn-sm hover-transform-none w-100 justify-content-center text-center"
                               href="#">
                                <span>Enroll Now</span>
                            </a>
                        </div>

                        <div className="social-share-wrapper">
                            <span className="rbt-short-title d-block">Find With Us</span>
                            <ul className="social-icon social-default transparent-with-border justify-content-start mt--20">
                                <li>
                                    <a href="https://www.facebook.com/">
                                        <i className="feather-facebook"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.twitter.com">
                                        <i className="feather-twitter"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/">
                                        <i className="feather-instagram"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkdin.com/">
                                        <i className="feather-linkedin"/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MobileMenu;