import React, { Component } from 'react';
import NotefulContext from '../Noteful-context';
import { Link } from 'react-router-dom';
// import STORE from '../dummy-store';
import './Main-notes.css'

export default class MainNotes extends Component {

    static contextType = NotefulContext;

    render() {
        const { notes } = this.context;
        const allNotes = notes.map(note => 
            <Link
                to={`/note/${note.id}`}
                key={note.id}
            >
                <li key={note.id}>
                    {note.name}
                </li>
            </Link>
                // <button
                //     type="button"
                //     key={note.id}
                // >
                //     Delete
                // </button>
        )
        return (
            <div className="main-notes">
                <ul className="note-list">
                    {allNotes}
                </ul>
                <Link to="/add-note">Add New Note</Link>
            </div>
        )
    }
}