import Link from "next/link";

const StudentDashboardSidebar = () => {
    return (
        <>
            <div
                className="rbt-default-sidebar sticky-top rbt-shadow-box rbt-gradient-border">
                <div className="inner">
                    <div className="content-item-content">
                        <div className="rbt-default-sidebar-wrapper">
                            <div className="section-title mb--20">
                                <h6 className="rbt-title-style-2">Welcome, Jone Due</h6>
                            </div>
                            <nav className="mainmenu-nav">
                                <ul className="dashboard-mainmenu rbt-default-sidebar-list">
                                    <li>
                                        <Link href="/student-dashboard">
                                            <i className="feather-home"/><span>Dashboard</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/student-dashboard/profile">
                                            <i className="feather-user"/><span>My Profile</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/student-dashboard/enrolled-course">
                                            <i className="feather-book-open"/><span>Enrolled Courses</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/student-dashboard/wishlist">
                                            <i className="feather-bookmark"/><span>Wishlist</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/student-dashboard/reviews">
                                            <i className="feather-star"/><span>Reviews</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/student-dashboard/quiz-attempts">
                                            <i className="feather-help-circle"/><span>My Quiz Attempts</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/student-dashboard/order-history">
                                            <i className="feather-shopping-bag"/><span>Order History</span>
                                        </Link>
                                    </li>
                                </ul>
                            </nav>

                            <div className="section-title mt--40 mb--20">
                                <h6 className="rbt-title-style-2">User</h6>
                            </div>

                            <nav className="mainmenu-nav">
                                <ul className="dashboard-mainmenu rbt-default-sidebar-list">
                                    <li>
                                        <Link href="/student-dashboard/settings">
                                            <i className="feather-settings"/><span>Settings</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <i className="feather-log-out"/><span>Logout</span>
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StudentDashboardSidebar