import React, { useState } from 'react';

import '../Style/Todo.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Task = ({ id, text, handleDeleteTask, isEditing }) => {
    const [checked, setChecked] = useState(false);

    const handleChange = () => {
        setChecked(!checked);
    }
    return (
        <div className="Task" key={id}>
            <div className={`${checked ? 'Checked' : 'ToDoCheckBox'}`} key={id}>
                <label>
                    <input
                        type="checkbox"
                        checked={checked}
                        onChange={handleChange}
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