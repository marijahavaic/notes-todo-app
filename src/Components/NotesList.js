import React from 'react';

import Note from './Note';

import '../Style/NotesList.css';

const NotesList = ({ notes, handleDeleteNote, handleEditNote, handleCloseEdit }) => {
    return (
        <div className="NotesList">
            {notes.map((note) => (
                <Note
                    key={note.id}
                    id={note.id}
                    title={note.title}
                    text={note.text}
                    handleDeleteNote={handleDeleteNote}
                    handleEditNote={handleEditNote}
                    handleCloseEdit={handleCloseEdit}
                />
            ))}
        </div>
    )
}

export default NotesList;