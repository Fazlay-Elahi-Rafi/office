import MainmenuNavData from "../../../data/mainMenu.json";
import Link from "next/link";
import Image from "next/image";

const MainmenuNav = ({ isMobileMenu = false }) => {
  return (
    <>
      <ul className="mainmenu">
        {MainmenuNavData.mainmenuNavData?.map((menuItem, menuIndex) => (
          <li
            className={`${menuItem.hasMegamenu ? "with-megamenu" : ""} ${
              menuItem.hasMenuChild ? "has-menu-child-item" : ""
            } ${menuItem.hasPositionStatic ? "position-static" : ""} ${
              menuItem.hasDropdown ? "has-dropdown" : ""
            }`}
            key={`menu-item-${menuIndex}`}
          >
            <a href="#">
              {menuItem.menuTitle} <i className="feather-chevron-down" />
            </a>

            {menuItem.menuType === "home" && (
              <div
                className={`rbt-megamenu menu-skin-dark ${
                  isMobileMenu ? "collapse" : ""
                }`}
              >
                <div className="wrapper">
                  <div className="row row--15 home-plesentation-wrapper single-dropdown-menu-presentation">
                    {menuItem.menuItems?.map((item, itemIndex) => (
                      <div
                        className={`col-lg-12 col-xl-2 col-xxl-2 col-md-12 col-sm-12 col-12 single-mega-item ${
                          item.title.includes("Coming Soon")
                            ? "coming-soon"
                            : ""
                        }`}
                        key={`mega-menu-item-${itemIndex}`}
                      >
                        <div className="demo-single">
                          <div className="inner">
                            <div className="thumbnail">
                              <Link href={item.url}>
                                <Image
                                  width={454}
                                  height={332}
                                  src={item.demoImage}
                                  alt="Demo Images"
                                />
                              </Link>
                            </div>
                            <div className="content">
                              <h4 className="title">
                                <Link href={item.url}>
                                  {item.title}
                                  <span className="btn-icon ms-2">
                                    <i className="feather-arrow-right" />
                                  </span>
                                </Link>
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="load-demo-btn text-center">
                    <a className="rbt-btn-link color-white" href="#">
                      Scroll to view more
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-arrow-down-up"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            )}

            {menuItem.menuType === "grid-item-2" && (
              <div
                className={`rbt-megamenu grid-item-2 ${
                  isMobileMenu ? "collapse" : ""
                }`}
              >
                <div className="wrapper">
                  {menuItem.submenuBanner && (
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="mega-top-banner">
                          <div className="content">
                            <h4 className="title">
                              {menuItem.submenuBanner.title}
                            </h4>
                            <p className="description">
                              {menuItem.submenuBanner.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="row row--15">
                    <div className="col-lg-12 col-xl-6 col-xxl-6 single-mega-item">
                      <h3 className="rbt-short-title">Course Layout</h3>
                      <ul className="mega-menu-item">
                        {menuItem.menuItems?.map(
                          (item, itemIndex) =>
                            itemIndex < 6 && (
                              <li key={`mega-menu-item-${itemIndex}`}>
                                <Link href={item.url}>{item.title}</Link>
                              </li>
                            )
                        )}
                      </ul>
                    </div>
                    <div className="col-lg-12 col-xl-6 col-xxl-6 single-mega-item">
                      <h3 className="rbt-short-title">Course Layout</h3>
                      <ul className="mega-menu-item">
                        {menuItem.menuItems?.map(
                          (item, itemIndex) =>
                            itemIndex > 5 && (
                              <li key={`mega-menu-item-${itemIndex}`}>
                                <Link href={item.url}>{item.title}</Link>
                              </li>
                            )
                        )}
                      </ul>
                    </div>
                  </div>
                  {menuItem.submenuFooterItems.length && (
                    <div className="row">
                      <div className="col-lg-12">
                        <ul className="nav-quick-access">
                          {menuItem.submenuFooterItems?.map(
                            (submenuFooterItem, submenuFooterItemIndex) => (
                              <li
                                key={`submenuFooterItem${submenuFooterItemIndex}`}
                              >
                                <Link href={submenuFooterItem.url}>
                                  <i className="feather-folder-minus" />
                                  {submenuFooterItem.title}
                                </Link>
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {menuItem.menuType === "default-dropdown" && (
              <ul className={`submenu ${isMobileMenu ? "collapse" : ""}`}>
                {menuItem.menuItems?.map((item, itemIndex) => (
                  <li
                    className="has-dropdown"
                    key={`dropdown-menu-item-${itemIndex}`}
                  >
                    <a href="#">{item.title}</a>
                    {item.hasSubmenu && (
                      <ul
                        className={`submenu ${isMobileMenu ? "collapse" : ""}`}
                      >
                        {item.submenuItems?.map(
                          (submenuItem, submenuItemIndex) => (
                            <li key={`submenu-item-${submenuItemIndex}`}>
                              <Link href={submenuItem.url}>
                                {submenuItem.title}
                              </Link>
                            </li>
                          )
                        )}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            )}

            {menuItem.menuType === "grid-item-4" && (
              <div
                className={`rbt-megamenu grid-item-4 ${
                  isMobileMenu ? "collapse" : ""
                }`}
              >
                <div className="wrapper">
                  <div className="row row--15">
                    <div className="col-lg-12 col-xl-3 col-xxl-3 single-mega-item">
                      <h3 className="rbt-short-title">Get Started</h3>
                      <ul className="mega-menu-item">
                        {menuItem.gridMenuItems1?.map((item, itemIndex) => (
                          <li key={`grid-menu-item-${itemIndex}`}>
                            <Link href={item.url}>{item.title}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="col-lg-12 col-xl-3 col-xxl-3 single-mega-item">
                      <h3 className="rbt-short-title">Get Started</h3>
                      <ul className="mega-menu-item">
                        {menuItem.gridMenuItems2?.map((item, itemIndex) => (
                          <li key={`grid-menu-item-${itemIndex}`}>
                            <Link href={item.url}>{item.title}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="col-lg-12 col-xl-3 col-xxl-3 single-mega-item">
                      <h3 className="rbt-short-title">Shop Pages</h3>
                      <ul className="mega-menu-item">
                        {menuItem.gridMenuItems3?.map((item, itemIndex) => (
                          <li key={`grid-menu-item-${itemIndex}`}>
                            <Link href={item.url}>
                              {item.title}
                              {item.badgeText && (
                                <span className="rbt-badge-card">
                                  {item.badgeText}
                                </span>
                              )}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="col-lg-12 col-xl-3 col-xxl-3 single-mega-item">
                      <div className="mega-category-item">
                        {menuItem.gridMenuItems4?.map((item, itemIndex) => (
                          <div
                            className="nav-category-item"
                            key={`grid-menu-item-${itemIndex}`}
                          >
                            <div className="thumbnail">
                              {item.image && (
                                <div className="image">
                                  <Image
                                    width={454}
                                    height={332}
                                    src={item.image}
                                    alt={item.title}
                                  />
                                </div>
                              )}
                              <Link href={item.url}>
                                <span>{item.title}</span>
                                <i className="feather-chevron-right" />
                              </Link>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {menuItem.menuType === "grid-item-3" && !menuItem.hasSideBanner && (
              <div
                className={`rbt-megamenu grid-item-3 ${
                  isMobileMenu ? "collapse" : ""
                }`}
              >
                <div className="wrapper">
                  <div className="row row--15 single-dropdown-menu-presentation">
                    <div className="col-lg-4 col-xxl-4 single-mega-item">
                      <ul className="mega-menu-item">
                        {menuItem.menuItems?.map(
                          (item, itemIndex) =>
                            itemIndex < 8 && (
                              <li key={`mega-menu-item-${itemIndex}`}>
                                <Link href={item.url}>
                                  {item.title}
                                  {item.badgeText && (
                                    <span className="rbt-badge-card">
                                      {item.badgeText}
                                    </span>
                                  )}
                                </Link>
                              </li>
                            )
                        )}
                      </ul>
                    </div>
                    <div className="col-lg-4 col-xxl-4 single-mega-item">
                      <ul className="mega-menu-item">
                        {menuItem.menuItems?.map(
                          (item, itemIndex) =>
                            itemIndex > 7 &&
                            itemIndex < 16 && (
                              <li key={`mega-menu-item-${itemIndex}`}>
                                <Link href={item.url}>
                                  {item.title}
                                  {item.badgeText && (
                                    <span className="rbt-badge-card">
                                      {item.badgeText}
                                    </span>
                                  )}
                                </Link>
                              </li>
                            )
                        )}
                      </ul>
                    </div>
                    <div className="col-lg-4 col-xxl-4 single-mega-item">
                      <ul className="mega-menu-item">
                        {menuItem.menuItems?.map(
                          (item, itemIndex) =>
                            itemIndex > 15 && (
                              <li key={`mega-menu-item-${itemIndex}`}>
                                <Link href={item.url}>
                                  {item.title}
                                  {item.badgeText && (
                                    <span className="rbt-badge-card">
                                      {item.badgeText}
                                    </span>
                                  )}
                                </Link>
                              </li>
                            )
                        )}
                      </ul>
                    </div>
                  </div>
                  {menuItem.submenuFooterText && (
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="btn-wrapper">
                          <a
                            className="rbt-btn btn-gradient hover-icon-reverse square btn-xl w-100 text-center mt--30 hover-transform-none"
                            href="#"
                          >
                            <span className="icon-reverse-wrapper">
                              <span className="btn-text">
                                {menuItem.submenuFooterText}
                              </span>
                              <span className="btn-icon">
                                <i className="feather-arrow-right" />
                              </span>
                              <span className="btn-icon">
                                <i className="feather-arrow-right" />
                              </span>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {menuItem.menuType === "grid-item-3" && menuItem.hasSideBanner && (
              <div
                className={`rbt-megamenu grid-item-3 ${
                  isMobileMenu ? "collapse" : ""
                }`}
              >
                <div className="wrapper">
                  <div className="row row--15">
                    <div className="col-lg-12 col-xl-4 col-xxl-4 single-mega-item">
                      <h3 className="rbt-short-title">Blog Styles</h3>
                      <ul className="mega-menu-item">
                        {menuItem.menuItems?.map(
                          (item, itemIndex) =>
                            itemIndex < 7 && (
                              <li key={`mega-menu-item-${itemIndex}`}>
                                <Link href={item.url}>
                                  {item.title}
                                  {item.badgeText && (
                                    <span className="rbt-badge-card">
                                      {item.badgeText}
                                    </span>
                                  )}
                                </Link>
                              </li>
                            )
                        )}
                      </ul>
                    </div>
                    <div className="col-lg-12 col-xl-4 col-xxl-4 single-mega-item">
                      <h3 className="rbt-short-title">Get Started</h3>
                      <ul className="mega-menu-item">
                        {menuItem.menuItems?.map(
                          (item, itemIndex) =>
                            itemIndex > 6 &&
                            itemIndex < 14 && (
                              <li key={`mega-menu-item-${itemIndex}`}>
                                <Link href={item.url}>
                                  {item.title}
                                  {item.badgeText && (
                                    <span className="rbt-badge-card">
                                      {item.badgeText}
                                    </span>
                                  )}
                                </Link>
                              </li>
                            )
                        )}
                      </ul>
                    </div>
                    <div className="col-lg-12 col-xl-4 col-xxl-4 single-mega-item">
                      <div className="rbt-ads-wrapper">
                        <a className="d-block" href="#">
                          <Image
                            width={500}
                            height={650}
                            src={menuItem.bannerImage}
                            alt="Education Images"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default MainmenuNav;
