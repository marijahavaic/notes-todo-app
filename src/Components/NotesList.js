import React, {useContext} from 'react';

import Note from './Note';

import Grid from '@mui/material/Grid';

import '../Style/NotesList.css';

import { NotesListContext } from './NotesListContext';

const NotesList = ({ handleDeleteNote, handleEditNote, handleCloseEdit }) => {
    const [notes] = useContext(NotesListContext)
    return (
        <Grid container spacing={1} columns={{ xs: 1, sm: 2, md: 3, l: 5, xl: 6 }}  justifyContent={{ xs:"center", sm:"center", md:"flex-start"}} >
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
        </Grid>
    )
}

export default NotesList;