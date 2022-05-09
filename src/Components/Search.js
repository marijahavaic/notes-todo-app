import React from "react";

import { MdSearch } from "react-icons/md";

import "../App.css";
import "../Style/Note.css";

const Search = ({ handleSearchNote }) => {
    return (
        <div className="Search">
            <MdSearch className="Icon" />
            <input
                onChange={(e) => {
                    handleSearchNote(e.target.value);
                }}
                type="text"
                placeholder="Type to search"
            />
        </div>
    );
};

export default Search;
