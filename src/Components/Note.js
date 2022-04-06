import React, { useState } from 'react';

import '../Style/Note.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';

const Note = ({ id, title, text, handleDeleteNote }) => {
    const [isEditing, setIsEditing] = useState(false);


    return (
        <div className="Note" key={id}>
            <div className='NoteHeader'>
                <h3>{title}</h3>
                <div className='Icons'>
                    <FontAwesomeIcon
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
    )
}

export default Note;