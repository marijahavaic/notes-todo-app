import React from 'react';

import Todo from './Todo';

import '../Style/TodoList.css';
import AddTodo from './AddTodo';

const TodoList = ({ todos }) => {
    return (
        <div className="TodoList">
            <AddTodo />
            {todos.map((todo) => (
                <Todo
                    id={todo.id}
                    title={todo.title}
                    listOfTodos={todo.listOfTodos}
                />
            ))}
        </div>
    )
}

export default TodoList;