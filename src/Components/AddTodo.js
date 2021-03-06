import { useState } from "react";
import { nanoid } from "nanoid";

import useTitleState from "../Hooks/useTitleState";

import "../Style/Todo.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import TaskList from "./TaskList";

const AddTodo = ({
    handleAddTodo,
    handleCloseNewTodo,
    newTasks,
    setNewTasks,
    handleDeleteTask,
    tasks,
    setTasks,
}) => {
    const [value, handleChange, reset] = useTitleState("");
    const [taskText, setTaskText] = useState("");

    // set todo item
    const handleTextInput = (e) => {
        setTaskText(e.target.value);
    };
    // Repetative code that wasn't passed on AddTodo - resolve with useContext!
    const completeTask = (index) => {
        const newTasksArr = [...newTasks];
        newTasksArr[index].completed = !newTasks[index].completed;
        console.log(newTasksArr[index]);
        setTasks(newTasksArr);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTask = {
            id: nanoid(),
            text: taskText,
            completed: false,
        };
        setNewTasks([newTask, ...newTasks]);
        setTaskText("");
    };

    // save note with calling addNote function from App.js
    const handleSaveClick = () => {
        // check if the note isn't empty
        if (newTasks.length > 0 || value.trim().length > 0) {
            handleAddTodo(value, newTasks);
            // Clear input areas
            reset();
            setNewTasks([]);
        }
    };

    return (
        <div className="NewTodoBg">
            <div className="Todo NewTodo">
                <div className="TodoHeader">
                    <textarea
                        rows={1}
                        cols={28}
                        placeholder="New Todo"
                        value={value}
                        onChange={handleChange}
                    ></textarea>
                    <FontAwesomeIcon
                        icon={faClose}
                        className="Icon"
                        onClick={handleCloseNewTodo}
                    />
                </div>
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
                        completeTask={completeTask}
                    />
                </div>
                <div className="TodoFooter">
                    <button className="saveTodo" onClick={handleSaveClick}>
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddTodo;
