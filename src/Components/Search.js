import React from "react";

import { MdSearch } from 'react-icons/md';

import '../App.css';
import '../Style/Note.css'

const Search = () => {
    return (
        <div className="Search">
            <MdSearch className="Icon" />
            <input type="text" placeholder="Type to search" />
        </div>)
}

export default Search;