import Head from 'next/head'
import {TypeAnimation} from 'react-type-animation'
import Layout from '../components/layouts/Layout'
import BreadCrumb from '../components/global/BreadCrumb'
import StyleGuideData from '../data/elements/styleGuide.json'
import RotatingTitle from "../components/animated-headings/RotatingTitle";
import TypingTitle from "../components/animated-headings/TypingTitle";
import ClippingTitle from "../components/animated-headings/ClippingTitle";
import ZoomingTitle from "../components/animated-headings/ZoomingTitle";
import Image from "next/image";

const StyleGuide = () => {
    return (
        <>
            <Head>
                <title>Style Guide - Online Courses & Education Bootstrap5 Template</title>
            </Head>

            <Layout>
                <BreadCrumb
                    title="Style Guide"
                    root="Home"
                    rootUrl="/home-page-01"
                />

                <div className="rbt-style-guide-area rbt-section-gap">
                    <div className="container">
                        <div className="row g-5">
                            <div className="col-lg-3">
                                <div className="rbt-default-sidebar sticky-top rbt-shadow-box rbt-gradient-border">
                                    <div className="inner">
                                        <div className="content-item-content">
                                            <div className="rbt-widget-details">
                                                <nav className="onepagenav">
                                                    <ul className="mainmenu rbt-course-details-list-wrapper">
                                                        <li className="current"><a href="#colorPalette"><span>1. Color Palette</span></a>
                                                        </li>
                                                        <li><a href="#gradient"><span>2. Color Gradient</span></a></li>
                                                        <li><a href="#typography"><span>3. Typography</span></a></li>
                                                        <li><a href="#formElements"><span>4. Form Elements</span></a>
                                                        </li>
                                                        <li><a href="#pagination"><span>5. Pagination</span></a></li>
                                                        <li><a href="#tooltips"><span>6. Tooltips</span></a></li>
                                                        <li><a href="#avatars"><span>7. Avatars</span></a></li>
                                                        <li><a href="#animatedHeading"><span>8. Animated Heading</span></a>
                                                        </li>
                                                    </ul>
                                                </nav>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <div id="colorPalette"
                                     className="rbt-elements-area bg-color-white rbt-shadow-box mb--60">
                                    <div className="wrapper">
                                        <div className="section-title">
                                            <h4 className="rbt-title-style-3">Color Palette</h4>
                                        </div>
                                        <div className="row g-5">
                                            {StyleGuideData.colorPalette?.map((color, colorIndex) => (
                                                <div className="col-lg-3" key={`color-${colorIndex}`}>
                                                    <div className="color-box-inner">
                                                        <div className={`color-box ${color.class} radius-10`}/>
                                                        <div className="content mt--10">
                                                            <span className="rbt-title-style-2">{color.value}</span>
                                                            <h6 className="title mb--0">{color.name}</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div id="gradient"
                                     className="rbt-elements-color bg-color-white rbt-shadow-box mb--60">
                                    <div className="wrapper">
                                        <div className="section-title">
                                            <h4 className="rbt-title-style-3">Color Gradient</h4>
                                        </div>
                                        <div className="row g-5">
                                            {StyleGuideData.colorGradient?.map((gradient, gradientIndex) => (
                                                <div className="col-lg-3" key={`color-${gradientIndex}`}>
                                                    <div className="color-box-inner">
                                                        <div className={`color-box ${gradient.class} radius-10`}/>
                                                        <div className="content mt--10">
                                                            <span className="rbt-title-style-2">{gradient.value}</span>
                                                            <h6 className="title mb--0">{gradient.name}</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div id="typography"
                                     className="rbt-elements-area bg-color-white rbt-shadow-box mb--60">
                                    <div className="wrapper">
                                        <div className="section-title">
                                            <h4 className="rbt-title-style-3">Typography</h4>
                                        </div>
                                        <div className="row g-5">
                                            <div className="col-lg-6">
                                                <h1>h1. Heading One</h1>
                                                <h2>h2. Heading Two</h2>
                                                <h3>h3. Heading Three</h3>
                                                <h4>h4. Heading Four</h4>
                                                <h5>h5. Heading Five</h5>
                                                <h6>h6. Heading Six</h6>
                                            </div>
                                            <div className="col-lg-6">
                                                <p className="b1">
                                                    B1- Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                                    Similique non ipsam reiciendis.
                                                </p>
                                                <p className="b2">
                                                    B2- Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                                    Similique non ipsam reiciendis.
                                                </p>
                                                <p className="b3">
                                                    B3- Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                                    Similique non ipsam reiciendis.
                                                </p>
                                                <p>Befault- Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                                    Similique non
                                                    ipsam reiciendis.</p>
                                            </div>
                                        </div>
                                        <div className="row mt--40">
                                            <div className="section-title">
                                                <h4 className="rbt-title-style-3">Heading Style</h4>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="section-title text-center">
                                                    <h2 className="title">Heading Style One.</h2>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 mt--60">
                                                <div className="section-title text-center">
                                                    <h2 className="rbt-title-style-2">Heading Style Two.</h2>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 mt--60">
                                                <div className="section-title text-center">
                                                    <h2 className="rbt-title-style-3">Heading Style Three.</h2>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 mt--60">
                                                <div className="section-title text-center">
                                                    <h2 className="rbt-short-title">Heading Short Title.</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div id="formElements"
                                     className="rbt-elements-area bg-color-white rbt-shadow-box mb--60">
                                    <div className="wrapper">
                                        <div className="section-title">
                                            <h4 className="rbt-title-style-3">Form Elements</h4>
                                        </div>
                                        <div className="row g-5">

                                            <div className="col-lg-6">
                                                <h5>Input</h5>
                                                <div className="form-group">
                                                    <input name="con_name" type="text"/>
                                                    <label>Name</label>
                                                    <span className="focus-border"></span>
                                                </div>
                                            </div>

                                            <div className="col-lg-6">
                                                <h5>Password</h5>
                                                <div className="form-group">
                                                    <input name="con_password" type="password"/>
                                                    <label>Password</label>
                                                    <span className="focus-border"></span>
                                                </div>
                                            </div>

                                            <div className="col-lg-12">
                                                <h5>Textarea</h5>
                                                <div className="form-group">
                                                    <textarea></textarea>
                                                    <label>Textarea</label>
                                                    <span className="focus-border"></span>
                                                </div>
                                            </div>

                                            <div className="col-lg-6">
                                                <h5>Checkbox</h5>
                                                <p className="rbt-checkbox-wrapper mb--5">
                                                    <input id="rbt-checkbox-1" name="rbt-checkbox-1" type="checkbox"
                                                           value="yes"/>
                                                    <label htmlFor="rbt-checkbox-1">Option One</label>
                                                </p>
                                                <p className="rbt-checkbox-wrapper">
                                                    <input id="rbt-checkbox-2" name="rbt-checkbox-2" type="checkbox"
                                                           value="yes"/>
                                                    <label htmlFor="rbt-checkbox-2">Option Two</label>
                                                </p>
                                            </div>

                                            <div className="col-lg-6">
                                                <h5>Radio</h5>
                                                <div className="rbt-form-check">
                                                    <input className="form-check-input" type="radio" name="rbt-radio"
                                                           id="rbt-radio-1"/>
                                                    <label className="form-check-label" htmlFor="rbt-radio-1"> Option
                                                        One</label>
                                                </div>
                                                <div className="rbt-form-check">
                                                    <input className="form-check-input" type="radio" name="rbt-radio"
                                                           id="rbt-radio-2"/>
                                                    <label className="form-check-label" htmlFor="rbt-radio-2"> Option
                                                        Two</label>
                                                </div>
                                            </div>

                                            <div className="col-lg-6">
                                                <h5>Disabled Checkbox</h5>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value=""
                                                           id="flexCheckDisabled" disabled/>
                                                    <label className="form-check-label" htmlFor="flexCheckDisabled">
                                                        Disabled checkbox
                                                    </label>
                                                </div>

                                            </div>

                                            <div className="col-lg-6">
                                                <h5>Disabled Radio</h5>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio"
                                                           name="flexRadioDisabled" id="flexRadioDisabled" disabled/>
                                                    <label className="form-check-label" htmlFor="flexRadioDisabled">
                                                        Disabled radio
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio"
                                                           name="flexRadioDisabled" id="flexRadioCheckedDisabled"
                                                           checked disabled/>
                                                    <label className="form-check-label"
                                                           htmlFor="flexRadioCheckedDisabled">
                                                        Disabled checked radio
                                                    </label>
                                                </div>
                                            </div>

                                            <div className="col-lg-6">
                                                <h5>Select</h5>
                                                <div className="rbt-modern-select bg-transparent height-45">
                                                    <select className="w-100">
                                                        <option>Barisal</option>
                                                        <option>Dhaka</option>
                                                        <option>Khulna</option>
                                                        <option>Comilla</option>
                                                        <option>Chittagong</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="col-lg-6">
                                                <h5>Select</h5>
                                                <div className="rbt-modern-select bg-transparent height-45 w-100">
                                                    <select className="w-100" data-live-search="true"
                                                            title="Select Author" multiple data-size="7"
                                                            data-actions-box="true"
                                                            data-selected-text-format="count > 2">
                                                        <option data-subtext="Experts">Janin Afsana</option>
                                                        <option data-subtext="Experts">Joe Biden</option>
                                                        <option data-subtext="Experts">Fatima Asrafy</option>
                                                        <option data-subtext="Experts">Aysha Baby</option>
                                                        <option data-subtext="Experts">Mohamad Ali</option>
                                                        <option data-subtext="Experts">Jone Li</option>
                                                        <option data-subtext="Experts">Alberd Roce</option>
                                                        <option data-subtext="Experts">Zeliski Noor</option>
                                                    </select>
                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                </div>

                                <div id="pagination"
                                     className="rbt-elements-area bg-color-white rbt-shadow-box mb--60">
                                    <div className="wrapper">
                                        <div className="section-title">
                                            <h4 className="rbt-title-style-3">Pagination</h4>
                                        </div>
                                        <div className="row g-5">
                                            <div className="col-lg-12">
                                                <nav>
                                                    <ul className="rbt-pagination justify-content-start">
                                                        <li>
                                                            <a href="#" aria-label="Previous">
                                                                <i className="feather-chevron-left"/>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">1</a>
                                                        </li>
                                                        <li className="active">
                                                            <a href="#">2</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">3</a>
                                                        </li>
                                                        <li>
                                                            <a href="#" aria-label="Next">
                                                                <i className="feather-chevron-right"/>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </nav>
                                            </div>
                                            <div className="col-lg-12">
                                                <nav>
                                                    <ul className="rbt-pagination justify-content-center">
                                                        <li>
                                                            <a href="#" aria-label="Previous">
                                                                <i className="feather-chevron-left"/>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">1</a>
                                                        </li>
                                                        <li className="active">
                                                            <a href="#">2</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">3</a>
                                                        </li>
                                                        <li>
                                                            <a href="#" aria-label="Next">
                                                                <i className="feather-chevron-right"/>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </nav>
                                            </div>
                                            <div className="col-lg-12">
                                                <nav>
                                                    <ul className="rbt-pagination justify-content-end">
                                                        <li>
                                                            <a href="#" aria-label="Previous">
                                                                <i className="feather-chevron-left"/>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">1</a>
                                                        </li>
                                                        <li className="active">
                                                            <a href="#">2</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">3</a>
                                                        </li>
                                                        <li>
                                                            <a href="#" aria-label="Next">
                                                                <i className="feather-chevron-right"/>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </nav>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div id="tooltips"
                                     className="rbt-elements-area bg-color-white rbt-shadow-box mb--60">
                                    <div className="wrapper">
                                        <div className="section-title">
                                            <h4 className="rbt-title-style-3">Tooltips</h4>
                                        </div>
                                        <div className="row g-5">
                                            <div className="col-lg-6">
                                                <div className="profile-share">
                                                    <a href="#"
                                                       className="avatar"
                                                       data-tooltip="Mark Jordan"
                                                       tabIndex="0">
                                                        <Image width={494} height={494} src="/images/testimonial/client-04.png" alt="education"/>
                                                    </a>
                                                    <a href="#"
                                                       className="avatar"
                                                       data-tooltip="Mark"
                                                       tabIndex="0">
                                                        <Image width={494} height={494} src="/images/testimonial/client-05.png" alt="education"/>
                                                    </a>
                                                    <a href="#"
                                                       className="avatar"
                                                       data-tooltip="Jordan"
                                                       tabIndex="0">
                                                        <Image width={494} height={494} src="/images/testimonial/client-06.png" alt="education"/>
                                                    </a>
                                                    <div className="more-author-text">
                                                        <h5 className="total-join-students">
                                                            Join Over 3000+ Students
                                                        </h5>
                                                        <p className="subtitle">Have a new ideas every week.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div id="avatars"
                                     className="rbt-elements-area bg-color-white rbt-shadow-box mb--60">
                                    <div className="wrapper">
                                        <div className="section-title">
                                            <h4 className="rbt-title-style-3">Avatars</h4>
                                        </div>
                                        <div className="row g-5 align-items-center">
                                            <div className="col-lg-2">
                                                <div className="rbt-avatars m-auto size-lg">
                                                    <Image width={494} height={494} src="/images/testimonial/testimonial-1.jpg"
                                                         alt="Author Images"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-2">
                                                <div className="rbt-avatars m-auto">
                                                    <Image width={494} height={494} src="/images/testimonial/testimonial-2.jpg"
                                                         alt="Author Images"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-2">
                                                <div className="rbt-avatars m-auto size-sm">
                                                    <Image width={494} height={494} src="/images/testimonial/testimonial-3.jpg"
                                                         alt="Author Images"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div id="animatedHeading"
                                     className="rbt-elements-area bg-color-white rbt-shadow-box mb--60">
                                    <div className="wrapper">
                                        <div className="section-title">
                                            <h4 className="rbt-title-style-3">Animated Heading</h4>
                                        </div>
                                        <div className="row g-5">
                                            <div className="col-lg-12">
                                                <ClippingTitle
                                                    title="Clip Animated"
                                                    words={['Clip One.', 'Clip Two.', 'Clip Three.']}
                                                />
                                                <RotatingTitle
                                                    title="Rotate Animated"
                                                    words={['Rotate One.', 'Rotate Two.', 'Rotate Three.']}
                                                />
                                                <TypingTitle
                                                    title="Type Animated"
                                                    words={['Type One.', 1000, 'Type Two.', 1000, 'Type Three.', 1000]}
                                                />
                                                <h3 className="title">
                                                    Loading Animated&nbsp;
                                                    <span className="header-caption">
                                                        <span className="cd-headline loading-bar">
                                                            <span className="cd-words-wrapper">
                                                                <b className="is-visible theme-gradient">Loading One.</b>
                                                                <b className="is-hidden theme-gradient">Loading Two.</b>
                                                                <b className="is-hidden theme-gradient">Loading Three.</b>
                                                            </span>
                                                        </span>
                                                    </span>
                                                </h3>
                                                <ZoomingTitle
                                                    title="Zoom Animated"
                                                    words={['Zoom One.', 'Zoom Two.', 'Zoom Three.']}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default StyleGuide;
