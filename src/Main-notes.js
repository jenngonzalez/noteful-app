import React, { Component } from 'react';
import STORE from './dummy-store';
import './Main-notes.css'

export default class MainNotes extends Component {
    render() {
        const notes = STORE.notes.map(note => 
            <li
                key={note.id}
                // folderID={note.folderId}
            >
                <p>{note.name}</p>
            </li>
            )
        return (
            <ul className="note-list">
                {notes}
            </ul>
        )
    }
}