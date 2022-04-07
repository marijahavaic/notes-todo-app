import React, { useState } from 'react';

import '../Style/Todo.css';

import { nanoid } from 'nanoid';

import TaskList from './TaskList';
import Task from './Task';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashCan, faClose } from '@fortawesome/free-solid-svg-icons';

const Todo = ({ id, title, listOfTodos, handleDeleteTodo, handleDeleteTask, handleEditTodos }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editTitle, setEditTitle] = useState(title);
    const [taskText, setTaskText] = useState('');
    const [newTasks, setNewTasks] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTask = {
            id: nanoid(),
            text: taskText,
            completed: false
        }
        setNewTasks([newTask, ...newTasks]);
        setTaskText('');
    }


    // set note title
    const handleTitleEdit = (e) => {
        setEditTitle(e.target.value)
    }

    // set task
    const handleTextInput = (e) => {
        setTaskText(e.target.value);
    }

    const toggleForm = () => {
        setIsEditing(!isEditing);
    }

    const closeEditTodo = () => {
        setIsEditing(false);
    }

    const oldTasks = () => {
        setNewTasks(listOfTodos);
    }



    // save note with calling addNote function from App.js
    const handleSaveClick = () => {
        // check if the note isn't empty
        if (newTasks.length > 0 || editTitle.trim().length > 0) {

            console.log(newTasks);
            handleEditTodos(id, editTitle, newTasks);
            oldTasks();
        }
    }

    const editTodo = (
        <div className='NewTodoBg'>
            <div className="Todo NewTodo">
                <div className='TodoHeader'>
                    <textarea
                        rows={1}
                        cols={28}
                        placeholder="New Todo"
                        value={editTitle}
                        name={title}
                        onChange={handleTitleEdit}
                    ></textarea>
                    <FontAwesomeIcon
                        icon={faClose}
                        className="Icon"
                        onClick={closeEditTodo}
                    />
                </div>
                <div className='TodoBody'>
                    <div className='TodoEntry'>
                        <form
                            onSubmit={handleSubmit}
                        >
                            <input
                                type="text"
                                value={taskText}
                                placeholder="Enter todo"
                                onChange={handleTextInput}
                            />
                        </form>
                    </div>
                    <TaskList
                        newTasks={newTasks}
                        handleDeleteTask={handleDeleteTask}
                        isEditing={true}
                    />
                    {listOfTodos.map((task) => (
                        <Task
                            key={task.id}
                            taskId={task.id}
                            text={task.text}
                            handleDeleteTask={handleDeleteTask}
                            isEditing={true}
                        />
                    ))}
                </div>
                <div className='TodoFooter'>
                    <button className='saveTodo'
                        onClick={handleSaveClick}
                    >Save</button>
                </div>
            </div>
        </div>
    );

    const viewTodo = (
        <div className="Todo" key={id}>
            <div className='TodoHeader'>
                <h3>{title}</h3>
                <div className='Icons'>
                    <FontAwesomeIcon
                        onClick={() => toggleForm()}
                        icon={faPenToSquare}
                        className="Icon"
                    />
                    <FontAwesomeIcon
                        onClick={() => handleDeleteTodo(id)}
                        icon={faTrashCan}
                        className="Icon"
                    />
                </div>
            </div>
            <div className='TodoBody'>
                {listOfTodos.map((task) => (
                    <Task
                        key={task.id}
                        taskId={task.id}
                        text={task.text}
                        handleDeleteTask={handleDeleteTask} />
                ))}
            </div>
        </div>
    )
    return (
        <div>
            {isEditing ? editTodo : viewTodo}
        </div>
    )
}

export default Todo;