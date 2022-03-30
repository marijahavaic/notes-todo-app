import { useState } from 'react';

import '../Style/Note.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

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
        <div className='NewNoteBg'>
            <div className="Note New">
                <div className='Header'>
                    <textarea
                        rows={1}
                        cols={28}
                        placeholder="New Note"
                        value={noteTitle}
                        onChange={handleTitleChange}
                    ></textarea>
                    <FontAwesomeIcon icon={faClose} className="Icon" />
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
        </div>
    )
}

export default AddNote;