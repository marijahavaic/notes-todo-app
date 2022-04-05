import React, { useState } from 'react';

import '../Style/Todo.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Task = ({ id, text, handleDeleteTask }) => {
    return (
        <div className="Task" key={id}>
            <div className='ToDoCheckBox' key={id}>
                <label>
                    <input type="checkbox" style={{ marginRight: '4px' }} />
                    {text}
                </label>

                <FontAwesomeIcon onClick={() => handleDeleteTask(id)} icon={faTrash} className="IconTask" />

            </div>
        </div>
    )
}

export default Task;