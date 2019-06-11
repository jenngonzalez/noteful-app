import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import MainSidebar from './Sidebar/Main-sidebar';
import FolderSidebar from './Sidebar/Folder-sidebar';
import NoteSidebar from './Sidebar/Note-sidebar';
import MainNotes from './Notes/Main-notes';
import FolderNotes from './Notes/Folder-notes';
import NoteNote from './Notes/Note-note';
import './App.css'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <header className="header">
          <h1><Link to="/">Noteful</Link></h1>
        </header>
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
              // render={(props, { history }) =>
              //   <NoteSidebar
              //     onClickBack={() => history.goBack()}
              //   />
              // }
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
      </div>
    );
  }
}

export default App;