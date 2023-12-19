import CounterWidget from '../widgets/CounterWidget';

const CounterTwo = () => {
    return (
        <>
            <div className="rbt-counterup-area bg_image bg_image_fixed bg_image--20 ptb--170 bg-black-overlay"
                 data-black-overlay="2">
                <div className="conter-style-2">
                    <div className="container">
                        <div className="row g-5">
                            <div className="col-lg-3 col-md-6 col-sm-6 col-12 single-counter">
                                <CounterWidget
                                    title="Learners & counting"
                                    counterStyle="four"
                                    value={500}
                                />
                            </div>

                            <div className="col-lg-3 col-md-6 col-sm-6 col-12 single-counter">
                                <CounterWidget
                                    title="Courses & Video"
                                    counterStyle="four"
                                    value={800}
                                />
                            </div>

                            <div className="col-lg-3 col-md-6 col-sm-6 col-12 single-counter">
                                <CounterWidget
                                    title="Certified Students"
                                    counterStyle="four"
                                    value={1000}
                                />
                            </div>

                            <div className="col-lg-3 col-md-6 col-sm-6 col-12 single-counter">
                                <CounterWidget
                                    title="Certified Students"
                                    counterStyle="four"
                                    value={100}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CounterTwo;