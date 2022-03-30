import React, {useState} from 'react';
import {nanoid} from 'nanoid';

import './App.css';
import NotesList from './Components/NotesList';
import AddNote from './Components/AddNote'

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
    const newNotes = [ newNote, ...notes];
    setNotes(newNotes);
  };

  const addNoteComponent = (e) => {
    setNewNotes(!newNote);
  }

    return (
      <div className="App">
        <div className='Buttons'>
          <button onClick={addNoteComponent}>+ Add Note</button>
          <button>+ Add Todo</button>
        </div>
        <div className='Notes'>
          {newNote && <AddNote handleAddNote={addNote} newNote={newNote} />}
          <NotesList notes={notes} handleAddNote={addNote} newNote={newNote} />
        </div>
      </div>
    );
}

export default App;
