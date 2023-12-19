import {toggleShoppingCart} from '../../../helpers/cartUtilities'

const CartTriggerButton = () => {


    return (
        <>
            <a className="rbt-cart-sidenav-activation rbt-round-btn"
               href="#" onClick={(e) => toggleShoppingCart(e)}>
                <i className="feather-shopping-cart"/>
                <span className="rbt-cart-count">4</span>
            </a>
        </>
    )
}

export default CartTriggerButton;