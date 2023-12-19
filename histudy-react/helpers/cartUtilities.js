const toggleShoppingCart = (e) => {
    e.preventDefault();
    const body = document.querySelector('body'),
        cart = document.querySelector('.rbt-cart-side-menu');

    body.classList.toggle('cart-sidenav-menu-active');
    cart.classList.toggle('side-menu-active');
}

module.exports = {
    toggleShoppingCart
};
