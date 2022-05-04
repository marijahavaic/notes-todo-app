import React from "react";

import Task from "./Task";

const TaskList = ({
    newTasks,
    completeTask,
    handleCompleted,
    handleDeleteTask,
    isEditing,
}) => {
    return (
        <div className="TaskList">
            {newTasks.map((task, index) => (
                <Task
                    key={task.id}
                    id={task.id}
                    text={task.text}
                    index={index}
                    completed={task.completed}
                    handleDeleteTask={handleDeleteTask}
                    isEditing={isEditing}
                    completeTask={completeTask}
                />
            ))}
        </div>
    );
};

export default TaskList;
