import { useContext, useState } from "react";
import { nanoid } from "nanoid";

import { NotesListContext } from "../Components/NotesListContext";

export default () => {
    // Notes
    const [newNote, setNewNotes] = useState(false);
    const [notes, setNotes] = useContext(NotesListContext);

    const addNote = (title, text) => {
        const newNote = {
            id: nanoid(),
            title: title,
            text: text,
        };
        const newNotes = [newNote, ...notes];
        setNotes(newNotes);
        setNewNotes(false);
    };

    const editNote = (id, title, text) => {
        const updatedNotes = notes.map((note) => {
            if (note.id === id) {
                return { ...note, title, text };
            }
            return note;
        });
        setNotes(updatedNotes);
    };

    const deleteNote = (id) => {
        const newNotes = notes.filter((note) => note.id !== id);
        setNotes(newNotes);
    };

    const addNoteComponent = (e) => {
        setNewNotes(true);
    };

    const removeNoteComponent = () => {
        setNewNotes(false);
    };

    return {
        newNote,
        notes,
        setNotes,
        addNote: addNote,
        editNote: editNote,
        deleteNote: deleteNote,
        addNoteComponent: addNoteComponent,
        removeNoteComponent: removeNoteComponent,
    };
};
