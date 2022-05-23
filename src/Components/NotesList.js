import React, { useContext } from "react";

import Note from "./Note";

// import Grid from "@mui/material/Grid";

import "../Style/NotesList.css";

import { NotesListContext } from "./NotesListContext";

const NotesList = ({
    handleDeleteNote,
    handleEditNote,
    handleCloseEdit,
    searchText,
}) => {
    const [notes] = useContext(NotesListContext);
    return (
        <div className="Grid-container">
            {notes
                .filter(
                    (note) =>
                        note.title
                            .toLowerCase()
                            .includes(searchText.toLowerCase()) ||
                        note.text
                            .toLowerCase()
                            .includes(searchText.toLowerCase())
                )
                .map((note) => (
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
    );
};

export default NotesList;
