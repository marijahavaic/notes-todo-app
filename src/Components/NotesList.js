import React, {useContext} from 'react';

import Note from './Note';

import '../Style/NotesList.css';

import { NotesListContext } from './NotesListContext';

const NotesList = ({ handleDeleteNote, handleEditNote, handleCloseEdit }) => {
    const [notes, setNotes] = useContext(NotesListContext)
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