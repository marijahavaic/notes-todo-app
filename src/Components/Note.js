import React from 'react';

import '../Style/Note.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';

const Note = ({ id, title, text }) => {
        return (
        <div className="Note">
            <div className='Header'>
                <h3>{title}</h3>
                <div className='Icons'>
                    <FontAwesomeIcon icon={faPenToSquare} className="Icon" />
                    <FontAwesomeIcon icon={faTrashCan} className="Icon" />
                </div>
            </div>
            <div className='Body'>
                <p>{text}</p>
            </div>
        </div>
        )
}

export default Note;