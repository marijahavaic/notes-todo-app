import React from 'react';

import Todo from './Todo';

import '../Style/TodoList.css';

import Grid from '@mui/material/Grid';

const TodoList = ({ todos, handleDeleteTodo, handleDeleteTask, handleEditTodos, newTasks, setNewTasks, handleCheckTask, setTasks }) => {
    return (
        <Grid container spacing={1} columns={{ xs: 1, sm: 2, md: 3, l: 5, xl: 6 }}  justifyContent={{ xs:"center", sm:"center", md:"flex-start"}}>
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
                    setTasks={setTasks}
                    handleCheckTask={handleCheckTask}
                />
            ))}
        </Grid>
    )
}

export default TodoList;