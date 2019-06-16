import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import MainSidebar from './Sidebar/Main-sidebar';
import FolderSidebar from './Sidebar/Folder-sidebar';
import NoteSidebar from './Sidebar/Note-sidebar';
import MainNotes from './Notes/Main-notes';
import FolderNotes from './Notes/Folder-notes';
import NoteNote from './Notes/Note-note';
import NotefulContext from './Noteful-context';
// import STORE from './dummy-store';
import config from './config';
import './App.css'

class App extends Component {
  
  state = {
    // folders: STORE.folders,
    // notes: STORE.notes,
    folders: [],
    notes: [],
    error: null,
  }

  deleteNote = noteId => {
    const newNotes = this.state.notes.filter(note =>
      note.id !== noteId
    )
    this.setState({
      bookmarks: newNotes
    })
  }


  componentDidMount() {
    // console.log(alert(`Hello!`));
    Promise.all([
      fetch(config.API_FOLDERS, {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
        }
      }),
      fetch(config.API_NOTES, {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
        }
      })
    ]).then(([foldersResponse, notesResponse]) => {
        if (!foldersResponse.ok) {
          throw new Error(foldersResponse.status)
        };
        if (!notesResponse.ok) {
          throw new Error(notesResponse.status)
        };
        return Promise.all([foldersResponse.json(), notesResponse.json()]);
      })
      // .then(this.setNoteful)
      .then(([folders, notes]) => {
        this.setState({folders, notes});
      })
      .catch(error => this.setState({ error }))
  }

  render() {

    const contextValue = {
      folders: this.state.folders,
      notes: this.state.notes,
      deleteNote: this.deleteNote
    }

    return (
      <div className='App'>
        <header className="header">
          <h1><Link to="/">Noteful</Link></h1>
        </header>
        <NotefulContext.Provider value={contextValue}>
          <div className="app-body">
            <nav className="sidebar">
              <Route
                exact path='/'
                component={MainSidebar}
              />
              <Route
                path='/folder/:folderID'
                component={FolderSidebar}
              />
              <Route
                path='/note/:noteID'
                component={NoteSidebar}
              />
            </nav>
            <main className="main">
              <Route
                exact path='/'
                component={MainNotes}
              />
              <Route
                path='/folder/:folderID'
                component={FolderNotes}
              />
              <Route
                path='/note/:noteID'
                component={NoteNote}
              />
            </main>
          </div>
        </NotefulContext.Provider>
      </div>
    );
  }
}

export default App;