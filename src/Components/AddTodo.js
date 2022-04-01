import { useState } from 'react';

import '../Style/Todo.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

const AddTodo = ({ newTodo, handleAddTodo, handleCloseNewNote, handleCloseNewTodo }) => {
    const [todoTitle, setTodoTitle] = useState('');
    const [listOfTodos, setListOfTodos] = useState([]);

    // set todo title
    const handleTitleChange = (e) => {
        setTodoTitle(e.target.value);
    }

    // set todo
    // const handleTextChange = (e) => {
    //     setNoteText([e.target.value, ...listOfTodos]);
    // }

    // save note with calling addNote function from App.js
    const handleSaveClick = () => {
        // check if the note isn't empty
        if (listOfTodos.length > 0 || todoTitle.trim().length > 0) {
            handleAddTodo(todoTitle, listOfTodos);
            // Clear input areas
            setTodoTitle('');
            listOfTodos([]);
        }
    }

    return (
        <div className='NewTodoBg'>
            <div className="Todo NewTodo">
                <div className='TodoHeader'>
                    <textarea
                        rows={1}
                        cols={28}
                        placeholder="New Todo"
                        value={todoTitle}
                        onChange={handleTitleChange}
                    ></textarea>
                    <FontAwesomeIcon icon={faClose} className="Icon" onClick={handleCloseNewTodo} />
                </div>
                <div className='TodoBody'>
                    <div className='TodoEntry'>
                        <label>
                            <input type="checkbox" />
                        </label>
                    </div>
                </div>
                <div className='TodoFooter'>
                    <button className='saveTodo'
                        onClick={handleSaveClick}
                    >Save</button>
                </div>
            </div>
        </div>
    )
}

export default AddTodo;