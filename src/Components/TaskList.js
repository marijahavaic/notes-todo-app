import React from 'react';

import '../Style/TodoList.css';
import Task from './Task';

const TaskList = ({ newTodoItems }) => {
    return (
        <div className="TaskList">
            {newTodoItems.map((task) => (
                <Task id={task.id} text={task.text} />
            ))
            }
        </div>
    )
}

export default TaskList;