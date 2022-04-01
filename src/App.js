import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';

import './App.css';
import NotesList from './Components/NotesList';
import AddTodo from './Components/AddTodo';
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
  const [newTodos, setNewTodos] = useState(false);
  const [todos, setTodos] = useState([
    {
      id: nanoid(),
      title: "First Todo List",
      listOfTodos: [
        'buy groceries',
        'walk the dog'
      ]
    },
    {
      id: nanoid(),
      title: "Second Todo List",
      listOfTodos: [
        'Clean',
        'Shopping'
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

  const addTodo = (title, listOfTodos) => {
    const newTodo = {
      id: nanoid(),
      title: title,
      listOfTodos: listOfTodos
    }
    const newTodos = [newTodo, ...todos];
    setTodos(newTodos);
    setNewTodos(false);
  };

  const addNoteComponent = (e) => {
    setNewNotes(!newNote);
  }

  const addTodoComponent = (e) => {
    setNewTodos(!newTodos);
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  }

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
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
      <div className='Todos'>
        <TodoList
          todos={todos.filter((todo) => todo.title.toLocaleLowerCase().includes(searchText))}
          handleAddTodos={addTodo}
          handleDeleteTodo={deleteTodo}
        />
      </div>
      <div className='Notes'>
        {newNote && <AddNote
          handleAddNote={addNote}
          newNote={newNote}
          handleCloseNewNote={closeNewNote}
        />}
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
