import React from 'react';

import Todo from './Todo';

import '../Style/TodoList.css';
import AddTodo from './AddTodo';

const TodoList = ({ todos, handleDeleteTodo, newTodo, handleAddTodo, handleDeleteTask }) => {
    return (
        <div className="TodoList">
            {todos.map((todo) => (
                <Todo
                    key={todo.id}
                    id={todo.id}
                    title={todo.title}
                    listOfTodos={todo.listOfTodos}
                    handleDeleteTodo={handleDeleteTodo}
                    handleDeleteTask={handleDeleteTask}
                />
            ))}
        </div>
    )
}

export default TodoList;