import React from 'react';

import '../Style/Todo.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


const Task = ({ id, text, index, completed, handleDeleteTask, isEditing, completeTask }) => {
    return (
        <div className="Task" key={id}>
            <div className={`${completed ? 'Checked' : 'ToDoCheckBox'}`} key={id}>
                <label>
                    <input
                        type="checkbox"
                        value={completed}
                        checked={completed}
                        onChange={() => completeTask(index)}
                        style={{ marginRight: '4px' }}
                    />
                    {text}
                </label>

                <FontAwesomeIcon onClick={() => handleDeleteTask(id)} icon={faTrash} className={`${isEditing ? "Edit" : "IconTask"}`} />

            </div>
        </div>
    )
}

export default Task;