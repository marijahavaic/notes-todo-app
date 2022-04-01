import React from 'react';

import Todo from './Todo';

import '../Style/NotesList.css';

const TodoList = ({ todos }) => {
    return (
        <div className="TodoList">
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