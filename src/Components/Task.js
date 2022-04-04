import React from 'react';

import '../Style/Todo.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

const Task = ({ id, text, handleDeleteTask }) => {
    return (
        <div className="Task">
            <div className='ToDoCheckBox' key={id}>
                <label>
                    <input type="checkbox" style={{ marginRight: '4px' }} />
                    {text}
                </label>
                <FontAwesomeIcon onClick={() => handleDeleteTask(id)} icon={faTrashCan} className="IconTask" />
            </div>
        </div>
    )
}

export default Task;