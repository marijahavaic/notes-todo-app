import React from 'react';

import '../Style/Todo.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

const Task = ({ id, text }) => {
    return (
        <div className="Task" key={id}>
            <div className='ToDoCheckBox'>
                <label>
                    <input type="checkbox" style={{ marginRight: '4px' }} />
                    {text}
                </label>
                <FontAwesomeIcon icon={faTrashCan} className="IconTask" />
            </div>
        </div>
    )
}

export default Task;