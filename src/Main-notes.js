import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import STORE from './dummy-store';
import './Main-notes.css'

export default class MainNotes extends Component {
    render() {
        const notes = STORE.notes.map(note => 

            <Link
                to={`/note/${note.id}`}
                key={note.id}
            >
                <li key={note.id}>
                    {note.name}
                </li>
            </Link>    
        )
        return (
            <ul className="note-list">
                {notes}
            </ul>
        )
    }
}