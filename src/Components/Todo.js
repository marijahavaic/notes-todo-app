import React from 'react';

import '../Style/Todo.css';

import Task from './Task';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';

const Todo = ({ id, title, listOfTodos, handleDeleteTodo }) => {
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
                    <Task id={task.id} text={task.text} />
                ))}
            </div>
        </div>
    )
}

export default Todo;