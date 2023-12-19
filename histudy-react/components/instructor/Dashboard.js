import CounterWidget from "../widgets/CounterWidget";

const Dashboard = () => {
    return (
        <>
            <div className="rbt-dashboard-content bg-color-white rbt-shadow-box mb--60">
                <div className="content">
                    <div className="section-title">
                        <h4 className="rbt-title-style-3">Dashboard</h4>
                    </div>
                    <div className="row g-5">
                        <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                            <CounterWidget
                                counterStyle="two"
                                styleClass="bg-primary-opacity"
                                iconClass="bg-primary-opacity"
                                numberClass="color-primary"
                                icon="feather-book-open"
                                title="Enrolled Courses"
                                value={30}
                            />
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                            <CounterWidget
                                counterStyle="two"
                                styleClass="bg-secondary-opacity"
                                iconClass="bg-secondary-opacity"
                                numberClass="color-secondary"
                                icon="feather-monitor"
                                title="ACTIVE COURSES"
                                value={10}
                            />
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                            <CounterWidget
                                counterStyle="two"
                                styleClass="bg-violet-opacity"
                                iconClass="bg-violet-opacity"
                                numberClass="color-violet"
                                icon="feather-award"
                                title="Completed Courses"
                                value={7}
                            />
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                            <CounterWidget
                                counterStyle="two"
                                styleClass="bg-pink-opacity"
                                iconClass="bg-pink-opacity"
                                numberClass="color-pink"
                                icon="feather-users"
                                title="Total Students"
                                value={160}
                            />
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                            <CounterWidget
                                counterStyle="two"
                                styleClass="bg-coral-opacity"
                                iconClass="bg-coral-opacity"
                                numberClass="color-coral"
                                icon="feather-gift"
                                title="Total Courses"
                                value={20}
                            />
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                            <CounterWidget
                                counterStyle="two"
                                styleClass="bg-warning-opacity"
                                iconClass="bg-warning-opacity"
                                numberClass="color-warning"
                                icon="feather-dollar-sign"
                                title="Total Earnings"
                                value={25000}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="rbt-dashboard-content bg-color-white rbt-shadow-box mb--60">
                <div className="content">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <h4 className="rbt-title-style-3">My Courses</h4>
                            </div>
                        </div>
                    </div>
                    <div className="row gy-5">
                        <div className="col-lg-12">
                            <div className="rbt-dashboard-table table-responsive">
                                <table className="rbt-table table table-borderless">
                                    <thead>
                                    <tr>
                                        <th>Course Name</th>
                                        <th>Enrolled</th>
                                        <th>Rating</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <th><a href="#">Accounting</a></th>
                                        <td>50</td>
                                        <td>
                                            <div className="rating">
                                                <i className="fas fa-star"/>
                                                <i className="fas fa-star"/>
                                                <i className="fas fa-star"/>
                                                <i className="fas fa-star"/>
                                                <i className="fas fa-star"/>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th><a href="#">Marketing</a></th>
                                        <td>40</td>
                                        <td>
                                            <div className="rating">
                                                <i className="fas fa-star"/>
                                                <i className="fas fa-star"/>
                                                <i className="fas fa-star"/>
                                                <i className="fas fa-star"/>
                                                <i className="fas fa-star"/>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th><a href="#">Web Design</a></th>
                                        <td>75</td>
                                        <td>
                                            <div className="rating">
                                                <i className="fas fa-star"/>
                                                <i className="fas fa-star"/>
                                                <i className="fas fa-star"/>
                                                <i className="fas fa-star"/>
                                                <i className="fas fa-star"/>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th><a href="#">Graphic</a></th>
                                        <td>20</td>
                                        <td>
                                            <div className="rating">
                                                <i className="fas fa-star"/>
                                                <i className="fas fa-star"/>
                                                <i className="off fas fa-star"/>
                                                <i className="off fas fa-star"/>
                                                <i className="off fas fa-star"/>
                                            </div>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="load-more-btn text-center">
                                <a className="rbt-btn-link" href="#">
                                    Browse All Course<i className="feather-arrow-right"/>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Dashboard