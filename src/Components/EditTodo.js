import React from "react";

import TaskList from "./TaskList";

function EditTodo({
    handleSubmit,
    handleTextInput,
    taskText,
    newTasks,
    handleDeleteTask,
    completeTask,
}) {
    return (
        <div className="EditTodo">
            <div className="TodoBody">
                <div className="TodoEntry">
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            value={taskText}
                            placeholder="Enter todo"
                            onChange={handleTextInput}
                        />
                    </form>
                </div>
                <TaskList
                    newTasks={newTasks}
                    handleDeleteTask={handleDeleteTask}
                    isEditing={true}
                    completeTask={completeTask}
                />
            </div>
        </div>
    );
}

export default EditTodo;
