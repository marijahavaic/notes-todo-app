import React from 'react';

import Note from './Note';
import AddNote from './AddNote';

import '../Style/NotesList.css';

const NotesList = ({ notes, handleAddNote }) => {
    return (
        <div className="NotesList">
            <AddNote handleAddNote={handleAddNote} />
            {notes.map((note) => (
                <Note id={note.id} title={note.title} text={note.text} />
            ))}
        </div>
    )
}

export default NotesList;