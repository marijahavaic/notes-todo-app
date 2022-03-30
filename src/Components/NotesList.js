import React from 'react';

import Note from './Note';

// import '../Style/NoteList.css';

class NoteList extends React.Component {
    
    render() { 
        return (
        <div className="NoteList">
            <Note />
            <Note /> 
            <Note />
        </div>
        )
    }
}

export default NoteList;