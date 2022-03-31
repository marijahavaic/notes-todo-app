import React from "react";

import Search from './Search';

const Header = ({ handleAddNote, handleSearchNote, handleToggleDarkMode }) => {
    return (
        <div className='Header'>
            <div className='HeaderTitle'>
                <h1>Notes and Todo</h1>
                <button
                    onClick={() =>
                        handleToggleDarkMode((prevDarkMode) => !prevDarkMode)}>Toggle style</button>
            </div>
            <div className='HeaderBody'>
                <Search handleSearchNote={handleSearchNote} />
                <div className='Buttons'>
                    <button onClick={handleAddNote}>+ Add Note</button>
                    <button>+ Add Todo</button>
                </div>
            </div>
        </div>
    )
}

export default Header;