import {useRef} from 'react'

const SearchTriggerButton = () => {
    const searchButton = useRef(null);
    const openSearchDropdown = (event) => {
        const html = document.querySelector('html'),
            searchDropdown = document.querySelector('.rbt-search-dropdown');

        html.classList.toggle('side-nav-opened');
        searchDropdown.classList.toggle('active');
        searchButton.current.classList.toggle('open');
    }

    return (
        <>
            <a ref={searchButton} className="search-trigger-active rbt-round-btn"
               href="#" onClick={openSearchDropdown}>
                <i className="feather-search"/>
            </a>
        </>
    )
}

export default SearchTriggerButton;