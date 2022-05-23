import React from "react";

import Todo from "./Todo";

import "../Style/NotesList.css";

const TodoList = ({
    todos,
    handleDeleteTodo,
    handleDeleteTask,
    handleEditTodos,
    newTasks,
    setNewTasks,
    handleCheckTask,
    setTasks,
    searchText,
}) => {
    return (
        <div className="Grid-container">
            {todos
                .filter(
                    (todo) =>
                        todo.title.toLowerCase().includes(searchText) ||
                        // todo.tasks.some((task) => {
                        //     task.toLowerCase().includes(searchText);
                        // })
                )
                .map((todo) => (
                    <Todo
                        key={todo.id}
                        id={todo.id}
                        title={todo.title}
                        tasks={todo.tasks}
                        handleDeleteTodo={handleDeleteTodo}
                        handleDeleteTask={handleDeleteTask}
                        handleEditTodos={handleEditTodos}
                        newTasks={newTasks}
                        setNewTasks={setNewTasks}
                        setTasks={setTasks}
                        handleCheckTask={handleCheckTask}
                    />
                ))}
        </div>
    );
};

export default TodoList;
