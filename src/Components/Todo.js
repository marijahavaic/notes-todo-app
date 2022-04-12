import React, { useState } from 'react';

import '../Style/Todo.css';

import { nanoid } from 'nanoid';

import Task from './Task';
import EditTodo from './EditTodo';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashCan, faClose } from '@fortawesome/free-solid-svg-icons';

const Todo = ({ id, title, tasks, handleDeleteTodo, handleDeleteTask, handleEditTodos, newTasks, setNewTasks, setTasks }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editTitle, setEditTitle] = useState(title);
    const [taskText, setTaskText] = useState('');

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

    const handleEditClick = () => {
        setIsEditing(true);
        setNewTasks(tasks);
    }

    const closeEditTodo = () => {
        setIsEditing(false);
    }

    const completeTask = (index) => {
        const newTasks = [...tasks];
        newTasks[index].completed = !newTasks[index].completed;
        console.log(newTasks[index]);
        setTasks(newTasks);
    };

    // save note with calling addNote function from App.js
    const handleSaveClick = () => {
        // check if the note isn't empty
        if (newTasks.length > 0 || editTitle.trim().length > 0) {
            handleEditTodos(id, editTitle, newTasks);
            setEditTitle(editTitle);
            setNewTasks(newTasks);
            setIsEditing(false);
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
                <EditTodo
                    handleSubmit={handleSubmit}
                    handleTextInput={handleTextInput}
                    newTasks={newTasks}
                    taskText={taskText}
                    handleDeleteTask={handleDeleteTask}
                    completeTask={completeTask}
                />
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
                        onClick={() => handleEditClick()}
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
                {tasks.map((task, index) => (
                    <Task
                        key={task.id}
                        taskId={task.id}
                        text={task.text}
                        index={index}
                        completed={task.completed}
                        handleDeleteTask={handleDeleteTask}
                        completeTask={completeTask}
                    />
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