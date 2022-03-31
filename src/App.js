import React, { useState } from 'react';
import { nanoid } from 'nanoid';

import './App.css';
import NotesList from './Components/NotesList';
import AddNote from './Components/AddNote'
import Search from './Components/Search';

function App() {
  const [newNote, setNewNotes] = useState(false);
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      title: "First note",
      text: "This is my first note..."
    },
    {
      id: nanoid(),
      title: "Second note",
      text: "This is my second note..."
    },
    {
      id: nanoid(),
      title: "Third note",
      text: "This is my third note..."
    }
  ]);

  const addNote = (title, text) => {
    const newNote = {
      id: nanoid(),
      title: title,
      text: text,
    }
    const newNotes = [newNote, ...notes];
    setNotes(newNotes);
    setNewNotes(false);
  };

  const addNoteComponent = (e) => {
    setNewNotes(!newNote);
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  }

  const closeNewNote = () => {
    setNewNotes(false);
  }

  return (
    <div className="App">
      <div className='Header'>
        <Search />
        <div className='Buttons'>
          <button onClick={addNoteComponent}>+ Add Note</button>
          <button>+ Add Todo</button>
        </div>
      </div>
      <div className='Notes'>
        {newNote && <AddNote
          handleAddNote={addNote}
          newNote={newNote}
          handleCloseNewNote={closeNewNote}
        />}
        <NotesList
          notes={notes}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
          newNote={newNote} />
      </div>
    </div>
  );
}

export default App;
