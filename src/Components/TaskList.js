import React from 'react';

import '../Style/TodoList.css';
import Task from './Task';

const TaskList = ({ newTasks, handleDeleteTask, isEditing }) => {
    return (
        <div className="TaskList">
            {newTasks.map((task) => (
                <Task
                    key={task.id}
                    id={task.id}
                    text={task.text}
                    handleDeleteTask={handleDeleteTask}
                    isEditing={isEditing}
                />

            ))
            }
        </div>
    )
}

export default TaskList;