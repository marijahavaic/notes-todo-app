import React from 'react';

import '../Style/TodoList.css';
import Task from './Task';

const TaskList = ({ newTasks, handleDeleteTask }) => {
    return (
        <div className="TaskList">
            {newTasks.map((task) => (
                <Task
                    key={task.id}
                    id={task.id}
                    text={task.text}
                    handleDeleteTask={handleDeleteTask}
                />
            ))
            }
        </div>
    )
}

export default TaskList;