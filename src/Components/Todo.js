import React from 'react';

import '../Style/Todo.css';

import Task from './Task';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';

const Todo = ({ id, title, listOfTodos, handleDeleteTodo, handleDeleteTask }) => {
    return (
        <div className="Todo" key={id}>
            <div className='TodoHeader'>
                <h3>{title}</h3>
                <div className='Icons'>
                    <FontAwesomeIcon icon={faPenToSquare} className="Icon" />
                    <FontAwesomeIcon onClick={() => handleDeleteTodo(id)} icon={faTrashCan} className="Icon" />
                </div>
            </div>
            <div className='TodoBody'>
                {listOfTodos.map((task) => (
                    <Task taskId={task.id} text={task.text} handleDeleteTask={handleDeleteTask} />
                ))}
            </div>
        </div>
    )
}

export default Todo;