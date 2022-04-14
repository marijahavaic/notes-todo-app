import React, { useState, createContext, useContext} from 'react';

export const NotesListContext = useContext();

export const NotesProvider = () => {
    const [notes, setNotes] = useState([]);
    return (
        <NotesListContext.Provider value={[notes, setNotes]}>
            {props.children}
        </NotesListContext.Provider>
    );
}