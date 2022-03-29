import React from 'react';

import '../Style/Note.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';

class Note extends React.Component {
    
    render() { 
        return (
        <div className="Note">
            <div className='Header'>
                <h3>Untitled</h3>
                <div className='Icons'>
                    <FontAwesomeIcon icon={faPenToSquare} className="Icon" />
                    <FontAwesomeIcon icon={faTrashCan} className="Icon" />
                </div>
            </div>
            <div className='Body'>
                <p>Here's some text...</p>
            </div>
        </div>
        )
    }
}

export default Note;