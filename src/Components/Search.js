import React from "react";

import { MdSearch } from 'react-icons/md';

const Search = () => {
    return (
        <div className="Search">
            <MdSearch className="Icons" />
            <input type="text" placeholdee="Type to search" />
        </div>)
}

export default Search;