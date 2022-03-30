import React from 'react';

import Note from './Note';

import '../Style/NotesList.css';

const NotesList = ({ notes }) => {
    return (
        <div className="NotesList">
            {notes.map((note) => (
                <Note id={note.id} title={note.title} text={note.text} />
            ))}
        </div>
    )
}

export default NotesList;