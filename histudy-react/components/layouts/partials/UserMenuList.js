import Link from "next/link";
import Image from "next/image";

const UserMenuList = () => {
    return (
        <>
            <div className="rbt-user-menu-list-wrapper">
                <div className="inner">
                    <div className="rbt-admin-profile">
                        <div className="admin-thumbnail">
                            <Image
                                width={300}
                                height={300}
                                src="/images/team/avatar.jpg"
                                alt="User Images"
                            />
                        </div>
                        <div className="admin-info">
                            <span className="name">Nipa Bali</span>
                            <Link className="rbt-btn-link color-primary"
                               href="#">
                                View Profile
                            </Link>
                        </div>
                    </div>
                    <ul className="user-list-wrapper">
                        <li>
                            <Link href="#">
                                <i className="feather-home"/>
                                <span>My Dashboard</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <i className="feather-bookmark"/>
                                <span>Bookmark</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <i className="feather-shopping-bag"></i>
                                <span>Enrolled Courses</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <i className="feather-heart"></i>
                                <span>Wishlist</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <i className="feather-star"></i>
                                <span>Reviews</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <i className="feather-list"></i>
                                <span>My Quiz Attempts</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <i className="feather-clock"/>
                                <span>Order History</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <i className="feather-message-square"/>
                                <span>Question & Answer</span>
                            </Link>
                        </li>
                    </ul>
                    <hr className="mt--10 mb--10"/>
                    <ul className="user-list-wrapper">
                        <li>
                            <Link href="#">
                                <i className="feather-book-open"/>
                                <span>Getting Started</span>
                            </Link>
                        </li>
                    </ul>
                    <hr className="mt--10 mb--10"/>
                    <ul className="user-list-wrapper">
                        <li>
                            <Link href="/instructor-settings">
                                <i className="feather-settings"/>
                                <span>Settings</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <i className="feather-log-out"/>
                                <span>Logout</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default UserMenuList;