import React from 'react';

import Note from './Components/Note';

import './App.css';

class App extends React.Component {
  
  createNote() {
    <Note />
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.createNote}>+ Add Note</button>
        <button>+ Add Todo</button>
      </div>
    );
    }
}

export default App;
