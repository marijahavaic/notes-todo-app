import React from 'react';

// import '../Style/Todo.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';

const Todo = ({ }) => {
    return (
        <div className="Todo">
            <div className='TodoHeader'>
                <h3>Todo Title</h3>
                <div className='Icons'>
                    <FontAwesomeIcon icon={faPenToSquare} className="Icon" />
                    {/* <FontAwesomeIcon onClick={() => handleDeleteTodo(id)} icon={faTrashCan} className="Icon" /> */}
                </div>
            </div>
            <div className='TodoBody'>
                <input type="text" placeholder="Enter todo" />
            </div>
        </div>
    )
}

export default Todo;