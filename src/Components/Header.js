import React from "react";

import Search from './Search';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

import '../App.css';

const Header = ({ handleAddNote, handleAddTodo, handleSearchNote, handleToggleDarkMode, isDark, isMobile }) => {

    const lightButton = () => {
        return (
                <FontAwesomeIcon icon={faSun} className="DarkModeIcon" />
        )
    }

    const darkButton = () => {
        return (
            <FontAwesomeIcon icon={faMoon} className="DarkModeIcon" />
        )
    }

    return (
        <div className='Header'>
            <div className='HeaderTitle'>
                <h1>Notes and Todo</h1>
                <button className="DarkMoodToggler"
                    onClick={() =>
                        handleToggleDarkMode((prevDarkMode) => !prevDarkMode)}>
                    {isDark ? lightButton() : darkButton()}
                </button>
            </div>
            <div className='HeaderBody'>
                <Search handleSearchNote={handleSearchNote} />
                <div className='Buttons'>
                    <button onClick={handleAddNote}>+ Add Note</button>
                    <button onClick={handleAddTodo}>+ Add Todo</button>
                </div>
            </div>
        </div>
    )
}

export default Header;