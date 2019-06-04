import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import STORE from './dummy-store';
import './Main-notes.css'

export default class MainNotes extends Component {
    render() {
        const notes = STORE.notes.map(note => 
            <li
                key={note.id}
                // folderID={note.folderId}
            >
                <Link to={`/note/${note.id}`}>{note.name}</Link>
            </li>
            )
        return (
            <ul className="note-list">
                {notes}
            </ul>
        )
    }
}