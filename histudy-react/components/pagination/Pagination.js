const Pagination = ({totalPages, pageNumber, handleClick}) => {
    const pages = [...Array(totalPages).keys()].map((num) => num + 1);
    const handlePreviousClick = () => {
        handleClick(pageNumber - 1)
    }

    const handleNextClick = () => {
        handleClick(pageNumber + 1)
    }

    return (
        <nav>
            <div className="nav-links">
                <ul className="rbt-pagination">
                    <li className={pageNumber === 1 ? 'disabled' : ''}>
                        <a href="#"
                           aria-label="Previous"
                           onClick={() => handlePreviousClick()}>
                            <i className="feather-chevron-left"/>
                        </a>
                    </li>
                    {pages.map((num) => (
                        <li key={num} className={pageNumber === num ? 'active' : ''}>
                            <a href="#" onClick={() => handleClick(num)}>
                                {num}
                            </a>
                        </li>
                    ))}
                    <li className={pageNumber === totalPages ? 'disabled' : ''}>
                        <a href="#"
                           aria-label="Next"
                           onClick={() => handleNextClick()}>
                            <i className="feather-chevron-right"/>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Pagination;
