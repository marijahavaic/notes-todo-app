import React from 'react';

import Todo from './Todo';

import '../Style/TodoList.css';
import AddTodo from './AddTodo';

const TodoList = ({ todos, handleDeleteTodo, newTodo, handleAddTodo }) => {
    return (
        <div className="TodoList">
            <AddTodo
                newTodo={newTodo}
                handleAddTodo={handleAddTodo}
            />
            {todos.map((todo) => (
                <Todo
                    id={todo.id}
                    title={todo.title}
                    listOfTodos={todo.listOfTodos}
                    handleDeleteTodo={handleDeleteTodo}
                />
            ))}
        </div>
    )
}

export default TodoList;