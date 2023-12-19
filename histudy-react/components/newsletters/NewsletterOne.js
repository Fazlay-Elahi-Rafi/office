import CounterWidget from "../widgets/CounterWidget";
import SectionTitle from "../global/SectionTitle";

const NewsletterOne = () => {
    return (
        <>
            <div className="rbt-newsletter-area newsletter-style-2 bg-color-primary rbt-section-gap">
                <div className="container">
                    <div className="row row--15 align-items-center">
                        <div className="col-lg-12">
                            <div className="inner text-center">
                                <SectionTitle
                                    title="<strong>Subscribe</strong> Our Newsletter"
                                    titleClass="color-white"
                                    subtitle="Get Latest Histudy Update"
                                    subtitleColor="bg-white-opacity"
                                    description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam explicabo sit est eos earum reprehenderit inventore nam autem corrupti rerum!"
                                    descriptionClass="description color-white mt--20"
                                    alignment="center"
                                />
                                <form action="components/newsletters#" className="newsletter-form-1 mt--40">
                                    <input type="email" placeholder="Enter Your E-Email"/>
                                    <button type="submit"
                                            className="rbt-btn btn-md btn-gradient hover-icon-reverse">
                                        <span className="icon-reverse-wrapper">
                                            <span className="btn-text">Subscribe</span>
                                            <span className="btn-icon"><i className="feather-arrow-right"/></span>
                                            <span className="btn-icon"><i className="feather-arrow-right"/></span>
                                        </span>
                                    </button>
                                </form>
                                <span className="note-text color-white mt--20">No ads, No trails, No commitments</span>
                                <div className="row row--15 mt--50">
                                    <div className="col-lg-3 offset-lg-3 col-md-6 col-sm-6 single-counter">
                                        <CounterWidget
                                            counterStyle="three"
                                            title="Successfully Trained"
                                            subtitle="Learners &amp; counting"
                                            value={500}
                                        />
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6 single-counter mt_mobile--30">
                                        <CounterWidget
                                            counterStyle="three"
                                            title="Successfully Trained"
                                            subtitle="Learners &amp; counting"
                                            value={100}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewsletterOne;
