import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
    const {
        categories = [],
        setCurrentCategory,
        currentPage,
        handlePageChange
    } = props;

    useEffect(() => {
        document.title = capitalizeFirstLetter(currentPage);
    }, [currentPage]);

    function converterClickHandler(category) {
        handlePageChange(capitalizeFirstLetter(category.name));
        setCurrentCategory(category);
    }

    return (
        <header className="flex-row px-1">
            <nav>
                <ul className="flex-row">
                    <li className={`mx-2`}>
                        <h2 onClick={() => handlePageChange("About")}>Joseph Flanagan</h2>
                    </li>
                    <li className={`mx-2 ${currentPage === "About" && `navActive`}`}>
                        <span onClick={() => handlePageChange("About")} className={currentPage === "About" ? 'nav-link active' : 'nav-link'}>About me</span>
                    </li>
                    {categories.map((category) => (
                        <li
                            className={`mx-1 ${currentPage === capitalizeFirstLetter(category.name) && `navActive`}`}
                            key={category.name}
                        >
                            <span
                                onClick={() => converterClickHandler(category)}
                                className={currentPage === capitalizeFirstLetter(category.name) ? 'nav-link active' : 'nav-link'}
                            >
                                {capitalizeFirstLetter(category.name)}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Nav;