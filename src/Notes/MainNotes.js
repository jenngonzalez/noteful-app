import React, { Component } from 'react';
import NotefulContext from '../Noteful-context';
import { Link } from 'react-router-dom';
import './MainNotes.css'

export default class MainNotes extends Component {

    static contextType = NotefulContext;

    render() {
        const { notes } = this.context;
        const allNotes = notes.map(note => 
            <li key={note.id}>
                <Link
                    to={`/note/${note.id}`}
                    key={note.id}
                    aria-label={`"See contents of this note: ${note.name}"`}
                >
                    {note.name}
                </Link>
            </li>
        )
        return (
            <div className="main-notes">
                <ul className="note-list">
                    {allNotes}
                    <li id="new-note">
                        <Link to="add-note">
                            Add New Note
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }
}