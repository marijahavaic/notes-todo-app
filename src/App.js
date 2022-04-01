import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';

import './App.css';
import NotesList from './Components/NotesList';
import AddNote from './Components/AddNote';
import Header from './Components/Header';
import TodoList from './Components/TodoList';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [searchText, setSearchText] = useState('');
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
  const [todos, setTodos] = useState([
    {
      id: nanoid(),
      title: "Todo List",
      listOfTodos: [
        'buy groceries',
        'walk the doog'
      ]
    }
  ])


  // Retrive notes from local storage
  useEffect(() => {
    const savedNotes = JSON.parse(
      localStorage.getItem('react-notes-todo-app-data')
    );

    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, [])

  // Storing note data in local storage
  useEffect(() => {
    localStorage.setItem('react-notes-todo-app-data', JSON.stringify(notes)
    );
  }, [notes]);

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
    <div className={`${darkMode ? 'DarkMode' : 'App'}`}>
      <Header
        handleAddNote={addNoteComponent}
        handleSearchNote={setSearchText}
        handleToggleDarkMode={setDarkMode}
        isDark={darkMode}
      />
      <div className='Notes'>
        {newNote && <AddNote
          handleAddNote={addNote}
          newNote={newNote}
          handleCloseNewNote={closeNewNote}
        />}
        <TodoList
          todos={todos}
        />
        <NotesList
          notes={notes.filter((note) => note.text.toLowerCase().includes(searchText) || note.title.toLowerCase().includes(searchText))}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
          newNote={newNote} />
      </div>
    </div>
  );
}

export default App;
