import { useState } from 'react';
import { nanoid } from 'nanoid';

import '../Style/Todo.css';

import Task from './Task';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faUserInjured } from '@fortawesome/free-solid-svg-icons';

const AddTodo = ({ handleAddTodo, handleCloseNewTodo }) => {
    const [todoTitle, setTodoTitle] = useState('');
    const [taskText, setTaskText] = useState('');
    const [newTodoItems, setNewTodoItems] = useState([
        {
            id: nanoid(),
            text: "Wash the dishes"
        }
    ]);


    // set todo title
    const handleTitleChange = (e) => {
        setTodoTitle(e.target.value);
    }

    // set todo item
    const handleTextInput = (e) => {
        e.preventDefault();
        setTaskText(e.target.value);
        addNewTask(taskText);
    }

    const addNewTask = (task) => {
        const newTask = {
            id: nanoid(),
            text: task
        }
        setNewTodoItems([newTask, ...newTodoItems]);
    }

    // save note with calling addNote function from App.js
    const handleSaveClick = () => {
        // check if the note isn't empty
        if (newTodoItems.length >= 0 || todoTitle.trim().length > 0) {
            handleAddTodo(todoTitle, newTodoItems);
            // Clear input areas
            setTodoTitle('');
            newTodoItems([]);
        }
    }

    return (
        <div className='NewTodoBg'>
            <div className="Todo NewTodo">
                <div className='TodoHeader'>
                    <textarea
                        rows={1}
                        cols={28}
                        placeholder="New Todo"
                        value={todoTitle}
                        onChange={handleTitleChange}
                    ></textarea>
                    <FontAwesomeIcon icon={faClose} className="Icon" onClick={handleCloseNewTodo} />
                </div>
                <div className='TodoBody'>
                    <div className='TodoEntry'>
                        <form>
                            <input
                                type="text"
                                value={taskText}
                                placeholder="Enter todo"
                                onChange={handleTextInput}
                            />
                        </form>
                    </div>
                    {
                        newTodoItems.map((task) => {
                            <Task id={task.id} text={task.text} />
                        })
                    }
                </div>
                <div className='TodoFooter'>
                    <button className='saveTodo'
                        onClick={handleSaveClick}
                    >Save</button>
                </div>
            </div>
        </div>
    )
}

export default AddTodo;