import React from 'react';

import Todo from './Todo';

import '../Style/TodoList.css';

const TodoList = ({ todos, handleDeleteTodo, handleDeleteTask, handleEditTodos, newTasks, setNewTasks, handleCheckTask }) => {
    return (
        <div className="TodoList">
            {todos.map((todo) => (
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
                    handleCheckTask={handleCheckTask}
                />
            ))}
        </div>
    )
}

export default TodoList;