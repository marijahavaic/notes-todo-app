import React from 'react';

import '../Style/Todo.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';

const Todo = ({ id, title, listOfTodos }) => {
    return (
        <div className="Todo" key={id}>
            <div className='TodoHeader'>
                <h3>{title}</h3>
                <div className='Icons'>
                    <FontAwesomeIcon icon={faPenToSquare} className="Icon" />
                    {/* <FontAwesomeIcon onClick={() => handleDeleteTodo(id)} icon={faTrashCan} className="Icon" /> */}
                </div>
            </div>
            <div className='TodoBody'>
                <input type="text" placeholder="Enter todo" />
                {listOfTodos.map((todo) => (
                    <div className='TodoEntry'>
                        <label>
                            <input type="checkbox" />
                            {todo}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Todo;