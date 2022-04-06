import React, { useState } from 'react';

import '../Style/Note.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashCan, faClose } from '@fortawesome/free-solid-svg-icons';

const Note = ({ id, title, text, handleDeleteNote, handleEditNote, handleCloseEdit }) => {
    const [isEditing, setIsEditing] = useState(false);


    const [editTitle, setEditTitle] = useState(title);
    const [editText, setEditText] = useState(text);

    // set note title
    const handleTitleEdit = (e) => {
        setEditTitle(e.target.value)
    }

    // set note text
    const handleTextEdit = (e) => {
        setEditText(e.target.value);
    }

    // save note with calling addNote function from App.js
    const handleSaveEditClick = () => {
        // check if the note isn't empty
        if (editText.trim().length > 0 || editTitle.trim().length > 0) {
            handleEditNote(id, editTitle, editText);
            // Clear input areas
            setEditTitle('');
            setEditText('');
            setIsEditing(false);
        }
    }

    const toggleForm = () => {
        setIsEditing(!isEditing);
    }

    const closeEditNote = () => {
        setIsEditing(false);
    }

    const editNote = (
        <div className='NewNoteBg'>
            <div className="Note NewNote">
                <div className='NoteHeader'>
                    <textarea
                        rows={1}
                        cols={28}
                        placeholder="New Note"
                        value={editTitle}
                        name={title}
                        onChange={handleTitleEdit}
                    ></textarea>
                    <FontAwesomeIcon icon={faClose} className="Icon" onClick={closeEditNote} />
                </div>
                <div className='NoteBody'>
                    <textarea
                        rows={11}
                        cols={31}
                        placeholder="Type to add a note"
                        value={editText}
                        name={text}
                        onChange={handleTextEdit}
                    ></textarea>
                </div>
                <div className='NoteFooter'>
                    <small>300 Remaining</small>
                    <button className='save' onClick={handleSaveEditClick}>Save</button>
                </div>
            </div>
        </div>
    );

    const viewNote = (
        <div className="Note" key={id}>
            <div className='NoteHeader'>
                <h3>{title}</h3>
                <div className='Icons'>
                    <FontAwesomeIcon
                        onClick={() => toggleForm()}
                        icon={faPenToSquare}
                        className="Icon"
                    />
                    <FontAwesomeIcon
                        onClick={() => handleDeleteNote(id)}
                        icon={faTrashCan}
                        className="Icon"
                    />
                </div>
            </div>
            <div className='NoteBody'>
                <p>{text}</p>
            </div>
        </div>
    );


    return (
        <div>
            {isEditing ? editNote : viewNote}
        </div>
    )
}

export default Note;