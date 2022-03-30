import React from 'react';

import './App.css';
import NoteList from './Components/NotesList';

class App extends React.Component {
  
  // createNote() {
    
  // }

  render() {
    return (
      <div className="App">
        <div className='Buttons'>
          <button onClick={this.createNote}>+ Add Note</button>
          <button>+ Add Todo</button>
        </div>
        <div className='Notes'>
          <NoteList />
        </div>
      </div>
    );
    }
}

export default App;
