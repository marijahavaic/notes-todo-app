import React, {useState} from 'react';
import {nanoid} from 'nanoid';

import './App.css';
import NotesList from './Components/NotesList';

function App() {
  
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

    return (
      <div className="App">
        <div className='Buttons'>
          <button>+ Add Note</button>
          <button>+ Add Todo</button>
        </div>
        <div className='Notes'>
          <NotesList notes={notes} />
        </div>
      </div>
    );
}

export default App;
