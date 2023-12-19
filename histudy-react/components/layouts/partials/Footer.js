import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
    return (
        <>
            <div className="rbt-separator-mid">
                <div className="container">
                    <hr className="rbt-separator m-0"/>
                </div>
            </div>

            <footer className="rbt-footer footer-style-1">
                <div className="footer-top">
                    <div className="container">
                        <div className="row row--15 mt_dec--30">
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt--30">
                                <div className="footer-widget">
                                    <div className="logo">
                                        <Link href="/home-page-01">
                                            <Image
                                                width={250}
                                                height={82}
                                                src="/images/logo/logo.png"
                                                alt="Edu-cause"
                                            />
                                        </Link>
                                    </div>
                                    <p className="description mt--20">
                                        We’re always in search for talented
                                        and motivated people. Don’t be shy introduce yourself!
                                    </p>
                                    <div className="contact-btn mt--30">
                                        <a className="rbt-btn hover-icon-reverse btn-border-gradient radius-round"
                                           href="components/layouts/partials#">
                                            <div className="icon-reverse-wrapper">
                                                <span className="btn-text">Contact With Us</span>
                                                <span className="btn-icon">
                                                    <i className="feather-arrow-right"/>
                                                </span>
                                                <span className="btn-icon">
                                                    <i className="feather-arrow-right"/>
                                                </span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="offset-lg-1 col-lg-2 col-md-6 col-sm-6 col-12 mt--30">
                                <div className="footer-widget">
                                    <h5 className="ft-title">Useful Links</h5>
                                    <ul className="ft-link">
                                        <li>
                                            <Link href="#">Get the app</Link>
                                        </li>
                                        <li>
                                            <Link href="#">News & articles</Link>
                                        </li>
                                        <li>
                                            <Link href="#">Your account</Link>
                                        </li>
                                        <li>
                                            <Link href="#">Trems of service</Link>
                                        </li>
                                        <li>
                                            <Link href="#">FAQ</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-2 col-md-6 col-sm-6 col-12 mt--30">
                                <div className="footer-widget">
                                    <h5 className="ft-title">Our Company</h5>
                                    <ul className="ft-link">
                                        <li>
                                            <Link href="#">About us</Link>
                                        </li>
                                        <li>
                                            <Link href="#">Careers</Link>
                                        </li>
                                        <li>
                                            <Link href="#">How it work</Link>
                                        </li>
                                        <li>
                                            <Link href="#">Blog</Link>
                                        </li>
                                        <li>
                                            <Link href="#">Events</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 col-sm-6 col-12 mt--30">
                                <div className="footer-widget">
                                    <h5 className="ft-title">Get Contact</h5>
                                    <ul className="ft-link">
                                        <li>
                                            <span>Phone:</span> <a href="components/layouts/partials#">(406)
                                            555-0120</a>
                                        </li>
                                        <li>
                                            <span>E-mail:</span> <a href="mailto:hr@example.com">rainbow@example.com</a>
                                        </li>
                                        <li>
                                            <span>Location:</span> Dhaka, Bangladesh
                                        </li>
                                    </ul>
                                    <ul className="social-icon social-default icon-naked justify-content-start mt--20">
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
                </div>
            </footer>

            <div className="rbt-separator-mid">
                <div className="container">
                    <hr className="rbt-separator m-0"/>
                </div>
            </div>

            <div className="copyright-area copyright-style-1 ptb--20">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-12">
                            <p className="rbt-link-hover text-center text-lg-start">
                                Copyright © 2022 <a href="https://themeforest.net/user/rbt-themes">Rainbow-Themes.</a> All Rights Reserved
                            </p>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-12">
                            <ul className="copyright-link rbt-link-hover justify-content-center justify-content-lg-end mt_sm--10 mt_md--10">
                                <li>
                                    <Link href="#">Terms of service</Link>
                                </li>
                                <li>
                                    <Link href="#">Privacy policy</Link>
                                </li>
                                <li>
                                    <Link href="#">Payment</Link>
                                </li>
                                <li>
                                    <Link href="#">Security</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;
