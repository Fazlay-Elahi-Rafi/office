import {toggleShoppingCart} from '../../../helpers/cartUtilities'
import Image from "next/image";

const Sidenav = () => {
    return (
        <>
            <div className="rbt-cart-side-menu">
                <div className="inner-wrapper">
                    <div className="inner-top">
                        <div className="content">
                            <div className="title">
                                <h4 className="title">Your shopping cart</h4>
                            </div>
                            <div className="rbt-btn-close" id="btn_sideNavClose">
                                <button className="minicart-close-button rbt-round-btn"
                                        onClick={(e) => toggleShoppingCart(e)}>
                                    <i className="feather-x"/>
                                </button>
                            </div>
                        </div>
                    </div>
                    <nav className="side-nav w-100">
                        <ul className="rbt-minicart-wrapper">
                            <li className="minicart-item">
                                <div className="thumbnail">
                                    <a href="components/layouts/partials#">
                                        <Image width={1000} height={1200} src="/images/product/1.jpg" alt="Product Images"/>
                                    </a>
                                </div>
                                <div className="product-content">
                                    <h6 className="title"><a href="/single-product">Miracle Morning</a></h6>

                                    <span className="quantity">1 * <span className="price">$22</span></span>
                                </div>
                                <div className="close-btn">
                                    <button className="rbt-round-btn"><i className="feather-x"/></button>
                                </div>
                            </li>

                            <li className="minicart-item">
                                <div className="thumbnail">
                                    <a href="components/layouts/partials#">
                                        <Image width={1000} height={1200} src="/images/product/7.jpg" alt="Product Images"/>
                                    </a>
                                </div>
                                <div className="product-content">
                                    <h6 className="title"><a href="single-product.html">Happy Strong</a></h6>

                                    <span className="quantity">1 * <span className="price">$30</span></span>
                                </div>
                                <div className="close-btn">
                                    <button className="rbt-round-btn"><i className="feather-x"/></button>
                                </div>
                            </li>

                            <li className="minicart-item">
                                <div className="thumbnail">
                                    <a href="components/layouts/partials#">
                                        <Image width={1000} height={1200} src="/images/product/3.jpg" alt="Product Images"/>
                                    </a>
                                </div>
                                <div className="product-content">
                                    <h6 className="title"><a href="single-product.html">Rich Dad Poor Dad</a></h6>

                                    <span className="quantity">1 * <span className="price">$50</span></span>
                                </div>
                                <div className="close-btn">
                                    <button className="rbt-round-btn"><i className="feather-x"/></button>
                                </div>
                            </li>

                            <li className="minicart-item">
                                <div className="thumbnail">
                                    <a href="components/layouts/partials#">
                                        <Image width={1000} height={1200} src="/images/product/4.jpg" alt="Product Images"/>
                                    </a>
                                </div>
                                <div className="product-content">
                                    <h6 className="title"><a href="single-product.html">Momentum Theorem</a></h6>

                                    <span className="quantity">1 * <span className="price">$50</span></span>
                                </div>
                                <div className="close-btn">
                                    <button className="rbt-round-btn"><i className="feather-x"/></button>
                                </div>
                            </li>
                        </ul>
                    </nav>

                    <div className="rbt-minicart-footer">
                        <hr className="mb--0"/>
                        <div className="rbt-cart-subttotal">
                            <p className="subtotal"><strong>Subtotal:</strong></p>
                            <p className="price">$121</p>
                        </div>
                        <hr className="mb--0"/>
                        <div className="rbt-minicart-bottom mt--20">
                            <div className="view-cart-btn">
                                <a className="rbt-btn btn-border icon-hover w-100 text-center" href="components/layouts/partials#">
                                    <span className="btn-text">View Cart</span>
                                    <span className="btn-icon"><i className="feather-arrow-right"/></span>
                                </a>
                            </div>
                            <div className="checkout-btn mt--20">
                                <a className="rbt-btn btn-gradient icon-hover w-100 text-center" href="components/layouts/partials#">
                                    <span className="btn-text">Checkout</span>
                                    <span className="btn-icon"><i className="feather-arrow-right"/></span>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <a className="close_side_menu" href="#" onClick={(e) => toggleShoppingCart(e)}/>
        </>
    )
}

export default Sidenav;
