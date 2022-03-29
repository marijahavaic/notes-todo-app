import React from 'react';

import '../Style/Note.css'

class Note extends React.Component {
    
    render() { 
        return (
        <div className="Note">
            <div className='Header'>
                <h3>Untitled</h3>
            </div>
            <div className='Body'>
                <p>Here's some text...</p>
            </div>
        </div>
        )
    }
}

export default Note;