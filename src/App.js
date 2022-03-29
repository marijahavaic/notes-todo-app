import React from 'react';

import Note from './Components/Note';

import './App.css';

class App extends React.Component {
  
  createNote() {
    
  }

  render() {
    return (
      <div className="App">
        <div className='Buttons'>
          <button onClick={this.createNote}>+ Add Note</button>
          <button>+ Add Todo</button>
        </div>
        <div className='Notes'>
          <Note />
          <Note />
        </div>
      </div>
    );
    }
}

export default App;
