const NewsletterTwo = () => {
    return (
        <>
            <div className="rbt-newsletter-area bg-color-white rbt-section-gapBottom pt--60">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title text-center">
                                <h2 className="title">
                                    Want to get special offers <br/> and Course updates?
                                </h2>
                                <form action="#" className="newsletter-form-1 mt--50 radius-round">
                                    <input className="rbt-border" type="email" placeholder="Enter Your E-Email"/>
                                    <button type="submit"
                                            className="rbt-btn btn-md btn-gradient hover-icon-reverse radius-round">
                                    <span className="icon-reverse-wrapper">
                                        <span className="btn-text">Subscribe</span>
                                        <span className="btn-icon"><i className="feather-arrow-right"></i></span>
                                        <span className="btn-icon"><i className="feather-arrow-right"></i></span>
                                    </span>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewsletterTwo;