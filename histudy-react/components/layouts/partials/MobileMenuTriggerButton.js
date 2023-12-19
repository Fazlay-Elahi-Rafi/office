import {useRef} from "react";

const MobileMenuTriggerButton = () => {
    const menuTriggerButton = useRef(null);

    const openMobileMenu = () => {
        const mobileMenu = document.querySelector('.popup-mobile-menu');
        mobileMenu.classList.toggle('active');
    }

    return (
        <>
            <div className="hamberger">
                <button ref={menuTriggerButton}
                        className="hamberger-button rbt-round-btn"
                        onClick={openMobileMenu}>
                    <i className="feather-menu"/>
                </button>
            </div>
        </>
    )
}

export default MobileMenuTriggerButton;