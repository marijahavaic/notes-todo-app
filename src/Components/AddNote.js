import { useState } from 'react';

import '../Style/Note.css'

const AddNote = ({ handleAddNote }) => {
    const [noteTitle, setNoteTitle] = useState('');
    const [noteText, setNoteText] = useState('');

    // set note title
    const handleTitleChange = (e) => {
        setNoteTitle(e.target.value);
    }

    // set note text
    const handleTextChange = (e) => {
        setNoteText(e.target.value);
    }

    // save note with calling addNote function from App.js
    const handleSaveClick = () => {
        // check if the note isn't empty
        if(noteText.trim().length > 0) {
            handleAddNote(noteTitle, noteText);
            // Clear input areas
            setNoteTitle('');
            setNoteText('');
        }
    }

    return(
        <div className="Note">
            <div className='Header'>
                <textarea
                    rows={1}
                    cols={31}
                    placeholder="Untitled"
                    value={noteTitle}
                    onChange={handleTitleChange}
                ></textarea>
            </div>
            <div className='Body'>
                <textarea 
                    rows={11}
                    cols={31}
                    placeholder="Type to add a note"
                    value={noteText}
                    onChange={handleTextChange}
                ></textarea>
            </div>
            <div className='Footer'>
                <small>300 Remaining</small>
                <button className='save' onClick={handleSaveClick}>Save</button>
            </div>
        </div>
    )
}

export default AddNote;