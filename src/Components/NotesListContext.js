import React, { useState, createContext } from "react";

export const NotesListContext = createContext();

export const NotesProvider = (props) => {
    const [notes, setNotes] = useState([]);

    return (
        <NotesListContext.Provider value={[notes, setNotes]}>
            {props.children}
        </NotesListContext.Provider>
    );
};
