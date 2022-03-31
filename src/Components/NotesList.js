import React from 'react';

import Note from './Note';

import '../Style/NotesList.css';

const NotesList = ({ notes, handleDeleteNote }) => {
    return (
        <div className="NotesList">
            {notes.map((note) => (
                <Note
                    id={note.id}
                    title={note.title}
                    text={note.text}
                    handleDeleteNote={handleDeleteNote}
                />
            ))}
        </div>
    )
}

export default NotesList;