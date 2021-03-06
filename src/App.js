import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";

import useNoteState from "./Hooks/useNoteState";

import "./App.css";
import NotesList from "./Components/NotesList";
import AddTodo from "./Components/AddTodo";

import AddNote from "./Components/AddNote";
import Header from "./Components/Header";
import TodoList from "./Components/TodoList";

function App() {
    // Dark Mode
    const [darkMode, setDarkMode] = useState(false);
    // Search notes and todos
    const [searchText, setSearchText] = useState("");

    // Notes
    const {
        newNote,
        notes,
        setNotes,
        addNote,
        addNoteComponent,
        removeNoteComponent,
    } = useNoteState("");

    // Todos
    const [newTodo, setNewTodos] = useState(false);
    const [todos, setTodos] = useState([]);
    // Tasks
    const [newTasks, setNewTasks] = useState([]);
    const [tasks, setTasks] = useState([]);

    // Mobile

    const [isMobile, setIsMobile] = useState(false);

    //choose the screen size
    const handleResize = () => {
        if (window.innerWidth < 720) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    };

    // create an event listener
    useEffect(() => {
        window.addEventListener("resize", handleResize);
    });

    // Retrive notes from local storage
    useEffect(() => {
        const savedNotes = JSON.parse(
            localStorage.getItem("react-notes-app-data")
        );
        // Retrive todos from local storage
        const savedTodos = JSON.parse(
            localStorage.getItem("react-todos-app-data")
        );

        if (savedNotes) {
            setNotes(savedNotes);
        }

        if (savedTodos) {
            setTodos(savedTodos);
        }
    }, [setNotes]);

    // Storing notes data in local storage
    useEffect(() => {
        localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
    }, [notes]); // [notes] Only re-run the effect if notes changes

    // Storing todos data in local storage
    useEffect(() => {
        localStorage.setItem("react-todos-app-data", JSON.stringify(todos));
    }, [todos]); // [todos] Only re-run the effect if notes changes

    const addTodo = (title, newTasks) => {
        const newTodo = {
            id: nanoid(),
            title: title,
            tasks: newTasks,
        };
        const newTodos = [newTodo, ...todos];
        setTodos(newTodos);
        setNewTodos(false);
    };

    const editTodo = (id, title, tasks) => {
        const updatedTodos = todos.map((todo) => {
            if (todo.id === id) {
                return { ...todo, title, tasks };
            }
            return todo;
        });
        setTodos(updatedTodos);
    };

    const addTodoComponent = (e) => {
        setNewTodos(!newTodo);
        setNewTasks([]);
    };

    const deleteTodo = (id) => {
        const newTodos = todos.filter((todo) => todo.id !== id);
        setTodos(newTodos);
    };

    const deleteTask = (id) => {
        const newTasksArr = newTasks.filter((task) => task.id !== id);
        setNewTasks(newTasksArr);
    };

    const closeNewTodo = () => {
        setNewTodos(false);
    };

    return (
        <div className={`${darkMode ? "DarkMode" : "App"}`}>
            <Header
                handleAddNote={addNoteComponent}
                handleAddTodo={addTodoComponent}
                handleSearchNote={setSearchText}
                handleToggleDarkMode={setDarkMode}
                isDark={darkMode}
                isMobile={isMobile}
            />
            <div className="Todos">
                {newTodo && (
                    <AddTodo
                        handleAddTodo={addTodo}
                        newTodo={newTodo}
                        handleCloseNewTodo={closeNewTodo}
                        newTasks={newTasks}
                        setNewTasks={setNewTasks}
                        handleDeleteTask={deleteTask}
                        tasks={tasks}
                        setTasks={setTasks}
                    />
                )}
                <TodoList
                    todos={todos}
                    handleAddTodo={addTodo}
                    searchText={searchText}
                    newTodo={newTodo}
                    handleDeleteTodo={deleteTodo}
                    handleDeleteTask={deleteTask}
                    newTasks={newTasks}
                    tasks={tasks}
                    setTasks={setTasks}
                    setNewTasks={setNewTasks}
                    handleEditTodos={editTodo}
                />
            </div>

            <div className="Notes">
                {newNote && (
                    <AddNote
                        handleAddNote={addNote}
                        handleCloseNewNote={removeNoteComponent}
                    />
                )}
                <NotesList searchText={searchText} />
            </div>
        </div>
    );
}

export default App;
