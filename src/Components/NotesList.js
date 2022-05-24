import React from "react";

import Note from "./Note";

// import Grid from "@mui/material/Grid";

import "../Style/NotesList.css";

import useNoteState from "../Hooks/useNoteState";

const NotesList = ({ searchText }) => {
    // Notes
    const { notes } = useNoteState("");
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
                    />
                ))}
        </div>
    );
};

export default NotesList;
