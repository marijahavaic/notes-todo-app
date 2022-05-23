import { useState } from "react";

import "../Style/Note.css";

import useTitleState from "../Hooks/useTitleState";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

const AddNote = ({ handleAddNote, handleCloseNewNote }) => {
    const [title, handleChange, reset] = useTitleState("");
    const [noteText, setNoteText] = useState("");

    // set note text
    const handleTextChange = (e) => {
        setNoteText(e.target.value);
    };

    // save note with calling addNote function from App.js
    const handleSaveClick = () => {
        // check if the note isn't empty
        if (noteText.trim().length > 0 || title.trim().length > 0) {
            handleAddNote(title, noteText);
            // Clear input areas
            reset();
            setNoteText("");
        }
    };

    return (
        <div className="NewNoteBg">
            <div className="Note NewNote">
                <div className="NoteHeader">
                    <textarea
                        rows={1}
                        cols={28}
                        placeholder="New Note"
                        value={title}
                        onChange={handleChange}
                    ></textarea>
                    <FontAwesomeIcon
                        icon={faClose}
                        className="Icon"
                        onClick={handleCloseNewNote}
                    />
                </div>
                <div className="NoteBody">
                    <textarea
                        rows={10}
                        cols={31}
                        placeholder="Type to add a note"
                        value={noteText}
                        onChange={handleTextChange}
                    ></textarea>
                </div>
                <div className="NoteFooter">
                    <button className="save" onClick={handleSaveClick}>
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddNote;
