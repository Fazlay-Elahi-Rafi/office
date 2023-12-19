import CounterWidget from "../widgets/CounterWidget";

const CounterOne = () => {
    return (
        <>
            <div className="rbt-counterup-area bg-color-extra2 rbt-section-gapBottom default-callto-action-overlap">
                <div className="container">
                    <div className="row mb--60">
                        <div className="col-lg-12">
                            <div className="section-title text-center">
                                <span className="subtitle bg-primary-opacity">Why Choose Us</span>
                                <h2 className="title">Creating A Community Of <br/> Life Long Learners.</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row g-5 hanger-line">
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                            <CounterWidget
                                icon="/images/icons/counter-01.png"
                                title="Learners & counting"
                                value={500}
                            />
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6 col-12 mt--60 mt_md--30 mt_sm--30 mt_mobile--60">
                            <CounterWidget
                                icon="/images/icons/counter-02.png"
                                title="Courses & Video"
                                value={800}
                            />
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6 col-12 mt_md--60 mt_sm--60">
                            <CounterWidget
                                icon="/images/icons/counter-03.png"
                                title="Certified Students"
                                value={1000}
                            />
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6 col-12 mt--60 mt_md--30 mt_sm--30 mt_mobile--60">
                            <CounterWidget
                                icon="/images/icons/counter-04.png"
                                title="Registered Enrolls"
                                value={100}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CounterOne;
