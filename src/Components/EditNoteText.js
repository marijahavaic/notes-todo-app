import { useState } from 'react';

import '../Style/Note.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

const EditNoteText = ({ text, handleAddNoteText, handleCloseNewNote }) => {
    const [noteText, setNoteText] = useState('');

    // set note text
    const handleTextChange = (e) => {
        setNoteText(e.target.value);
    }

    // save note with calling addNote function from App.js
    const handleSaveClick = () => {
        // check if the note isn't empty
        if (noteText.trim().length > 0 || noteTitle.trim().length > 0) {
            handleAddNoteText(noteTitle, noteText);
            // Clear input areas
            setNoteTitle('');
            setNoteText('');
        }
    }

    return (
        <div>
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
        </div >
    )
}

export default EditNoteText;



